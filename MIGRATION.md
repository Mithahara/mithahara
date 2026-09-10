# Migrating this site from GitHub Pages to Cloudflare Pages

Written 2026-09-10. Not started. This is a *want*, not a *need* — the site works today.
Do it on a quiet day, not during a campaign.

## Why bother

| | GitHub Pages (today) | Cloudflare Pages |
|---|---|---|
| Redirects | Client-side only. `astro.config.mjs` emits a `<meta http-equiv="refresh">` stub per rule, marked `noindex`. | Real server-side `301` via a `_redirects` file. |
| Response headers | None. Fixed short cache, no way to set one. | `_headers` file: long cache on hashed assets, CSP, security headers. |
| Web Analytics | Manual beacon, maintained by hand in `src/layouts/Layout.astro`. | A toggle. Injection is automatic. |
| Preview builds | None. | One per branch/PR, on its own URL. |

Honest sizing: the redirect improvement touches **4 URLs out of 115**, and it will not move
rankings. The headers and preview builds are the real day-to-day wins. Nothing here is urgent.

## What the migration must preserve

Facts as of 2026-09-10, verified rather than assumed:

- Build: `npm run build` → `astro build` → output in `dist/`. Astro `^7.2.4`.
- Node: `>=22.12.0` in `package.json` engines; the GitHub workflow pins `22`.
- `site: 'https://mithahara.com'` in `astro.config.mjs` — drives canonicals and the sitemap.
  **Do not change it**, or every canonical URL and `sitemap-index.xml` entry moves.
- 115 built pages, of which 111 carry the analytics beacon and 4 are redirect stubs.
- `public/robots.txt` points at `https://mithahara.com/sitemap-index.xml` (live, 200).
- DNS today: apex → `185.199.108-111.153` (GitHub Pages, **not** proxied, no `cf-ray`).
  `www` → Cloudflare-proxied (`104.21.80.72`, `172.67.175.224`), redirecting to the apex.
- Cloudflare is already the DNS provider, so this is not a new vendor.

## Checklist

### 1. Stand it up alongside, change nothing live

- [ ] Cloudflare dashboard → Workers & Pages → Create → Pages → connect to Git →
      `Mithahara/mithahara`, production branch `main`.
- [ ] Framework preset **Astro**. Build command `npm run build`. Output directory `dist`.
- [ ] Set `NODE_VERSION` = `22` in the Pages environment variables. Without it the build
      can land on an older Node than `engines` requires and fail in a confusing way.
- [ ] Let it build. It publishes to `<project>.pages.dev` — the live domain is untouched.
- [ ] Compare `<project>.pages.dev` against `mithahara.com` before going further:
      page count, a generated app page, a hand-written one, the sitemap.

### 2. Convert the redirects to real ones

- [ ] Create `public/_redirects` with one line per rule (301 is the default):

      /odoo-apps/byok-gateway              /apps/byok-gateway              301
      /odoo-apps/community-cash-reconciler /apps/community-cash-reconciler 301
      /odoo-apps/meta-odoo-connector       /apps/meta-odoo-connector       301
      /odoo-apps/multi-currency-rounding   /apps/multi-currency-rounding   301

- [ ] Remove the matching `redirects` block from `astro.config.mjs` so Astro stops emitting
      the meta-refresh stubs. **Both at once** — leaving both means the stub wins, because
      a real file at that path is served before a redirect rule is consulted.
- [ ] Rebuild and confirm `dist/odoo-apps/meta-odoo-connector/index.html` no longer exists.
- [ ] After cutover, verify a real 301: `curl -sI https://mithahara.com/odoo-apps/meta-odoo-connector`
      should show `301` and a `location:` header, with no HTML body.

### 3. Cut the domain over

- [ ] Pages project → Custom domains → add `mithahara.com` and `www.mithahara.com`.
- [ ] Cloudflare updates the apex record itself. The four GitHub `A` records go away.
- [ ] **Disable the GitHub Pages deploy in the same change** — either delete
      `.github/workflows/deploy.yml` or turn Pages off in the repo settings. Two deploy
      paths aimed at one domain is how you spend an hour debugging a stale page.
- [ ] `public/CNAME` (contains `mithahara.com`) is a GitHub Pages artifact. Harmless on
      Cloudflare, but delete it so nobody reads it as the source of truth later.

### 4. Verify, in this order

- [ ] `curl -sI https://mithahara.com/` → expect a `cf-ray` header and no `server: GitHub.com`.
- [ ] All four redirect URLs return `301`, not `200` with a refresh stub.
- [ ] `https://mithahara.com/sitemap-index.xml` still 200s and still lists the app pages.
- [ ] Spot-check one page of each kind: `/`, `/odoo-apps/`, a generated `/odoo-apps/<slug>`,
      a hand-written `/apps/<slug>`, `/privacy-policy`.
- [ ] Analytics still reporting (see step 5 before assuming it is).

### 5. Then, and only then, simplify the analytics

- [ ] Once the apex is proxied by Cloudflare, Web Analytics can run on **Automatic setup**
      and the manual beacon becomes redundant.
- [ ] If you switch, remove `CF_ANALYTICS_TOKEN` and the beacon block from
      `src/layouts/Layout.astro`. **Do not do both at once** — switch to automatic, confirm
      data is still arriving for a day, *then* delete the manual one.
- [ ] Beware the trap that cost eight months of data: Automatic setup only works while the
      record is **proxied**. If the apex is ever set back to DNS-only, analytics silently
      stops. The manual beacon has no such dependency, so keeping it is also a fine answer.

## Rollback

DNS is the only irreversible-feeling step and it is not irreversible. Point the apex back
at `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, re-enable the
GitHub Pages workflow, and the old site is serving again within a TTL. Keep the workflow
file in git history rather than only on disk.
