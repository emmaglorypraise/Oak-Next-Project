About this project:

An Automation DApp that provides a delightful and transparent user experience for OAK Blockchains
(starting with Neumann and Turing).

When provided with a wallet address, the Automation DApp to be able to:
● View the current tasks queued for the given wallet
● Create a future scheduled task to:
○ Notify event on the blockchain via
automationTime.scheduleNotifyTask(providedId, time,
message)
○ Perform a wallet transfer via
automationTime.scheduleNativeTransferTask(providedId,
time, recipientId, amount)
● Integrate with an external notification service with the possible use cases:
○ Listens for events from automationTime.scheduleNotifyTask(providedId, time,
message) to send an email notification.
○ Listens for missed tasks events to send an email notification to inform the end
use

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.



## Deployed on Vercel

Check out our [Oak Automation project](https://oak-next-project.vercel.app/) for more details.
