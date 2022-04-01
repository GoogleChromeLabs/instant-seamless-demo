# Instant & Seamless DEMO Web App

This project includes scripts and configuration files to build a sample web app which showcases some of new browser APIs to make loading experience nearly instant and navigation more seamless. The app is also a good referrence of how thouse new APIs are integrated into the app built with [Next.js](https://nextjs.org/), which is one of the most popular JavaScript framework.

We cover following APIs:
- Prerendering
- BFCache
- Root/Shared Element Transition

We have a codelab that explains each I&S API and demonstrate how to enable them by editing this DEMO step by step.

## How to run

For local development

```
$ npm install
$ npm run dev
```

For production
```
$ npm run build
$ npm run start
```

## Note

When running your application locally with next dev, your headers are overwritten to prevent caching locally.
https://nextjs.org/docs/going-to-production#caching

```
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
```

To check if BFCache works, you need to run the app with production mode.
