# TheChinaPath logo pack

Built from logo-11-horizontal-zhtop-reden (vermilion pin, charcoal 中国路,
vermilion TheChinaPath). Brand red: #C8102E. Charcoal: #202428.

## Files

- logo-horizontal.png: full lockup on white, original resolution
- logo-horizontal-transparent.png: same lockup, transparent background (use this in headers)
- logo-horizontal.webp: webp of the transparent lockup
- logo-horizontal-zhwhite-transparent.png: 中国路 in white, transparent background (for dark backgrounds)
- logo-horizontal-zhwhite-dark.png: same, flattened on charcoal #202428 for previewing
- logo-mark.png: square pin mark, transparent, 512x512
- favicon.ico: 16 + 32 + 48 multi-size
- favicon-16x16.png / favicon-32x32.png / favicon-48x48.png
- apple-touch-icon.png: 180x180 on white
- android-chrome-192x192.png / android-chrome-512x512.png
- site.webmanifest

## Install

Copy everything except this README and the logo-horizontal files into the
site's public/ root (favicon.ico must live at /favicon.ico). Put the
logo-horizontal files wherever the site keeps its images.

Add to the <head>:

```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32">
<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#C8102E">
```
