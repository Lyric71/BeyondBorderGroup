const WAVESPEED_API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/text-to-image';

export interface GenerateImageOptions {
	prompt: string;
	apiKey: string;
	outputFormat?: 'png' | 'jpg';
	quality?: '1K';
	pollIntervalMs?: number;
	maxAttempts?: number;
}

export interface GenerateImageResult {
	imageUrl: string;
	timings: Record<string, number> | undefined;
}

export async function generateImage({
	prompt,
	apiKey,
	outputFormat = 'png',
	quality = '1K',
	pollIntervalMs = 1000,
	maxAttempts = 60,
}: GenerateImageOptions): Promise<GenerateImageResult> {
	const submitRes = await fetch(`${WAVESPEED_API_URL}/${MODEL}`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			prompt: prompt.trim(),
			output_format: outputFormat,
			quality,
		}),
	});

	const submitData = await submitRes.json();

	if (submitData.code !== 200 || !submitData.data?.id) {
		throw new Error(submitData.message ?? 'Failed to submit generation task.');
	}

	const taskId = submitData.data.id as string;

	for (let i = 0; i < maxAttempts; i++) {
		await new Promise((r) => setTimeout(r, pollIntervalMs));

		const statusRes = await fetch(
			`${WAVESPEED_API_URL}/predictions/${taskId}/result`,
			{ headers: { Authorization: `Bearer ${apiKey}` } },
		);

		const statusData = await statusRes.json();
		const status = statusData.data?.status as string | undefined;

		if (status === 'completed') {
			return {
				imageUrl: statusData.data.outputs[0],
				timings: statusData.data.timings,
			};
		}

		if (status === 'failed') {
			throw new Error('Image generation failed.');
		}
	}

	throw new Error(`Image generation timed out after ${maxAttempts}s.`);
}
