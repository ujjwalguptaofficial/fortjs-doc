---
sidebar_position: 17
title: "Deployment"
keywords: [deploy, instructions, Fort.js, Node.js]
description: "Deployment note in Node.js using Fort.js"
---

# Deployment Best Practice

When deploying your app to production, consider the following best practices:

- **Run a Production Build:**
  Use the command `npm run deploy` or `yarn deploy` to generate a production build in the `dist` folder. To start the app in production, use `node dist/app.js`.

- **Set "NODE_ENV" to "production":**
  Ensure that the "NODE_ENV" environment variable is set to "production" when running the app. This triggers optimizations such as caching views and compressing development error messages. Learn how to set up "NODE_ENV" [here](https://stackoverflow.com/a/9204973/4393136).

- **Customize Error Pages:**
  Customize the error page using a [custom error handler](/docs/advanced/customize-error.md).

- **Configure Logger:**
  Set up your logger to save logs in a persistent file or another suitable storage.

- **Use a Process Manager:**
  Employ a process manager like PM2, Forever, etc., to run your app.

- **Implement Compression:**
  While you can configure any third-party library for compression in a wall component, it's recommended to configure compression in the reverse proxy server (e.g., Nginx). A reverse proxy server can serve multiple purposes, such as caching requests and compression.
