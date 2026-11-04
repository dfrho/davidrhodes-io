# David Rhodes

Personal portfolio for David Rhodes, Senior Solutions Engineer. A static React site aimed at hiring managers for MarTech, AI, eCommerce, and enterprise pre-sales roles. The production domain is [davidrhodes.io](https://davidrhodes.io).

The resume is the source for biography, roles, metrics, skills, certifications, and education. Featured projects are the repositories pinned on [github.com/dfrho](https://github.com/dfrho), written into `src/data/projects.ts`. The browser never calls the GitHub API.

## Stack

- React 19 and Vite
- TypeScript in strict mode (`strict` and `noUncheckedIndexedAccess`)
- Vitest and Testing Library
- ESLint, including `eslint-plugin-security`, `eslint-plugin-react`, and `jsx-a11y`

TypeScript 6.0 is the newest release that `typescript-eslint` supports. ESLint stays on 9 because `eslint-plugin-react` and `eslint-plugin-jsx-a11y` have not declared ESLint 10 support. `package.json` overrides `minimatch` to 11.0.4 so `npm audit` stays clean.

Fonts (Instrument Serif, Figtree, IBM Plex Mono) are self-hosted under `public/fonts` and licensed under the SIL Open Font License. See `public/fonts/OFL.txt`.

## Local development

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

The dev server listens on port **43217**. Open `http://127.0.0.1:43217`.

Security headers in `vercel.json` are applied by Vercel, not by the Vite dev server.

## Checks

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm audit
```

`npm run build` typechecks, then writes the static site to `dist/`. Preview that build with:

```bash
npm run preview
```

## Deploy on Vercel

1. Import this repository in Vercel. The framework preset is Vite.
2. Build command: `npm run build`. Output directory: `dist`. Install command: `npm ci` (or the default install). No environment variables are required.
3. Deploy. Vercel will assign a `*.vercel.app` URL before the custom domain is attached.

`vercel.json` rewrites unknown paths to `index.html`, redirects `www.davidrhodes.io` to the apex, and sets the security headers described in [SECURITY.md](SECURITY.md).

## Point davidrhodes.io at Vercel

The domain is registered at Squarespace Domains. Keep DNS there unless you intend to move the whole zone. Changing only the website records does not require moving MX or other TXT records. Vercel’s current guidance is the source of truth for the values, not a copied example from another project:

- [Adding and configuring a custom domain](https://vercel.com/docs/domains/working-with-domains/add-a-domain)
- [Apex domains and A records](https://vercel.com/kb/guide/a-record-and-caa-with-vercel)
- [Setting up a custom domain](https://vercel.com/docs/domains/set-up-custom-domain)

Do this in order:

1. In the Vercel project, open **Settings → Domains** and add `davidrhodes.io`. When Vercel offers it, also add `www.davidrhodes.io`.
2. Read the domain card. It shows the records this project expects.
   - Apex domains use an **A** record. For many projects the address is `76.76.21.21`. Newer projects can show a different anycast address, such as `216.198.79.1`. Use the address on the card.
   - `www` uses a **CNAME** to a project-specific target, shaped like `d1d4fc829fe7bc7c.vercel-dns-017.com`. Use the target on the card.
3. In Squarespace, open the domain’s DNS settings and add custom records. An apex name cannot be a CNAME, because the zone already has NS and SOA records at that name.

   | Type | Host | Value |
   | --- | --- | --- |
   | A | `@` | IPv4 address from the Vercel domain card |
   | CNAME | `www` | CNAME target from the Vercel domain card |

   Squarespace uses `@` for the apex. If the host field wants a fully qualified name instead, use `davidrhodes.io` and `www.davidrhodes.io`. A short TTL, such as 300 seconds, makes the next check faster.

4. Delete any other A or AAAA records on the apex. Vercel does not support IPv6 for custom domains that use a third-party DNS provider. A leftover AAAA record can split traffic and stall certificate issuance.
5. Add both hostnames on the Vercel project. This site’s canonical URL is `https://davidrhodes.io/`, and `vercel.json` permanently redirects `www` to that apex. You can also set the same redirect on the `www` domain in the Vercel dashboard.
6. Wait until the domain card says **Valid Configuration**. Vercel then requests the certificate. If it stays invalid, compare the live records with the card and remove conflicts. A restrictive CAA record must still allow Let’s Encrypt (`0 issue "letsencrypt.org"`).

Do not change the Squarespace nameservers to Vercel unless you have copied every existing record you still need, including mail. The A-and-CNAME setup above leaves the rest of the zone where it is.

## Contact

There is no contact form. The site links to email, [LinkedIn](https://linkedin.com/in/rhodesdavid), [lastmilestack.com](https://lastmilestack.com), and [GitHub](https://github.com/dfrho).
