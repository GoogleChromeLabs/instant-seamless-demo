# Instant & Seamless Demo Web App

This project includes scripts and configuration files to build a sample web app which showcases some of new browser APIs to make loading experience nearly instant and navigation more seamless. The app is also built for the referrence of how those new APIs are integrated into [Next.js](https://nextjs.org/).

We cover following APIs:
- [Prerendering](https://github.com/WICG/nav-speculation)
- [Back/forward cache](https://web.dev/bfcache/)
- [Private Prefetch Proxy](https://github.com/buettner/private-prefetch-proxy)
- [Root/Shared Element Transition](https://github.com/WICG/shared-element-transitions)

## Codelab

We have a [codelab](https://codelabs.developers.google.com/create-an-instant-and-seamless-web-app) introducing each API and demonstrating how to enable them by editing the sample app step by step.

## How to run the app

For local development

```
$ npm run dev
```

For production
```
$ npm run build
$ npm run start
```

Then visit http://localhost:3000/

## Note

When running your application locally with next dev, your headers are overwritten to prevent caching locally.
https://nextjs.org/docs/going-to-production#caching

```
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
```

To check if BFCache works, you need to run the app with production mode.
