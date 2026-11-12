# Arnold Chuctaya — Signal to Systems

A bilingual professional portfolio for Arnold Chuctaya Sevincha: **IT support, VoIP and networking today; a documented path toward Platform Engineering.** The visual direction connects the movement of an audio waveform to a network route and a deployable system, using a dark espresso base with orange, coral and summer-yellow accents.

## Site

- English: `/`
- Español: `/es/`
- English CV: `/cv/` and `public/cv/arnold-chuctaya-en.pdf`
- CV en español: `/es/cv/` and `public/cv/arnold-chuctaya-es.pdf`
- Case studies: Telegram disk alert bot and persistent Flask logs with Docker
- Static output: `dist/`
- Hosting target: GitHub Pages, with `suarch.is-a.dev` as a later, approval-dependent custom domain

The site is intentionally static. It has no database, login, contact-form backend or server-side dependency. The email address shown on the site is intended to be public.

## Technology

- Astro + TypeScript for static pages and reusable components
- Hand-written CSS; no UI framework or remote runtime dependencies
- English and Spanish routes, with a visible language switch and no automatic language redirect
- GitHub Actions workflow for Astro checks, build and GitHub Pages deployment
- PDFKit script to build downloadable CV PDFs from the same bilingual CV data used on the site

## Local development

Use Node.js 22 or newer and npm.

```bash
npm ci
npm run dev
```

Useful commands:

```bash
npm run check       # Astro and TypeScript diagnostics
npm run build       # Generate the static site in dist/
npm run preview     # Preview the production build locally
npm run cv:build    # Regenerate both downloadable CV PDFs
```

## Updating content

- `src/data/portfolio.ts`: bilingual homepage text, route, experience and links.
- `src/data/case-studies.ts`: bilingual project write-ups and technical scope.
- `src/data/cv.json`: source content for the English and Spanish web CVs/PDFs.
- `src/components/`: reusable page layouts and shared presentation.
- `src/styles/global.css`: responsive visual system and print styles.
- `public/images/arnold-portrait.jpg`: original portrait supplied by Arnold, used with its natural white background and a straight crop.
- `docs/incidentops-platform-project.md`: separate full-stack project recommendation for the next portfolio project.

Keep learning status accurate. Python and Docker are completed; Linux and networking are in progress; CI/CD, Terraform and monitoring are planned. AWS is described only as introductory guided learning, not commercial experience or a certification.

## Deployment

The workflow lives at `.github/workflows/pages.yml`. It runs checks and builds on pull requests; pushes to `main` also deploy to GitHub Pages.

The deployment target is the GitHub user Pages repository **`suarch-dev.github.io`**, with `https://suarch-dev.github.io/` as the initial public address. Set **Settings → Pages → Source → GitHub Actions** if GitHub asks for a publishing source. First-deployment and `suarch.is-a.dev` setup steps are in [`docs/domain-setup.md`](docs/domain-setup.md). The custom domain is not assumed to be approved, and no `CNAME` is included until it is.

## Privacy and accuracy

- Public contact: `suarch.dev@gmail.com`, LinkedIn and GitHub.
- The older CV's phone number and prior email are not copied into this site or generated PDFs.
- The AWS entry is intentionally labelled introductory.
- The alert bot is described as on-demand, not as a continuously running monitoring service.
- The one-year break in the Grupo Amazing date range is reflected in the user's supplied **5.8 years cumulative experience** figure.
- The hero uses Arnold's original supplied portrait; the photo is not AI-generated or background-removed.
