# VideoHub embed player integration with Next.js

## Security Notice

<div style="border: 2px solid red; padding: 10px;">

This project is intended for educational purposes only. We do not recommend
deploying the code as is publicly, as it may expose your infrastructure to
security risks.

For instance, in December 2025, a security vulnerability disclosed as
[CVE-2025-66478](https://nextjs.org/blog/CVE-2025-66478) affected many versions
of Next.js, including the specific version that was used in this demo project.

</div>

## About

This project demonstrates how to integrate the [VideoHub](https://www.videohub.com.br) embed player into a Next.js project.

See [`videohub.js`](./components/videohub.js) for an example component implementation that renders the VideoHub player by loading the official `embed.js` script.

Key points:

1. Use `useEffect` to create the `<script>` element on-demand
2. Use `useRef` to keep track of where the VideoHub `<script>` should be placed and to avoid rendering it twice
3. Add a query parameter to the script `src` attribute as a "cache buster" to force module reload every time the component is mounted
4. Set a `key` to force component re-rendering when video ID changes

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
