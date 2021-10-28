# Framer / Next.js Quickstart

This is a [Next.js](https://nextjs.org/) boilerplate project setup to work with [Framer Handshake](https://www.framer.com/developers/handshake/), a way to directly ship visual components from your canvas to your production site leveraging the [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) standard.

## Quickstart

Clone this repository and run the command to start the development server.

```
git clone https://github.com/framer/next.js.git
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy your own
Deploy the boilerplate project using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fframer%2Fnext.js&project-name=framer-nextjs&repo-name=framer-nextjs)

## Handshake

[Framer](https://www.framer.com/) is a canvas based interactive design tool that helps you quickly design interactive components, from buttons to hero animations to cards and much more.

Typically, these elements have to manually get rebuilt in React if you are ready to actually use them on your website. Framer does this automatically and exposes every component as a versioned ESM JavaScript module with a React component.

Because modern tools like [Next.js](https://nextjs.org/) are starting to support ESM and url imports, you can directly import canvas components into your web project, eliminating the rebuild step thus saving a lot of time.

## Existing Next.js Projects

If you want to add these capabilities to an existing Next.js project, you have to enable experimental ESM / url import support. You can find the exact steps in [this overview](https://www.framer.com/docs/guides/handshake/##nextjs).



