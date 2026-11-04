# Security

This is a static single-page portfolio. It has no accounts, no contact form, no database, and no server-side code of its own. Hosting is Vercel. The notes below map the OWASP Top 10 (2021) to what this repository does about each category.

## A01 Broken Access Control

Not applicable as an authorization problem. Every page is meant to be public. There is no admin surface, no user-specific data, and no object id a caller could swap.

Clickjacking is blocked with `Content-Security-Policy: frame-ancestors 'none'` and `X-Frame-Options: DENY`. `Cross-Origin-Opener-Policy: same-origin` keeps the page from sharing a browsing context with a window it opened. External links use `rel="noopener noreferrer"`.

A phone number is never published. The email address is only exposed through a `mailto:` link assembled in the browser.

## A02 Cryptographic Failures

The site does not store secrets, sessions, or passwords, and no secret is compiled into the client bundle. TLS is provided by Vercel. `Strict-Transport-Security` is set to two years with `includeSubDomains` and `preload`.

Submit `davidrhodes.io` to the [HSTS preload list](https://hstspreload.org/) only after every subdomain you care about serves HTTPS. Preload is sticky.

## A03 Injection

There is no user input and no HTML templating from data. React renders text nodes. `dangerouslySetInnerHTML` is disallowed by ESLint (`react/no-danger`). `eval`, `new Function`, and `javascript:` URLs are disallowed by ESLint as well.

The content security policy allows scripts only from `'self'` plus a hash of the JSON-LD block in `index.html`. It does not allow `'unsafe-inline'` or `'unsafe-eval'` for scripts. Styles and fonts are `'self'` only, which is why the typefaces in `public/fonts` are self-hosted. `form-action 'none'` and `object-src 'none'` close off two more injection paths. There is no contact form.

## A04 Insecure Design

The threat model is a public marketing page. The design choice that matters is what the site refuses to be: no form that could be used for spam or stored XSS, no runtime call to the GitHub API, no third-party script, no analytics beacon. Contact is a `mailto:` link and a LinkedIn link.

Featured projects are hard-coded in `src/data/projects.ts`.

## A05 Security Misconfiguration

`vercel.json` sets:

- Content-Security-Policy, as described above
- Strict-Transport-Security with `includeSubDomains; preload`
- X-Content-Type-Options: `nosniff`
- Referrer-Policy: `strict-origin-when-cross-origin`
- A restrictive Permissions-Policy (camera, microphone, geolocation, payment, and similar features are disabled)
- X-Frame-Options: `DENY`
- Cross-Origin-Opener-Policy: `same-origin`
- X-DNS-Prefetch-Control: `off`
- X-Permitted-Cross-Domain-Policies: `none`

Unknown paths rewrite to `index.html` so the SPA does not leak a framework error page. `www.davidrhodes.io` permanently redirects to `https://davidrhodes.io`.

These headers are applied by Vercel. The Vite dev server does not send them.

`Cross-Origin-Resource-Policy` is intentionally omitted so link-preview crawlers can still fetch the public Open Graph image. Framing is already denied.

## A06 Vulnerable and Outdated Components

Runtime dependencies are React and React DOM. Tooling is locked in `package-lock.json`. `npm audit` runs locally and in CI and is expected to be clean. Dependabot opens weekly updates for npm and GitHub Actions (`.github/dependabot.yml`).

`minimatch` is overridden to `11.0.4` because ESLint 9 still depends on a vulnerable 10.x release. ESLint 10 exists, but `eslint-plugin-react` and `eslint-plugin-jsx-a11y` have not declared support for it, so the lockfile stays on ESLint 9 with the patched transitive dependency. TypeScript is 6.0, the newest release `typescript-eslint` accepts. TypeScript 7 is current on npm and is not used here for that reason.

## A07 Identification and Authentication Failures

Not applicable. There is no login, no cookie session, and no password. Do not add a contact form that collects credentials.

## A08 Software and Data Integrity Failures

The lockfile is committed and CI installs with `npm ci`. The production page does not load third-party JavaScript, so there is no third-party script to pin with subresource integrity. Dependabot watches both npm and GitHub Actions. Featured-project copy is reviewed into the repo rather than fetched at runtime, so a change on GitHub cannot change what this site renders until someone edits `src/data/projects.ts`.

## A09 Security Logging and Monitoring Failures

The application has no authentication events and no server process of its own to log. Request and deployment logs belong to Vercel. There is nothing in this repo to alert on beyond a failed CI run (`typecheck`, ESLint, tests, build, `npm audit`).

## A10 Server-Side Request Forgery

Not applicable. The deployed site does not make server-side requests. The browser does not call GitHub or any other API. Project URLs are static `https` links.

## Reporting

If you find a problem, email via the address on the site (the mailto link) or open a GitHub issue if the repository is public. Please describe the page and the behavior. Do not include a proof of concept that would harm another visitor.
