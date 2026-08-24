export const menu = [
  {
    title: "Fresh Plates",
    items: [
      { name: "Appam (1/2 pcs)", price: "₹25/40" },
      { name: "Plain Idli (2/4 pcs)", price: "₹30/50" },
      { name: "Veggies Idli (2/4 pcs)", price: "₹35/60" },
      { name: "Paddu (6/12 pcs)", price: "₹50/90" },
      { name: "Mix Veg Uttapam (1 pc)", price: "₹70" },
      { name: "Aloo Parantha (1 pc)", price: "₹30" },
      { name: "Aloo Pyaaz Parantha (1 pc)", price: "₹35" }
    ]
  },
  {
    title: "Liquids",
    items: [
      { name: "Aam Panna", price: "₹XX" },
      { name: "Mattha", price: "₹XX" },
      { name: "Lassi", price: "₹XX" }
    ]
  },
  {
    title: "Sides",
    items: [
      { name: "Butter (10 g)", price: "₹10" },
      { name: "Curd (60 ml)", price: "₹10" },
      { name: "Ghee (5–6 ml)", price: "₹5" }
    ]
  }
];

export const contacts = {
  whatsapp: "https://whatsapp.com/channel/0029Vb6KjsJ1SWt2pEDw5f1z",
  address: "Opposite Saanwara Sweets, Sec - 14, Panchkula, HR - 134103",
  email: "founder@mithahara.com",
  website: "www.mithahara.com"
};

export const apps = [
  {
    slug: "byok-gateway",
    name: "BYOK Gateway",
    platform: "Odoo",
    tagline: "Your own AI account, powering Odoo's AI writing assistant",
    description: "Redirects Odoo's AI writing tools to your own OpenAI, Anthropic, or OpenRouter API key instead of Odoo's metered service, with explicit user consent and graceful fallback.",
    url: "https://apps.odoo.com/apps/modules/19.0/mh_llm_gateway"
  },
  {
    slug: "community-cash-reconciler",
    name: "Community Cash Reconciler",
    platform: "Odoo",
    tagline: "From an unreconciled bank line to matched invoices, in one click",
    description: "Adds a missing Community Edition screen for matching bank deposits to open invoices, including lump-sum deposits spanning multiple customers and short payments.",
    url: "https://apps.odoo.com/apps/modules/19.0/mh_cash_application_matcher"
  },
  {
    slug: "multi-currency-rounding",
    name: "Multi-Currency Rounding",
    platform: "Odoo",
    tagline: "Stop sub-cent rounding noise from hiding inside your FX gain/loss",
    description: "Lets you set a rounding threshold and dedicated account for small multi-currency reconciliation residuals, keeping real exchange gain/loss clean.",
    url: "https://apps.odoo.com/apps/modules/19.0/mh_currency_rounding_tool"
  },
  {
    slug: "clipmark",
    name: "ClipMark",
    platform: "Chrome",
    tagline: "YouTube notes and flashcards that quiz you back",
    description: "Bookmark moments in YouTube videos, turn them into spaced-repetition flashcards with on-device AI notes, and export to Anki.",
    url: "https://chromewebstore.google.com/detail/clipmark-youtube-notes-fl/iboippnihpcnnglgboaiedaiimbiolgg"
  },
  {
    slug: "duckout",
    name: "Duckout",
    platform: "Chrome",
    tagline: "Hide it. It's still there.",
    description: "One key hides the tab you're on — it stays open and running in the background, and the same key brings it back exactly as you left it: your half-typed form, your logged-in session, your video still playing.",
    body: [
      "Someone walks up. One key, and the tab you were on is off your screen. Duckout does not close it — the tab stays open and running in a background window, so your half-typed form, your logged-in session, and your playing video are all still there. Press the same key and it comes back exactly where it was, in the same position in your tab strip. Nothing reloads, nothing is lost.",
      "That's the whole difference from most panic buttons: they close your tabs and reopen the URLs later, which is why their reviews are full of people who lost a form they were filling in, or lost the tabs altogether. Duckout never closes anything.",
      "Chrome describes the tabs permission as \"read your browsing history\" — that's Chrome's generic wording for tab access, and tab access is the entire feature. Duckout requests no host permissions and injects no content scripts, so it structurally cannot read what's on your pages. No analytics, no telemetry, no accounts, no network calls — nothing leaves your machine.",
      "It's built for shoulder-surfing: someone glancing at your screen in an office, a café, a classroom, a shared room. It does not hide anything from your network, your employer's IT monitoring, your internet provider, or software installed on your computer — if someone can inspect the device or the network, Duckout doesn't help."
    ],
    features: [
      "One key hides the current tab; press it again to bring everything back",
      "One key hides every tab in the window at once",
      "Optional blank decoy page where the tab used to be",
      "Hidden tabs are muted while away, unmuted on restore",
      "Pinned tabs and tab order are preserved exactly",
      "Free, no account, no sign-in"
    ],
    url: "https://chromewebstore.google.com/detail/cidmppedihmfmcjhkneigccpgebooldp",
    privacyUrl: "https://agarwalshashwat.github.io/policies/duckout/",
    screenshots: [
      { src: "/apps/duckout/popup.png", alt: "Duckout's popup: hide this tab, or hide every tab in the window" },
      { src: "/apps/duckout/permissions.png", alt: "Chrome's permission list for Duckout — tab access only, no site access" },
      { src: "/apps/duckout/options.png", alt: "Duckout's options: mute hidden tabs, show a decoy page, and hotkeys" }
    ]
  },
  {
    slug: "meta-odoo-connector",
    name: "Meta Odoo Connector",
    platform: "Odoo",
    tagline: "Facebook & Instagram ads, run from Odoo",
    description: "Manage Facebook & Instagram ad campaigns, ad sets, creatives and spend insights from Odoo — using a Meta access token you generate yourself, no Meta App Review needed.",
    body: [
      "Run your Meta advertising straight from Odoo instead of tab-switching to Meta Ads Manager. Paste a Meta System User access token generated in your own Business Manager — no Meta App Review, no OAuth app submission, no waiting on Meta's approval queue.",
      "Connect one or more ad accounts, then browse, create, rename, and publish campaigns, ad sets, creatives, and ads. Control budget, bid strategy, and audience targeting (countries, age range, gender) directly from Odoo forms, and pause, resume, clone, or delete anything in one click.",
      "Most Meta-adjacent apps on the Odoo Apps Store stop at one-way pixel tracking or Conversions API sync. Meta Odoo Connector covers the full campaign lifecycle — build, launch, monitor, and manage — through the real Meta Marketing API, including spend, impressions, clicks, reach, CTR, CPC, and CPM insights for any date range, right alongside the rest of your Odoo data."
    ],
    features: [
      "Connect ad accounts with your own access token — no App Review",
      "Create, rename, and publish campaigns, ad sets, creatives, and ads",
      "Control budget, bid strategy, and audience targeting from Odoo forms",
      "Pause, resume, clone, or delete any campaign, ad set, or ad",
      "Spend, impressions, clicks, reach, CTR, CPC, and CPM insights",
      "Targets Odoo 17.0, 18.0, and 19.0, Community and Enterprise"
    ],
    price: "$349",
    url: "https://apps.odoo.com/apps/modules/19.0/mh_meta_odoo_connector",
    screenshots: [
      { src: "/apps/meta-odoo-connector/connections.png", alt: "Connecting a Meta ad account with an access token" },
      { src: "/apps/meta-odoo-connector/campaigns.png", alt: "Campaigns list inside Odoo, synced from Meta" },
      { src: "/apps/meta-odoo-connector/insights.png", alt: "Ad set targeting and spend insights synced from Meta" }
    ]
  }
];

export function appSoftwareApplicationJsonLd(app) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name,
    "url": `https://mithahara.com/apps/${app.slug}`,
    "downloadUrl": app.url,
    "applicationCategory": app.platform === 'Chrome' ? 'BrowserApplication' : 'BusinessApplication',
    "operatingSystem": app.platform === 'Chrome' ? 'Chrome' : 'Odoo 19',
    "description": app.description,
    "creator": { "@id": "https://mithahara.com/#organization" },
  };
}

export const notifications = [
  "We are currently on monsoon break. We will be back once the weather settles.",
];

export const faqs = [
  {
    question: "What is Ahar?",
    answer: "Ahar is Mithahara's vegetarian food venture — healthy, hygienic, sustainable vegetarian food with eco-friendly plating. Our menu features fresh plates like Appam, Idli, Uttapam, Paranthas, and more, prepared daily."
  },
  {
    question: "Since when are you serving?",
    answer: "We started on 11th January 2025!"
  },
  {
    question: "Do you take bulk orders?",
    answer: "Yes. We accept bulk orders for offices, events, and gatherings. Reach us at founder@mithahara.com to plan your order."
  }
];
