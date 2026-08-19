// Shared data for menu, contacts, and notifications
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
    name: "BYOK Gateway",
    platform: "Odoo",
    tagline: "Your own AI account, powering Odoo's AI writing assistant",
    description: "Redirects Odoo's AI writing tools to your own OpenAI, Anthropic, or OpenRouter API key instead of Odoo's metered service, with explicit user consent and graceful fallback.",
    url: "https://apps.odoo.com/apps/modules/19.0/mh_llm_gateway"
  },
  {
    name: "Community Cash Reconciler",
    platform: "Odoo",
    tagline: "From an unreconciled bank line to matched invoices, in one click",
    description: "Adds a missing Community Edition screen for matching bank deposits to open invoices, including lump-sum deposits spanning multiple customers and short payments.",
    url: "https://apps.odoo.com/apps/modules/19.0/mh_cash_application_matcher"
  },
  {
    name: "Multi-Currency Rounding",
    platform: "Odoo",
    tagline: "Stop sub-cent rounding noise from hiding inside your FX gain/loss",
    description: "Lets you set a rounding threshold and dedicated account for small multi-currency reconciliation residuals, keeping real exchange gain/loss clean.",
    url: "https://apps.odoo.com/apps/modules/19.0/mh_currency_rounding_tool"
  },
  {
    name: "ClipMark",
    platform: "Chrome",
    tagline: "YouTube notes and flashcards that quiz you back",
    description: "Bookmark moments in YouTube videos, turn them into spaced-repetition flashcards with on-device AI notes, and export to Anki.",
    url: "https://chromewebstore.google.com/detail/clipmark-youtube-notes-fl/iboippnihpcnnglgboaiedaiimbiolgg"
  }
];

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