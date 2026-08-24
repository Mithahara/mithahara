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
    body: [
      "Odoo's native \"Generate with AI\" and \"Translate with AI\" editor tools route every request through Odoo's own metered AI service. BYOK Gateway points those same editor buttons at your own OpenAI, Anthropic, or OpenRouter account instead — same UI, your own key, your own usage and billing.",
      "Turn it on under Settings → General Settings → Bring Your Own LLM Key, pick a provider and model, paste your key, and every AI-assisted text generation in the editor runs on your account from then on — with explicit consent and a graceful fallback to Odoo's own service if anything's misconfigured.",
      "This covers AI text generation only. Document/invoice OCR digitization is a separate, Enterprise-only feature and isn't part of this app."
    ],
    features: [
      "Works with OpenAI, Anthropic, or OpenRouter — bring any of the three",
      "Same \"Generate with AI\" / \"Translate with AI\" buttons you already use",
      "Your API key, your usage, your billing — nothing routes through Odoo's metered service",
      "Graceful fallback to Odoo's own AI service if no key is configured",
      "One settings screen: Settings → General Settings → Bring Your Own LLM Key"
    ],
    price: "$40",
    url: "https://apps.odoo.com/apps/modules/19.0/mh_llm_gateway",
    screenshots: [
      { src: "/apps/byok-gateway/settings.png", alt: "BYOK Gateway's settings screen: pick a provider, model, and paste your key" }
    ]
  },
  {
    slug: "community-cash-reconciler",
    name: "Community Cash Reconciler",
    platform: "Odoo",
    tagline: "From an unreconciled bank line to matched invoices, in one click",
    description: "Adds a missing Community Edition screen for matching bank deposits to open invoices, including lump-sum deposits spanning multiple customers and short payments.",
    body: [
      "Odoo 19 Community doesn't ship a way to apply an unreconciled bank statement line's cash straight to open invoices — you have to go through the invoice-side payment wizard first. Community Cash Reconciler adds that missing screen: pick an unreconciled bank line and apply its cash directly.",
      "It searches for the combination of open invoices a lump sum covers — across a single customer, or, as an explicit opt-in, across several customers at once — and suggests the match for review. Reference numbers in the bank memo are matched first; anything left over from a short payment gets coded to a reusable, named deduction reason instead of a one-off write-off.",
      "Configure deduction reasons under Accounting Settings, then apply cash from any unreconciled bank statement line's Apply Cash action."
    ],
    features: [
      "Apply an unreconciled bank line's cash directly to open invoices",
      "Matches a lump sum across multiple invoices for one customer automatically",
      "Opt-in cross-customer matching for combined deposits",
      "Reference numbers in the bank memo matched first",
      "Short payments coded to reusable, named deduction reasons — not one-off write-offs"
    ],
    price: "$200",
    url: "https://apps.odoo.com/apps/modules/19.0/mh_cash_application_matcher",
    screenshots: [
      { src: "/apps/community-cash-reconciler/bank-lines.png", alt: "Unreconciled bank lines waiting to have cash applied" },
      { src: "/apps/community-cash-reconciler/lumpsum-wizard.png", alt: "A lump-sum deposit matched across three open invoices" },
      { src: "/apps/community-cash-reconciler/shortpay-wizard.png", alt: "A short payment coded to a named deduction reason" }
    ]
  },
  {
    slug: "multi-currency-rounding",
    name: "Multi-Currency Rounding",
    platform: "Odoo",
    tagline: "Stop sub-cent rounding noise from hiding inside your FX gain/loss",
    description: "Lets you set a rounding threshold and dedicated account for small multi-currency reconciliation residuals, keeping real exchange gain/loss clean.",
    body: [
      "Odoo's native exchange-difference mechanism posts every reconciliation residual — a genuine FX rate movement or a fraction-of-a-cent rounding artifact — through the same Gain/Loss accounts, with no way to tell them apart afterward.",
      "Multi-Currency Rounding adds a configurable threshold: residuals at or below it are redirected to a dedicated Rounding Difference account instead, so your real exchange gain/loss accounts stay clean. A one-click report shows exactly what accumulated in the rounding account.",
      "Configure it under Accounting Settings, right next to Odoo's own native exchange-difference settings — no separate module to learn."
    ],
    features: [
      "Set a rounding threshold below which residuals skip Gain/Loss entirely",
      "Dedicated Rounding Difference account keeps real FX gain/loss clean",
      "One-click report of everything that landed in the rounding account",
      "Lives right next to Odoo's own exchange-difference settings"
    ],
    price: "$150",
    url: "https://apps.odoo.com/apps/modules/19.0/mh_currency_rounding_tool",
    screenshots: [
      { src: "/apps/multi-currency-rounding/threshold.png", alt: "Setting the rounding threshold and dedicated rounding account" },
      { src: "/apps/multi-currency-rounding/settings.png", alt: "The full Accounting Settings screen, next to Odoo's own exchange-difference settings" },
      { src: "/apps/multi-currency-rounding/entries.png", alt: "A report of the small residuals redirected to the rounding account" }
    ]
  },
  {
    slug: "clipmark",
    name: "ClipMark",
    platform: "Chrome",
    tagline: "YouTube notes and flashcards that quiz you back",
    description: "Bookmark moments in YouTube videos, turn them into spaced-repetition flashcards with on-device AI notes, and export to Anki.",
    body: [
      "ClipMark turns long YouTube videos into searchable, revisable knowledge. Bookmark a moment with one click, and it shows up as a diamond marker right on the video's seek bar — hover for the timestamp, description, and tags.",
      "Revisit Mode plays only your bookmarked segments back to back, so a 2-hour lecture becomes a 6-minute review. Active Recall turns those same bookmarks into spaced-repetition flashcards: it prompts you to recall what happens next before revealing the clip, and schedules re-tests on a 1/3/7-day cadence.",
      "Everything lives in a dashboard with search, tag-based auto-groups, and an activity heatmap, plus a persistent side panel for quick access while you watch. Pro adds AI auto-descriptions and summaries from the live transcript, and one-click social captions for sharing a clip."
    ],
    features: [
      "One-click bookmarking with always-visible markers on the seek bar",
      "Revisit Mode: play only your saved clips back to back",
      "Active Recall: spaced-repetition flashcards from your own bookmarks",
      "Reminders on any cadence — daily, weekly, monthly",
      "Dashboard with search, tag-based groups, and an activity heatmap",
      "Share a video's bookmarks as a public link or embeddable widget"
    ],
    url: "https://chromewebstore.google.com/detail/clipmark-youtube-notes-fl/iboippnihpcnnglgboaiedaiimbiolgg",
    webUrl: "https://clipmark.mithahara.com",
    screenshots: [
      { src: "/apps/clipmark/dashboard.png", alt: "ClipMark's dashboard, showing bookmarks and due Active Recall reviews" },
      { src: "/apps/clipmark/active-recall.png", alt: "An Active Recall prompt over a YouTube video, before revealing the clip" },
      { src: "/apps/clipmark/side-panel.png", alt: "ClipMark's persistent side panel with recent bookmarks" }
    ]
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
