# mithahara.com

Public site of the Mithahara parent brand (Ahar, Man'sahara, Apps, Odoo apps). Astro static site. Pushing to `origin/main` (`Mithahara/mithahara`) deploys it on Cloudflare Pages.

## How to work here

1. **Ask before you plan.** Ask me questions about everything until the direction is clear: scope, pages, look and feel, what to keep, what to drop. Ask in short batches, not one giant list. Do not guess a direction and build it.
2. **Plan privately, show pointers.** Make the full plan yourself, then show me only a few short pointers of what you will work on, so I can confirm in one reply. No broad overview, no long design essay.
3. **Then build.** After I confirm, work through to the end of the agreed scope. Do not stop for minor confirmations.
4. **Show before you push.** For any visual change, send screenshots (desktop and phone) and wait for my go before `git push`. Never push a design I have not seen.

## Design

- Follow [DESIGN.md](DESIGN.md): the Cohere structure (flat, hairlines, pill buttons, rounded cards, tight display type, one dark band per page) in our colours and fonts. Update `DESIGN.md` whenever the system changes, and change tokens in `src/styles/global.css`, not per page.
- Fonts stay: Spectral (headings), Archivo (body), Space Mono (labels).
- Follow `~/Projects/UI-UX-STANDARDS.md`: obvious over clever, one primary action per screen, every state handled, keyboard and phone width work, contrast at least 4.5:1, every visible sentence needed.
- Reuse the existing components and tokens. Do not invent a new style per page. If a pattern is needed twice, make it a component.
- No competitor-anchored prices. Do not put IdeaClan in any Mithahara branding.

## Do not hand-edit (generated)

- `src/data/odooApps.js`
- `public/odoo-apps/**` (screenshots, WebP)

They are generated from the Odoo app listings by `~/Projects/odoo/Odoo-Apps/tools/gen_site_data.py` and are overwritten on the next run. Change the listings or the generator instead. The Odoo app pages are `src/pages/odoo-apps/index.astro` and `[slug].astro`, styled by `src/styles/sap.css`. Restyle those through the shared tokens, not by editing the data.

## Commands

```bash
npm run build                      # must pass before any push (215 pages today)
python3 -m http.server 8766 -d dist   # serve the build to check it
```

Screenshots: headless Chrome against the served `dist/`, run with `env -u DBUS_SESSION_BUS_ADDRESS google-chrome --headless=new --no-sandbox --hide-scrollbars --window-size=W,H --screenshot=out.png URL`. Use the Linux Chrome only. Check at 1280 wide and 390 wide.

## Git

- Explicit paths only: `git add <file>`. Never `git add -A` or `git add .`.
- Leave `.claude/` and `.github/copilot-instructions.md` untracked.
- Never force-push. End commit messages with the Co-Authored-By line from the session.

## After a push

Check the live page, not just the build: fetch `https://mithahara.com/<path>/`, confirm 200, the new title and that images load. Say plainly if you could not verify.
