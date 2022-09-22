## Next.js Template

This is my personal Next.js template that I generally use when starting new projects. This template adds the following to the default Next.js setup:

- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Tests using [Jest](https://jestjs.io/) & [Testing Library](https://testing-library.com/)
- [Fathom Analytics](https://usefathom.com/ref/P1PPJP)

## Installation

To use this template, use `create-next-app` with the `--example` (or `-e`) option

```bash
create-next-app --example "https://github.com/rathesDot/nextjs-template"
```

This runs you through the installation process of Next.js and you can start working on your project like with any other Next.js project.

## Configuration

This template ships with a `.env.example` file with variables to configure Fathom.

```
FATHOM_TRACKING_CODE=
FATHOM_INCLUDED_DOMAINS=
```

Make sure to fill in the values to get tracking working with Fathom. Read more about this on ["Deploy a Next.js App with Analytics Using Fathom and Vercel"](https://vercel.com/guides/deploying-nextjs-using-fathom-analytics-with-vercel)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
