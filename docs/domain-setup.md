# GitHub Pages and `suarch.is-a.dev`

The site is configured as a GitHub Pages **user site** at `https://suarch-dev.github.io/`, using the `suarch-dev.github.io` repository. The free `suarch.is-a.dev` address is a later step: it must first be approved through the is-a.dev registration project. The site intentionally does not publish a `CNAME` file before that DNS registration is approved, so the initial GitHub Pages address remains usable.

## First deployment

1. Push this project's `main` branch to the public **`suarch-dev.github.io`** repository in the `suarch-dev` GitHub account.
2. Let `.github/workflows/pages.yml` build and deploy the site.
3. If GitHub asks for a Pages source, open **Settings → Pages** and select **GitHub Actions**.
4. The initial site URL is `https://suarch-dev.github.io/` once the workflow succeeds.

## Request the free subdomain

Follow the current [is-a.dev GitHub Pages guide](https://docs.is-a.dev/guides/github-pages/). A domain registration file for `suarch.is-a.dev` should identify the owner and point the CNAME record to the account's Pages hostname:

```json
{
  "owner": {
    "username": "suarch-dev"
  },
  "records": {
    "CNAME": "suarch-dev.github.io"
  }
}
```

Submit this through the registration repository and wait for approval. Domain availability and approval are controlled by is-a.dev, not by this site or GitHub.

## After approval

1. In the portfolio repository, add `public/CNAME` containing only `suarch.is-a.dev`.
2. In `astro.config.mjs`, change `site` to `https://suarch.is-a.dev`.
3. Update the host in `public/robots.txt` and every URL in `public/sitemap.xml`.
4. In the portfolio repository, open **Settings → Pages → Custom domain**, enter `suarch.is-a.dev`, and enable **Enforce HTTPS** after DNS verification succeeds.
5. Confirm the English and Spanish pages, downloads, canonical links and HTTPS on both the custom address and GitHub Pages URL.

Do not use AWS as the permanent host for this CV site. Keep AWS for a separate learning deployment, where services can be shut down and costs reviewed independently.
