// GENERATED FILE - do not edit by hand.
//
// Written by Odoo-Apps/tools/gen_site_data.py from dashboard.json and each
// module's static/description/index.html. Edit the listing, then re-run the
// generator; editing here forks the copy away from what the store actually
// serves.
//
// Store snapshot: 2026-09-04T04:01:36+00:00

export const odooApps = [
  {
    "tech": "mh_meta_auto_scale_engine",
    "slug": "auto-scale-engine",
    "name": "Auto Scale Engine",
    "summary": "Clone campaigns that are winning into other Meta ad accounts on a ROAS or spend threshold: Facebook and Instagram, with budget multipliers and an idempotent run ledger.",
    "tagline": "Auto-clone winning Meta ad campaigns into other ad accounts under a budget rule",
    "intro": [
      "Watches a source Meta ad account for campaigns that clear a performance bar you define - ROAS, spend, purchases, campaign age, cost per purchase - then clones the winning campaign, full ad-set/ad/creative tree included, into one or more destination accounts under a budget rule and a naming template. Every clone is published atomically: built entirely paused, then verified against the plan before it's ever activated - if anything fails partway, everything created for that destination is torn down and the run moves on. An idempotency ledger makes sure the same campaign is never cloned into the same account twice, and every run keeps a full step-by-step log."
    ],
    "features": [
      {
        "heading": "Rule-based qualification",
        "body": [
          "Set ROAS, spend, purchase, campaign-age, and cost-per-purchase thresholds - a campaign only gets cloned once it clears every rule you set, evaluated fresh on every run."
        ]
      },
      {
        "heading": "A real budget rule, not a flat copy",
        "body": [
          "Copy the original budget, set a fixed amount, apply a percentage multiplier, or write a sandboxed custom formula (min/max/round/floor/ceil over the original budget) - with a platform-minimum clamp so a clone is never published under Meta's own floor."
        ]
      },
      {
        "heading": "Atomic, never half-published",
        "body": [
          "Every clone is built entirely paused, then the whole reconstructed tree is verified against the plan before it's activated. Any failure partway through tears down everything created for that destination - you never end up with a broken half-campaign live in an ad account."
        ]
      },
      {
        "heading": "Never cloned twice",
        "body": [
          "Every clone attempt is recorded against the source campaign and destination account it was cloned into - the same winner is never re-cloned into the same account on a later run."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Media buyers and agencies already running Meta Odoo Connector who manage more than one ad account and want winner-scaling automation instead of manually rebuilding a good campaign in every destination account by hand."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 848.0,
    "manifestPrice": 499.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "mh_meta_odoo_connector"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_meta_auto_scale_engine",
    "screenshots": [
      "screenshot_account_group.png",
      "screenshot_scaling_profile.png",
      "screenshot_run_log.png",
      "screenshot_clone_ledger.png"
    ],
    "copyWords": 312,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_eudr_diligence",
    "slug": "eudr-due-diligence",
    "name": "EUDR Due Diligence",
    "summary": "Record the plots of land behind every lot of coffee, cocoa, soya, rubber, palm, cattle or wood, and check a shipment has the geolocation data an EU deforestation due diligence statement needs before it leaves",
    "tagline": "",
    "intro": [
      "Record the plots of land behind every lot of coffee, cocoa, soya, rubber, palm, cattle or wood, and check a shipment has the geolocation data an EU deforestation due diligence statement needs before it leaves"
    ],
    "features": [
      {
        "heading": "The coordinates are always the missing part",
        "body": [
          "Regulation (EU) 2023/1115 has applied to large operators since 30 December 2025 and to small ones since 30 June 2026. Every consignment of a covered commodity needs a due diligence statement, and that statement needs the geolocation of every plot of land the material was produced on.",
          "Odoo knows the commodity and the quantity already. It has nowhere to put the plot — so the plot lives in a supplier's spreadsheet, and the day it is needed is the day the container is loaded.",
          "Plots of land, entered once and pointed at by every lot that came off them. The ones missing something say what is missing, rather than only that they are incomplete.",
          "A delivery checked line by line: which lots trace to a complete plot, and for the ones that do not, whether the problem is a missing plot, an incomplete one, or a product with no lot tracking at all."
        ]
      },
      {
        "heading": "The rule about plot size, applied",
        "body": [
          "Article 2(28) allows a single point for a plot of four hectares or less and asks for the boundary above that — except for cattle, where the geolocation is of the establishment the animals were kept on rather than of a field. That distinction is built in: an oversized plot carrying only a point is reported incomplete, and a cattle establishment of any size is not.",
          "Coordinates are also checked for being coordinates. A latitude past 90 is the signature of latitude and longitude entered the wrong way round, which is the commonest way this data arrives broken."
        ]
      },
      {
        "heading": "A check before the goods go, at a strength you choose",
        "body": [
          "A despatch of goods in scope with no plot data behind it can be refused outright, or let through with the gap recorded on the transfer, or not checked at all. The default records it. A rule that halts the warehouse on day one gets switched off on day two.",
          "Receipts are never blocked — the receipt is what tells you which lot arrived, and refusing it would be refusing the answer."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19, Community or Enterprise. Needs Inventory and Purchase. Products in scope have to be tracked by lot or serial number — without that there is nothing to attach a plot to, and the app says so rather than reporting a gap it cannot explain."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 449.0,
    "manifestPrice": 449.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "stock",
      "purchase"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_eudr_diligence",
    "screenshots": [
      "screenshot_plots.png",
      "screenshot_statement.png"
    ],
    "copyWords": 443,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_google_ads_launcher",
    "slug": "google-ads-odoo-connector",
    "name": "Google Ads Odoo Connector",
    "summary": "Create and manage search campaigns, ad groups, keywords and responsive search ads with your own developer token. PPC cost and conversions beside your CRM.",
    "tagline": "",
    "intro": [
      "Google Ads Odoo Connector connects to your own Google Ads account with a developer token, OAuth client, and refresh token you generate yourself - nothing to submit to us, no app review dependency on our end. Once connected, you get real campaign management inside Odoo: browse and sync existing Search campaigns, ad groups, keywords, and responsive search ads, publish new ones, control daily budget and bidding strategy, manage keywords and match types, pause or delete anything, clone a winning campaign, and pull clicks/impressions/cost/conversions for any date range - all through the real Google Ads API."
    ],
    "features": [
      {
        "heading": "Bring your own credentials",
        "body": [
          "Uses a developer token, OAuth client, and refresh token from your own Google Ads Manager account and Google Cloud project - you're managing your own account with your own credentials. Basic Access is a self-service application you submit directly to Google (typically about 5 business days) - there's nothing to submit to us and nothing to wait on from our side."
        ]
      },
      {
        "heading": "Real campaign management, not just reports",
        "body": [
          "Most Google Ads connectors on the Marketplace only sync performance reports. This one builds, publishes, updates, clones, and deletes campaigns, ad groups, keywords, and ads directly - the same actions you'd otherwise do in Google Ads."
        ]
      },
      {
        "heading": "Budget, bidding, and keyword targeting",
        "body": [
          "Set a daily budget and choose a bidding strategy - Manual CPC, Maximize Clicks, or Target CPA - then manage keywords and match types (broad, phrase, exact) at the ad group level, all from standard Odoo form and list views."
        ]
      },
      {
        "heading": "Performance insights alongside your data",
        "body": [
          "Sync clicks, impressions, cost, conversions, CTR, CPC, and CPA for any campaign or ad group - pick a preset range or a custom date window - without opening Google Ads or exporting a report."
        ]
      },
      {
        "heading": "Every write action stays reviewable before it touches Google",
        "body": [
          "Publish, update, clone, and delete are explicit buttons you click after reviewing the record - nothing is pushed to Google automatically in the background. Every field maps directly to a real Google Ads API parameter, so what you set in Odoo is exactly what reaches your account."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Built for Odoo teams running Google Ads Search campaigns who want campaign management alongside their CRM, sales, and reporting data instead of switching to Google Ads - marketers who manage their own Google Ads and Google Cloud access and don't want to wait on our review queue to get started."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 399.0,
    "manifestPrice": 399.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_google_ads_launcher",
    "screenshots": [
      "screenshot_campaign.png",
      "screenshot_keywords.png",
      "screenshot_ads.png"
    ],
    "copyWords": 396,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_meta_odoo_connector",
    "slug": "meta-odoo-connector",
    "name": "Meta Odoo Connector",
    "summary": "Meta Ads in Odoo: manage Facebook and Instagram campaigns, ad sets, creatives and Lead Ads beside your CRM. Uses your own system user token, so no App Review is needed.",
    "tagline": "",
    "intro": [
      "Meta Odoo Connector connects to your own Meta Business Manager with a System User access token you generate yourself - no Meta App Review, no OAuth app submission, no waiting on an approval queue. Once connected, you get the full campaign lifecycle inside Odoo: browse and sync existing campaigns, ad sets, creatives and ads, publish new ones, control budget and bid strategy, target an audience, pause or delete anything, clone a winning setup, and pull spend/performance insights for any date range - all through the real Meta Marketing API."
    ],
    "features": [
      {
        "heading": "Bring your own token, skip App Review",
        "body": [
          "Most Meta integrations need Meta to review and approve an app before it can touch live ad accounts. This one uses a System User access token from your own Business Manager instead - you're managing your own accounts with your own credentials, so there's nothing to submit and nothing to wait on."
        ]
      },
      {
        "heading": "The full campaign lifecycle, not just tracking",
        "body": [
          "Most Meta apps on the Odoo Marketplace add pixel tracking or Conversions API events. This one builds, publishes, updates, clones, and deletes campaigns, ad sets, creatives, and ads directly - the same actions you'd otherwise do in Meta Ads Manager."
        ]
      },
      {
        "heading": "Budget, bidding, and audience targeting",
        "body": [
          "Set daily or lifetime budgets, choose a bid strategy and bid amount, and target an audience by country, age range, and gender - all from standard Odoo form and list views, with the same fields Meta's own API exposes."
        ]
      },
      {
        "heading": "Spend and performance insights alongside your data",
        "body": [
          "Sync spend, impressions, clicks, reach, CTR, CPC, and CPM for any campaign, ad set, or ad - pick a preset range or a custom date window - without opening Meta Ads Manager or exporting a report."
        ]
      },
      {
        "heading": "Every write action stays reviewable before it touches Meta",
        "body": [
          "Publish, update, clone, and delete are explicit buttons you click after reviewing the record - nothing is pushed to Meta automatically in the background. Every field maps directly to a real Meta Marketing API parameter, so what you set in Odoo is exactly what reaches your ad account."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Built for Odoo teams running Facebook and Instagram ad campaigns who want campaign management alongside their CRM, sales, and reporting data instead of switching to Meta Ads Manager - marketers who manage their own Business Manager access and don't want to wait on a Meta App Review process to get started."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 349.0,
    "manifestPrice": 349.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base",
      "crm"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_meta_odoo_connector",
    "screenshots": [
      "screenshot_connection.png",
      "screenshot_campaigns.png",
      "screenshot_adset_targeting.png",
      "screenshot_ad_creative.png"
    ],
    "copyWords": 394,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": "/apps/meta-odoo-connector"
  },
  {
    "tech": "mh_access_explorer",
    "slug": "access-explorer",
    "name": "Access Explorer",
    "summary": "An access rights report for every user against every model: what each one can read, write, create and delete, resolved through group inheritance and record rules",
    "tagline": "See exactly what every user can read, write, create and delete across every model, resolved through group inheritance and record rules",
    "intro": [],
    "features": [
      {
        "heading": "The dangerous permission is the one nobody thought to check",
        "body": [
          "Checking access user by user only finds what you already suspected. It cannot find the access rule someone left without a group on it, which quietly grants every user in the database. It cannot tell you which of your models nothing narrows, so that access to the model is access to every row. And it will not tell you who can delete accounting entries until you think to ask about that particular person and that particular model.",
          "This sweeps every user against every model that matters and tells you what stood out.",
          "A review across users and sensitive models: what each can do, which grants reach everyone, and which are narrowed by no record rule at all."
        ]
      },
      {
        "heading": "Grants that reach everyone",
        "body": [
          "An access rule with no group on it applies to every user in the database. It is the most common accidental over-grant in Odoo and the hardest to notice, because checking any single user shows nothing unusual - they are supposed to have it. The review flags every one of them by name."
        ]
      },
      {
        "heading": "Access with no row filter",
        "body": [
          "A grant that no record rule narrows means access to the model is access to every record in it. That is often correct and occasionally alarming, and you cannot tell which without being shown where it happens."
        ]
      },
      {
        "heading": "Resolved, not listed",
        "body": [
          "Permissions are computed as each user, through the same calls Odoo uses to enforce them - so implied groups, global rules and group rules are already combined. You are reading a conclusion, not three tables to cross-reference."
        ]
      },
      {
        "heading": "The superuser is left out on purpose",
        "body": [
          "It bypasses every rule by design, so including it would report full access to everything and bury the findings that matter. It is excluded even if you select it."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19 Community or Enterprise. No dependency beyond base, and nothing leaves your server. Restricted to Settings administrators, since the report itself describes who can reach what."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you buy it."
    ],
    "requires": [],
    "price": 299.0,
    "manifestPrice": 299.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_access_explorer",
    "screenshots": [
      "screenshot_review.png"
    ],
    "copyWords": 366,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_dac7_reporting",
    "slug": "dac7-seller-reporting",
    "name": "DAC7 Seller Reporting",
    "summary": "For digital platform operators: due diligence records, quarterly consideration computed from posted vendor bills, the de minimis exemption, and a CSV export.",
    "tagline": "Seller due diligence and your annual DAC7 report, straight from Odoo",
    "intro": [
      "EU Directive 2021/514 (DAC7) requires digital platform operators to run due diligence on their sellers - identity, TIN, jurisdiction, financial account - and report consideration paid, transaction counts, and fees withheld to a tax authority every year by 31 January. This applies to any Odoo-based platform that pays a network of third-party sellers through standard vendor bills: marketplaces, property-rental platforms, gig and service platforms. Odoo has no native tooling for this at all.",
      "This app: mark a partner as a DAC7 seller and capture their due-diligence fields, compute per-quarter consideration and transaction counts straight from that seller's posted vendor bills, generate an annual report that applies the de-minimis exemption (fewer than 30 transactions and no more than EUR 2,000), and export a CSV with every field a filing needs. A reminder fires every January if due diligence is incomplete or last year's report hasn't been generated yet."
    ],
    "features": [
      {
        "heading": "Computed from what you already have",
        "body": [
          "Consideration and transaction counts come straight from posted vendor bills and credit notes to each seller - no separate ledger to maintain, no manual re-entry of numbers you've already booked."
        ]
      }
    ],
    "scope": [
      "This app produces the source data for your filing - it doesn't generate the OECD DPI XML schema file itself; most tax authorities provide their own free upload tool for that. Fees withheld are entered per seller per quarter, since there's no standard Odoo field for a platform's own commission model."
    ],
    "requires": [],
    "price": 299.0,
    "manifestPrice": 299.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "account",
      "mail"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_dac7_reporting",
    "screenshots": [
      "screenshot_report.png"
    ],
    "copyWords": 245,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_microsoft_ads_launcher",
    "slug": "microsoft-ads-connector",
    "name": "Microsoft Ads Connector",
    "summary": "Bing Ads inside Odoo: create and manage search campaigns, ad groups, keywords with match types and responsive search ads, using your own developer token and Azure AD client.",
    "tagline": "",
    "intro": [
      "Microsoft Ads Connector connects to your own Microsoft Advertising account with a developer token, Azure AD (Entra ID) OAuth client, and refresh token you generate yourself - nothing to submit to us, no app review dependency on our end. Once connected, you get real campaign management inside Odoo: browse and sync existing Search campaigns, ad groups, keywords, and ads, publish new ones, control daily budget and CPC bids, manage keywords and match types, pause, resume, clone, or delete anything - all through the real Microsoft Advertising API."
    ],
    "features": [
      {
        "heading": "Bring your own credentials",
        "body": [
          "Uses a developer token, Azure AD client ID/secret, and refresh token from your own Microsoft Advertising and Azure accounts - you're managing your own account with your own credentials. A single-account developer token is issued instantly from Microsoft's Developer Portal - there's nothing to submit to us and nothing to wait on from our side."
        ]
      },
      {
        "heading": "Real campaign management, not just reports",
        "body": [
          "Builds, publishes, updates, clones, and deletes campaigns, ad groups, keywords, and ads directly - the same actions you'd otherwise do in the Microsoft Advertising UI."
        ]
      },
      {
        "heading": "Budget and keyword targeting",
        "body": [
          "Set a daily budget per campaign, then manage keywords and match types (broad, phrase, exact) with per-ad-group CPC bids, all from standard Odoo form and list views."
        ]
      },
      {
        "heading": "Reach Bing's search audience from Odoo",
        "body": [
          "Microsoft Advertising reaches the Bing/Microsoft Search Network - a real, if secondary, search-ads channel most Google-first advertisers still don't manage - now on the same screens as the rest of your Odoo data."
        ]
      },
      {
        "heading": "Every write action stays reviewable before it touches Microsoft",
        "body": [
          "Publish, pause, resume, clone, and delete are explicit buttons you click after reviewing the record - nothing is pushed to Microsoft automatically in the background. Every field maps directly to a real Microsoft Advertising API parameter, so what you set in Odoo is exactly what reaches your account."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Odoo teams running Microsoft Advertising (Bing Ads) search campaigns - often alongside Google Ads - who want campaign management next to their CRM, sales, and reporting data instead of switching to a separate platform, and who manage their own Microsoft Advertising and Azure access without waiting on our review queue."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 299.0,
    "manifestPrice": 299.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_microsoft_ads_launcher",
    "screenshots": [
      "screenshot_campaign.png"
    ],
    "copyWords": 358,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_ro_saft_exporter",
    "slug": "romania-saf-t-exporter",
    "name": "Romania SAF-T Exporter",
    "summary": "Build the ANAF D406 XML from your chart of accounts, partners, tax table, journal entries and invoices. Validate with DUKIntegrator before filing. Runs on Community.",
    "tagline": "SAF-T for Odoo Community - no Enterprise upgrade, no consultancy engagement",
    "intro": [
      "ANAF's D.406 SAF-T declaration is mandatory for every Romanian taxpayer category, phased in by size since 2022 and now covering small taxpayers too, with real penalties for late or incorrect filing. Odoo's own SAF-T module exists but is Enterprise-only; Community has no export path at all, and the one Community-capable alternative on the market is a multi-thousand-euro consultancy engagement, not a self-serve app.",
      "This app maps your real Odoo accounting data - chart of accounts, customers, suppliers, tax table, posted journal entries, and posted sales/purchase invoices - onto the four documented SAF-T sections (Header, MasterFiles, GeneralLedgerEntries, SourceDocuments) for a monthly or quarterly declaration period, and exports a well-formed XML file.",
      "Stated plainly: this is a preparation tool, not a government-certified generator. ANAF's full D.406 schema includes detailed Romanian-specific classification tables that aren't fully reproducible from public documentation. Always run the exported file through ANAF's own free DUKIntegrator validator before submission."
    ],
    "features": [
      {
        "heading": "Built on data you already have",
        "body": [
          "Chart of accounts, partners, taxes, and posted journal entries and invoices - nothing new to configure, no separate ledger to maintain."
        ]
      }
    ],
    "scope": [
      "Monthly/quarterly declaration only - the universally-mandatory, recurring one. Annual fixed-asset and on-demand inventory declarations are a fast-follow."
    ],
    "requires": [],
    "price": 299.0,
    "manifestPrice": 299.0,
    "currency": "USD",
    "category": "Accounting/Localizations",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "l10n_ro"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_ro_saft_exporter",
    "screenshots": [
      "screenshot_declaration.png"
    ],
    "copyWords": 205,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_snapchat_ads_launcher",
    "slug": "snapchat-ads-connector",
    "name": "Snapchat Ads Connector",
    "summary": "Publish, pause and clone Snap ad squads and ads with your own OAuth credentials. Campaign objectives, daily budgets and delivery status without leaving your ERP.",
    "tagline": "",
    "intro": [
      "Snapchat Ads Connector connects to your own Snapchat Ads account with an OAuth client ID/secret and refresh token you generate yourself - nothing to submit to us, no app review dependency on our end. Once connected, you get real campaign management inside Odoo: browse and sync existing campaigns, ad squads, and ads, publish new ones, control daily budget, audience targeting, and optimization goal, pause, resume, clone, or delete anything, and publish a real ad with its own media upload and creative - all through the real Snapchat Marketing API."
    ],
    "features": [
      {
        "heading": "Bring your own credentials",
        "body": [
          "Uses an OAuth client ID/secret and refresh token from your own Snapchat Business Manager account - the lightest credential model of any connector in this lineup, since Snapchat has no separate developer-token concept. You're managing your own account with your own credentials, self-service, with nothing to submit to us."
        ]
      },
      {
        "heading": "Real campaign management, not just reports",
        "body": [
          "Builds, publishes, updates, clones, and deletes campaigns, ad squads, and ads directly - including a real media upload and creative for the ad itself, not just a placeholder."
        ]
      },
      {
        "heading": "Budget and audience targeting at the ad squad level",
        "body": [
          "Set a daily budget, country targeting, and optimization goal (impressions, swipes, app installs) on each ad squad - matching how Snapchat's own real budget model works, rather than forcing it onto the campaign level."
        ]
      },
      {
        "heading": "Reach Snapchat's audience from Odoo",
        "body": [
          "A genuinely underserved gap on the Odoo App Store - manage a real Snapchat ad presence next to your other ad platforms, without a separate login or dashboard."
        ]
      },
      {
        "heading": "Every write action stays reviewable before it touches Snapchat",
        "body": [
          "Publish, pause, resume, clone, and delete are explicit buttons you click after reviewing the record - nothing is pushed to Snapchat automatically in the background. Every field maps directly to a real Snapchat Marketing API parameter, so what you set in Odoo is exactly what reaches your account."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Odoo teams running or starting Snapchat Ads campaigns - especially those already managing Meta, Google, or Microsoft ads from Odoo and want the same for Snapchat - who manage their own Snapchat Business Manager access without waiting on our review queue."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 299.0,
    "manifestPrice": 299.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_snapchat_ads_launcher",
    "screenshots": [
      "screenshot_campaign.png"
    ],
    "copyWords": 354,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_1099_reporting",
    "slug": "us-1099-reporting",
    "name": "US 1099 Reporting",
    "summary": "Form 1099-NEC and 1099-MISC: W-9 and TIN records, exclusions, box amounts and a filing export",
    "tagline": "Form 1099-NEC and 1099-MISC: W-9 and TIN records, exclusions, box amounts and a filing export",
    "intro": [],
    "features": [
      {
        "heading": "Who you paid is the easy half",
        "body": [
          "Totalling what each vendor received is arithmetic. The work is everything that comes off that number afterwards - and every one of those subtractions is a rule someone gets wrong every January.",
          "This app applies them, holds the payee paperwork a filing needs, and tells you what would be rejected before you send it rather than after.",
          "A 2026 run: gross paid, what came off as card settlement, what is actually reportable, and which payees would be rejected."
        ]
      },
      {
        "heading": "Corporations, and the two exceptions",
        "body": [
          "Payments to a C or S corporation are generally not reported, so they come off. The exceptions are the part people miss: gross proceeds paid to an attorney and payments for medical or health care services stay reportable even when the payee is a corporation. Both are handled, not left to you to remember."
        ]
      },
      {
        "heading": "Card and payment-network settlements",
        "body": [
          "Anything settled by card or through a payment network is reported by the processor on a Form 1099‑K. Reporting it again on a 1099‑NEC double-counts the payee. Mark the journals that settle that way and those amounts are removed - shown on the line, not silently netted, so a payee who asks gets an answer."
        ]
      },
      {
        "heading": "The paperwork, before it blocks you",
        "body": [
          "Tax classification as stated on the W-9, the TIN and its type, whether the W-9 is on file and when it arrived. Every reportable payee missing any of it is counted on the run, so the chase happens in December rather than the week the filing is due."
        ]
      },
      {
        "heading": "Taxpayer numbers are treated as sensitive",
        "body": [
          "The TIN is visible to accounting managers only; everyone else sees the last four digits, which is enough to identify a payee and not enough to misuse. The export leaves full numbers out unless you explicitly ask for them."
        ]
      },
      {
        "heading": "The threshold moved, and it moves again",
        "body": [
          "For payments made on or after 1 January 2026 the threshold is $2,000, up from the $600 that had stood since 1954, and the IRS indexes it to inflation every year from 2027. That figure lives in an editable per-year table rather than in the code, so a new year is a line you add - not a release you wait for. Ask about a year it has not been given and it says so instead of quietly using the last one it knows."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19 Community or Enterprise, with Accounting installed. This app also installs the free 1099 Threshold Check , which holds the per-year threshold table.",
          "Not affiliated with or endorsed by the IRS. This is a reporting aid, not tax advice - check the result with whoever files for you."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you buy it."
    ],
    "requires": [],
    "price": 299.0,
    "manifestPrice": 299.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.1",
    "license": "OPL-1",
    "depends": [
      "account",
      "mh_1099_threshold_check"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_1099_reporting",
    "screenshots": [
      "screenshot_run.png"
    ],
    "copyWords": 473,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_breach_deadline_calc",
    "slug": "us-breach-deadlines",
    "name": "US Breach Deadlines",
    "summary": "Log an incident once, tag the affected states, and see which statutory clock expires first. Editable per state rules with attorney general thresholds.",
    "tagline": "An editable rule engine, not a hardcoded legal database - because even the professionals disagree",
    "intro": [
      "Roughly 20 US states now have a hard numeric data-breach-notification deadline - California's SB 446 (effective 1 January 2026) set a strict 30-day floor - while the rest still run on a \"without unreasonable delay\" standard. One incident affecting residents across several states means several different clocks running at once, and getting the shortest one wrong is a real state AG enforcement exposure. Nothing in Odoo or its App Store resolves even one of these 50+ overlapping rules today.",
      "Read this before relying on it: state deadlines are legislated, amended, and reported inconsistently even by professional compliance trackers - two independent sources checked while building this directly contradicted each other on New York's deadline. This app does NOT ship a full 50-state hardcoded legal database pretending to certainty it can't back up. It seeds 5 states where independent sources agreed (California, Colorado, Florida, Washington at 30 days; Texas at 60 days) in a plain, admin-editable rule table - every other state ships with no rule, which surfaces honestly as \"verify manually,\" never a silent guess."
    ],
    "features": [
      {
        "heading": "The engine is the product",
        "body": [
          "Add or correct any state's deadline in a plain editable list, any time - no code change, no waiting on an update. The value is the multi-state tracking and shortest-deadline calculation, not a static table you can't touch."
        ]
      },
      {
        "heading": "Never a silent wrong answer",
        "body": [
          "A state with no configured rule shows up clearly as unconfigured - it never falls back to a guessed number or gets silently skipped from the incident."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 299.0,
    "manifestPrice": 299.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_breach_deadline_calc",
    "screenshots": [
      "screenshot_incident.png"
    ],
    "copyWords": 265,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_whistleblower_case",
    "slug": "whistleblower-cases",
    "name": "Whistleblower Cases",
    "summary": "Directive 2019/1937 internal reporting channel: an unauthenticated intake form, anonymous by default, with the statutory 7 day and 3 month clocks per case.",
    "tagline": "Anonymous by default, with the Directive's statutory clocks built in - not a general HR complaint log",
    "intro": [
      "EU Directive 2019/1937 forces any company with 50+ employees (and public-sector or financial-services entities regardless of size) to run an internal reporting channel that acknowledges a report within 7 days and gives substantive feedback within 3 months. There is no native Odoo feature, no OCA module, and no directive-specific App Store listing that does any of this.",
      "This app gives you a public, unauthenticated reporting form - anonymous by default, no login required - that starts both statutory clocks the moment a report comes in, reminds the assigned officer as each deadline approaches or passes, and keeps every case restricted to a small, dedicated access group.",
      "Not the same product as a general HR complaints log: this is anonymous-by-default and built around the Directive's specific statutory deadlines, not a named internal grievance record."
    ],
    "features": [
      {
        "heading": "Confidentiality by design",
        "body": [
          "The default path is silent: no login, no identity captured, nothing that could trace a report back to its source. A reporter may optionally leave a name and email if they want a reply."
        ]
      },
      {
        "heading": "Both statutory clocks, computed correctly",
        "body": [
          "7-day acknowledgment deadline from receipt; 3-month feedback deadline from acknowledgment, or from the expiry of the 7-day window if none was ever sent - not a naive \"3 months from receipt\" shortcut."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 299.0,
    "manifestPrice": 299.0,
    "currency": "USD",
    "category": "Human Resources",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_whistleblower_case",
    "screenshots": [
      "screenshot_case.png"
    ],
    "copyWords": 224,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_ai_agent_approvals",
    "slug": "ai-agent-approvals",
    "name": "AI Agent Approvals",
    "summary": "Hold an AI agent's writes to the models you choose until a person approves them, with the old and new values side by side",
    "tagline": "Hold an AI agent's writes to the models you choose until a person approves them, with the old and new values side by side",
    "intro": [
      "An agent that can write to your database will eventually write something you would not have agreed to. Rate limits and logs help afterwards. For the handful of models where a wrong write is expensive to undo - prices, customers, posted documents - what you want is a person in front of it.",
      "Name those models on the agent. Its changes to them stop being applied and start being requests.",
      "What is there now, what the agent wants to put there, and two buttons."
    ],
    "features": [
      {
        "heading": "Approve applies exactly what was asked",
        "body": [
          "The values are kept verbatim as the agent sent them, so what is applied is what was reviewed - not something rebuilt afterwards from a description of it."
        ]
      },
      {
        "heading": "It survives its own refusal",
        "body": [
          "Holding a change means refusing it, and Odoo rolls a request back when an error reaches it - which would discard the record remembering what the agent asked. The request is written on its own database cursor, so the agent is told no and the queue still has the change."
        ]
      },
      {
        "heading": "Records that moved on are refused",
        "body": [
          "If somebody changed the records after the agent asked, the old values on screen are no longer what is there. Approving is refused rather than overwriting whoever got there first on a decision taken about different data."
        ]
      },
      {
        "heading": "A batch is one decision",
        "body": [
          "The agent asked once. Splitting a batch would let half be approved and half refused - a state nobody asked for and no agent knows how to recover from."
        ]
      },
      {
        "heading": "Only where you asked for it",
        "body": [
          "Everything outside the named models carries on at machine speed. The point is not to slow the agent down everywhere - an approval queue nobody can keep up with gets approved without reading, which is worse than none."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise. Requires AI Agent Guardrails , which registers which logins are agents. It does not decide for you and does not restrict what the agent may read. The approval records themselves are never held - holding a change to them would need approving, and nobody could approve the first one."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 298.99,
    "manifestPrice": 150.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "mh_ai_agent_guardrails"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_ai_agent_approvals",
    "screenshots": [
      "screenshot_requests.png"
    ],
    "copyWords": 378,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_pay_transparency",
    "slug": "eu-pay-transparency",
    "name": "EU Pay Transparency",
    "summary": "Directive 2023/970 readiness: require a salary range before a vacancy can publish, and report the gender pay gap by quartile pay band, mean and median.",
    "tagline": "A real publish-blocking gate, and a quartile gender pay-gap report - Directive 2023/970",
    "intro": [
      "EU Directive 2023/970 (transposition deadline 7 June 2026) requires disclosing a pay range to every job candidate before or during recruitment, and phased gender pay-gap reporting by quartile pay band for larger employers. Odoo has no compliance logic for either.",
      "This app adds a pay range to each job position and blocks publishing it to your careers page until that range is filled in - no more posting a vacancy with no range and hoping nobody notices. It also runs a quartile pay-gap report: employees sorted into four equal pay bands, mean/median gender pay gap computed the standard EU/Eurostat way, and a flag when the unjustified-gap threshold (5%) is crossed.",
      "Stated plainly: this reports on base wage only, not total compensation - full Payroll (bonuses, allowances) is Enterprise-only in Community."
    ],
    "features": [
      {
        "heading": "Real teeth, not just a report",
        "body": [
          "The pay range gate is a hard constraint on the actual field that controls whether a job posting is live on your careers page - it can't be bypassed by publishing anyway."
        ]
      },
      {
        "heading": "The correct quartile methodology",
        "body": [
          "Mean and median gap computed independently and correctly, employees split into four equal pay bands the way Article 9(1)(e) actually asks for - not a naive single aggregate number."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 279.0,
    "manifestPrice": 279.0,
    "currency": "USD",
    "category": "Human Resources",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "website_hr_recruitment"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_pay_transparency",
    "screenshots": [
      "screenshot_report.png"
    ],
    "copyWords": 214,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_a11y_auditor",
    "slug": "accessibility-auditor",
    "name": "Accessibility Auditor",
    "summary": "WCAG 2.1 AA checks for missing alt text, unlabeled form fields and broken heading order. European Accessibility Act readiness without an overlay widget.",
    "tagline": "Real WCAG violations, found in your rendered pages - not another overlay widget",
    "intro": [
      "The EU Accessibility Act, enforceable since June 2025, requires e-commerce sites serving EU consumers to meet WCAG 2.1 AA, with fines up to 500,000 euros. Odoo ships a free accessibility widget - contrast, grayscale, and text-size toggles - but that's a visitor-facing overlay, not a fix: it never touches the underlying markup, and EAA enforcement guidance treats overlays as legally insufficient on their own. This app scans your actual published pages - the real rendered HTML your visitors see, not the template source - and finds concrete, fixable violations: images with no alt text, form fields with no label, skipped heading levels, missing page language, links with no accessible text, and vague link text like \"click here.\" A rescan automatically closes issues that have been fixed."
    ],
    "features": [
      {
        "heading": "Scans what visitors actually see",
        "body": [
          "The check fetches your real published pages and parses the rendered output - dynamic content, header, and footer included - not the QWeb template source, which can hide or misrepresent what actually reaches the browser."
        ]
      },
      {
        "heading": "Every check is exact, none are guesses",
        "body": [
          "Color contrast is deliberately left out of this version - doing it correctly needs a full CSS cascade and a real rendering engine, and a half-correct contrast checker is worse than none. Every check this app does perform is exact."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 249.0,
    "manifestPrice": 249.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "website"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_a11y_auditor",
    "screenshots": [
      "screenshot_issues.png"
    ],
    "copyWords": 226,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_gdpr_retention",
    "slug": "gdpr-retention-purge",
    "name": "GDPR Retention Purge",
    "summary": "Blank selected personal data fields on a schedule while keeping the record and its history. Legal hold exemption, storage limitation, append only audit log. Not a Data Recycle clone.",
    "tagline": "Per-field anonymization, a legal hold override, and an append-only purge log - not a Data Recycle clone",
    "intro": [
      "GDPR Article 5(1)(e) storage limitation - keep personal data no longer than necessary - is one of the most commonly cited failure points in EU DPA enforcement actions.",
      "Odoo Community already ships Data Recycle for free, which finds stale records and archives/deletes the whole record on a schedule. This app deliberately does not duplicate that. What it adds: per-field anonymization that blanks just the PII fields (name, email, phone, notes) while leaving the record and its non-personal business data intact; a Legal Hold override that exempts a specific record from anonymization for litigation or a statutory requirement, checked before every run, no exceptions; and a regulator-exportable, append-only audit log - proof of what was anonymized, when, and under which rule. No one can edit or delete a log entry through the UI once it's written.",
      "Meant to sit beside Data Recycle and OCA's data-protection registry, not replace either."
    ],
    "features": [
      {
        "heading": "Can't break a record by accident",
        "body": [
          "The field picker refuses required fields and multi-value relations - both at the UI level and as a real server-side constraint, not just a hint you can bypass."
        ]
      },
      {
        "heading": "A log that's actually evidence",
        "body": [
          "No perm_write, no perm_unlink, no manual perm_create for any group, including admins - only the scheduled run itself can write a log entry."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 229.0,
    "manifestPrice": 229.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_gdpr_retention",
    "screenshots": [
      "screenshot_rule.png"
    ],
    "copyWords": 227,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_cash_application_matcher",
    "slug": "community-cash-reconciler",
    "name": "Community Cash Reconciler",
    "summary": "Cash application for accounts receivable: match bank statement lines to open invoices, including a lump sum across several invoices and a short pay writeoff.",
    "tagline": "",
    "intro": [
      "Community ships no view, button, or wizard that starts from an unreconciled bank statement line and works outward to invoices - that direction only exists in the Enterprise reconciliation widget. Community Cash Reconciler adds exactly that screen, then automates what's otherwise manual guesswork once you're in it: which combination of open invoices a lump sum actually covers, whether it's one customer or several, and where a short payment's shortfall gets coded - all reviewed by you before anything posts, then applied through Odoo's own reconciliation engine."
    ],
    "features": [
      {
        "heading": "Starts where the bank feed does",
        "body": [
          "Unreconciled bank statement lines get their own browse screen with a one-click Apply Cash action - Community ships none of that. The invoice-side Register Payment wizard only helps once you already know which invoices a deposit covers."
        ]
      },
      {
        "heading": "Finds the invoice combination for you",
        "body": [
          "Give it an amount and it searches open invoices for the combination whose balances add up - and suggests it, so you're confirming a match instead of hunting for one invoice at a time in a spreadsheet."
        ]
      },
      {
        "heading": "Lump sums across customers",
        "body": [
          "An explicit, opt-in search across every open customer's invoices, for lockbox-style deposits. Odoo's own payment wizard batches strictly by customer - select invoices from two different customers there and it silently splits into separate payments."
        ]
      },
      {
        "heading": "Reference-aware, with reusable deduction reasons",
        "body": [
          "When an invoice number appears in the bank memo, that candidate is suggested first - amount matching is the fallback. For a short payment, pick a pre-configured, named deduction reason mapped to its own account instead of typing a write-off account and label from scratch every time."
        ]
      },
      {
        "heading": "You review, then it posts through Odoo's own ledger",
        "body": [
          "Every suggested match opens in a review screen - nothing reconciles automatically without confirmation. Once confirmed, it posts through Odoo's own reconciliation engine, the same mechanism used everywhere else in Accounting. No new ledger, no parallel data model - just a faster path to a clean bank reconciliation."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Built for Odoo 19 Community Accounting teams who process customer payments by hand every week: bookkeepers clearing a backlog of unapplied cash, AR staff closing the books at month-end, and anyone reconciling bank statement lines against open invoices without an Enterprise subscription."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 200.0,
    "manifestPrice": 200.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_cash_application_matcher",
    "screenshots": [
      "screenshot_bank_lines.png",
      "screenshot_lumpsum_wizard.png",
      "screenshot_shortpay_wizard.png",
      "screenshot_deduction_reasons.png"
    ],
    "copyWords": 366,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": "/apps/community-cash-reconciler"
  },
  {
    "tech": "mh_access_migration",
    "slug": "access-config-migration",
    "name": "Access Config Migration",
    "summary": "Export groups, model access rights and record rules from one database and import them into another, with the exact list of what would be created and changed shown before anything is applied",
    "tagline": "",
    "intro": [
      "Export groups, model access rights and record rules from one database and import them into another, with the exact list of what would be created and changed shown before anything is applied"
    ],
    "features": [
      {
        "heading": "Built on staging, rebuilt by hand on production",
        "body": [
          "That is where two databases start to differ, and the difference stays invisible until somebody cannot do their job — or can do somebody else's.",
          "Doing it by hand is slow and it is where the mistakes come from. A database restore takes the data with it, so that is not an option either.",
          "The plan, before anything is written: what would be created, what would change and which permission differs, what already matches, and what cannot be matched at all."
        ]
      },
      {
        "heading": "Import stops at the plan",
        "body": [
          "Attach the file and press Build the plan. That is where it stops. Nothing is written until you have read the list and pressed Apply — and the rows that need a decision sort to the top, above the ones that already match."
        ]
      },
      {
        "heading": "Matched by XML id, and by nothing else",
        "body": [
          "An XML id is the only identifier that means the same thing in two databases. A name can be edited; a database id is per-database.",
          "A row made by hand in the interface has no XML id, and this reports it as unmatched rather than guessing which local row it meant. That is deliberate: the wrong guess here grants somebody access nobody intended, quietly. Entries for a model that is not installed on the target are skipped the same way, and named."
        ]
      },
      {
        "heading": "It never deletes",
        "body": [
          "Anything present on the target and absent from the file is left exactly as it is. A migration that removes access is how a production database locks its own administrators out, and the day you want that, you want to be doing it deliberately and by hand."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19, Community or Enterprise. No dependencies beyond the base system. Administrator access on both databases."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 199.0,
    "manifestPrice": 199.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_access_migration",
    "screenshots": [
      "screenshot_plan.png"
    ],
    "copyWords": 341,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_access_rights_bulk",
    "slug": "access-rights-bulk-edit",
    "name": "Access Rights Bulk Edit",
    "summary": "Grant or revoke model access rights for many groups and models at once, with the exact list of changes shown before anything is saved",
    "tagline": "Grant or revoke model access rights for many groups and models at once, with the exact list of changes shown before anything is saved",
    "intro": [
      "Odoo keeps model access rights in a flat list thousands of rows long. Granting one group read on twelve models means finding twelve rows by search. Revoking is worse, because the row you need may not exist yet - and a missing row looks exactly like a row that grants nothing.",
      "Pick the groups, pick the models, tick the permissions. Then read what it is about to do.",
      "Every row it would create or change, named, before a single one is written."
    ],
    "features": [
      {
        "heading": "Grant and revoke, not set",
        "body": [
          "A permission you did not tick is left alone. Granting read does not quietly remove a write somebody already had - which is the failure mode of every matrix-shaped editor that saves the whole row."
        ]
      },
      {
        "heading": "It refuses the mistake the row count hides",
        "body": [
          "Revoking the last group holding a permission on a model leaves only the superuser able to do it. Every row in that change looks reasonable on its own; only the total says what happened. The plan names those models, and applying is refused until you say it was deliberate."
        ]
      },
      {
        "heading": "A stale plan cannot be applied",
        "body": [
          "Change the groups, the models, the operation or the permissions after working it out, and Apply is blocked until it is worked out again. A list on screen that describes a different change is worse than no list."
        ]
      },
      {
        "heading": "Revoking what was never granted writes nothing",
        "body": [
          "An absent row already grants nothing, so creating one to say so would add a row that does not do anything. Those pairs are counted as already correct instead."
        ]
      },
      {
        "heading": "It writes ordinary access rights",
        "body": [
          "Plain ir.model.access rows, nothing wrapped or intercepted. Uninstall the app and every right you granted stays exactly where it is. Each change keeps a note of who asked and when."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise, no other module needed. It grants access to a model, not to particular records or fields - which rows a user sees is Record Rule Preview , which columns they may read is Field Access Rules ."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 199.0,
    "manifestPrice": 199.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_access_rights_bulk",
    "screenshots": [
      "screenshot_plan.png"
    ],
    "copyWords": 366,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_company_audit",
    "slug": "company-audit",
    "name": "Company Audit",
    "summary": "Find the records whose company conflicts with the records they point at, before Odoo refuses the transaction",
    "tagline": "Find the records whose company conflicts with the records they point at, before Odoo refuses the transaction",
    "intro": [
      "A multi-company database drifts. Records get imported, migrated, or written before a module declared its company checks, and they sit there contradicting themselves until somebody opens one and the save fails.",
      "This checks the whole database and tells you what is inconsistent.",
      "One cross-company link, and two users who can switch between companies."
    ],
    "features": [
      {
        "heading": "Records pointing at another company",
        "body": [
          "A record in one company linked to a record owned by another. Odoo will refuse the next write on each of them, which is how most people find out - at the worst possible moment. The report names the record, the field, and the company on both sides."
        ]
      },
      {
        "heading": "Records with no company at all",
        "body": [
          "On a model where every other record has one, a blank company means every company in the database can see it. Technical models are left out, because they legitimately have none and reporting them would bury what matters."
        ]
      },
      {
        "heading": "Users who can switch companies",
        "body": [
          "Often entirely correct - a finance lead may need all of them. It is also the setting that turns one careless record into a cross-company leak, and it is the one nobody reviews."
        ]
      },
      {
        "heading": "Why this data exists at all",
        "body": [
          "Odoo enforces company consistency at write time, on the fields that declare the check. That says nothing about records imported, migrated, or written before the flag existed. Those are already in your database, and you cannot create one through the interface to go looking for it."
        ]
      },
      {
        "heading": "It reports, it never repairs",
        "body": [
          "No reassignment, no cleanup, no scheduled monitoring. Moving a record between companies is a decision about your business, not something a report should make on your behalf."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19 Community or Enterprise. Depends only on base, nothing leaves your server, and it is restricted to Settings administrators."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 199.0,
    "manifestPrice": 199.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_company_audit",
    "screenshots": [
      "screenshot_audit.png"
    ],
    "copyWords": 310,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_gdpr_breach_clock",
    "slug": "gdpr-breach-clock",
    "name": "GDPR Breach Clock",
    "summary": "Article 33 timer for a personal data incident: 72 hours to tell the supervisory authority, reminders before it lapses, and a record of what was reported when.",
    "tagline": "The Article 33 72-hour clock starts the moment you log the incident",
    "intro": [
      "GDPR Article 33 gives you 72 hours from becoming aware of a personal data breach to notify your supervisory authority - not 72 hours from when the breach happened. Missing that window, or not being able to prove you tracked it, is one of the most common triggers for an SME GDPR fine. Odoo has no native tool for this at all; Odoo's own official guidance tells you to write your own incident-response process. This app gives you one: log an incident and the clock starts automatically, an activity reminder fires once the deadline gets close so it can't be quietly missed, and a one-click report gives you the Article 33(3) notification document ready to send to your authority."
    ],
    "features": [
      {
        "heading": "The clock starts on \"aware,\" not \"happened\"",
        "body": [
          "The single most common mistake in breach response is starting the countdown from when the incident occurred instead of when someone actually found out. This app gets that distinction right by design."
        ]
      },
      {
        "heading": "A reminder that can't be missed",
        "body": [
          "Once the 72-hour deadline is within 24 hours (or already passed), the responsible person gets an activity reminder automatically - no need to remember to check back."
        ]
      },
      {
        "heading": "Article 33(3) notification, one click",
        "body": [
          "The printable report covers exactly what your authority needs: the nature of the breach, categories and number of people affected, your contact point, likely consequences, and the measures you've taken."
        ]
      },
      {
        "heading": "Kept confidential by design",
        "body": [
          "Breach records are sensitive by nature - a dedicated \"Data Protection Officer\" access group keeps them visible only to whoever you assign, not every internal user."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 199.0,
    "manifestPrice": 199.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_gdpr_breach_clock",
    "screenshots": [
      "screenshot_form.png"
    ],
    "copyWords": 268,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_access_change_log",
    "slug": "access-change-log",
    "name": "Access Change Log",
    "summary": "An access audit trail: every change to groups, access rights and record rules, with who changed whose access, when, and what it was before",
    "tagline": "A record of every change to groups, access rights and record rules: who changed whose access, when, and what it was before",
    "intro": [
      "Odoo keeps no usable record of access changes. The chatter on a user does not track group membership, so by the time somebody asks who granted this access in March, the only honest answer is a guess.",
      "That question has a name in every audit framework worth the paper, and it is always asked after the fact - the one moment it cannot be answered by looking at the current state.",
      "Who did it, to whom, and the old domain next to the new one."
    ],
    "features": [
      {
        "heading": "It keeps what the value was",
        "body": [
          "The group list as it was and as it became, the old domain beside the new one. Knowing something changed is a note; knowing what it was is evidence somebody can act on."
        ]
      },
      {
        "heading": "Who did it, and to whom",
        "body": [
          "Every entry names both, because they are rarely the same person and that pair is what an auditor actually asks for. Group by either."
        ]
      },
      {
        "heading": "Quiet on purpose",
        "body": [
          "Only fields that are about access - somebody editing their signature is not an access change. Installing a module creates hundreds of groups, rights and rules, and none of those is a decision anybody made, so they are not recorded either. A trail full of noise is one nobody reads."
        ]
      },
      {
        "heading": "A save that changed nothing leaves nothing",
        "body": [
          "Values are compared before and after rather than against the instruction sent, so pressing save on an unchanged form does not add an entry. Deletions keep the name of what went, since the id resolves to nothing by the time anybody reads it."
        ]
      },
      {
        "heading": "It never gets in the way",
        "body": [
          "Recording sits inside a guard that swallows its own errors. An audit trail that can refuse a legitimate access change is worse than a gap in the trail, so a failure is logged to the server rather than raised at whoever was doing their job. The log is read-only in the interface, administrators included."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise, no other module needed. It records from the moment it is installed and cannot reconstruct what happened before - it does not pretend to. It logs access configuration, not what people did with the access."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 179.0,
    "manifestPrice": 179.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_access_change_log",
    "screenshots": [
      "screenshot_changes.png"
    ],
    "copyWords": 385,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_record_rule_preview",
    "slug": "record-rule-preview",
    "name": "Record Rule Preview",
    "summary": "Write a record rule and see how many records it actually leaves a chosen user, counted for real before you save it",
    "tagline": "Write a record rule and see how many records it actually leaves a chosen user, counted for real before you save it",
    "intro": [
      "Record rules fail quietly. A domain that is wrong by one operator raises nothing - the affected users simply stop seeing records, and nobody reports that as a bug, because an empty list looks like an empty list. You find out weeks later, from a salesperson who assumed their pipeline had gone cold.",
      "So write the rule here first, and get the number before anybody else does.",
      "The rule was created, the records that user could reach were counted, and the rule was rolled back."
    ],
    "features": [
      {
        "heading": "The number is measured, not predicted",
        "body": [
          "The rule is created for real inside a database savepoint, the records are counted through the ORM as that user, and the whole thing is rolled back. Reproducing what Odoo would have done is exactly the guess this removes."
        ]
      },
      {
        "heading": "It already includes the other rules",
        "body": [
          "Global record rules are ANDed together, so a rule that is correct alone can still take everything away once another global rule exists on the model. The count was taken with all of them in force, so the intersection is in the number rather than in your head."
        ]
      },
      {
        "heading": "A stale preview cannot be applied",
        "body": [
          "Edit the domain, the groups, the permissions or the sample user after previewing, and Apply is blocked until it is measured again. A count that describes a rule which no longer exists is worse than no count at all."
        ]
      },
      {
        "heading": "It refuses the usual mistakes",
        "body": [
          "A rule leaving the sample user zero records has to be acknowledged in writing. The superuser cannot be the sample user - it bypasses every record rule and would report them all harmless. A domain that does not parse, or is not a list, is refused at the form rather than at 2am."
        ]
      },
      {
        "heading": "It creates an ordinary record rule",
        "body": [
          "Applying writes a normal ir.rule. Nothing is wrapped or intercepted, and Odoo enforces it exactly as it enforces any other. Uninstall the app and the rules you made stay where they are."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise, no other module needed. It restricts records, not fields - which columns a user may read is Field Access Rules ."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 179.0,
    "manifestPrice": 179.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_record_rule_preview",
    "screenshots": [
      "screenshot_preview.png"
    ],
    "copyWords": 379,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_user_offboarding",
    "slug": "user-offboarding-check",
    "name": "User Offboarding Check",
    "summary": "Everything in the database that still points at a user before you archive them: scheduled actions, open activities, assigned records, API keys - and what silently breaks if you archive without reassigning",
    "tagline": "",
    "intro": [
      "Everything in the database that still points at a user before you archive them: scheduled actions, open activities, assigned records, API keys — and what silently breaks if you archive without reassigning"
    ],
    "features": [
      {
        "heading": "The one that costs the most, and it is not what you would guess",
        "body": [
          "A scheduled action owned by somebody who has left keeps running, with their access rights, for as long as nobody notices. Archiving blocks the login and nothing else - the account keeps every group it had, so the job goes on creating and writing as them.",
          "Verified rather than reasoned about: an archived user still returns True from has_group and keeps every implied group, and a real scheduled action owned by one was run through Odoo's own callback and created a record without raising. A login nobody can use, still writing to the database on a schedule."
        ]
      },
      {
        "heading": "Found by asking the database, not by keeping a list",
        "body": [
          "The check sweeps the registry for every stored field that points at a user and counts what each one holds for this person. A list maintained inside the app would miss exactly the custom fields somebody is most likely to be named on.",
          "Bookkeeping is deliberately left out. Created-by and written-by point at whoever typed something once; counting them would put every record the person ever touched into the report and bury the handful anybody has to act on."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19, Community or Enterprise. Needs Discuss (for activities). Administrator access, since the check reads across every model in the database. Nothing is written to any record it finds."
        ]
      }
    ],
    "scope": [
      "Every record that named them still names them. Every activity assigned to them is still assigned to them. Every scheduled action set to run as them is still set to run as them. None of it is reassigned, and nothing tells you any of it was there.",
      "One person, everything still attached to them, and the two categories that stop something happening called out separately. Each line opens the records it counted.",
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 169.0,
    "manifestPrice": 169.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_user_offboarding",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 349,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_field_change_log",
    "slug": "field-change-log",
    "name": "Field Change Log",
    "summary": "Field change history for the models and fields you name: who changed which field on which record, with the old value and the new one, so the log stays readable and does not grow forever",
    "tagline": "",
    "intro": [
      "Record who changed which field on which record, with the old value and the new one — only for the models and fields you name, so the log stays readable and does not grow forever"
    ],
    "features": [
      {
        "heading": "Who changed this credit limit?",
        "body": [
          "Odoo can answer that for the handful of fields its own developers marked as tracked, and for nothing else.",
          "Every audit-log module for Odoo answers it by recording everything — and every one of them ends up unusable for the same reason. The day somebody actually has to answer the question, the log has four million rows in it and no way to find the one that matters.",
          "Who, when, on which record, what it was and what it became — for the fields you named and nothing else.",
          "Nothing is recorded until it is named here. Choosing is the feature."
        ]
      },
      {
        "heading": "Written for whoever reads it a year later",
        "body": [
          "Values are stored as they read on the screen, not as they sit in the database: a linked record by its name, a selection by its label. A stored key like invoice means nothing to somebody reading the log after the fact.",
          "The record's name is kept as it read at the time, so an entry still means something after the record is renamed — or deleted."
        ]
      },
      {
        "heading": "What it refuses to record",
        "body": [
          "A write that sets a field to the value it already holds. That is not a change, and a log full of them is the log nobody reads.",
          "Anything written while a module is installing or updating — thousands of rows in one go, and not one of them a decision anybody made.",
          "Its own tables, and Odoo's internal plumbing."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19, Community or Enterprise. No dependencies beyond the base system. Administrator access to choose what is watched and to read the log."
        ]
      }
    ],
    "scope": [
      "A retention period, set in Settings and applied by a nightly job. Two years by default. Zero keeps everything, which is a decision worth making on purpose rather than by leaving a box empty.",
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 159.0,
    "manifestPrice": 159.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "base_setup"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_field_change_log",
    "screenshots": [
      "screenshot_log.png",
      "screenshot_watch.png"
    ],
    "copyWords": 354,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_currency_rounding_tool",
    "slug": "multi-currency-rounding",
    "name": "Multi-Currency Rounding",
    "summary": "Absorb sub cent differences when a foreign currency invoice is paid, and separate realized from unrealized exchange gain and loss during bank reconciliation.",
    "tagline": "",
    "intro": [
      "Odoo posts every reconciliation residual - a genuine exchange-rate movement or a fraction-of-a-cent rounding artifact - through the same Gain/Loss accounts, with no way to tell them apart afterward. This app adds a configurable threshold so the tiny ones land somewhere else, and keeps your real exchange accounts clean."
    ],
    "features": [
      {
        "heading": "One threshold, company currency",
        "body": [
          "Set a rounding threshold and a dedicated Rounding Difference account. Any reconciliation residual at or below the threshold is redirected there instead of your native exchange gain/loss accounts - anything larger still goes through Odoo's normal handling, untouched."
        ]
      },
      {
        "heading": "Configured right next to Odoo's own settings",
        "body": [
          "No new menu to learn - the threshold and account fields sit directly below Odoo's own exchange-difference settings in Accounting, so anyone configuring one naturally sees the other."
        ]
      },
      {
        "heading": "One-click visibility",
        "body": [
          "A \"View entries\" button opens a filtered list/pivot of everything ever posted to the Rounding Difference account - see exactly what accumulated there, whenever you want."
        ]
      },
      {
        "heading": "Minimal, surgical change",
        "body": [
          "A single, targeted override of the one method Odoo already uses to decide which account absorbs a reconciliation residual - no other part of your reconciliation flow is touched."
        ]
      },
      {
        "heading": "Tested against a real multi-currency flow",
        "body": [
          "Verified with an actual foreign-currency invoice, a real payment, and a real reconciliation - not just checked in isolation - confirming small rate movements route to the rounding account and larger ones still use Odoo's native exchange accounts, exactly as configured."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Built for Odoo 19 Community Accounting teams invoicing or paying in a foreign currency: bookkeepers who are tired of explaining a Gain/Loss balance that's really just rate-rounding noise, and anyone closing the books who wants that account to reflect real currency exposure - not sub-threshold reconciliation residue mixed in with it."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 149.99,
    "manifestPrice": 150.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_currency_rounding_tool",
    "screenshots": [
      "settings_screenshot.png",
      "view_entries_screenshot.png"
    ],
    "copyWords": 288,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": "/apps/multi-currency-rounding"
  },
  {
    "tech": "mh_spc_cpk_analytics",
    "slug": "spc-cpk-analytics",
    "name": "SPC Cpk Analytics",
    "summary": "Control charts and process capability indices for Odoo Quality: individuals and moving range charts, Cp and Cpk against your spec limits, and out of control point detection.",
    "tagline": "",
    "intro": [
      "Odoo's Quality app tells you whether one measurement passed or failed. It doesn't tell you whether the process behind it is stable, drifting, or capable of holding the tolerance at all. This app adds that layer directly on top of your existing Quality Control Points."
    ],
    "features": [
      {
        "heading": "Cp / Cpk process capability",
        "body": [
          "Enable analysis on any Measure-type Quality Control Point with a norm and tolerance range. Cp tells you whether the process spread could fit the spec width; Cpk adjusts for centering - the number that actually matters when a process is capable but off-target."
        ]
      },
      {
        "heading": "Individuals / Moving-Range control chart",
        "body": [
          "The right chart for one-measurement-per-check data (not subgrouped X-bar/R): an I-MR chart with real control limits, a moving-range chart, and a capability histogram, all computed from your point's own historical measurements."
        ]
      },
      {
        "heading": "Computed where your data already lives",
        "body": [
          "No separate data entry or export. Sample size, mean, standard deviation, Cp, and Cpk are computed directly from your existing quality.check measurements, right on the Quality Control Point form."
        ]
      },
      {
        "heading": "Built to the real formulas",
        "body": [
          "Standard I-MR control-limit constants and the textbook Cp/Cpk definitions - not a simplified approximation. The capability math is unit-tested against known-answer cases (centered and off-center processes, edge cases like zero spread or inverted tolerances)."
        ]
      },
      {
        "heading": "Before you install",
        "body": [
          "This app extends the Quality app's Quality Control Points and Quality Checks - Quality must already be installed. On Odoo Online, custom-code apps like this one can only be installed via Odoo.sh or a self-hosted instance, not through the online Apps import screen."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 149.99,
    "manifestPrice": 150.0,
    "currency": "USD",
    "category": "Manufacturing",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "quality"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_spc_cpk_analytics",
    "screenshots": [],
    "copyWords": 249,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_ai_agent_guardrails",
    "slug": "ai-agent-guardrails",
    "name": "AI Agent Guardrails",
    "summary": "Cap and record what an AI agent does in Odoo over MCP: a write limit per hour, models it may never touch, and a log of every change with the old value",
    "tagline": "Cap and record what an AI agent does in Odoo over MCP: a write limit per hour, models it may never touch, and a log of every change with the old value",
    "intro": [
      "An MCP server connects a language model to Odoo as some user, and from that moment the database cannot tell the agent's writes apart from a person's. That matters because the failure modes are not the same. A person who misreads a screen edits one record. An agent in a loop edits four thousand, and it does it faster than anybody can notice and stop it.",
      "One login, an hourly ceiling, and the models it may never touch at all.",
      "Every change, with the value that was there before it."
    ],
    "features": [
      {
        "heading": "A limit that counts records, not calls",
        "body": [
          "Creates, writes and deletes in a rolling hour. An agent rarely writes one at a time, so a limit counting calls would let a single create of five thousand straight through. Past the ceiling it is refused until the hour rolls on."
        ]
      },
      {
        "heading": "The log keeps what it overwrote",
        "body": [
          "Field by field, the value before and the value after. Knowing an agent touched a field is not something anybody can act on; knowing what it wrote over is what lets somebody put it back. Deletions keep the names, because the ids stop resolving the moment they are gone."
        ]
      },
      {
        "heading": "Models it may never change",
        "body": [
          "Refused outright, whatever the access rights say - for the handful where a mistake is expensive and rare enough to be worth typing out. A second lock, on top of the ones the agent's groups already give it."
        ]
      },
      {
        "heading": "Any MCP server, or none",
        "body": [
          "It guards a login rather than a protocol, so it applies whichever MCP or REST bridge you run, and to anything else authenticating as that user. Nothing here talks to the model or to the server, so there is no version of either to keep up with."
        ]
      },
      {
        "heading": "People are not logged",
        "body": [
          "Only the logins you register as agents. Recording everybody would bury the agent's changes in everyone else's, which is the opposite of the point - and the check costs a cached lookup, so the rest of the database pays almost nothing for it."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise, no other module needed. It does not undo changes for you - it tells you exactly what to undo. It does not restrict what the agent may read; that is Record Rule Preview and Field Access Rules . The superuser cannot be an agent - it bypasses access rules by design."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 149.0,
    "manifestPrice": 149.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_ai_agent_guardrails",
    "screenshots": [
      "screenshot_agent.png",
      "screenshot_log.png"
    ],
    "copyWords": 430,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_field_access_rules",
    "slug": "field-access-rules",
    "name": "Field Access Rules",
    "summary": "Field level security for any model: hide or lock any field for the groups you choose, enforced by the server and not just hidden in the form view",
    "tagline": "Hide or lock any field for the groups you choose, on any model, enforced by the server and not just hidden in the form view",
    "intro": [
      "Odoo already has field-level access. A field can carry a list of groups, and users outside them neither read it nor write it - not in the form, not in a list, not in an export, not over the API. What Odoo does not have is a way to say so without editing the field in Python.",
      "This is that way.",
      "Two rules: an employee's home address hidden from everyone outside HR, and a tax ID left visible but no longer writable.",
      "A model, its fields, the groups that keep access, and what everybody else gets."
    ],
    "features": [
      {
        "heading": "Hidden means gone, not merely invisible",
        "body": [
          "The field is absent from the form, the list, the export dialog and the field list the API answers with, and a search filter on it is refused. A field removed from a view arch is still every one of those things."
        ]
      },
      {
        "heading": "Read only is refused on the server",
        "body": [
          "The field stays visible and the write is rejected by the ORM, so an import, a scripted call or a hand-made RPC gets the same answer the form does. The form also greys it out, rather than offering an edit that fails on save."
        ]
      },
      {
        "heading": "One code path, so nothing forgets",
        "body": [
          "The rules feed the single hook the ORM uses to ask whether this user may touch this field - the same one that handles a field declared restricted in source. There is no second path that has to be remembered and patched."
        ]
      },
      {
        "heading": "It refuses what cannot be undone",
        "body": [
          "A rule whose groups hold no active internal user would take the field from everybody, permanently - reading it back is restricted too. A rule on the rule model would hide the screen you would undo it from. A rule on id or display_name breaks the view rather than hiding anything. All three are refused at the form."
        ]
      },
      {
        "heading": "See who it actually affects",
        "body": [
          "One button lists the internal users who fall outside the named groups. That number is what tells you whether the rule does what you thought it did, before anybody discovers it the hard way."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise, no other module needed. It restricts fields, not records - which rows a user sees is record rules, a different question. The superuser is never restricted, so crons and upgrades keep working."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 149.0,
    "manifestPrice": 149.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.5",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_field_access_rules",
    "screenshots": [
      "screenshot_rules.png",
      "screenshot_rule.png"
    ],
    "copyWords": 414,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_list_view_layouts",
    "slug": "list-view-layouts",
    "name": "List View Layouts",
    "summary": "Set the default list view columns for a model and assign them per group, so a team opens the same layout instead of rebuilding it",
    "tagline": "Set the default list view columns for a model and assign them per group, so a team opens the same layout instead of rebuilding it",
    "intro": [
      "Odoo keeps optional-column visibility in each browser's localStorage. That makes it per person, per browser, and gone when the cache is cleared - so there is no way to say \"everyone in Sales opens quotations with these columns\", and every new starter begins from the default and rebuilds the view by hand.",
      "This puts that decision in one place: pick a model, pick the columns, pick who it applies to.",
      "A layout for contacts, applied to one group, kept applied so it does not drift."
    ],
    "features": [
      {
        "heading": "One layout, assigned to the people who need it",
        "body": [
          "Define the visible columns for a model and attach the layout to groups, or leave it open to everyone. Where a person matches more than one layout, the lowest sequence wins, so a specific team layout beats a general default without either having to know about the other."
        ]
      },
      {
        "heading": "A starting point, or kept applied",
        "body": [
          "Off, the layout is what people get the first time and their own adjustments are remembered afterwards. On, it is reapplied every time the list opens, so a shared screen or a reporting view stays as configured instead of drifting one person at a time."
        ]
      },
      {
        "heading": "It uses Odoo's own hook",
        "body": [
          "The layout is applied through the same method Odoo itself calls to decide which optional columns start visible, rather than rewriting the list after it has drawn. Nothing flickers, and a model with no layout behaves exactly as it does today."
        ]
      },
      {
        "heading": "Visibility is not security",
        "body": [
          "Hiding a column hides a column. Nobody sees a field they could not already read, and nobody is prevented from reading one by a layout - that is what access rights and record rules are for, and this app deliberately does not pretend otherwise."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19 Community or Enterprise. Depends only on base and web, and nothing leaves your server. Layouts are managed by Settings administrators; everyone else simply gets the result."
        ]
      }
    ],
    "scope": [
      "No column order or width - Odoo does not expose either per user, and claiming it would mean fighting the renderer on every draw. It does not touch the columns a view always shows, and it does not change what anyone is allowed to see."
    ],
    "requires": [],
    "price": 149.0,
    "manifestPrice": 149.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "base",
      "web"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_list_view_layouts",
    "screenshots": [],
    "copyWords": 386,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_project_cost_exposure",
    "slug": "project-cost-exposure",
    "name": "Project Cost Exposure",
    "summary": "What each project has already cost plus your purchase commitment on open purchase orders, and which projects only look profitable because the bills have not landed yet",
    "tagline": "See what each project has already cost plus what you have committed on open purchase orders, and which projects only look profitable because the bills have not landed yet",
    "intro": [
      "Analytic accounting answers what a project has cost. It cannot answer what a project is going to cost, because a purchase order confirmed last week is a real obligation that appears in no report until the supplier gets round to invoicing.",
      "That is how a project stays green for a month and then goes red all at once - and why the people who could still have done something find out when it is too late to.",
      "Billed, spent, and still owed on confirmed orders - and the margin once those orders are invoiced."
    ],
    "features": [
      {
        "heading": "The list that is the point",
        "body": [
          "Projects in profit today that would not be once the open purchase orders are billed. One button opens only those, and the findings name the five worst."
        ]
      },
      {
        "heading": "Nothing is counted twice",
        "body": [
          "The billed part of an order stops counting as committed, because it has already become an actual cost. Counting both would make every project look far worse than it is, which is a different kind of useless."
        ]
      },
      {
        "heading": "A draft order is not a commitment",
        "body": [
          "Only confirmed and done orders count - nobody has told the supplier to go ahead on a draft, and a report that treated quotes as obligations would cry wolf until people stopped reading it."
        ]
      },
      {
        "heading": "Shared order lines are split",
        "body": [
          "One line spread across projects is divided by its analytic percentages rather than charged in full to each, so the company's total commitment adds up to what was actually ordered."
        ]
      },
      {
        "heading": "Costs and revenue are not netted",
        "body": [
          "Summed separately, because netting them reports a project with heavy spending and heavy billing as quiet - and a project already losing money is not listed as a surprise, since it would only bury the ones about to turn."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise with Project and Purchase. It changes nothing - no journal entries, no analytic lines, no orders. It has no opinion about what the budget should have been: it reports what has been committed, not whether committing it was wise. Projects with no analytic account are skipped."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 149.0,
    "manifestPrice": 149.0,
    "currency": "USD",
    "category": "Project",
    "version": "19.0.1.0.5",
    "license": "OPL-1",
    "depends": [
      "project",
      "purchase"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_project_cost_exposure",
    "screenshots": [
      "screenshot_exposure.png"
    ],
    "copyWords": 375,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_reorder_rule_audit",
    "slug": "reordering-rule-audit",
    "name": "Reordering Rule Audit",
    "summary": "Check every reordering rule against what the product has actually consumed: which minimums will stock out over the lead time, and which maximums are hoarding cash",
    "tagline": "Check every reordering rule against what the product has actually consumed: which minimums will stock out over the lead time, and which maximums are hoarding cash",
    "intro": [
      "A reordering rule is a guess made once and rarely revisited. Demand moves; the minimum does not. The stock-out that follows gets blamed on the supplier or on whoever placed the order - and the number that actually caused it, a minimum set two years ago for a product that now ships three times as fast, is never the thing anybody looks at.",
      "This does not forecast. It compares every rule against demand that has already happened, which is a claim you can check.",
      "What each rule holds, what the product needs while a replenishment is on its way, and the verdict."
    ],
    "features": [
      {
        "heading": "Minimums that reorder too late",
        "body": [
          "If the product consumes more during the lead time than the minimum holds, the rule fires too late however well it is followed. One button opens only those, and the findings name the furthest off."
        ]
      },
      {
        "heading": "Maximums that hoard cash",
        "body": [
          "A top-up holding more than a quarter's worth of demand - 90 days of it - above the minimum is money in a rack, and it is valued at cost - sale price would overstate it on exactly the stock that is not moving."
        ]
      },
      {
        "heading": "It admits when it cannot judge",
        "body": [
          "A default Odoo has no supplier delays, so many rules report a lead time of zero. Assuming one would make every minimum look sound - a report that agrees with everything. Those are marked unjudgeable instead, and if you want to see what a lead time would mean you can enter one; the lines that used it say so."
        ]
      },
      {
        "heading": "Hoarding is judged either way",
        "body": [
          "Whether the maximum tops up far beyond demand does not need a lead time, so a missing setting never hides that finding."
        ]
      },
      {
        "heading": "Real demand, not movement",
        "body": [
          "Measured from moves that actually left an internal location. Counting internal transfers would report a pallet shuffled between bays as consumed, and every minimum would then look too low. A product with no demand at all is reported as such rather than judged."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise with Inventory. It changes no rule and orders nothing - it reports what the rules would do against the demand you have had, and leaves the decision where it belongs."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 149.0,
    "manifestPrice": 149.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.5",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_reorder_rule_audit",
    "screenshots": [
      "screenshot_audit.png"
    ],
    "copyWords": 396,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_count_accuracy",
    "slug": "stock-count-accuracy",
    "name": "Stock Count Accuracy",
    "summary": "How wrong the system was at the last inventory adjustment, per location and product, so cycle counts go where the stock actually drifts",
    "tagline": "How wrong the system was at the last inventory adjustment, per location and product, so cycle counts go where the stock actually drifts",
    "intro": [
      "Every inventory adjustment is a measurement: the gap between what Odoo believed was on the shelf and what somebody found there. Odoo posts the correction and moves on, so the gap itself - the only evidence of where the process leaks - is never added up anywhere.",
      "Counting everything every quarter is how most warehouses answer that. It is expensive and mostly wasted, because the drift is not spread evenly.",
      "The size of the error, what was left after it cancelled out, and which locations carry it."
    ],
    "features": [
      {
        "heading": "Error and net are different numbers",
        "body": [
          "A company that loses a hundred pounds of stock in one bay and finds a hundred in another has a net of nothing and a real problem. Both are reported: the size of the error regardless of direction tells you how far to trust the records, and only the leftover is a loss."
        ]
      },
      {
        "heading": "Where to send the counters",
        "body": [
          "Broken down by location and product, with how many adjustments each has had and when the last one was. The findings name the locations carrying most of the error - count those more often than the rest, rather than everything equally."
        ]
      },
      {
        "heading": "It tells shrinkage from misplacement",
        "body": [
          "A product adjusted both up and down in the same period is called out separately. Stock going missing in one place and appearing in another is a putaway or picking problem, and counting harder will not fix it."
        ]
      },
      {
        "heading": "Only real adjustments count",
        "body": [
          "The moves Odoo itself creates when a count is applied - not deliveries, receipts, transfers or scrap. Those are ordinary stock movement rather than the records being wrong, and counting them would make the busiest location look like the leakiest one."
        ]
      },
      {
        "heading": "Attributed where somebody counts",
        "body": [
          "To the internal location that was counted, never to the virtual loss account where Odoo posts the other half and where nobody has ever counted anything. A period with no adjustments says so plainly rather than reporting zero error - nothing counted and every count agreeing look identical from here."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise with Inventory. It does not run counts or create adjustments - it reads the ones you already posted. Values are at cost."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 149.0,
    "manifestPrice": 149.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_count_accuracy",
    "screenshots": [
      "screenshot_accuracy.png"
    ],
    "copyWords": 390,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_unbilled_work",
    "slug": "unbilled-work-report",
    "name": "Unbilled Work Report",
    "summary": "Unbilled timesheets aged by how long they have been sitting: project time worked and never invoiced, with the cost and the sale value of each bucket",
    "tagline": "Project timesheets that have been worked and never invoiced, aged by how long they have been sitting, with the cost and the sale value of each bucket",
    "intro": [
      "Odoo knows which timesheets are billable and which have been invoiced. What it does not put anywhere is how long the rest have been sitting - and the age is the whole story.",
      "Work billed a fortnight late is a nuisance. Work billed six months late is a conversation about whether it really took that long, with nobody left who remembers the detail. Often it simply never gets billed at all.",
      "By project and by age, with the hours, the cost, and what it is worth."
    ],
    "features": [
      {
        "heading": "Aged, because age is the story",
        "body": [
          "0-30 days, 31-90, 91-180 and over six months, with the date of the oldest entry in each row. Rolling a project into one figure would hide exactly how long the oldest money has been waiting."
        ]
      },
      {
        "heading": "Only work somebody meant to charge for",
        "body": [
          "Non-billable hours are not late invoices - they are hours nobody was ever going to bill, and mixing them in makes the total meaningless. Invoiced timesheets drop out too, or the figure becomes a measure of how much work was done."
        ]
      },
      {
        "heading": "It admits what it cannot price",
        "body": [
          "Entries with no sales order line - which come from projects billed manually, exactly where work gets forgotten - are counted in the hours and the cost, left out of the sale value, and reported as a count. Pricing them would mean inventing a rate, and a made-up number in a money report is worse than an admitted gap."
        ]
      },
      {
        "heading": "Straight to the old ones",
        "body": [
          "One button opens only what has been waiting more than ninety days, and the findings name the projects carrying most of it. That is the list somebody can actually work through this afternoon."
        ]
      },
      {
        "heading": "Cost and value, side by side",
        "body": [
          "What the hours cost you and what they were sold for, from the sales order line's own price rather than a list price that may have been discounted away."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise with Sales - Timesheets. It reads only: nothing is invoiced, changed or written back, and it has no opinion about whether the work should have been billed - only that it has not been."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 139.0,
    "manifestPrice": 139.0,
    "currency": "USD",
    "category": "Project",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "sale_timesheet"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_unbilled_work",
    "screenshots": [
      "screenshot_unbilled.png"
    ],
    "copyWords": 385,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_group_membership_bulk",
    "slug": "group-membership-bulk",
    "name": "Group Membership Bulk",
    "summary": "Add or remove many users from many groups at once, with the exact list of who gains and loses which access rights shown before anything is saved",
    "tagline": "Add or remove many users from many groups at once, with the exact list of who gains and loses which access rights shown before anything is saved",
    "intro": [
      "Odoo changes group membership one user form at a time. Standing a project team down at the end of an engagement therefore means fifteen forms - and the only record of what was done is whatever the person remembers a month later.",
      "Every membership that would change, the group left with nobody in it, and the implied group that will not come off by itself."
    ],
    "features": [
      {
        "heading": "It names the implied groups",
        "body": [
          "Groups imply other groups, and that is where people quietly gain access somewhere nobody was looking. Adding says which come along. Removing says the opposite, and it matters more: Odoo does not take an implied group away when the implying one goes, so anybody who had it keeps it."
        ]
      },
      {
        "heading": "Only what you asked for",
        "body": [
          "Memberships this change says nothing about are left alone. A bulk tool that rewrites the whole group list would drop access nobody mentioned, and the person who lost it would have no way to find out why."
        ]
      },
      {
        "heading": "Emptying a group is said out loud",
        "body": [
          "Removing the last member leaves a group configured and unused - easy to miss now, hard to explain later. The plan names those groups and applying is refused until you say it was deliberate. A group that was already empty is not blamed on this change."
        ]
      },
      {
        "heading": "A stale plan cannot be applied",
        "body": [
          "Change the users, the groups or the direction after working it out, and Apply is blocked until it is worked out again. A list describing a different change is worse than no list."
        ]
      },
      {
        "heading": "It leaves the record the forms never did",
        "body": [
          "Each change keeps who asked, when, and exactly which memberships moved - the thing nobody has after doing it fifteen times by hand."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise, no other module needed. It changes who is in a group, not what the group can do - that is access rights , record rules and field access ."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 129.01,
    "manifestPrice": 129.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_group_membership_bulk",
    "screenshots": [
      "screenshot_plan.png"
    ],
    "copyWords": 351,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_warehouse_access",
    "slug": "warehouse-access-rules",
    "name": "Warehouse Access Rules",
    "summary": "Restrict users to the warehouses they work in, and see exactly how many transfers and quants each of them will stop seeing before you switch it on",
    "tagline": "Restrict users to the warehouses they work in, and see exactly how many transfers and quants each of them will stop seeing before you switch it on",
    "intro": [
      "Restricting somebody to their own site is easy to switch on and hard to predict. It hides records, and hidden records look exactly like there being none - so the complaint that follows is never \"the rule is wrong\", it is \"the system is broken\", and it arrives from the warehouse floor on a Monday.",
      "Two people, their warehouses, and what each one stops seeing.",
      "Counted before anything is applied, with a button to go and look at the transfers in question."
    ],
    "features": [
      {
        "heading": "It counts before it hides",
        "body": [
          "How many transfers and how many stock lines that person will stop seeing, with one button to open those very transfers and check they are the ones you meant."
        ]
      },
      {
        "heading": "Nobody you did not name is affected",
        "body": [
          "Anybody without a restriction keeps seeing everything, so you can add people one at a time and check each as you go - instead of switching on a rule that quietly narrows the whole company at once."
        ]
      },
      {
        "heading": "The three places people mean",
        "body": [
          "Transfers, stock on hand, and the warehouse list itself. Records with no warehouse at all stay visible to everybody, because hiding those breaks the parts of Odoo that use warehouse-less transfers and explains nothing to the user."
        ]
      },
      {
        "heading": "It refuses two things",
        "body": [
          "A restriction with no warehouses, which would hide every transfer and stock line from that person - archiving is how you turn one off. And a restriction on the superuser, which bypasses record rules by design and would do nothing while looking as though it did something."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise with Inventory. It restricts what people see, not what they may do - which operations they can perform is access rights . It does not restrict by location within a warehouse, and it writes nothing to your stock."
        ]
      }
    ],
    "scope": [
      "It counts across the whole database rather than as that user, so the figure is what exists and would be hidden. Counting as the user would report zero the moment the rule was on, which is exactly the wrong reassurance."
    ],
    "requires": [],
    "price": 129.01,
    "manifestPrice": 129.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_warehouse_access",
    "screenshots": [
      "screenshot_access.png",
      "screenshot_count.png"
    ],
    "copyWords": 369,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_api_key_inventory",
    "slug": "api-key-inventory",
    "name": "API Key Inventory",
    "summary": "Every API key in the database in one list, with who owns it, when it expires and when it was last actually used, so the forgotten ones can be revoked",
    "tagline": "Every API key in the database in one list, with who owns it, when it expires and when it was last actually used, so the forgotten ones can be revoked",
    "intro": [
      "Odoo 19 gives API keys a scope and an expiry date, and that is real progress. What it still does not give you is anywhere to see all of them at once - they live in each user's own preferences - or any way at all to tell a key carrying live traffic from one somebody made for a trial two years ago.",
      "Those two look identical, and the safe-looking action - leave it alone - is the one that keeps the forgotten key valid.",
      "A key nobody has used in seven months, two carrying traffic, one never used at all, and one that lapsed a fortnight ago."
    ],
    "features": [
      {
        "heading": "All of them, worst first",
        "body": [
          "Keys are made from each user's own preferences, so the inventory goes and finds them. Longest-unused sorts to the top, and a key never used at all is ranked by its age rather than treated as brand new."
        ]
      },
      {
        "heading": "The four worth finding",
        "body": [
          "Never used - issued and forgotten, or an integration that never shipped. Idle - nothing for thirty days. No expiry - nothing will ever take it out of play on its own. Expired - still listed, no longer a way in. Each is one click in the search panel."
        ]
      },
      {
        "heading": "Recording never refuses a key",
        "body": [
          "The stamp is written inside a guard that swallows its own errors. Locking out the integration this app exists to look after would be far worse than a missing timestamp, so a failure there is logged and ignored."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise, no other module needed. It does not create keys or change their scope - that is Odoo's own screen and this does not get between you and it. It does not record what each call did; for an agent connected over MCP that is AI Agent Guardrails ."
        ]
      }
    ],
    "scope": [
      "Recorded at the point Odoo verifies the key, so the timestamp reflects real traffic rather than an intention. It is the one fact that separates a key you must not touch from a key you should have removed a year ago.",
      "A key is checked on every call the integration makes. The stamp is written at most once a minute, because a write per call would cost more than the fact is worth - so the count measures how many minutes a key was active in, not how many calls it made."
    ],
    "requires": [],
    "price": 119.0,
    "manifestPrice": 119.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_api_key_inventory",
    "screenshots": [
      "screenshot_keys.png"
    ],
    "copyWords": 428,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_cookie_consent_enforcer",
    "slug": "cookie-consent-enforcer",
    "name": "Cookie Consent Enforcer",
    "summary": "Hold analytics and marketing scripts back until the visitor consents to that category, and export the consent record as evidence",
    "tagline": "Hold analytics and marketing scripts back until the visitor consents to that category, and inject them the moment they do",
    "intro": [
      "A consent banner that records the answer but lets the tag fire anyway is not compliance. It is a written record that the tag fired first.",
      "The free Cookie Consent Banner logs what each visitor agreed to. This is the part that actually stops the scripts.",
      "Two scripts registered by category. Neither reaches the page until the visitor agrees to that category."
    ],
    "features": [
      {
        "heading": "Nothing runs before the answer",
        "body": [
          "Your scripts never appear in the page as script tags. A browser runs a script tag the moment it parses it, long before anyone has seen the banner - so they travel as inert data and are injected only once the consent record says that category was accepted."
        ]
      },
      {
        "heading": "Per category, not all or nothing",
        "body": [
          "A visitor who accepts analytics but refuses marketing gets the analytics tag and not the pixel. Each script is registered against the category it belongs to, and gated on that category alone."
        ]
      },
      {
        "heading": "Consent takes effect immediately",
        "body": [
          "Agreeing halfway through a visit injects what was just permitted, without a reload. The alternative - waiting for the next page view - loses exactly the session the visitor just opted into."
        ]
      },
      {
        "heading": "It refuses the easy mistakes",
        "body": [
          "A tracker with both a URL and a snippet is ambiguous; one with neither sits in the list looking as though it does something. Script tags pasted into a snippet would end up nested inside the injected tag and never run. All three are refused at the form rather than failing silently on the page."
        ]
      },
      {
        "heading": "No \"essential\" category",
        "body": [
          "A tracker is never essential. Offering the option would only invite marketing scripts to be filed under it, which is the exact failure this app exists to prevent."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise with Website. Installs the free Cookie Consent Banner , which shows the banner and keeps the record. This is a technical control, not legal advice - which scripts belong in which category, and what your policy says, remain yours."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 99.0,
    "manifestPrice": 99.0,
    "currency": "USD",
    "category": "Website",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "website",
      "mh_cookie_consent_banner"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_cookie_consent_enforcer",
    "screenshots": [
      "screenshot_trackers.png"
    ],
    "copyWords": 350,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_session_control",
    "slug": "session-control",
    "name": "Session Control",
    "summary": "Log users out after an idle time you set per group, and see and end the sessions that are open right now",
    "tagline": "Log users out after an idle time you set per group, and see and end the sessions that are open right now",
    "intro": [
      "Odoo has one session lifetime for the whole database, and it counts from when the session was created rather than from when it was last used. That is not an idle timeout, and it is the wrong answer to give an auditor asking why the warehouse terminal is still logged in at midnight.",
      "Minutes per group. A shared terminal gets ten; somebody at their own desk with a screen lock gets an hour.",
      "What is actually open, read from where Odoo keeps it. Your own session is marked and has no End button."
    ],
    "features": [
      {
        "heading": "Idle, not lifetime",
        "body": [
          "The clock runs from the last request, not from login, and any request counts - so a dashboard left open on a screen that polls does not pass for somebody sitting at it."
        ]
      },
      {
        "heading": "The shortest rule wins",
        "body": [
          "A user in several groups gets the tightest of their timeouts. Belonging to a lenient group does not buy a way out of a short one, which is the reading anybody auditing this will expect."
        ]
      },
      {
        "heading": "The open list is the truth",
        "body": [
          "There is no table of logged-in users in Odoo - it writes one file per session - so this reads them where they are. It is what is open now, not a log of logins that may or may not still be live. Sessions belonging to other databases on the same server are left out of it."
        ]
      },
      {
        "heading": "A floor of five minutes",
        "body": [
          "Below that, people are logged out in the middle of filling in a form and lose what they typed - and the software gets blamed rather than whoever chose the number. Shorter values are refused."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise, no other module needed. The superuser is never logged out, so crons and upgrades keep working. It does not restrict where people log in from and it is not a login history."
        ]
      }
    ],
    "scope": [
      "The last-seen stamp is written at most once a minute per session, not on every request - a write per request across a whole database to store a timestamp would cost more than the feature is worth. So a timeout can overrun by up to a minute. The check also runs inside a guard that swallows its own errors, because code on every request that can raise is code that can take a database offline."
    ],
    "requires": [],
    "price": 99.0,
    "manifestPrice": 99.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_session_control",
    "screenshots": [
      "screenshot_rules.png",
      "screenshot_sessions.png"
    ],
    "copyWords": 411,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_stock_aging_report",
    "slug": "stock-aging-report",
    "name": "Stock Aging Report",
    "summary": "Age your inventory into buckets by how long it has sat unsold, with the capital tied up in each, per warehouse and category",
    "tagline": "Age your inventory into buckets by how long it has sat unsold, with the capital tied up in each, per warehouse and category",
    "intro": [
      "Quantity on hand tells you nothing about whether stock is a problem. The same 500 units are healthy in a fast-moving line and dead capital in a slow one. What separates them is the date something last actually left the building - and that is not on the quant.",
      "The free Dead Stock Check gives you the headline number. This is the report that says which products, in which warehouse, and how much money.",
      "Every product with stock on hand, aged by its last outgoing move, with the capital held in each line."
    ],
    "features": [
      {
        "heading": "Six buckets, chosen to match how stock is written down",
        "body": [
          "0-30, 31-90, 91-180, 181-365 days, over a year, and never moved. A quarter, a half year, a year - the intervals accountants already use, not even slices that line up with nothing."
        ]
      },
      {
        "heading": "Internal transfers do not reset the clock",
        "body": [
          "Only moves that actually left an internal location count as shipping. Counting every stock move would make a pallet shuffled between bays look busy, and that is precisely how dead stock hides."
        ]
      },
      {
        "heading": "Valued at cost, not at hope",
        "body": [
          "Each line carries quantity times standard cost. Sale price would overstate the exposure on exactly the stock that is not selling, which is the one place you cannot afford an optimistic number."
        ]
      },
      {
        "heading": "Narrow it to a warehouse or a category",
        "body": [
          "Leave both empty for the whole company, or run one report per site and one per range. Categories match down the tree, so a parent category covers everything under it."
        ]
      },
      {
        "heading": "It names the worst offenders",
        "body": [
          "Findings say how many products have not shipped in six months, what they hold, and which five are the largest by value - with one button to open just those lines. A report you have to read twice to act on is a report nobody reads."
        ]
      },
      {
        "heading": "Requirements, and what this is not",
        "body": [
          "Odoo 19 Community or Enterprise with Inventory. Installs the free Dead Stock Check , which gives the headline figure. It reads existing moves and quants and writes nothing back to your inventory, and it does not tell you what to do with the stock - discount, return or write off remains a judgement call."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 89.0,
    "manifestPrice": 89.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_stock_aging_report",
    "screenshots": [
      "screenshot_report.png"
    ],
    "copyWords": 384,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_accounting_journal_control",
    "slug": "journal-control",
    "name": "Journal Control",
    "summary": "Add bank charges to customer and vendor payments, move money between journals as a matched pair of entries, and limit which users can post to each journal.",
    "tagline": "",
    "intro": [
      "Journal Control bundles three real, persistent gaps in Odoo's own Accounting app: a configurable bank or gateway processing fee posted alongside any payment, a way to move money between your own bank and cash journals without Odoo's own removed internal-transfer UI, and a way to keep a sensitive journal out of the bookkeepers' view except for the users who should see it."
    ],
    "features": [
      {
        "heading": "Payment Fee Surcharge",
        "body": [
          "Set a fee amount and account on any payment; once posted, a separate journal entry records the fee automatically, in the same journal, on the same date. No native Odoo field does this - you'd otherwise book it by hand."
        ]
      },
      {
        "heading": "Internal Transfer",
        "body": [
          "Pick a source and destination journal and an amount - one wizard creates and posts a linked pair of payments, cross-referenced the same way Odoo's own (now-removed) internal-transfer UI used to."
        ]
      },
      {
        "heading": "Journal User Restriction",
        "body": [
          "Restrict a journal to specific users - a payroll or owner's-draw journal, say - without touching access groups. Leave it empty and nothing changes for anyone. The restriction applies to the Billing/Bookkeeper group; Accounting Administrators keep sight of every journal, deliberately, since somebody has to be able to see and undo the restriction itself. Read it as keeping a journal off the team's screens, not as a seal against your own finance lead."
        ]
      },
      {
        "heading": "Nothing hidden in the accounting",
        "body": [
          "Every fee and every transfer is a real, visible journal entry or payment record - nothing is computed off-ledger or shown only in a report."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Bookkeepers and controllers who take card/gateway payments with real processing fees, move money between their own bank and cash accounts regularly, and want at least one journal (payroll, owner's draw) kept out of view for most of the team."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 45.0,
    "manifestPrice": 45.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_accounting_journal_control",
    "screenshots": [
      "screenshot_payment.png"
    ],
    "copyWords": 287,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_llm_gateway",
    "slug": "byok-gateway",
    "name": "BYOK Gateway",
    "summary": "Bring your own OpenAI, Anthropic Claude or OpenRouter API key for AI text generation in Odoo. No per seat resale and no prompt routed through a third party.",
    "tagline": "",
    "intro": [
      "Odoo's editor and website builder include a \"Generate with AI\" / \"Translate with AI\" writing assistant, routed through Odoo's own metered AI service. This app points that same feature at your own OpenAI, Anthropic, or OpenRouter account instead - same buttons your team already knows, your own key, your own usage and billing."
    ],
    "features": [
      {
        "heading": "Three providers, your choice",
        "body": [
          "OpenAI, Anthropic, or OpenRouter - pick a provider, paste your key, optionally name a specific model. Everything else about the editor's AI tools works exactly as before."
        ]
      },
      {
        "heading": "Nothing sent without explicit consent",
        "body": [
          "A separate consent checkbox, distinct from just entering a key, has to be turned on before any prompt is ever forwarded to your chosen provider. Until then, the assistant keeps using Odoo's own service exactly as it did before installing this app."
        ]
      },
      {
        "heading": "No new attack surface",
        "body": [
          "This app doesn't open a new public endpoint - it extends Odoo's own existing AI-assistant controller in place, so the exact same login-protected route your team already uses keeps being the only way in."
        ]
      },
      {
        "heading": "Falls back cleanly",
        "body": [
          "No key configured for a company? The AI writing assistant keeps working through Odoo's own service, untouched - this app only takes over once you've actually set it up."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Teams already using Odoo's editor AI tools who want their own usage, billing, and model choice - including Anthropic's Claude, not just OpenAI - instead of Odoo's own metered service, without giving up the same \"Generate with AI\" buttons everyone already knows."
        ]
      }
    ],
    "scope": [
      "This app covers Odoo's AI text-generation assistant only - the editor's \"Generate with AI\" / \"Translate with AI\" tools. It does not touch invoice or document OCR, which is a separate, Enterprise-only Odoo feature this app does not modify or replace."
    ],
    "requires": [],
    "price": 39.99,
    "manifestPrice": 40.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "base_setup",
      "html_editor"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_llm_gateway",
    "screenshots": [
      "settings_screenshot.png"
    ],
    "copyWords": 288,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": "/apps/byok-gateway"
  },
  {
    "tech": "mh_lost_message_recovery",
    "slug": "lost-message-recovery",
    "name": "Lost Message Recovery",
    "summary": "Route the inbound emails Odoo failed to process into the right model and retry them, instead of reading them and retyping by hand",
    "tagline": "Route the inbound emails Odoo failed to process into the right model and retry them, instead of reading them and retyping by hand",
    "intro": [
      "When an inbound email fails to route, native Odoo writes a line to the server log, marks the message seen on the mail server, and moves on. The email is gone. The free Lost Messages Routing app stops that by capturing it - and capturing it is half the job.",
      "This is the other half: say where the message should have gone, and put it there.",
      "A supplier invoice that failed on a missing alias, with its raw source kept and one button to route it."
    ],
    "features": [
      {
        "heading": "Routing rules",
        "body": [
          "Match a lost message on sender, recipient or subject, and name the model it should have created a record in. Every condition you fill in must match, and the lowest sequence wins when more than one rule fits."
        ]
      },
      {
        "heading": "Retry, through Odoo's own routing",
        "body": [
          "The stored raw message is fed back through the same mail processing that failed, against the model the rule names. The record is created exactly as it would have been - nothing is reconstructed or guessed from the headers."
        ]
      },
      {
        "heading": "Rules can be written after the fact",
        "body": [
          "Matching runs against the headers already captured, so a message that failed months ago can still be routed. The rule does not have to have existed when the email arrived, which is the whole point - you rarely know the alias was wrong until mail starts going missing."
        ]
      },
      {
        "heading": "It refuses the things that go wrong",
        "body": [
          "A message already recovered is not retried, because that would create a second copy of the record. A message captured without its raw source says so plainly instead of failing with a confusing routing error. A rule with no conditions is refused - it would swallow every lost message into one model."
        ]
      },
      {
        "heading": "The outcome is on the record",
        "body": [
          "Recovered, or failed with the reason kept. A recovered message links straight to the record it produced, so you can check it landed where you meant rather than trusting a success message."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19 Community or Enterprise, with Discuss. Installs the free Lost Messages Routing , which does the capturing. Only models that accept incoming mail can be targeted."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 39.0,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Productivity/Discuss",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "mail",
      "mh_lost_messages_routing"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_lost_message_recovery",
    "screenshots": [
      "screenshot_message.png"
    ],
    "copyWords": 373,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_purchase_multi_level_approval",
    "slug": "purchase-approvals",
    "name": "Purchase Approvals",
    "summary": "Route purchase orders through amount based approval tiers, with a spending limit per approver and an audit log of who approved what and when.",
    "tagline": "",
    "intro": [
      "Odoo's own Purchase app ships a single amount threshold: below it, anyone can confirm a PO; above it, anyone in the Purchase Manager group can. Purchase Multi-Level Approval replaces that with real, configurable tiers - e.g. under $5,000 needs a Team Lead, under $25,000 needs a Manager, above that needs a Director - each tier gated by its own group, plus a structured, queryable log of every approval decision."
    ],
    "features": [
      {
        "heading": "As many tiers as you need",
        "body": [
          "Add a tier for any amount threshold and pick which group has to approve it. The highest tier a PO's total qualifies for is the one that applies."
        ]
      },
      {
        "heading": "Works even on a one-step company setup",
        "body": [
          "Tiers are checked first and take priority over Odoo's own native single-threshold setting - so this adds real value even if you haven't turned on two-step approval natively."
        ]
      },
      {
        "heading": "A structured approval log",
        "body": [
          "Every approval is recorded - which tier, who approved it, at what amount - in its own reportable list, not just buried in a purchase order's chatter."
        ]
      },
      {
        "heading": "Zero tiers, zero change",
        "body": [
          "With no tiers configured, this app is a complete no-op - native Odoo behavior is completely unchanged until you decide to add one."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Procurement teams whose real sign-off chain has more than one level and who've outgrown Odoo's single amount threshold, or who want a real, reportable record of who approved what and when."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 39.0,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Purchases",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "purchase"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_purchase_multi_level_approval",
    "screenshots": [
      "screenshot_tiers.png"
    ],
    "copyWords": 231,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_sale_order_power_tools",
    "slug": "sale-order-power-tools",
    "name": "Sale Order Power Tools",
    "summary": "Split one order into several deliveries, confirm many quotations at once, duplicate lines in place, and add custom fields to quotations without code.",
    "tagline": "",
    "intro": [
      "Split Sale Order Power Tools combines the four narrow sale-order utilities buyers keep reaching for one at a time: move lines from a quotation into a brand new order, confirm several quotations in one click instead of opening each one, duplicate a line as many times as you need, and add a real field to the Sale Order form yourself - no Odoo Studio, no developer, no code."
    ],
    "features": [
      {
        "heading": "Split Order",
        "body": [
          "Tick which lines belong on a separate order and click Split - a brand new draft order is created with just those lines, moved (not copied) out of the original."
        ]
      },
      {
        "heading": "Bulk Mass-Confirm",
        "body": [
          "Select several quotations from the list view and confirm them all at once. One bad order in the batch is reported, not silently dropped - it never blocks the rest from confirming."
        ]
      },
      {
        "heading": "Duplicate Line",
        "body": [
          "Copy an existing order line within the same order, as many times as you need, from a one-field dialog."
        ]
      },
      {
        "heading": "Custom Field, No Code",
        "body": [
          "Add a real text, number, date, or checkbox field to every Sale Order - a genuine ir.model.fields record, not a workaround - straight from a small dialog. A Community-only convenience: Odoo Studio already covers this on Enterprise."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Sales teams who process a high volume of quotations and are tired of buying (or missing) four separate small apps to split orders, bulk-confirm, duplicate lines, and track one or two extra fields Odoo doesn't ship out of the box."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 39.0,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Sales/Sales",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "sale_management"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_sale_order_power_tools",
    "screenshots": [
      "screenshot_order.png"
    ],
    "copyWords": 240,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_hr_employee_compliance",
    "slug": "hr-employee-compliance",
    "name": "HR Employee Compliance",
    "summary": "Track visa, licence and certification expiry dates with reminders before they lapse. Log grievances and disciplinary penalties against the employee record.",
    "tagline": "",
    "intro": [
      "HR Employee Compliance bundles three HR record-keeping utilities: expiry tracking for any employee document (licenses, certifications, background checks - not just the Passport/Work Permit fields Odoo already tracks), a complaint/grievance log through to resolution, and a disciplinary penalty record."
    ],
    "features": [
      {
        "heading": "Document Expiry Tracker",
        "body": [
          "Add any document type with an expiry date and a notice period. Odoo already tracks Passport and Work Permit expiry natively with its own reminder - this covers every other document those two fields don't."
        ]
      },
      {
        "heading": "Automatic reminders, not a spreadsheet",
        "body": [
          "A document approaching its notice period gets a real Odoo activity scheduled automatically - the same reminder mechanism Odoo's own contract/work-permit expiry uses, reused here for every other document type."
        ]
      },
      {
        "heading": "Employee Complaints",
        "body": [
          "Log a complaint or grievance and move it through draft, investigating, resolved, and closed - something Community's HR has no equivalent for at all."
        ]
      },
      {
        "heading": "Disciplinary Penalties",
        "body": [
          "Record a verbal warning, written warning, suspension, or termination notice against an employee's file, with a reason and who issued it."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "HR teams tracking licenses and certifications beyond passports and work permits, and anyone who needs a real, dated record of complaints and disciplinary actions instead of scattered emails or a spreadsheet."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 29.0,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Human Resources",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "hr"
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_hr_employee_compliance",
    "screenshots": [
      "screenshot_documents.png"
    ],
    "copyWords": 196,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_1099_threshold_check",
    "slug": "1099-threshold-check",
    "name": "1099 Threshold Check",
    "summary": "Find which vendors and contractors you paid enough to need a Form 1099-NEC this year",
    "tagline": "Find which vendors and contractors you paid enough to need a Form 1099-NEC this year",
    "intro": [],
    "features": [
      {
        "heading": "The number changed, and most people still have the old one",
        "body": [
          "For payments made on or after 1 January 2026 the Form 1099-NEC threshold is $2,000. It had been $600 since 1954, so every spreadsheet, every checklist and most people's memory now say the wrong thing. From 2027 the IRS adjusts the figure for inflation every year.",
          "This totals what you actually paid each vendor in a calendar year and tells you who crossed that year's line.",
          "Twelve payees checked against the 2026 threshold: eight crossed it, four did not."
        ]
      },
      {
        "heading": "Paid, not billed",
        "body": [
          "A 1099 reports what left your bank in the calendar year. A December bill settled in January belongs to the following year, so this counts posted vendor payments rather than vendor bills - totalling bills would put a chunk of your payees in the wrong year."
        ]
      },
      {
        "heading": "It will not guess a year",
        "body": [
          "Because the figure is indexed to inflation from 2027, a year the app has not been given a threshold for produces an error, not a silent fallback to last year's number. A confident wrong answer about a filing obligation is worse than no answer."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_1099_threshold_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 219,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_access_config_check",
    "slug": "access-config-check",
    "name": "Access Config Check",
    "summary": "How much of your access configuration - groups, model access rights and record rules - was made by hand and exists nowhere but this database",
    "tagline": "How much of your access configuration — groups, model access rights and record rules — was made by hand and exists nowhere but this database",
    "intro": [],
    "features": [
      {
        "heading": "Two kinds of access right, and they look identical",
        "body": [
          "A module brings them, and they carry an XML id — a stable name that means the same record in every database that module is installed in. Or somebody added them by hand in the interface, and they carry nothing at all.",
          "In the interface both are just a line in a list.",
          "Groups, model access rights and record rules: how many there are, how many are portable, and how many exist only here — with the hand-made ones named."
        ]
      },
      {
        "heading": "Why the difference matters",
        "body": [
          "A hand-made access row, group or record rule cannot be carried to another database by anything, because nothing outside this database identifies it. It is in nobody's version control, so it is in no review and in no backup short of a full database dump. And it is invisible to a module upgrade, which knows only about its own rows.",
          "The number is usually larger than people expect, which is the point of counting it."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19, Community or Enterprise. No dependencies beyond the base system. Administrator access, since it reads the access configuration. Nothing is written to it."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_access_config_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 233,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_access_snapshot",
    "slug": "access-snapshot",
    "name": "Access Snapshot",
    "summary": "A user access report for one user on one model: what they can actually do once groups and record rules are resolved",
    "tagline": "See what one user can actually do on one model, after groups and record rules are resolved",
    "intro": [],
    "features": [
      {
        "heading": "\"Can this person see that?\" takes twenty minutes to answer",
        "body": [
          "The answer lives in three places that have to be combined by hand: the access rules for the model, every group the user is in including the ones implied by other groups, and the record rules that filter which rows they get. Odoo shows you those three things separately and leaves the combining to you.",
          "This does the combining. Pick a user and a model, and get the answer Odoo itself would give.",
          "One user against one model: what they can do, which groups granted it, and the row filter that applies."
        ]
      },
      {
        "heading": "Global rules cannot be group-hopped",
        "body": [
          "Record rules with no group are global: they combine with AND, and adding a user to another group cannot get past them. Rules that do carry groups combine with OR, so each extra group only ever widens what the user sees. Getting that backwards is how permissions end up wrong, so the result says which kind is in play."
        ]
      },
      {
        "heading": "It refuses to answer about the superuser",
        "body": [
          "The superuser bypasses every access rule and record rule by design, so a report on it would say \"allowed\" for everything no matter how your database is configured. That is a confident wrong answer about security, so the app declines instead of producing it."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_access_snapshot",
    "screenshots": [
      "screenshot_snapshot.png"
    ],
    "copyWords": 249,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_purchase_approval_exposure",
    "slug": "approval-exposure",
    "name": "Approval Exposure",
    "summary": "Report what approval each confirmed purchase order actually cleared, and which ones cleared none at all. A free purchase order approval audit.",
    "tagline": "See what your purchase orders actually had to clear before being confirmed",
    "intro": [
      "Odoo Community has exactly one purchase approval control: a single amount threshold, above which anyone in the Purchase Manager group can confirm. There is no second tier, and no record of who approved what beyond generic chatter. Most organisations assume tighter control than that.",
      "This report says what the control actually is, and what has passed through it.",
      "Five orders worth $103,100 cleared a single check - and four people could approve any of them."
    ],
    "features": [
      {
        "heading": "Careful when the check is off entirely",
        "body": [
          "When a second approval is switched off, every order cleared a single check regardless of value. Reporting \"0 orders above the threshold\" there would be true and completely misleading - so the report says what actually happened instead."
        ]
      },
      {
        "heading": "Reports, never approves",
        "body": [
          "This app adds no tier, blocks no confirmation and writes no audit record. It does not extend purchase.order at all - a test asserts the module contains no approval-behaviour path."
        ]
      },
      {
        "heading": "And then what",
        "body": [
          "If the picture this gives you is thinner than expected, adding real tiers is a change to how the system behaves and belongs with the app that also has to enforce it."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Purchases",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "purchase"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_purchase_approval_exposure",
    "screenshots": [
      "screenshot_exposure.png"
    ],
    "copyWords": 215,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_archived_match_hint",
    "slug": "archived-match-hint",
    "name": "Archived Match Hint",
    "summary": "Tells you when a search looks empty only because the matching records are archived, instead of leaving you to guess that archived records exist.",
    "tagline": "When a search comes back empty, it tells you if the match is just archived",
    "intro": [
      "Odoo hides archived records from every search by default, and never mentions it. When a search comes back empty, the stock message only guesses - \"make sure that there is no active filter in the search bar\" - and the filter actually responsible, active_test, is not in the search bar at all.",
      "So the record exists, the search was right, and the screen tells you nothing. This app closes that gap: it counts the archived records matching the search you just ran and says so, with a one-click \"Show them\".",
      "Nothing appears when nothing archived matches, or when you are already searching archived records on purpose - the hint only shows up on the one screen where it changes the answer."
    ],
    "features": [
      {
        "heading": "Every model, every view",
        "body": [
          "It extends the one no-content screen that list, kanban, graph and pivot all fall back to - so it works on any model with an archive field, with no per-model setup."
        ]
      },
      {
        "heading": "Nothing new to secure",
        "body": [
          "The count is a plain search_count through the ORM, so your record rules apply to it unchanged - it can never hint at a record you are not allowed to see."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "web"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_archived_match_hint",
    "screenshots": [
      "screenshot_hint.png"
    ],
    "copyWords": 206,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_audit_trail_check",
    "slug": "audit-trail-check",
    "name": "Audit Trail Check",
    "summary": "What Odoo can already tell you about who changed what: which fields carry tracking, which of them actually record anything, and which are marked tracked on a model that has no chatter",
    "tagline": "",
    "intro": [
      "What Odoo can already tell you about who changed what: which fields carry tracking, which of them actually record anything, and which are marked tracked on a model that has no chatter"
    ],
    "features": [
      {
        "heading": "The answer is decided long before anybody asks",
        "body": [
          "Somebody asks who changed a price, or when a customer's payment terms were last touched. Whether Odoo can answer was settled months earlier, and almost nobody knows which way.",
          "Odoo does keep a change history — for the fields its own developers marked as tracked, and only on models that carry a chatter. Both conditions have to hold.",
          "Per model: how many stored fields, how many are marked tracked, how many actually record — and which are marked but silent."
        ]
      },
      {
        "heading": "Most of it is not covered, and the number is the point",
        "body": [
          "On a stock database the four models most people care about carry a little over two hundred stored fields between them, and around twenty are tracked. The rest change with no record of who changed them or what they were before.",
          "That ratio is not a criticism of Odoo — tracking everything would be expensive and mostly noise. It is worth knowing the number before somebody asks a question the database cannot answer."
        ]
      },
      {
        "heading": "And the trap, where it applies",
        "body": [
          "A field marked as tracked on a model with no chatter records nothing at all. A stock database has none of these; they turn up where somebody has added tracking to a custom model, or to one never built for it. The setting is there, it reads correctly, and nothing is being written down — so the check reports them separately and sorts them to the top."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19, Community or Enterprise. Needs Discuss. Administrator access, since it reads the model and field definitions. Nothing is written to any of them."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_audit_trail_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 318,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_awaiting_reply_badge",
    "slug": "awaiting-reply-badge",
    "name": "Awaiting-Reply Badge",
    "summary": "Shows whose turn it is to reply on a lead or sales order, read from the direction of the last chatter message. Find what is waiting on you.",
    "tagline": "See whose turn it is to reply on a Lead or Sales Order, without opening the thread",
    "intro": [
      "Odoo's only \"waiting on customer\" indicator is a Helpdesk-only feature. Every Lead or open Sales Order sharing the same mail.thread mixin gives you no way to tell at a glance whose turn it is to reply without opening the record and reading the whole thread.",
      "This app adds a small badge - \"Waiting on Them\" or \"Waiting on Us\" - computed from whether the last logged message was authored by the record's own contact, or by anybody else - a colleague, an automated sender, a second contact on the thread. It is the contact against everyone, not a two-sided sort. No new model, no configuration: it reads mail.message through the ORM, which already enforces per-record access.",
      "Scoped to Leads and Sales Orders for this version - both share the same customer-facing negotiation shape the badge is built for."
    ],
    "features": [
      {
        "heading": "No new model, no new permissions",
        "body": [
          "Reads mail.message through the ORM, which already enforces exactly which messages each user can see."
        ]
      },
      {
        "heading": "Direction, not just presence",
        "body": [
          "Not \"has a message\" - who sent the last one. A system notification never counts as a reply from either side."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Sales",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "sale",
      "crm"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_awaiting_reply_badge",
    "screenshots": [
      "screenshot_badge.png"
    ],
    "copyWords": 201,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_breach_deadline_clock",
    "slug": "breach-deadline-clock",
    "name": "Breach Deadline Clock",
    "summary": "Count down the data breach notification deadline for one US state from the day you discovered it. An editable rule, not a hardcoded legal database.",
    "tagline": "Track the notification deadline on a data breach, one state at a time",
    "intro": [
      "A data breach starts a clock, and the clock is the part people lose track of while they are busy handling the breach itself.",
      "This keeps it. Record the incident, the date it was discovered, the state whose residents are affected and the notification period that applies, and the deadline and days remaining are worked out for you.",
      "On track, due soon, overdue and notified - at a glance, with days remaining on each."
    ],
    "features": [
      {
        "heading": "The notification period is yours to enter",
        "body": [
          "This app ships no legal data. State notification periods are statute, they differ, and they change - an app that asserts them for free, without citing a source or a verification date, is a liability rather than a convenience. You enter the period your counsel relies on and record where it came from; a test in the module asserts no reference data is shipped."
        ]
      },
      {
        "heading": "Where this stops being enough",
        "body": [
          "One incident, one state. A breach affecting residents of more than one state needs the deadlines fanned out and the earliest one surfaced - that is a different job, and it is what the paid app does."
        ]
      },
      {
        "heading": "Not tax advice",
        "body": [
          "This app performs date arithmetic on figures you supply, and ships behind its own access group rather than being visible to every employee. It is not legal advice and it does not determine your obligations - confirm those with counsel."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_breach_deadline_clock",
    "screenshots": [
      "screenshot_deadlines.png"
    ],
    "copyWords": 258,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_chatter_search",
    "slug": "chatter-full-text-search",
    "name": "Chatter Full-Text Search",
    "summary": "Chatter search across every model at once: find messages and logged notes from the command palette, rather than one record at a time.",
    "tagline": "Search every chatter message and logged note across every record and model, from Ctrl+K",
    "intro": [
      "Odoo already has a good chatter search box - inside the one record you're already looking at. There's no way to search message content across records or models: Discuss's own search bar only matches channel names, never what's actually written in a message. This app adds one command palette entry - \"Search All Messages\" (Ctrl+K) - that searches message bodies and subjects everywhere at once and jumps straight to the matching record."
    ],
    "features": [
      {
        "heading": "No new model, no new permissions",
        "body": [
          "Reads mail.message through the ORM, which already enforces exactly which messages each user can see. If you couldn't read it in the chatter, you won't see it here either."
        ]
      },
      {
        "heading": "Every model at once",
        "body": [
          "Not scoped to one app. A search finds matching messages on contacts, tasks, invoices, leads - anywhere a chatter message was ever logged."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_chatter_search",
    "screenshots": [
      "screenshot_search.png"
    ],
    "copyWords": 148,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_company_mismatch_check",
    "slug": "company-mismatch-check",
    "name": "Company Mismatch Check",
    "summary": "Check one model for records whose company disagrees with the records they link to",
    "tagline": "Check one model for records whose company disagrees with the records they link to",
    "intro": [
      "Odoo refuses to save a record pointing at another company's data - but only from the moment that check was declared on the field. Anything imported, migrated, or written before then is already in your database, and you find out when somebody opens it and the save fails.",
      "Pick a model and see whether it holds any.",
      "Two bank accounts checked; one belongs to a different company than the partner it points at."
    ],
    "features": [
      {
        "heading": "One model, checked properly",
        "body": [
          "Reads the records of a model and compares each link against the company on the other end, naming the record, the field, and both companies. Only links to models that carry a company of their own are compared - the rest cannot disagree with anything, and including them would be noise."
        ]
      },
      {
        "heading": "A model with no company field is refused",
        "body": [
          "Rather than reported as clean. Answering \"no problems found\" about something that could never have had one is a confident wrong answer, and those are the ones people act on."
        ]
      },
      {
        "heading": "It reports, it never changes a record",
        "body": [
          "Everything it finds is something for you to decide about. Moving a record between companies has consequences a report has no business guessing at."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19 Community or Enterprise. Depends only on base and nothing leaves your server."
        ]
      }
    ],
    "scope": [
      "When a model holds more rows than one pass reads, it says so on the result. A clean result from a partial read is not a clean result, and presenting it as one would be worse than not checking at all."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_company_mismatch_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 267,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_cookie_consent_banner",
    "slug": "cookie-consent-banner",
    "name": "Cookie Consent Banner",
    "summary": "A category level cookie consent banner for the Odoo website, with per category opt in and a dated record of what each visitor agreed to.",
    "tagline": "Category-level cookie consent capture for the Odoo website, with a record of who agreed to what",
    "intro": [
      "Adds a category-level cookie consent banner (essential/analytics/marketing/ functional) with a per-visitor audit log of what was accepted and when - covering the gaps in Odoo's native binary \"accept all / essential only\" cookies bar, which keeps no consent record at all. Bump the website's Cookie Policy Version field to force every visitor to re-consent."
    ],
    "features": [],
    "scope": [
      "Stated up front, because consent is the kind of feature people assume covers more than it says.",
      "Those first two are what the law asks for on top of a record, so it is worth being plain about them: this captures consent, and captured consent is only worth what acts on it. Withdrawal is currently a matter of clearing the cookie or bumping the policy version, which re-asks everyone at once."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "website"
    ],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_cookie_consent_banner",
    "screenshots": [
      "screenshot_banner.png"
    ],
    "copyWords": 141,
    "hasVideo": true,
    "youtubeId": "oZB66fEcACE",
    "externalPage": null
  },
  {
    "tech": "mh_cpk_calculator",
    "slug": "cp-cpk-calculator",
    "name": "Cp/Cpk Calculator",
    "summary": "Work out Cp and Cpk process capability from measurements already in Odoo, against your spec limits. The capability indices only, no control charts.",
    "tagline": "Process capability from measurements you already keep in Odoo",
    "intro": [
      "Cp and Cpk answer a question a spreadsheet keeps re-answering: is this process actually capable of holding its specification? The measurements are usually already in Odoo. The calculation usually is not.",
      "Point this at the model and numeric field your measurements live in, give it the upper and lower specification limits, and press Compute. Odoo's Quality app is Enterprise-only , so this reads from any model and any stored numeric field - which is what makes it usable on Community at all.",
      "Two real processes measured from product data: one capable at Cpk 1.36, one not at 0.28."
    ],
    "features": [
      {
        "heading": "Why both numbers",
        "body": [
          "Cp can look healthy while every part drifts toward one limit. Cpk catches that, and when Cp is well above Cpk the app says so - because the fix is to centre the process, not to reduce variation."
        ]
      },
      {
        "heading": "Not tax advice",
        "body": [
          "The capability bands used to read the result are the conventional ones rather than any single standard, and a capability index is only ever as good as the measurements behind it."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it.",
      "A capability index from a handful of measurements is not worth much, and the app says so rather than printing a confident number. It also refuses to divide by zero when every measurement is identical - a stuck gauge, or a rounded field - and tells you to check the source."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Manufacturing",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_cpk_calculator",
    "screenshots": [
      "screenshot_capability.png"
    ],
    "copyWords": 248,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_currency_rounding_report",
    "slug": "currency-rounding-noise",
    "name": "Currency Rounding Noise",
    "summary": "Report how much of your realized exchange gain and loss is sub cent rounding rather than real currency movement, per journal and per period.",
    "tagline": "How much of your exchange gain and loss is really rounding artefacts",
    "intro": [
      "Odoo posts every reconciliation residual to the same two accounts - Exchange Gain and Exchange Loss - whether it is a genuine movement in a rate or a fraction of a cent left over from arithmetic. Once they are mixed, nobody can tell how much of that balance is real.",
      "This measures the split. Set the amount below which a residual is rounding rather than a rate movement, run the report, and you get how many of your exchange lines fall under it, what they add up to, and what share of the total they are.",
      "86 exchange lines worth $21,574 - of which 52 are rounding artefacts worth $1.33."
    ],
    "features": [
      {
        "heading": "It reads, and only reads",
        "body": [
          "This app changes nothing about how anything is posted. It does not override the account an exchange difference lands in, and it adds no field to your company settings - a test in the module asserts that none of that can creep in later."
        ]
      },
      {
        "heading": "A number you can check",
        "body": [
          "A View button opens the sub-threshold journal items themselves, and the largest residual counted as noise is shown so the threshold can be sanity-checked. A figure nobody can drill into is a figure nobody should act on."
        ]
      },
      {
        "heading": "Not tax advice",
        "body": [
          "The report reads with your own rights, and refuses to run for a company you cannot see rather than quietly returning zero. The threshold is yours to choose; this app applies the one you enter and does not advise on materiality."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_currency_rounding_report",
    "screenshots": [
      "screenshot_report.png"
    ],
    "copyWords": 272,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_dac7_threshold_check",
    "slug": "dac7-threshold-check",
    "name": "DAC7 Threshold Check",
    "summary": "Check whether the DAC7 reporting duty applies to your platform, and which sellers pass the de minimis test, for one year.",
    "tagline": "Find out whether DAC7 applies to you, and to which of your sellers",
    "intro": [
      "DAC7 obliges digital platform operators in the EU to report the sellers who earn through them. The first question is not how to file - it is whether you have to, and for whom.",
      "That question has a countable answer, and the data is already in Odoo. Pick a calendar year, run the check, and every vendor you paid is listed with their total consideration, their number of relevant activities, and whether they cross the reporting threshold.",
      "Four reportable sellers and one exempt - each on the right side of the rule, and why."
    ],
    "features": [
      {
        "heading": "The rule most often read wrongly",
        "body": [
          "The carve-out is AND , not OR. A seller is excluded only when both limbs are under for the year - fewer than 30 relevant activities and consideration of EUR 2 000 or less. Either one alone makes them reportable. This app applies both limbs together."
        ]
      },
      {
        "heading": "Counts, never files",
        "body": [
          "This app produces no report, no export and no attachment - a test in the module asserts that. It answers whether the obligation applies; it does not act on it."
        ]
      },
      {
        "heading": "Not tax advice",
        "body": [
          "This app counts what is in your accounting and applies the published de-minimis thresholds. Whether the DAC7 obligation applies to your business, and how it should be discharged, remains yours to determine with your adviser."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_dac7_threshold_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 245,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_housekeeping",
    "slug": "database-housekeeping",
    "name": "Database Housekeeping",
    "summary": "One console for database cleanup: oversized attachments, old mail messages, stale logs and the records an Odoo database quietly accumulates.",
    "tagline": "Four audits for the things your database quietly accumulates",
    "intro": [
      "Odoo is good at telling you what is happening. It is much quieter about what has stopped happening. Four kinds of rot build up in every long-running database, and none of them announce themselves - they just sit there, correct-looking, until someone goes looking.",
      "This installs all four tools and puts them behind one Housekeeping menu, instead of four unrelated corners of Settings."
    ],
    "features": [
      {
        "heading": "Work assigned to people who left",
        "body": [
          "Archiving a user clears nothing. Every lead, task and order still points at them and reads normally - it just drops out of everyone's \"My\" filter. Finds it all and reassigns in bulk."
        ]
      },
      {
        "heading": "Files whose record is gone",
        "body": [
          "There is no foreign key behind an attachment's record reference. When the record goes, the file can stay - and Odoo then refuses to show it to you at all. Reports what is there, and how many bytes."
        ]
      },
      {
        "heading": "Portal logins nobody uses",
        "body": [
          "Odoo records every portal account's last sign-in and shows it one contact at a time, inside a dialog. Badges every contact as Never Used, Stale or Active so the whole address book sweeps in one search."
        ]
      },
      {
        "heading": "Scheduled actions that are failing",
        "body": [
          "Odoo counts consecutive failures and switches a job off after five of them, while displaying neither the count nor the warning anywhere. Shows both, and flags the jobs about to be switched off."
        ]
      },
      {
        "heading": "One menu, four audits",
        "body": [
          "Work still assigned to two people who have left, grouped by who left.",
          "The same menu, one click away: portal accounts nobody has signed into."
        ]
      },
      {
        "heading": "How this is put together",
        "body": [
          "There is no duplicated code here. Each of the four tools stays its own app, and this one depends on them - so installing this installs all four, and any one of them still works on its own if you would rather pick and choose. What this adds is the single menu that ties them together."
        ]
      },
      {
        "heading": "The four apps in this bundle",
        "body": [
          "Stale User Assignments",
          "Find and reassign what archived users still own.",
          "Orphaned Attachment Scan",
          "Find the attachments left behind by deleted records.",
          "Portal Stale-Grant Badge",
          "Find the portal logins nobody has ever used.",
          "Scheduled Action Health",
          "See which scheduled actions are failing."
        ]
      }
    ],
    "scope": [
      "A young or well-kept database may find nothing in some of these, and that is the correct answer rather than a fault. The point is being able to say so for certain instead of assuming."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "mh_stale_user_assignment",
      "mh_orphan_attachment_scan",
      "mh_portal_stale_grant",
      "mh_cron_health_badge"
    ],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_housekeeping",
    "screenshots": [
      "screenshot_menu.png",
      "screenshot_portal.png"
    ],
    "copyWords": 405,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_dead_stock_check",
    "slug": "dead-stock-check",
    "name": "Dead Stock Check",
    "summary": "Count the products that have not moved in months, and what they are costing you to hold",
    "tagline": "Count the products that have not moved in months, and what they are costing you to hold",
    "intro": [
      "Quantity on hand tells you nothing about whether stock is a problem. The same 500 units are healthy in a fast-moving line and dead capital in a slow one. What separates them is the date something last actually left the building.",
      "Set a period, press the button, get one number: how many products with stock on hand have not shipped in that long, and what they hold at cost.",
      "One check, one verdict, stating what the figure is and what it is not.",
      "Internal transfers do not count as shipping",
      "Only moves that actually left an internal location reset the clock. Counting every stock move would make a pallet shuffled between bays look busy, and that is exactly how dead stock hides.",
      "Valued at cost",
      "This is capital tied up, so it is worth what you paid. Sale price would overstate it on precisely the stock that is not selling.",
      "It says when the answer is nothing",
      "An empty company says so rather than reporting a clean zero that looks like good news. A company where everything has shipped says that too.",
      "Requirements, and where it stops",
      "Odoo 19 Community or Enterprise with Inventory. Free, and deliberately one figure per company - it does not name the products or break the total down."
    ],
    "features": [],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_dead_stock_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 230,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_direct_download_base",
    "slug": "direct-download-base",
    "name": "Direct Download Base",
    "summary": "Generate a direct download link for any report or attachment, so a customer can fetch the file without a portal login.",
    "tagline": "",
    "intro": [
      "Odoo already has a public-download mechanism for attachments ( generate_access_token ) and a portal-sharing wizard for inviting someone to a record's full portal page - but neither gives you a plain \"copy a direct link to this file\" button. This app adds exactly that to the attachment box every chatter already shows, so anyone with edit access can hand someone a working download link in one click - no portal invite, no manual URL, no new screen to learn."
    ],
    "features": [
      {
        "heading": "Works on any attachment, anywhere",
        "body": [
          "Every chatter in Odoo - contacts, sales orders, invoices, projects, tickets - shows the same attachment box. This app patches that one component, so the button shows up everywhere attachments already live, not just in one app."
        ]
      },
      {
        "heading": "No portal invite, no email flow",
        "body": [
          "Odoo's own portal-share wizard sends an email invite to a full portal page - overkill for \"just send me the file.\" This copies a direct, public download URL to your clipboard instantly, nothing else happens."
        ]
      },
      {
        "heading": "Desktop and mobile",
        "body": [
          "A hover button on desktop, and the same action in the mobile Actions dropdown - both call the exact same native access-token mechanism, so the link behaves identically either way."
        ]
      },
      {
        "heading": "Zero new models, zero new tables",
        "body": [
          "This app adds no Python model and no database table - it's a small, targeted UI patch that calls a public-download mechanism Odoo already ships. Nothing new to maintain, nothing new to migrate."
        ]
      },
      {
        "heading": "Verified against the real download route",
        "body": [
          "Confirmed end-to-end against a running Odoo instance, not just checked in isolation: clicking the button genuinely calls ir.attachment.generate_access_token() (a real token lands on the record), and the exact copied URL was opened fresh and correctly served the real file - the same public, no-login route Odoo's own access-token mechanism has always supported."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Anyone who's ever needed to hand a colleague or customer a direct link to one file attached to an Odoo record - a signed contract, a delivery slip, a report - without inviting them to a full portal account or manually building the access-token URL by hand."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base",
      "web",
      "mail"
    ],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_direct_download_base",
    "screenshots": [
      "main_screenshot.png",
      "screenshot_link.png"
    ],
    "copyWords": 343,
    "hasVideo": true,
    "youtubeId": "E7YCK4ajAFI",
    "externalPage": null
  },
  {
    "tech": "mh_advanced_web_domain_widget",
    "slug": "domain-snippet-library",
    "name": "Domain Snippet Library",
    "summary": "Save named domain filters once and reuse them in any domain widget field on that model, instead of rebuilding the same filter by hand every time.",
    "tagline": "Save and reuse named domain filters across any domain-widget field",
    "intro": [
      "Odoo's native domain widget (visual AND/OR/NOT tree builder, live record count, debug raw-text fallback) already covers building a domain well - this does not replace it. The one real gap: no way to save a domain you built as a named, reusable snippet and load it back into another domain field on the same model. (Snippets are filed under the model they were built against, and only offered there - a res.partner domain would not mean anything on a sale order.) Adds two buttons - \"Save as snippet\" / \"Load snippet\" - to the existing native widget, backed by one small model."
    ],
    "features": [],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base",
      "web"
    ],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_advanced_web_domain_widget",
    "screenshots": [
      "screenshot_snippets.png"
    ],
    "copyWords": 112,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_dormant_user_check",
    "slug": "dormant-user-check",
    "name": "Dormant User Check",
    "summary": "An inactive user report: which accounts are still active but have not logged in for months, and which have never logged in at all - the list to work through before you archive a user",
    "tagline": "Which user accounts are still active but have not logged in for months, and which have never logged in at all — the list to work through before you archive a user",
    "intro": [],
    "features": [
      {
        "heading": "Odoo answers this one user at a time",
        "body": [
          "It records a row every time somebody logs in, and shows the most recent one on that user's own form. What it has nowhere is the other direction: the list of accounts nobody has used.",
          "That list is the one somebody has to work through — at review time, at audit time, or on the day the licence count gets questioned.",
          "Every active internal account nobody has used, longest idle first, with the never-used ones sorted above them."
        ]
      },
      {
        "heading": "Two problems, not one",
        "body": [
          "An account that was used and then stopped belongs to somebody who left or changed role. An account that has never been logged into was set up and forgotten, and is usually the older problem — still holding whatever access it was given on the day it was made.",
          "Odoo shows both as an empty Latest Login. This keeps them apart and counts them separately."
        ]
      },
      {
        "heading": "What it leaves out, on purpose",
        "body": [
          "Portal and public users, because there can be thousands of them and nobody offboards a customer. Already-archived accounts, because they are the outcome rather than the question. And OdooBot, which never logs in and never will — listing it would put a permanent false positive at the top of every report."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19, Community or Enterprise. No dependencies beyond the base system. Administrator access, since it reads the user list. Nothing is written to any user record."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_dormant_user_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 286,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_duplicate_attachment_guard",
    "slug": "duplicate-file-guard",
    "name": "Duplicate File Guard",
    "summary": "Stop duplicate attachments before they are stored: the same file uploaded twice to a record is blocked by content hash, not by filename.",
    "tagline": "Blocks re-uploading the exact same file - checked by content, not filename",
    "intro": [
      "ir.attachment already stores a SHA1 checksum on every file, but nothing checks it before you upload the same invoice PDF twice. Odoo's own attachment list just grows with silent duplicates.",
      "This app blocks it outright: if a file with byte-identical content is already attached to the same record, the upload is rejected with a clear message naming the existing file - no new model, one small override of ir.attachment.",
      "Deliberately a hard block, not a soft \"keep both / replace\" dialog - a warning that's easy to click through without reading doesn't actually stop the duplicate."
    ],
    "features": [
      {
        "heading": "Checked by content, not filename",
        "body": [
          "\"invoice.pdf\" and \"invoice_final.pdf\" with identical bytes are caught just the same - the check is a checksum comparison, not a name match."
        ]
      },
      {
        "heading": "Scoped to the same record",
        "body": [
          "The same file attached to two different records is completely fine - the guard only fires within one record's own attachments."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_duplicate_attachment_guard",
    "screenshots": [
      "screenshot_guard.png"
    ],
    "copyWords": 161,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_duplicate_group_check",
    "slug": "duplicate-group-check",
    "name": "Duplicate Group Check",
    "summary": "Which of your user groups grant exactly the same model access rights as each other, and which grant none at all",
    "tagline": "Which of your user groups grant exactly the same model access rights as each other, and which grant none at all",
    "intro": [],
    "features": [
      {
        "heading": "Access groups accumulate",
        "body": [
          "Somebody needs a role slightly different from an existing one, so a new group is made by copying it. The difference turns out not to be needed, or gets solved another way, and nobody goes back.",
          "A year later there are four groups granting exactly the same rights and nobody remembers which is the real one.",
          "Each set of groups granting exactly the same rights, named against each other — and, listed apart, the groups that grant nothing."
        ]
      },
      {
        "heading": "That is not a tidiness problem",
        "body": [
          "Every extra group is another thing to remember when access changes, another row in every review an auditor reads, and another place for the next person to put somebody by mistake — into the copy nobody maintains any more."
        ]
      },
      {
        "heading": "What it compares, said plainly",
        "body": [
          "Each group's own access rights. Two groups reported as identical here may still differ through the groups they imply, which this does not resolve.",
          "That is a real limitation and it is stated rather than glossed over, because a duplicate-finder you cannot trust is worse than none: it is the report that gets somebody's access removed."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19, Community or Enterprise. No dependencies beyond the base system. Administrator access, since it reads every group and access right. Nothing is written to any of them."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_duplicate_group_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 252,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_eudr_scope_check",
    "slug": "eudr-scope-check",
    "name": "EUDR Scope Check",
    "summary": "How many of your products fall under the EU deforestation regulation, how many of them could ever carry plot data, and how much has already shipped",
    "tagline": "How many of your products fall under the EU deforestation regulation, how many of them could ever carry plot data, and how much has already shipped",
    "intro": [],
    "features": [
      {
        "heading": "Ask the plainer question first",
        "body": [
          "Regulation (EU) 2023/1115 has applied to large operators since 30 December 2025 and to small ones since 30 June 2026. Every consignment of coffee, cocoa, soya, palm oil, rubber, cattle products or wood needs a due diligence statement, and that statement needs the geolocation of every plot of land the material was produced on.",
          "Before chasing a single coordinate, there is something cheaper to find out: whether this database could hold them at all.",
          "Name the products in scope and the check reports what the configuration allows — and what has already left while it did not."
        ]
      },
      {
        "heading": "It turns on lot tracking, and nothing else",
        "body": [
          "A plot of land is a property of the material, so it hangs off the lot or serial number the material carries. Goods of a product set to “No Tracking” ship without one — so there is nothing for the plot to hang off at the moment it matters, and no amount of chasing the supplier for coordinates will change that. It is a configuration problem wearing the clothes of a data problem."
        ]
      },
      {
        "heading": "The part that says how urgent it is",
        "body": [
          "It also counts the deliveries in a period you choose that moved one of the products that cannot carry plot data. Turning tracking on today does not reach backwards: goods that have already shipped keep no lot they never had, so no statement can be assembled for those consignments after the fact.",
          "A count of them is the difference between a to-do and a problem."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "Odoo 19, Community or Enterprise. Needs Inventory. Nothing is written to your products — the check reads them and stores its own result."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_eudr_scope_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 321,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_cash_exact_match",
    "slug": "exact-payment-matches",
    "name": "Exact Payment Matches",
    "summary": "Find the bank statement lines that pay exactly one open invoice and reconcile them. Free cash application for the unambiguous matches only.",
    "tagline": "Find the incoming payments that unambiguously pay one invoice",
    "intro": [
      "Some of the payments waiting to be reconciled are obvious: the reference names an invoice, and the amount is exactly that invoice's balance. Those are the ones nobody should be spending time on.",
      "This finds them. Run a scan and every unreconciled payment that names one invoice, for exactly its amount, is listed with a link to both sides.",
      "Two payments matched with confidence; the part-payment and the unreferenced credit correctly left alone."
    ],
    "features": [
      {
        "heading": "Deliberately strict",
        "body": [
          "A match is reported only when all three hold: the invoice number appears literally in the reference, the residual equals the payment, and exactly one invoice fits. Two candidates means a person should look, so nothing is reported. A confident wrong answer costs more than no answer."
        ]
      },
      {
        "heading": "Reports, never reconciles",
        "body": [
          "This app never reconciles, posts, or writes to a statement line or an invoice. A test proves it at runtime: it records the state of both sides, runs a scan, and asserts nothing changed."
        ]
      },
      {
        "heading": "What is left over",
        "body": [
          "The payments this app cannot match are the ones that actually need judgement - part payments, deductions, and remittances covering several invoices at once. Those are a different job, and they are what the paid app does."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_cash_exact_match",
    "screenshots": [
      "screenshot_matches.png"
    ],
    "copyWords": 224,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_field_help_editor",
    "slug": "field-help-text-editor",
    "name": "Field Help Text Editor",
    "summary": "Edit the tooltip and help text on custom fields from the command palette, without opening Settings Technical Fields to hunt for it.",
    "tagline": "Edit a custom field's help/tooltip text from Ctrl+K, without hunting through Settings > Technical > Fields",
    "intro": [
      "Odoo already stores per-field help text and already shows it read-only in the Developer Mode tooltip. Editing it means leaving whatever you're doing, opening Settings > Technical > Database Structure > Fields, and searching for the exact model and field. This app adds one command palette entry instead - \"Edit Field Help Text\" (Ctrl+K) - pick a model, pick a field, edit its help text, save. No new model, writes directly to the native field."
    ],
    "features": [
      {
        "heading": "No new model, no new permissions",
        "body": [
          "Writes straight to the field Odoo already uses for help text (ir.model.fields.help). Whatever could edit it via Settings before still can; this just skips the navigation. On a custom field the new tooltip shows immediately. On a standard, code-defined field Odoo keeps serving the help from its own definition, so the edit is stored but not shown - exactly as it behaves when edited via Settings."
        ]
      },
      {
        "heading": "Search-as-you-type on both pickers",
        "body": [
          "Type part of a model or field's name or technical name to filter - no scrolling through every model or every field on a large model."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 7,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_field_help_editor",
    "screenshots": [
      "screenshot_dialog.png"
    ],
    "copyWords": 193,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_field_lock",
    "slug": "field-lock-after-approval",
    "name": "Field Lock After Approval",
    "summary": "Make chosen fields readonly once a record matches a condition you define, enforced on the server, on any model and without writing code.",
    "tagline": "Lock fields by any condition, on any model, enforced in write() - not just a view attribute",
    "intro": [
      "Native Odoo locks fields after approval one model at a time, by hand: sale.order, purchase.order, and friends each hard-code their own \"readonly once state is X\" view attributes, one field at a time. Those are view-layer only - bypassable through any API call - and there's no shared, configurable mechanism, so any custom or less-common model gets nothing at all. This app adds one config screen: pick a model, build a condition with Odoo's own domain builder (any field, any operator, combined however you like), pick which fields to lock once that condition matches, and optionally which groups can still edit anyway. The check runs in write() itself, so it can't be bypassed the way a view attribute can."
    ],
    "features": [
      {
        "heading": "Enforced in write(), not just the form",
        "body": [
          "A view readonly attribute only stops the form. This runs on every write() call to the model - through the UI, an import, or an external API call alike. Code running as the superuser is exempt on purpose: Odoo writes that way during installs, upgrades and its own internal flows, and a lock that refused those would break the database rather than protect it. Automated actions run that way too, so treat an automation as inside the fence, not outside it."
        ]
      },
      {
        "heading": "Any field, any operator, no code",
        "body": [
          "The condition uses Odoo's own domain builder - the same one behind every filter and automation rule. Combine any fields on the model, not just a single status field."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.6",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 7,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_field_lock",
    "screenshots": [
      "screenshot_rule.png"
    ],
    "copyWords": 259,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_gdpr_72h_clock",
    "slug": "gdpr-72-hour-clock",
    "name": "GDPR 72-Hour Clock",
    "summary": "An Article 33 countdown from the moment you discover a personal data breach. Holds no incident detail, only the 72 hour deadline and who owns it.",
    "tagline": "The Article 33 clock, holding none of the breach detail",
    "intro": [
      "GDPR Article 33 gives you 72 hours from becoming aware of a personal data breach to notify the supervisory authority. Three days is not long, and the hours are easy to lose while everyone is busy dealing with the breach itself.",
      "This runs the clock. Record your own reference and the moment you became aware, and the deadline, the hours remaining and whether you are overdue are all worked out for you.",
      "Hours remaining on every open incident, with overdue and due-soon called out."
    ],
    "features": [
      {
        "heading": "Holds none of the breach, on purpose",
        "body": [
          "There is no field here for what happened, the risk, the categories of data, the people affected, the consequences or the measures taken - and that is not an omission to upsell you. An Article 33 record needs all of those and the confidentiality to match; a clock needs none of them to run. A test in the module asserts no such field can be added later."
        ]
      },
      {
        "heading": "72 hours, from awareness",
        "body": [
          "The clock runs from the moment the controller became aware, not from when the breach happened or when it was contained. That is the date Article 33 turns on, and it is the only date this app asks you for."
        ]
      },
      {
        "heading": "Not tax advice",
        "body": [
          "This app counts hours from a time you enter, and ships behind its own access group rather than being visible to every employee. It is not legal advice, and whether a breach is notifiable at all is a judgement for you and your adviser."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_gdpr_72h_clock",
    "screenshots": [
      "screenshot_clock.png"
    ],
    "copyWords": 274,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_google_ads_spend",
    "slug": "google-ads-spend-monitor",
    "name": "Google Ads Spend Monitor",
    "summary": "An ad spend dashboard for one Google Ads customer account: cost, clicks, impressions and conversions, pulled with your own developer token. Read only, manual refresh.",
    "tagline": "Google Ads cost, clicks and conversions, read straight into Odoo",
    "intro": [
      "Your ad cost lives in the Google Ads UI and your numbers live in Odoo, so somebody ends up copying one into the other by hand every month.",
      "This reads it straight in. Connect with your own developer token, OAuth client and refresh token - generated in your own Google Cloud project and Google Ads Manager account, with no app-review dependency on us - pick a reporting window, and cost, clicks, impressions, conversions, CTR, CPC and CPA land on a form in Odoo.",
      "One customer account, one reporting window, refreshed when you ask for it."
    ],
    "features": [
      {
        "heading": "Read-only by construction",
        "body": [
          "There is no write call to the Google Ads API anywhere in this module - not a hidden one, not a disabled one. A test in the module asserts it, so it stays true. It cannot create, change, pause or remove anything in your account."
        ]
      },
      {
        "heading": "Your credentials, your control",
        "body": [
          "The developer token, OAuth client secret and refresh token are all generated by you and revocable by you at any time. Each is encrypted at rest and never stored in plain text. There is no activation key, and nothing phones home."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "A Google Ads account you control, a developer token from your own Google Ads Manager account, and an OAuth client plus refresh token from your own Google Cloud project. The Python packages google-ads and cryptography must be available to your Odoo instance."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_google_ads_spend",
    "screenshots": [
      "screenshot_spend.png"
    ],
    "copyWords": 256,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_google_reviews_snippet",
    "slug": "google-reviews-snippet",
    "name": "Google Reviews Snippet",
    "summary": "A website snippet that shows your real Google Business Profile reviews and star rating on any page you drop it onto.",
    "tagline": "A website building-block snippet that displays your real Google Business reviews",
    "intro": [
      "Native s_reviews_wall/s_quotes_carousel snippets only offer hardcoded, manually-typed placeholder testimonials - no live external data source anywhere in Community. This syncs real reviews from your Google Business Profile (via the Google Places API, your own API key) daily, and adds a draggable \"Google Reviews\" block to the website builder that displays them. Google's Places API returns at most 5 reviews per business - a known platform limit, not a limitation of this app."
    ],
    "features": [],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "base",
      "website"
    ],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_google_reviews_snippet",
    "screenshots": [
      "screenshot_settings.png"
    ],
    "copyWords": 83,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_hr_expiry_exposure",
    "slug": "hr-expiry-exposure",
    "name": "HR Expiry Exposure",
    "summary": "List the employee work permits, visas, licences and contracts that have already expired, and the ones expiring soon. A free expiring documents report.",
    "tagline": "Find the work permits and contracts that have already lapsed without anyone noticing",
    "intro": [
      "Odoo does send a reminder before a work permit expires. It fires when the expiry date falls exactly on the notice day - so anything that was already past when you started, anything imported with an old date, and anything missed on that single day is never flagged again.",
      "This counts what is actually there. Work permits and contract end dates are reported as already expired, expiring within a window you choose, or not tracked at all - with a drill-down to the employees behind each number.",
      "Eleven active employees: five have a work permit date on file, two of those have already expired, and two more go within sixty days."
    ],
    "features": [
      {
        "heading": "No date is not the same as expired",
        "body": [
          "An employee with no permit date recorded is untracked, not lapsed. Counting the two together would swamp the number that actually needs acting on, so they are reported separately - and the untracked count is usually the more interesting one."
        ]
      },
      {
        "heading": "Counts only, no employee data",
        "body": [
          "The report stores totals and nothing else - no employee is named, referenced or copied into it. A test asserts the model carries no employee-referencing field and that the module extends hr.employee nowhere."
        ]
      },
      {
        "heading": "And then what",
        "body": [
          "Native Odoo tracks expiry for exactly two things: work permits and contract end dates. Everything else - licences, certifications, background checks, training records - has nowhere to live, which is usually why it lives in a spreadsheet. If you need to track those, and to log complaints and penalties against an employee's file, that is what the paid app does."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Human Resources",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "hr"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_hr_expiry_exposure",
    "screenshots": [
      "screenshot_exposure.png"
    ],
    "copyWords": 288,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_journal_access_report",
    "slug": "journal-access-report",
    "name": "Journal Access Report",
    "summary": "Report which users and groups can post to each accounting journal, so segregation of duties is visible at a glance instead of buried in access rights.",
    "tagline": "See exactly who can post to each of your accounting journals",
    "intro": [
      "Odoo Community has no per-journal restriction. Anyone with accounting access reaches every journal of their companies - the main bank account, the payroll journal, all of them. There is no field for it and no setting to change, which means most people have never actually looked at who that is.",
      "This tells you. Run the report and every journal is listed with the users who can currently post to it, so the answer is a list rather than an assumption.",
      "Every user reaching every journal, bank account included - which is the default, and rarely what anyone intends."
    ],
    "features": [
      {
        "heading": "Counts inherited access too",
        "body": [
          "Membership is read through the group hierarchy, not by listing group members. A user who only holds a group that implies accounting access still reaches the journals - and a report that missed them would understate the very thing it exists to show."
        ]
      },
      {
        "heading": "Reports, never restricts",
        "body": [
          "This app adds no allow-list, no record rule and no group. It cannot narrow access even by accident - a test asserts the module ships no record rules and touches no group."
        ]
      },
      {
        "heading": "And then what",
        "body": [
          "If the answer this gives you is uncomfortable, narrowing it is a change to how the system behaves and belongs with the app that also has to enforce it."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_journal_access_report",
    "screenshots": [
      "screenshot_access.png"
    ],
    "copyWords": 238,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_kanban_wip_limits",
    "slug": "kanban-column-wip-limits",
    "name": "Kanban Column WIP Limits",
    "summary": "Kanban WIP limits for Project: cap how many tasks a stage may hold and flag the column when it goes over. Work in progress limits per stage.",
    "tagline": "Cap how many tasks a Project stage can hold, and flag the column red once it's over",
    "intro": [
      "Sets a work-in-progress limit per Project stage. Once a stage's task count exceeds its limit, the kanban column header turns red - a plain visual signal, no blocking, no workflow engine. Project's own kanban has no per-stage capacity field or visual warning of any kind."
    ],
    "features": [
      {
        "heading": "Set it per stage, not globally",
        "body": [
          "Open any stage's edit dialog from its kanban column menu and set a WIP Limit. Leave it at 0 for stages that shouldn't be capped at all."
        ]
      },
      {
        "heading": "A signal, not a lock",
        "body": [
          "Going over the limit never blocks moving a task into the stage - it just turns the column red so the team notices and can act on it."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Project",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "project"
    ],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_kanban_wip_limits",
    "screenshots": [
      "screenshot_wip.png"
    ],
    "copyWords": 128,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_list_view_manager",
    "slug": "list-view-manager",
    "name": "List View Manager",
    "summary": "Save and switch between the list view columns and filters you use often, and share a layout with your team instead of rebuilding it each time.",
    "tagline": "Save, share, and switch between custom list view column layouts and filters",
    "intro": [
      "Native Favorites (ir.filters) already save/share/switch a named domain + group-by + sort. The one thing they don't cover: which optional columns were visible - that lives only in browser localStorage, unnamed and unshared. This adds a small JS patch that folds the visible columns into the context a Favorite already saves, so saving or switching one carries column visibility with it. No new model and no new screen - the Favorite you already use simply remembers one more thing."
    ],
    "features": [],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.5",
    "license": "OPL-1",
    "depends": [
      "base",
      "web"
    ],
    "downloads": 9,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_list_view_manager",
    "screenshots": [
      "screenshot_columns.png"
    ],
    "copyWords": 91,
    "hasVideo": true,
    "youtubeId": "r1uQftfvyMs",
    "externalPage": null
  },
  {
    "tech": "mh_lost_messages_routing",
    "slug": "lost-messages-routing",
    "name": "Lost Messages Routing",
    "summary": "Keep a browsable record of incoming emails Odoo could not route to a record, instead of dropping them silently. Find the lost messages.",
    "tagline": "Keep a browsable record of inbound emails Odoo failed to process, instead of silently dropping them",
    "intro": [
      "Confirmed a real gap in native Odoo before building: when message_process() fails to route or process an inbound email for any reason, fetchmail's own cron just logs it to the server log and marks it \"seen\" on the mail server - the message is gone forever, with no database record and no UI to review it. Catches that failure and saves the raw message so an admin can actually see what got lost, with its error and full raw source. Reading and deleting is what this does; routing a captured message into the right model and retrying it is Lost Message Recovery."
    ],
    "features": [],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Discuss",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base",
      "mail"
    ],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_lost_messages_routing",
    "screenshots": [
      "screenshot_lost_messages.png"
    ],
    "copyWords": 118,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_meta_ads_spend",
    "slug": "meta-ads-spend-monitor",
    "name": "Meta Ads Spend Monitor",
    "summary": "Pull Facebook and Instagram ad spend, reach and results for one ad account with your own system user token. No App Review, read only.",
    "tagline": "Facebook and Instagram ad spend, read straight into Odoo",
    "intro": [
      "Your ad spend lives in Meta Ads Manager and your numbers live in Odoo, so somebody ends up copying one into the other by hand every month.",
      "This reads it straight in. Paste a System User access token generated in your own Meta Business Manager - no Meta App Review, no OAuth app submission, no approval queue - pick a reporting window, and spend, impressions, clicks, reach, CTR, CPC and CPM land on a form in Odoo.",
      "One ad account, one reporting window, refreshed when you ask for it."
    ],
    "features": [
      {
        "heading": "Read-only by construction",
        "body": [
          "There is no write path to the Meta API anywhere in this module - not a hidden one, not a disabled one. It cannot create, change, pause or delete anything in your ad account even if you wanted it to."
        ]
      },
      {
        "heading": "Your credentials, your control",
        "body": [
          "The token is one you generate in your own Business Manager and can revoke at any time. It is encrypted at rest and never stored in plain text. There is no activation key, and nothing phones home."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "A Meta Business Manager account you control, and a System User access token with read access to the ad account. The Python packages requests and cryptography must be available to your Odoo instance - both are standard on Odoo Online and Odoo.sh."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_meta_ads_spend",
    "screenshots": [
      "screenshot_spend.png"
    ],
    "copyWords": 240,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_microsoft_ads_viewer",
    "slug": "microsoft-ads-viewer",
    "name": "Microsoft Ads Viewer",
    "summary": "Browse your Bing campaigns with type, status and daily budget, using your own developer token and Azure AD client. Read only, one account.",
    "tagline": "Your Microsoft Advertising campaigns, visible inside Odoo",
    "intro": [
      "Checking what is actually running in Microsoft Advertising means opening another tab, in another account, that most of your team does not have access to.",
      "This brings the list into Odoo. Connect with your own developer token, Azure AD OAuth client and refresh token - generated in your own Microsoft Advertising and Azure accounts - and every campaign appears in Odoo with its type, status and daily budget.",
      "Every campaign in the account - Search, Shopping and Audience alike - on one screen."
    ],
    "features": [
      {
        "heading": "Read-only by construction",
        "body": [
          "There is no Add, Update or Delete call anywhere in this module - not a hidden one, not a disabled one, and a test in the module asserts it. The campaign list is a mirror of what Bing reports; editing a row here would only diverge from the real account, so the list is read-only in the interface too."
        ]
      },
      {
        "heading": "Your credentials, your control",
        "body": [
          "The developer token, OAuth client secret and refresh token are all generated by you and revocable by you at any time. Each is encrypted at rest and never stored in plain text. There is no activation key, and nothing phones home."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "A Microsoft Advertising account you control, a developer token from the Microsoft Advertising Developer Portal, and an OAuth client plus refresh token from your own Azure AD (Entra ID) app registration. The Python packages bingads and cryptography must be available to your Odoo instance."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_microsoft_ads_viewer",
    "screenshots": [
      "screenshot_campaigns.png"
    ],
    "copyWords": 257,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_orphan_attachment_scan",
    "slug": "orphaned-attachment-scan",
    "name": "Orphaned Attachment Scan",
    "summary": "Attachment cleanup for Odoo: find the orphaned files left behind by deleted records and uninstalled modules, with the storage each one is still costing you.",
    "tagline": "Find the attachments left behind by deleted records and uninstalled modules",
    "intro": [
      "An attachment points at a record through res_model and res_id . There is no foreign key behind that pointer - res_id is a Many2oneReference, which Odoo's own source documents as having no FK in the database - so nothing at the database level can stop it going stale.",
      "Deleting a record normally cleans up its attachments. Two paths do not: a child row removed by an ON DELETE CASCADE never runs Python unlink() at all, and uninstalling a module drops its models without touching a single attachment.",
      "And then the file becomes invisible. Odoo refuses read access to an attachment whose record cannot be resolved, so an orphan never appears in any list and is not even returned by a search - the query comes back empty rather than raising. The filestore garbage collector will not help either: it removes files that have no database row, which is the opposite problem."
    ],
    "features": [
      {
        "heading": "Tells you why, not just what",
        "body": [
          "Each result is labelled Record deleted or Model uninstalled . The second kind is the one that can never be recovered by hand, because the model that gave res_id its meaning is gone."
        ]
      },
      {
        "heading": "Cautious by design",
        "body": [
          "No cron, no automatic deletion, nothing running in the background. Models whose contents cannot be verified are skipped rather than guessed at - a false positive here would invite you to delete a file that was perfectly fine."
        ]
      }
    ],
    "scope": [
      "On a database that has never uninstalled a module and never had records removed by cascade or by hand, this app will correctly find nothing. That is the right answer, and it is worth knowing for certain rather than assuming."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_orphan_attachment_scan",
    "screenshots": [
      "screenshot_scan.png",
      "screenshot_confirm.png"
    ],
    "copyWords": 282,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_pos_analytic_account",
    "slug": "pos-analytic-account",
    "name": "POS Analytic Account",
    "summary": "Post each Point of Sale session revenue to an analytic account, so store and cost centre reporting works without manual journal entries.",
    "tagline": "Attribute each Point of Sale store/session's revenue to an analytic account for cost-center reporting",
    "intro": [
      "Community's Point of Sale has zero analytic-account concept anywhere - no overlap found before building. Set a default analytic distribution per Point of Sale (store/register); every sales line in that POS's session closing journal entry is tagged with it automatically, ready for the standard Analytic Items reports."
    ],
    "features": [
      {
        "heading": "Post each session's revenue to an analytic account",
        "body": [
          "Session closing entries include analytic account allocation so revenue is recorded to analytic accounts during posting instead of requiring manual journal entries."
        ]
      },
      {
        "heading": "Apply the same distribution to every sales line",
        "body": [
          "The configured distribution is applied to every sales line posted at session close, giving line-level revenue attribution for reporting."
        ]
      },
      {
        "heading": "Configure distribution per Point of Sale",
        "body": [
          "Set the analytic distribution for each store from the Point of Sale configuration form so each store/session uses its own allocation on close."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Point of Sale",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "base",
      "point_of_sale",
      "analytic"
    ],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_pos_analytic_account",
    "screenshots": [
      "screenshot_settings.png"
    ],
    "copyWords": 147,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_a11y_page_check",
    "slug": "page-accessibility-check",
    "name": "Page Accessibility Check",
    "summary": "Test one page for missing alt text, unlabeled form fields, missing page language and empty links. A free accessibility checker for a single URL.",
    "tagline": "Check one page for the four accessibility failures screen readers hit hardest",
    "intro": [
      "Accessibility problems are cheap to find and expensive to discover late. Four of them are decidable from the markup alone, with no judgement call involved - either the attribute is there or it is not.",
      "Pick a published page, press Run Check, and this tells you which of the four are failing and how many times.",
      "Four counts and a plain-words summary, for the page you picked."
    ],
    "features": [
      {
        "heading": "Nothing leaves your server",
        "body": [
          "The page is rendered in-process by this Odoo instance, not fetched over the network. There is no outbound request to firewall, nothing is sent to a third-party scanning service, and the app cannot be pointed at a site you do not own."
        ]
      },
      {
        "heading": "No history, by design",
        "body": [
          "Each run replaces the previous result for that page. There is no per-issue record, no signature, no dedup across runs and no open/ignored/fixed state - a test in the module asserts none of that can appear later. Those are what turn a checker into an auditor."
        ]
      },
      {
        "heading": "What automated checks can and cannot tell you",
        "body": [
          "Automated checks catch a real but limited slice of WCAG. Passing all four here does not make a page accessible - it means these four failures are absent."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Website",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "website"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_a11y_page_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 226,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_pay_transparency_readiness",
    "slug": "pay-transparency-ready",
    "name": "Pay Transparency Ready",
    "summary": "Check when the Directive 2023/970 gender pay gap reporting duty reaches your headcount band, and whether your employee data can support it.",
    "tagline": "Find out when the EU pay-gap reporting duty reaches you, and whether your data is ready",
    "intro": [
      "EU Directive 2023/970 does not land on everyone at once. It phases in by headcount, and the first question is not how to report - it is whether you have to yet, and from when.",
      "That question has an answer sitting in your employee records. This works it out: your active headcount, the reporting duty that follows from it, the year it starts, and whether your data could actually support a pay-gap figure if you had to produce one today.",
      "Headcount, the duty that follows, the year it starts, and what is missing - in plain words."
    ],
    "features": [
      {
        "heading": "Stores nothing about anyone",
        "body": [
          "The check keeps counts and a summary. There is no per-employee record, no wage figure and no gender field anywhere in this module - it reads what is already in Odoo and writes back only totals. A test in the module asserts that, and that it adds no field to your HR records."
        ]
      },
      {
        "heading": "The bands, read the right way round",
        "body": [
          "The phase-in bands are checked largest-first, so a 300-person company is told it reports annually from 2027 - not, as a careless reading would have it, every three years from 2031 because it also happens to be above 100."
        ]
      },
      {
        "heading": "Not tax advice",
        "body": [
          "This app applies the Directive's stated headcount bands to your employee records. National implementations vary and may be stricter - confirm your own obligations with your adviser."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Human Resources",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "hr"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_pay_transparency_readiness",
    "screenshots": [
      "screenshot_readiness.png"
    ],
    "copyWords": 261,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_popup_message",
    "slug": "popup-message",
    "name": "Popup Message",
    "summary": "Show a popup announcement or alert to backend users on login, targeted by group, with an acknowledgement that it was read.",
    "tagline": "Show configurable popup announcements and alerts to backend users on login",
    "intro": [
      "Lets an admin write a popup message (announcement, maintenance notice, policy reminder) shown once to each backend user, within a chosen date range. Name one or more groups as the audience and only those users see it; leave the audience empty and everybody does. Nothing native covers admin-authored broadcast content - confirmed no overlap with Odoo's own login/expiration mechanisms before building.",
      "Membership is read the way Odoo reads it everywhere else, so a group reached through an implying group still counts as being in the audience - an announcement aimed at a group most people hold indirectly would otherwise reach nobody."
    ],
    "features": [],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base",
      "web"
    ],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_popup_message",
    "screenshots": [
      "screenshot_message.png"
    ],
    "copyWords": 112,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_portal_stale_grant",
    "slug": "portal-stale-grant-badge",
    "name": "Portal Stale-Grant Badge",
    "summary": "Find the portal access you granted years ago that nobody has ever used, so you can revoke it. Stale portal users, listed with their last login.",
    "tagline": "Find the portal logins you granted years ago and nobody ever used",
    "intro": [
      "Portal access is easy to grant and easy to forget. Odoo records the last sign-in for every portal account, but only ever shows it one contact at a time, buried inside the Grant Portal Access dialog. There is no list, no filter, no badge.",
      "So the accounts nobody has touched since the day they were created are exactly the ones you never see - and they keep working.",
      "This app puts that state on the contact: a badge reading Never Used , Stale or Active with the date behind it, plus two search filters so a whole database can be swept in one search."
    ],
    "features": [
      {
        "heading": "Sweep the whole address book",
        "body": [
          "One filter, and every portal account nobody has signed into is on the screen - with the date of the last sign-in in an optional column."
        ]
      },
      {
        "heading": "And read it on the contact",
        "body": [
          "The badge sits on the contact form, next to the fields you already read."
        ]
      },
      {
        "heading": "Never quietly out of date",
        "body": [
          "The state is computed on read, not stored and refreshed by a nightly job - so \"stale\" always means stale as of right now, not as of the last cron run."
        ]
      },
      {
        "heading": "One setting, and that's it",
        "body": [
          "Set the staleness window in days (default 180) under Settings. No new model, no new menu, no per-contact configuration."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "portal",
      "base_setup"
    ],
    "downloads": 1,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_portal_stale_grant",
    "screenshots": [
      "screenshot_sweep.png",
      "screenshot_badge.png"
    ],
    "copyWords": 227,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_product_multi_barcode",
    "slug": "product-package-barcodes",
    "name": "Product Package Barcodes",
    "summary": "A screen for the multiple barcodes per product Odoo already stores by packaging: case, pallet and box, which the product form never shows you.",
    "tagline": "A screen for the per-UoM barcodes (case, pallet, box) Odoo already stores but never shows you",
    "intro": [
      "Odoo Community already has a model for it (product.uom: a barcode per unit of measure per product - e.g. one barcode for \"Unit\", another for \"Box of 12\"), confirmed by direct inspection of the installed 19.0 source - but it ships with no view or menu anywhere, on the product form or standalone. This app adds both: an editable list on the product variant form, and a standalone \"Package Barcodes\" screen to search across every product's package barcodes at once.",
      "Does not introduce a new data model - only views on top of Odoo's own."
    ],
    "features": [],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "product"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_product_multi_barcode",
    "screenshots": [
      "screenshot_barcodes.png"
    ],
    "copyWords": 111,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_project_commitment_check",
    "slug": "project-commitment-check",
    "name": "Project Commitment Check",
    "summary": "One number for your purchase commitment: what is owed on confirmed purchase orders that no project report shows yet, because the supplier has not invoiced",
    "tagline": "One number: how much you have committed on confirmed purchase orders that no project report shows yet, because the supplier has not invoiced",
    "intro": [
      "Analytic accounting records what a project has cost. A purchase order confirmed last week is a real obligation, and it appears nowhere in any project cost report until the supplier gets round to invoicing.",
      "So the cost reports are accurate, and still not the whole story. Press the button and see by how much.",
      "One check, one figure, and a sentence saying what it means.",
      "A draft order is not a commitment",
      "Only confirmed and done orders count. Nobody has told the supplier to go ahead on a draft, and a figure that treated quotes as obligations would be ignored within a week.",
      "Nothing is counted twice",
      "The billed part of an order drops out, because it has already become an actual cost. Counting it here as well would report a commitment twice the size of the real one.",
      "It says when the answer is nothing",
      "A company with no projects says so rather than reporting a clean zero - a zero reads as good news, and having nothing to measure is a different fact.",
      "Requirements, and where it stops",
      "Odoo 19 Community or Enterprise with Project and Purchase. Free, and deliberately one figure per company - it does not name the projects or break the total down. Reads only; nothing is written back."
    ],
    "features": [],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Project",
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "project",
      "purchase"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_project_commitment_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 237,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_quotation_aging",
    "slug": "quotation-aging",
    "name": "Quotation Aging",
    "summary": "An aging report for open quotations: days outstanding, bucketed, with the value sitting in each bucket. Find stale quotations before they go cold.",
    "tagline": "See how old your open quotations are, and how much is sitting in them",
    "intro": [
      "Every sales team has a pile of quotations nobody has answered. Odoo will show you the list and let you group and filter it - but there is no ageing view for quotations the way there is for receivables, so \"how much is stuck, and for how long\" gets answered by scrolling.",
      "This answers it properly. Open quotations are counted into age bands with their value, the oldest is named, and the ones already past their own validity date are called out separately.",
      "A real backlog: 12 quotations worth $99,750, the oldest open for 212 days, three already expired."
    ],
    "features": [
      {
        "heading": "Sent quotations still count",
        "body": [
          "A quotation the customer has seen and not answered is exactly the backlog this is about. Counting only untouched drafts would flatter the number, so sent ones are included."
        ]
      },
      {
        "heading": "Reports, never works the pile",
        "body": [
          "This app confirms nothing, cancels nothing and edits no quotation. It does not extend sale.order at all - a test asserts the module contains no acting path."
        ]
      },
      {
        "heading": "And then what",
        "body": [
          "If the pile this shows you needs working through rather than just looking at, that is a different job - and it is what the paid app does."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Sales/Sales",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "sale"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_quotation_aging",
    "screenshots": [
      "screenshot_aging.png"
    ],
    "copyWords": 224,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_gdpr_retention_exposure",
    "slug": "retention-exposure",
    "name": "Retention Exposure",
    "summary": "Report how many records you hold past your own data retention policy, per model, before deciding what to anonymize or delete.",
    "tagline": "How much data you are holding past your own retention policy",
    "intro": [
      "Most organisations have a retention policy. Far fewer can say what they are actually still holding, and a policy nobody measures against is a document rather than a control.",
      "This measures it. Say which model to look at, which date field says how old a record is, and how many months your policy allows - and it tells you how many records are past that, what share of the total they are, and how old the oldest one is.",
      "Four measures against a real database - counts, percentages, and the oldest record still held."
    ],
    "features": [
      {
        "heading": "It counts, and only counts",
        "body": [
          "This app never changes, clears or deletes a record. There is no anonymisation, no purge and no scheduled job anywhere in it, and it stores no personal data of its own - a measure keeps its configuration and its totals, nothing more. A test in the module asserts both, so neither can creep in later."
        ]
      },
      {
        "heading": "A number you can check",
        "body": [
          "Every measure has a View button that opens the over-retained records themselves. A compliance figure nobody can drill into is a figure nobody should act on."
        ]
      },
      {
        "heading": "Not tax advice",
        "body": [
          "The counts are company-wide and taken with elevated rights, so the figure is not narrowed by the running user's own record rules. This app measures against the period you enter; it does not determine what your retention period should be."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_gdpr_retention_exposure",
    "screenshots": [
      "screenshot_exposure.png"
    ],
    "copyWords": 254,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_ro_saft_readiness",
    "slug": "saf-t-readiness-check",
    "name": "SAF-T Readiness Check",
    "summary": "Find the missing company, partner, account and tax master data that would get an ANAF D406 file rejected, before you build it.",
    "tagline": "Find the missing master data that would get your D406 rejected",
    "intro": [
      "A D406 declaration is rejected for boring reasons: a supplier with no VAT number, an account with no code, a company contact missing its registry number. You find out after submitting, when ANAF tells you.",
      "This finds them first. Run the check and it lists every piece of master data a D406 needs and does not have - each one with the record it belongs to and a button that opens it, so fixing the list is a morning's work rather than an investigation.",
      "Blocking issues first, each naming the record and what it is missing."
    ],
    "features": [
      {
        "heading": "Blocking versus warning",
        "body": [
          "Blocking means the declaration would carry an empty value where the authority expects data. Warning means it is worth fixing but will not usually stop a submission by itself. The split tells you what to fix today and what can wait."
        ]
      },
      {
        "heading": "Checks, never files",
        "body": [
          "This app produces no XML, no export and no attachment - a test in the module asserts that. It tells you whether your records are ready; it does not build the declaration."
        ]
      },
      {
        "heading": "Not tax advice",
        "body": [
          "This app checks for data your records are missing. It does not guarantee acceptance by ANAF - always validate the final declaration with ANAF's own DUKIntegrator before submitting, and take filing decisions with your adviser."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "l10n_ro"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_ro_saft_readiness",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 239,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_cron_health_badge",
    "slug": "scheduled-action-health",
    "name": "Scheduled Action Health",
    "summary": "Cron monitoring for Odoo: which scheduled actions are failing or overdue, before Odoo quietly deactivates one after repeated errors. Failing cron jobs, listed.",
    "tagline": "See which scheduled actions are failing, before Odoo quietly switches them off",
    "intro": [
      "A scheduled action that raises does not tell anyone. The Scheduled Actions list shows a next execution date and an active toggle - so a job that has been failing every hour for a week looks exactly like a job that has been working perfectly all along.",
      "Odoo does count the failures. Since version 19 it records a consecutive failure count and the date of the first failure on the job itself, and uses them to switch the job off after five failures spread over seven days. It then displays neither field anywhere.",
      "This app shows them."
    ],
    "features": [
      {
        "heading": "The warning that matters",
        "body": [
          "Deactivating Soon is not a guess - it means both of Odoo's own thresholds are already met, so the very next failure switches the job off. That is the moment worth catching."
        ]
      },
      {
        "heading": "Reads, never writes",
        "body": [
          "No new logging, no wrapper around the scheduler, no extra table, no cron of its own. It reads what Odoo already records, and the thresholds come from Odoo's own constants rather than a copy - so the warning stays true if a future version changes them."
        ]
      }
    ],
    "scope": [
      "Odoo records that a job failed, not why - the traceback goes to the server log and nowhere else. This app takes you to the right job and the right time window; the log tells you the rest. It also cannot show a job that was already auto-deactivated, because Odoo resets both counters when it switches one off."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_cron_health_badge",
    "screenshots": [
      "screenshot_list.png",
      "screenshot_form.png"
    ],
    "copyWords": 252,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_snapchat_ads_viewer",
    "slug": "snapchat-ads-viewer",
    "name": "Snapchat Ads Viewer",
    "summary": "Browse your Snap campaigns with objective, status, daily budget and start date, using your own OAuth credentials. Read only, one ad account.",
    "tagline": "Your Snapchat ad campaigns, visible inside Odoo",
    "intro": [
      "Checking what is actually running in Snapchat Ads Manager means opening another tab, in another account, that most of your team does not have access to.",
      "This brings the list into Odoo. Connect with the OAuth client and refresh token from your own Snapchat developer app, plus your ad account ID, and every campaign appears in Odoo with its objective, status, daily budget and start time.",
      "Every campaign in the account, with objective, status and daily budget, on one screen."
    ],
    "features": [
      {
        "heading": "Read-only by construction",
        "body": [
          "The module issues GET requests only against the ads API - the one POST it makes is the OAuth token exchange that authenticates them, and a test asserts exactly that. The campaign list is a mirror of what Snapchat reports; editing a row here would only diverge from the real account, so the list is read-only in the interface too."
        ]
      },
      {
        "heading": "Your credentials, your control",
        "body": [
          "The OAuth client secret and refresh token are generated by you and revocable by you at any time. Each is encrypted at rest and never stored in plain text. There is no activation key, and nothing phones home."
        ]
      },
      {
        "heading": "Requirements",
        "body": [
          "A Snapchat Ads account you control, and an OAuth client plus refresh token from your own Snapchat developer app. The Python packages requests and cryptography must be available to your Odoo instance - both are standard on Odoo Online and Odoo.sh."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_snapchat_ads_viewer",
    "screenshots": [
      "screenshot_campaigns.png"
    ],
    "copyWords": 249,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_stale_user_assignment",
    "slug": "stale-user-assignments",
    "name": "Stale User Assignments",
    "summary": "Find and reassign every record still assigned to a deactivated user, so leads, tasks and activities stop pointing at someone who left.",
    "tagline": "Find and reassign everything still pointing at users who have left",
    "intro": [
      "Archiving a user does not clear what is assigned to them. Every lead, task, order and scheduled action still points at the person who left - and because a many2one is never filtered by the active flag, all of it keeps reading and displaying normally.",
      "It just quietly stops appearing in anyone's \"My\" filter. Nobody is told, and nothing breaks loudly enough to notice.",
      "Odoo has no sweep for this. The HR departure wizard sets a departure reason and can archive the user; its extensions release equipment, a company car and leave allocations. No leads, no tasks, no orders, no purchases, no invoices."
    ],
    "features": [
      {
        "heading": "One sweep, grouped by who left",
        "body": [
          "Every stored link to an archived user, across every model - custom fields included, because it reads the field registry rather than a fixed list. View opens the records behind any line before you touch anything."
        ]
      },
      {
        "heading": "Then hand it all over at once",
        "body": [
          "The wizard states exactly what will change before it changes anything."
        ]
      },
      {
        "heading": "It will not rewrite your history",
        "body": [
          "create_uid and write_uid are never touched. Reassigning those would not fix an assignment - it would falsify a record of who actually did something."
        ]
      },
      {
        "heading": "It knows the difference between assigned and owned",
        "body": [
          "A field under a unique key identifies its row rather than assigning it - one settings record per user, one personal stage per user. Those are detected from the database itself, so custom models of the same shape are covered, and they are never offered for reassignment."
        ]
      },
      {
        "heading": "Nothing happens silently",
        "body": [
          "Records are written through the ORM, so every constraint, automation and tracking rule on them applies exactly as if you had edited each one by hand. Each group is written inside its own savepoint: if one model refuses - a posted entry, a state-based readonly, a custom validation - that group is rolled back and named in the result, while the rest still go through. A half-finished reassignment you were never told about would be worse than an error you can act on."
        ]
      }
    ],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_stale_user_assignment",
    "screenshots": [
      "screenshot_sweep.png",
      "screenshot_reassign.png"
    ],
    "copyWords": 345,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_stock_card_ledger",
    "slug": "stock-card-ledger",
    "name": "Stock Card Ledger",
    "summary": "A stock card report per product: every movement in date order with running quantity and running value, ready to export.",
    "tagline": "Chronological stock card ledger showing running quantity and value per product",
    "intro": [
      "Cross-product, cross-location, running-balance stock card - including standard-cost products, which Odoo's own \"Unit Cost History\" (stock.avco.report) deliberately excludes. Browsable list grouped by product/location, plus a printable per-product Stock Card PDF report."
    ],
    "features": [],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.3",
    "license": "OPL-1",
    "depends": [
      "stock_account"
    ],
    "downloads": 7,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_stock_card_ledger",
    "screenshots": [
      "screenshot_ledger.png"
    ],
    "copyWords": 42,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_count_error_check",
    "slug": "stock-count-error-check",
    "name": "Stock Count Error Check",
    "summary": "One number: how much your inventory adjustments say the stock records were wrong by over the last year, valued at cost",
    "tagline": "One number: how much your inventory adjustments say the stock records were wrong by over the last year, valued at cost",
    "intro": [
      "Every inventory adjustment is a measurement: the gap between what Odoo believed was on the shelf and what somebody found there. Odoo posts the correction and moves on, so the gap itself is never added up anywhere.",
      "One check, and the two figures that are not the same figure.",
      "The error, not just the loss",
      "Stock found plus stock missing, ignoring direction, next to what was left once they cancelled out. A company can have a net of almost nothing while being wrong about a great deal - which is exactly the case a single net figure hides.",
      "Only real adjustments",
      "The moves Odoo creates when a count is applied - not deliveries, receipts, transfers or scrap. Those are ordinary stock movement, and counting them would make a busy month look like a broken warehouse.",
      "It says when the answer is nothing",
      "A period with no adjustments reports that plainly rather than a confident zero. Nothing counted and every count agreeing look identical from here, and they are not the same situation.",
      "Requirements, and where it stops",
      "Odoo 19 Community or Enterprise with Inventory. Free, and deliberately one figure per company - it does not name locations or products. Reads only; nothing is created or changed."
    ],
    "features": [],
    "scope": [],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_count_error_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 227,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_task_timer",
    "slug": "task-timer",
    "name": "Task Timer",
    "summary": "A timesheet timer on tasks: start and stop a live stopwatch and it writes a real timesheet line, with no manual duration entry.",
    "tagline": "A live start/stop stopwatch on tasks that logs real timesheet entries",
    "intro": [
      "Community's timesheets are manual duration-entry lines only - confirmed by grepping every model file in hr_timesheet, there is no start/stop/pause stopwatch anywhere. Adds one to the task form: Start begins a live-ticking clock, Stop writes a real account.analytic.line (task_id, employee_id, unit_amount in hours) - the same field Time Spent/Remaining/Progress are already computed from, so nothing downstream needs to change to pick it up.",
      "Starting a new timer while one is already running automatically stops and logs the previous one first, so switching tasks never leaves a phantom timer behind."
    ],
    "features": [
      {
        "heading": "One click, live clock",
        "body": [
          "A single Start/Stop button on the task form, right next to the other stat buttons. While running it shows a live-ticking elapsed time, so you always know exactly how long you've been on a task."
        ]
      },
      {
        "heading": "Real timesheet entries, not a parallel tracker",
        "body": [
          "Stopping the timer writes a genuine timesheet line under the task, the same model native Time Spent / Remaining / Progress already read from. Every report and view that already understands timesheets picks it up automatically."
        ]
      },
      {
        "heading": "Switch tasks safely",
        "body": [
          "Starting a timer on a different task while one is already running stops and logs the previous one first - you never end up with two timers running, and you never lose time to a forgotten stopwatch."
        ]
      },
      {
        "heading": "One timer per user, guaranteed",
        "body": [
          "A database-level constraint guarantees exactly one running timer per user at a time - even across two open tabs - so there's no double-counting to clean up later."
        ]
      }
    ],
    "scope": [],
    "requires": [
      "Needs the Timesheets app (hr_timesheet) installed and enabled on the project - the timer writes into the same timesheet lines that app already provides."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Services/Project",
    "version": "19.0.1.0.2",
    "license": "OPL-1",
    "depends": [
      "project",
      "hr_timesheet"
    ],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_task_timer",
    "screenshots": [
      "screenshot_timer.png"
    ],
    "copyWords": 255,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_whistleblower_deadlines",
    "slug": "whistleblower-deadlines",
    "name": "Whistleblower Deadlines",
    "summary": "Track the Directive 2019/1937 7 day acknowledgement and 3 month feedback deadlines on every report, holding no report content at all.",
    "tagline": "The 7-day and 3-month Directive clocks, on every report",
    "intro": [
      "The EU Whistleblower Protection Directive puts two clocks on every report: acknowledge receipt within 7 days, and give feedback within 3 months. Miss either and the failure is the organisation's, regardless of how the report itself was handled.",
      "This keeps those clocks. Record a reference and the date a report was received, and both deadlines are worked out for you - with the list showing what is due, what is overdue, and what is done.",
      "Due, overdue, on track and complete - at a glance, with the actions to move each on."
    ],
    "features": [
      {
        "heading": "Holds no report content, on purpose",
        "body": [
          "There is no field here for the substance of a disclosure, the reporter's identity, or a category - and that is not an omission to upsell you. A register that only tracks time does not need them, and storing a protected disclosure calls for a confidentiality model that belongs with real case management. A test in the module asserts no such field can be added later."
        ]
      },
      {
        "heading": "A missed acknowledgement buys no extra time",
        "body": [
          "Where receipt was acknowledged, the three-month feedback clock runs from that acknowledgement. Where it never was, the clock runs from the date acknowledgement was due - so ignoring the first obligation never quietly relaxes the second."
        ]
      },
      {
        "heading": "Not tax advice",
        "body": [
          "This app computes deadlines from the Directive's stated periods, and ships behind its own access group rather than being visible to every employee. It is not legal advice, and national implementations vary - confirm your own obligations with your adviser."
        ]
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Human Resources",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "downloads": 2,
    "storeUrl": "https://apps.odoo.com/apps/modules/19.0/mh_whistleblower_deadlines",
    "screenshots": [
      "screenshot_deadlines.png"
    ],
    "copyWords": 274,
    "hasVideo": false,
    "youtubeId": null,
    "externalPage": null
  }
];

/** Apps that have their own page under /odoo-apps/<slug>. */
export const odooAppPages = odooApps.filter((app) => !app.externalPage);

/** Where this app's detail page lives, wherever that happens to be. */
export function odooAppHref(app) {
  return app.externalPage ?? `/odoo-apps/${app.slug}`;
}

export function formatPrice(app) {
  if (!app.price) return 'Free';
  const symbol = app.currency === 'USD' ? '$' : '\u20ac';
  return `${symbol}${Number.isInteger(app.price) ? app.price : app.price.toFixed(2)}`;
}

export function odooAppJsonLd(app) {
  const url = `https://mithahara.com${odooAppHref(app)}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    url,
    downloadUrl: app.storeUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Odoo 19.0',
    softwareVersion: app.version,
    description: app.summary,
    creator: { '@id': 'https://mithahara.com/#organization' },
    offers: {
      '@type': 'Offer',
      price: app.price,
      priceCurrency: app.currency,
      availability: 'https://schema.org/InStock',
      url: app.storeUrl,
    },
  };
}
