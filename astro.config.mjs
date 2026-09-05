// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mithahara.com',
  // Four apps predate /odoo-apps and keep hand-written pages at /apps/<slug>, so no
  // detail page is generated for them under /odoo-apps -- the same app must not have two
  // pages competing for one query. But /odoo-apps/<slug> is the URL people guess, and one
  // already shipped in a published video description before the generator was fixed.
  // Redirect rather than 404.
  redirects: {
    '/odoo-apps/byok-gateway': '/apps/byok-gateway',
    '/odoo-apps/community-cash-reconciler': '/apps/community-cash-reconciler',
    '/odoo-apps/meta-odoo-connector': '/apps/meta-odoo-connector',
    '/odoo-apps/multi-currency-rounding': '/apps/multi-currency-rounding'
  },

  integrations: [sitemap()]
});
