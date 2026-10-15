// GENERATED FILE - do not edit by hand.
//
// Written by Odoo-Apps/tools/gen_site_data.py from dashboard.json and each
// module's static/description/index.html. Edit the listing, then re-run the
// generator; editing here forks the copy away from what the store actually
// serves.
//
// Store snapshot: 2026-10-15T04:15:07+00:00

export const odooApps = [
  {
    "tech": "mh_access_management",
    "slug": "access-management",
    "name": "Access Management",
    "summary": "Eleven access tools in one app: who can do what on every model, field and menu rules, bulk group and company changes, a change log, API keys, session control and safe offboarding",
    "tagline": "Eleven access tools in one app, from who-can-do-what across every model to safe offboarding",
    "intro": [],
    "features": [
      {
        "heading": "What it does",
        "body": [
          "Eleven separate access-control apps, merged into one module. You install it once, it adds one Access Management menu, and every tool below is under it.",
          "Nothing here changes a permission on its own. The reports report; every bulk action shows you the exact list of what it will change before it changes anything."
        ]
      },
      {
        "heading": "Seeing what access actually is",
        "body": [
          "Access Explorer sweeps every internal user against every model and resolves what each one can really read, write, create and delete — implied groups and record rules already combined, because it asks Odoo the same way Odoo asks itself. It flags the two over-grants nobody spots by inspection: a rule left without a group, which applies to everybody, and a grant with no record rule narrowing it, where access to the model is access to every row.",
          "Record Rule Preview answers the question you have before you save a rule: how many records does this actually leave a chosen user? Counted for real against the database, not estimated.",
          "Access Change Log keeps the history — every change to a group, an access right or a record rule, and who made it."
        ]
      },
      {
        "heading": "Changing it without a hundred clicks",
        "body": [
          "Access Rights Bulk Edit and Group Membership Bulk apply model access and group membership across many rows at once. Multi-Company Access grants or revokes company access for many users at once, and shows the default-company moves and group changes Odoo makes on its own before you commit them.",
          "Field Access Rules hides or locks any field for the groups you choose, enforced server side rather than in the view, so it holds for imports and the API too.",
          "Access Config Migration exports groups, access rights and record rules from one database and imports them into another, which is how a staging database stops disagreeing with production."
        ]
      },
      {
        "heading": "The accounts themselves",
        "body": [
          "API Key Inventory lists every key in the database with its owner, its expiry and when it was last used. Session Control sets an idle timeout per group and shows the sessions open right now, with the ability to end one.",
          "User Offboarding Check lists everything still pointing at a user before you archive them — scheduled actions, open activities, assigned records, API keys — and what breaks if you archive without reassigning first."
        ]
      },
      {
        "heading": "Why one app and not eleven",
        "body": [
          "Bought separately these are eleven installs and a considerably larger bill. They also overlap in practice: whoever needs a record-rule preview needs the change log, and every one of them eventually needs offboarding."
        ]
      }
    ],
    "scope": [
      "It does not replace a security review by somebody who knows your business. Access Explorer excludes the superuser deliberately — it bypasses every rule by design, so including it would report full access to everything and bury the findings that matter.",
      "Warehouse-specific access rules are deliberately not in here. They need the Inventory app, and an access product should not force Inventory onto a database that does not use it. That stays a separate module."
    ],
    "requires": [],
    "price": 392.1,
    "manifestPrice": 399.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "base",
      "mail"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_access_management",
    "screenshots": [
      "screenshot_explorer.png",
      "screenshot_plan.png"
    ],
    "copyWords": 509,
    "hasVideo": true,
    "youtubeId": "QgmiA2KkCt4",
    "externalPage": null
  },
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
    "price": 163.48,
    "manifestPrice": 69.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "mh_meta_odoo_connector"
    ],
    "paidDepends": [
      {
        "tech": "mh_meta_odoo_connector",
        "name": "Meta Odoo Connector",
        "price": 99.0
      }
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_meta_auto_scale_engine",
    "screenshots": [
      "screenshot_account_group.png",
      "screenshot_scaling_profile.png",
      "screenshot_run_log.png",
      "screenshot_clone_ledger.png"
    ],
    "copyWords": 312,
    "hasVideo": true,
    "youtubeId": "C4yo2wPGTDM",
    "externalPage": null
  },
  {
    "tech": "mh_drive_attachments",
    "slug": "google-drive-attachments",
    "name": "Google Drive Attachments",
    "summary": "Google Drive as a provider for the chatter cloud storage Odoo 19 already ships - large chatter attachments move to a Drive folder instead of the filestore",
    "tagline": "Move Odoo attachments out of the filestore into a Google Drive folder, using Odoo 19 own cloud storage migration - Drive is the provider Odoo does not ship",
    "intro": [],
    "features": [
      {
        "heading": "Drive, added to the cloud storage Odoo already has",
        "body": [
          "Odoo 19 ships cloud storage for Google Cloud Storage and Azure Blob, free, in Community — but not for Google Drive. This adds Drive to that same provider list, so the settings page, the migration cron and the progress report you already have start filling a Drive folder instead."
        ]
      },
      {
        "heading": "Attachments leave the filestore, and keep working",
        "body": [
          "Pick the models in Odoo's own cloud storage settings and its migration cron moves those attachments into your Drive folder. Opening one afterwards still works exactly as before."
        ]
      },
      {
        "heading": "Your Google credentials never reach a browser",
        "body": [
          "Odoo can have the browser upload large files straight to a cloud provider, because a bucket can issue a one-shot signed URL. Drive has no such thing — every call needs the account's token, and Odoo's uploader copies whatever headers it is given into the browser request. So uploads here run on the server only, and that browser path is switched off while Drive is the provider."
        ]
      },
      {
        "heading": "Downloads still obey Odoo's access rights",
        "body": [
          "Drive files stay private. Opening an attachment streams it back through Odoo, so the same record rules that decided who could read it before still decide now. The alternative — a shareable Drive link — would make every migrated file readable by anyone who has the URL."
        ]
      },
      {
        "heading": "Reversible, and it says so before you switch away",
        "body": [
          "Any file can be pulled back out of Drive into Odoo, and changing provider while Drive attachments are still in use is refused rather than quietly leaving them unreachable."
        ]
      }
    ],
    "scope": [
      "It cannot see files it did not create. The module asks Google for the drive.file scope, which limits it to its own uploads. Documents already sitting in your Drive stay where they are. Adopting those needs the full drive scope, which puts the app through Google's OAuth verification and a yearly security assessment.",
      "It does not sync back. Renaming or moving a file inside Drive does not update Odoo. This is one directional on purpose: two way sync makes a deletion destructive at both ends, and a folder tidied up in Drive should not quietly remove an Odoo attachment.",
      "New large attachments do not go straight to Drive. They land in Odoo first and the migration cron moves them afterwards. Odoo's browser upload path would need your Google token in the browser of everyone who attaches a file, so it is switched off while Drive is the provider.",
      "Downloads use your server's bandwidth. They pass through Odoo rather than redirecting the browser to Google. That is what keeps them private and subject to Odoo's access rights, but the bytes do travel through your server.",
      "It does not choose what gets migrated. Odoo's own cron decides that: the models you select, above the minimum file size, older than seven days, and not on models whose code reads the bytes. Odoo generated files such as reports and Sign documents are outside its scope, not this module's.",
      "It covers chatter attachments, not the whole filestore. Odoo 19’s cloud_storage is scoped to files attached through the chatter, above a minimum that defaults to 20 MB. Binary fields such as product images and company logos are never in scope, and Odoo excludes every model whose own code reads the bytes — which in Community means account.move , account.payment , hr.employee , hr.expense , hr.leave and hr.applicant . So invoices, bills, payments, employee files, expense receipts and CVs stay on local disk. If moving the entire filestore is what you need, this is not that app."
    ],
    "requires": [],
    "price": 149.0,
    "manifestPrice": 149.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "cloud_storage",
      "cloud_storage_migration"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_drive_attachments",
    "screenshots": [
      "screenshot_settings.png"
    ],
    "copyWords": 616,
    "hasVideo": true,
    "youtubeId": "n0_3AehpwSA",
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
    "price": 146.42,
    "manifestPrice": 149.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_gdpr_retention",
    "screenshots": [
      "screenshot_rule.png"
    ],
    "copyWords": 227,
    "hasVideo": true,
    "youtubeId": "94Z_6sknEi4",
    "externalPage": null
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
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you buy it."
    ],
    "requires": [
      "Odoo 19 Community or Enterprise. No dependency beyond base, and nothing leaves your server. Restricted to Settings administrators, since the report itself describes who can reach what."
    ],
    "price": 145.0,
    "manifestPrice": 149.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_access_explorer",
    "screenshots": [
      "screenshot_review.png"
    ],
    "copyWords": 338,
    "hasVideo": true,
    "youtubeId": "oDm7UjsrWzk",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise, no other module needed. It restricts fields, not records - which rows a user sees is record rules, a different question. The superuser is never restricted, so crons and upgrades keep working."
    ],
    "price": 99.0,
    "manifestPrice": 99.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.15",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_field_access_rules",
    "screenshots": [
      "screenshot_rules.png",
      "screenshot_rule.png"
    ],
    "copyWords": 371,
    "hasVideo": true,
    "youtubeId": "4EpcRtlghUU",
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
      }
    ],
    "scope": [
      "No column order or width - Odoo does not expose either per user, and claiming it would mean fighting the renderer on every draw. It does not touch the columns a view always shows, and it does not change what anyone is allowed to see."
    ],
    "requires": [
      "Odoo 19 Community or Enterprise. Depends only on base and web, and nothing leaves your server. Layouts are managed by Settings administrators; everyone else simply gets the result."
    ],
    "price": 99.0,
    "manifestPrice": 99.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.12",
    "license": "OPL-1",
    "depends": [
      "base",
      "web"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_list_view_layouts",
    "screenshots": [
      "screenshot_layout.png"
    ],
    "copyWords": 357,
    "hasVideo": true,
    "youtubeId": "_jn7KswDh-k",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise, no other module needed. It restricts records, not fields - which columns a user may read is Field Access Rules ."
    ],
    "price": 97.29,
    "manifestPrice": 99.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.12",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_record_rule_preview",
    "screenshots": [
      "screenshot_preview.png"
    ],
    "copyWords": 347,
    "hasVideo": true,
    "youtubeId": "V5A-tt9Yk0o",
    "externalPage": null
  },
  {
    "tech": "mh_session_control",
    "slug": "session-control",
    "name": "Session Control",
    "summary": "Log users out after an idle time you set per group, and see and end the sessions that are open right now",
    "tagline": "Log users out after an idle time you set per group, and see and end the sessions that are open right now",
    "intro": [
      "Odoo has one inactivity limit for the whole database - the sessions.max_inactivity_seconds system parameter, a week unless somebody sets it. The admin, the accountant and the warehouse terminal all get the same number, which is the wrong answer to give an auditor asking why the terminal is still logged in at midnight.",
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
      }
    ],
    "scope": [
      "The last-seen stamp is written at most once a minute per session, not on every request - a write per request across a whole database to store a timestamp would cost more than the feature is worth. So a timeout can overrun by up to a minute. The check also runs inside a guard that swallows its own errors, because code on every request that can raise is code that can take a database offline."
    ],
    "requires": [
      "Odoo 19 Community or Enterprise, no other module needed. The superuser is never logged out, so crons and upgrades keep working. It does not restrict where people log in from and it is not a login history."
    ],
    "price": 97.29,
    "manifestPrice": 99.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.15",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_session_control",
    "screenshots": [
      "screenshot_rules.png",
      "screenshot_sessions.png"
    ],
    "copyWords": 367,
    "hasVideo": true,
    "youtubeId": "bjnw1R8BgUE",
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
    "price": 97.29,
    "manifestPrice": 99.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_snapchat_ads_launcher",
    "screenshots": [
      "screenshot_campaign.png"
    ],
    "copyWords": 354,
    "hasVideo": true,
    "youtubeId": "pI-rzAO3BEI",
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
    "price": 96.34,
    "manifestPrice": 99.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_google_ads_launcher",
    "screenshots": [
      "screenshot_campaign.png",
      "screenshot_keywords.png",
      "screenshot_ads.png"
    ],
    "copyWords": 396,
    "hasVideo": true,
    "youtubeId": "7-tujViJGtA",
    "externalPage": null
  },
  {
    "tech": "mh_meta_odoo_connector",
    "slug": "meta-odoo-connector",
    "name": "Meta Odoo Connector",
    "summary": "Meta Ads in Odoo: manage Facebook and Instagram campaigns, ad sets, creatives and Lead Ads beside your CRM. Uses your own system user token, so no App Review is needed.",
    "tagline": "",
    "intro": [
      "Meta Odoo Connector connects to your own Meta Business Manager with a System User access token you generate yourself - no Meta App Review, no OAuth app submission, no waiting on an approval queue. Once connected, you get the full campaign lifecycle inside Odoo: sync your existing campaigns, build ad sets, creatives and ads, publish them, control budget and bid strategy, target an audience, pause or delete anything, clone a winning setup, and pull spend/performance insights for any date range - all through the real Meta Marketing API."
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
    "price": 96.34,
    "manifestPrice": 99.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "base",
      "crm"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_meta_odoo_connector",
    "screenshots": [
      "screenshot_connection.png",
      "screenshot_campaigns.png",
      "screenshot_adset_targeting.png",
      "screenshot_ad_creative.png"
    ],
    "copyWords": 393,
    "hasVideo": true,
    "youtubeId": "ZsTgOVQVe5I",
    "externalPage": "/apps/meta-odoo-connector"
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
    "price": 96.34,
    "manifestPrice": 99.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_microsoft_ads_launcher",
    "screenshots": [
      "screenshot_campaign.png"
    ],
    "copyWords": 358,
    "hasVideo": true,
    "youtubeId": "U4CcE_tnDQc",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise. Requires AI Agent Guardrails , which registers which logins are agents. It does not decide for you and does not restrict what the agent may read. The approval records themselves are never held - holding a change to them would need approving, and nobody could approve the first one."
    ],
    "price": 96.31,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "mh_ai_agent_guardrails"
    ],
    "paidDepends": [
      {
        "tech": "mh_ai_agent_guardrails",
        "name": "AI Agent Guardrails",
        "price": 49.0
      }
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_ai_agent_approvals",
    "screenshots": [
      "screenshot_requests.png"
    ],
    "copyWords": 318,
    "hasVideo": true,
    "youtubeId": "yAYZrAMsg58",
    "externalPage": null
  },
  {
    "tech": "mh_multi_company_access",
    "slug": "multi-company-access",
    "name": "Multi-Company Access",
    "summary": "Grant or revoke access to many companies for many users at once, with the default company moves and the group changes Odoo makes by itself shown before anything is saved",
    "tagline": "Grant or revoke multiple users' company access at once, previewing default-company moves and Odoo's group changes.",
    "intro": [],
    "features": [
      {
        "heading": "Bulk grant or revoke company access",
        "body": [
          "Grant or revoke access to many companies for many users at once."
        ]
      },
      {
        "heading": "Preview default-company and group changes",
        "body": [
          "See the default-company moves and the automatic group changes Odoo will perform before the change is written."
        ]
      },
      {
        "heading": "Find stranded defaults and emptied users",
        "body": [
          "Identify users whose default company would fall outside their allowed set and users this change would leave with no company."
        ]
      },
      {
        "heading": "Plan first, apply second",
        "body": [
          "Work out the change and read what it would do, then apply it as a separate step. A plan whose selection has moved since is refused rather than applied."
        ]
      },
      {
        "heading": "Open the affected users from the plan",
        "body": [
          "Open the affected users directly from the plan to inspect or edit them before applying."
        ]
      }
    ],
    "scope": [
      "It does not give different access rights in different companies. Odoo groups are global - a Sales Manager is a Sales Manager in every company - and this app does not change that. It cannot be done safely: Odoo caches a user's group membership per user with the context deliberately stripped, and a user can have several companies active at once, so anything rewriting groups on a company switch would hand a second browser tab the wrong rights. What this changes is which companies a user may work in.",
      "It changes visibility, not history. Revoking a company does not touch the records somebody already created there. It changes what they can reach from now on.",
      "It leaves companies it was not asked about alone. Only the companies named in the change move. A bulk tool that rewrote the whole list would drop access nobody mentioned, and the person who lost it would have no way to find out why."
    ],
    "requires": [
      "Odoo 19 Community or Enterprise, no other module needed. Third-party apps install on Odoo.sh or On-Premise only — they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 86.61,
    "manifestPrice": 89.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_multi_company_access",
    "screenshots": [
      "screenshot_plan.png"
    ],
    "copyWords": 296,
    "hasVideo": true,
    "youtubeId": "_2yqsolYhZg",
    "externalPage": null
  },
  {
    "tech": "mh_approvals",
    "slug": "approval-requests",
    "name": "Approval Requests",
    "summary": "Ask for something and keep the record of who agreed: approval types with named approvers, a minimum number of them, and every decision stored against the person who made it",
    "tagline": "Ask for something and keep the record of who agreed: approval types with named approvers, a minimum number of them, and every decision stored against the person who made it",
    "intro": [],
    "features": [
      {
        "heading": "Define approval types and approvers",
        "body": [
          "Create named approval types, add the people who may approve, and set how many of them must agree before a request is approved"
        ]
      },
      {
        "heading": "Record who decided and when",
        "body": [
          "Every decision on a request is stored against the person who made it, records the decision taken, and captures the date and time it was made"
        ]
      },
      {
        "heading": "Submit requests and track approvals",
        "body": [
          "Submit requests for approval and see how many approvals are required and how many have been given, with the request state available for review"
        ]
      },
      {
        "heading": "Approve, refuse, cancel or reset requests",
        "body": [
          "Approve or refuse a request you were asked about. A request can be cancelled while it is still open, and reopened if it was cancelled - but never once it has been decided."
        ]
      },
      {
        "heading": "Nobody approves their own request",
        "body": [
          "An approval somebody gave themselves is not an approval, so this refuses it rather than recording it. One refusal ends the request outright, instead of leaving it in everyone else’s list waiting for approvals that cannot change the outcome."
        ]
      }
    ],
    "scope": [
      "It does not gate other records. This is a standalone request. It does not stop a purchase order being confirmed or an invoice being posted. Gating an existing document is a different job, and Purchase Approvals does that one for purchase orders.",
      "Approvers are the people you named. There is no approval by manager, by department or by amount, and no delegation when somebody is away. Say so when you set the types up.",
      "The approvers are copied onto the request when it is submitted. Not read from the type when somebody clicks approve. Otherwise editing the type's approver list next year would quietly rewrite who was entitled to approve a decision already made, and the record would stop being the truth."
    ],
    "requires": [],
    "price": 79.0,
    "manifestPrice": 79.0,
    "currency": "USD",
    "category": "Human Resources",
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_approvals",
    "screenshots": [
      "screenshot_request.png"
    ],
    "copyWords": 323,
    "hasVideo": true,
    "youtubeId": "Ghhsqzbm3Lo",
    "externalPage": null
  },
  {
    "tech": "mh_sale_commission",
    "slug": "sales-commission",
    "name": "Sales Commission",
    "summary": "Sales commission on invoice or payment for salespeople and external agents: rules by product, category and sales team, monthly settlement to vendor bills, commission report",
    "tagline": "Commission for salespeople and external agents, earned on the invoice or on the payment, and paid out on one vendor bill per person per period.",
    "intro": [
      "Commission worked out on a confirmed sales order is commission on money that has not been invoiced, let alone collected, and a spreadsheet of who earned what is out of date the day a credit note arrives.",
      "This app computes commission from the invoice itself — per invoice line, per salesperson and agent, on the untaxed amount — follows that invoice through payment, credit notes, reset to draft and cancellation, and turns each period into one draft vendor bill per person."
    ],
    "features": [
      {
        "heading": "Rules by product, category and sales team",
        "body": [
          "Each plan has a default rate and rules by product, product category (sub-categories included) and sales team. The most specific rule wins: a product beats a category, a sub-category beats its parent, a sales team narrows either one, and equally specific rules are decided by their order in the list."
        ]
      },
      {
        "heading": "Due on the invoice, or on the payment",
        "body": [
          "Each plan picks its trigger. On an “Invoice posted” plan, commission is due on the invoice date. On an “Invoice paid” plan it waits until the invoice is In Payment or Paid, and is dated on the payment. An invoice that a credit note cleared counts as settled, so both sides net to zero."
        ]
      },
      {
        "heading": "Salespeople and external agents",
        "body": [
          "Salespeople earn on invoices where they are the Salesperson. Agents are contacts: set them on the customer, change them on a sales order, and the invoice carries them. Each salesperson and each agent sits on one active plan per company, so their rate never depends on which plan was found first."
        ]
      },
      {
        "heading": "Credit notes and resets are counted once",
        "body": [
          "A credit note against an invoice claws back from the same people at the rate that invoice paid them, even if the plan has changed since. Reset, re-post or recompute an invoice and its unsettled commission is rebuilt, never duplicated. Commission already on a vendor bill is never rewritten: if its invoice is reset or cancelled, a clawback line is deducted from the next settlement."
        ]
      },
      {
        "heading": "One vendor bill per person per period",
        "body": [
          "Settle Commissions takes a period and, if you like, some recipients, and creates one draft vendor bill per person with your commission product and its expense account. Where clawbacks outweigh new commission it creates a vendor refund instead. Cancel or delete the bill and its lines are due again."
        ]
      },
      {
        "heading": "Statement, report, and who sees what",
        "body": [
          "Each settlement prints as a PDF statement of every invoice line behind it and exports to Excel. The Commission Report shows every line by recipient and month as a list, pivot or graph. Salespeople see only their own commission; Sales Administrators set the plans and Invoicing users settle them. Plans, lines and settlements each belong to one company."
        ]
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise; installs Odoo’s own Sales app (sale). Third-party apps install on Odoo.sh or On-Premise only — they cannot be installed on Odoo Online (SaaS).",
      "It does not pay commission on margin or on sales orders, and has no targets, volume tiers or manager overrides. It does not run payroll: a salesperson is paid through a vendor bill to their own contact, in your company currency. Invoices posted before you install it earn nothing until you select them and run Recompute Commission. An invoice that groups several sales orders takes its salesperson and agents from the first order, as Odoo does for the salesperson. A vendor credit note against a commission bill does not release its lines — cancel the bill instead."
    ],
    "price": 79.0,
    "manifestPrice": 79.0,
    "currency": "USD",
    "category": "Sales/Sales",
    "version": "19.0.1.0.1",
    "license": "OPL-1",
    "depends": [
      "sale"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_sale_commission",
    "screenshots": [
      "screenshot_statement.png"
    ],
    "copyWords": 472,
    "hasVideo": true,
    "youtubeId": "V6duS_HLgWE",
    "externalPage": null
  },
  {
    "tech": "mh_cookie_consent_enforcer",
    "slug": "cookie-consent-enforcer",
    "name": "Cookie Consent Enforcer",
    "summary": "Hold analytics and marketing scripts back until the visitor consents to that category, script by script on any Odoo website",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise with Website. Installs the free Cookie Consent Banner , which shows the banner and keeps the record. This is a technical control, not legal advice - which scripts belong in which category, and what your policy says, remain yours."
    ],
    "price": 69.0,
    "manifestPrice": 69.0,
    "currency": "USD",
    "category": "Website",
    "version": "19.0.1.0.14",
    "license": "OPL-1",
    "depends": [
      "website",
      "mh_cookie_consent_banner"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_cookie_consent_enforcer",
    "screenshots": [
      "screenshot_trackers.png"
    ],
    "copyWords": 300,
    "hasVideo": true,
    "youtubeId": "XXyIypFwTvY",
    "externalPage": null
  },
  {
    "tech": "mh_stock_valuation_report",
    "slug": "stock-valuation-report",
    "name": "Stock Valuation Report",
    "summary": "Inventory valuation report for any period: opening stock, receipts, issues and closing value per product, by warehouse and category, in PDF and Excel",
    "tagline": "Inventory valuation for any period: opening stock, received, issued and closing value, per product.",
    "intro": [
      "Odoo 19 removed the stock valuation layer and, with it, the Valuation view under Inventory > Reporting. In Community, what is left is a single-date reconciliation by accounting account that no menu opens.",
      "This report puts back the question every month end asks: what was the stock worth on the first, what came in, what went out, and what is it worth now — per product."
    ],
    "features": [
      {
        "heading": "Opening and closing are Odoo’s own figures",
        "body": [
          "The report reads Odoo’s own valuation at the first and the last second of the period — the same computation Odoo itself uses — so standard, average and FIFO costing and lot valuation come out exactly as Odoo books them. Nothing is recalculated."
        ]
      },
      {
        "heading": "Every row reconciles",
        "body": [
          "Received and issued carry the value Odoo recorded on each stock move. Whatever changed the value without a move — a cost update, a landed cost — sits in its own Other column, so opening + received − issued + other = closing on every line."
        ]
      },
      {
        "heading": "By warehouse, location and category",
        "body": [
          "Filter to one or more warehouses or internal locations, sub-locations included, and to product categories, sub-categories included. A filtered value is pro-rated by quantity, which is how Odoo itself values a warehouse. Archived products that still hold stock are included — they are still on your balance sheet."
        ]
      },
      {
        "heading": "PDF and Excel, grouped by category",
        "body": [
          "Print a PDF with category subtotals and a grand total, or export the same rows to Excel for the month-end file."
        ]
      },
      {
        "heading": "Your month ends at your midnight",
        "body": [
          "Period boundaries follow your time zone. Odoo’s own valuation treats a bare date as the end of that day in UTC, which moves a month end by hours anywhere east or west of Greenwich."
        ]
      },
      {
        "heading": "It says what it found",
        "body": [
          "A short summary states the change over the period, the largest value changes with no stock move behind them, and any product whose quantity does not reconcile — rather than leaving you to spot it in the rows."
        ]
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise with Inventory; installs Odoo’s own Inventory valuation module (stock_account). Third-party apps install on Odoo.sh or On-Premise only — they cannot be installed on Odoo Online (SaaS).",
      "It only reads: it posts no journal entries and changes no valuation. Stock moved between your own warehouses is not valued by Odoo, so in a report filtered to one warehouse that transfer shows as quantity with no value, and its value effect lands under Other. Stock you hold on consignment for someone else is left out, as Odoo leaves it out of your valuation. Only Inventory Administrators can run it, matching Odoo’s own rule for who sees stock value."
    ],
    "price": 69.0,
    "manifestPrice": 69.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.4",
    "license": "OPL-1",
    "depends": [
      "stock_account"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_stock_valuation_report",
    "screenshots": [
      "screenshot_valuation.png"
    ],
    "copyWords": 342,
    "hasVideo": true,
    "youtubeId": "LLB1_ZdBRyg",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise with Sales - Timesheets. It reads only: nothing is invoiced, changed or written back, and it has no opinion about whether the work should have been billed - only that it has not been."
    ],
    "price": 68.86,
    "manifestPrice": 69.0,
    "currency": "USD",
    "category": "Project",
    "version": "19.0.1.0.15",
    "license": "OPL-1",
    "depends": [
      "sale_timesheet"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_unbilled_work",
    "screenshots": [
      "screenshot_unbilled.png"
    ],
    "copyWords": 340,
    "hasVideo": true,
    "youtubeId": "WdJ8bg27kqw",
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
      }
    ],
    "scope": [
      "Recorded at the point Odoo verifies the key, so the timestamp reflects real traffic rather than an intention. It is the one fact that separates a key you must not touch from a key you should have removed a year ago.",
      "A key is checked on every call the integration makes. The stamp is written at most once a minute, because a write per call would cost more than the fact is worth - so the count measures how many minutes a key was active in, not how many calls it made."
    ],
    "requires": [
      "Odoo 19 Community or Enterprise, no other module needed. It does not create keys or change their scope - that is Odoo's own screen and this does not get between you and it. It does not record what each call did; for an agent connected over MCP that is AI Agent Guardrails ."
    ],
    "price": 67.8,
    "manifestPrice": 69.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.13",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_api_key_inventory",
    "screenshots": [
      "screenshot_keys.png"
    ],
    "copyWords": 369,
    "hasVideo": true,
    "youtubeId": "eVOB0xn39Lg",
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
    "price": 67.14,
    "manifestPrice": 69.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.6",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_cash_application_matcher",
    "screenshots": [
      "screenshot_bank_lines.png",
      "screenshot_lumpsum_wizard.png",
      "screenshot_shortpay_wizard.png",
      "screenshot_deduction_reasons.png"
    ],
    "copyWords": 366,
    "hasVideo": true,
    "youtubeId": "AIkicIJK0ZM",
    "externalPage": "/apps/community-cash-reconciler"
  },
  {
    "tech": "mh_eudr_diligence",
    "slug": "eudr-due-diligence",
    "name": "EUDR Due Diligence",
    "summary": "Record the plots of land behind every lot of coffee, cocoa, soya, rubber, palm, cattle or wood, and check a shipment has the geolocation data an EU deforestation due diligence statement needs before it leaves",
    "tagline": "",
    "intro": [
      "REGULATION (EU) 2023/1115 • APPLIES TO LARGE OPERATORS SINCE 30 DEC 2025"
    ],
    "features": [
      {
        "heading": "EUDR compliance in Odoo, without the spreadsheet",
        "body": [
          "Record the plots of land behind every lot of coffee, cocoa, soya, rubber, palm, cattle or wood. Check the coordinates, the hectare threshold and the boundary before a container is cleared to leave.",
          "the Article 2(28) point-or-boundary threshold",
          "commodities: coffee, cocoa, soya, palm, rubber, cattle, wood",
          "a latitude past this is lat/long entered backwards",
          "refuse the despatch, record the gap, or do not check"
        ]
      },
      {
        "heading": "The coordinates are always the missing part",
        "body": [
          "Odoo knows the commodity and the quantity already. It has nowhere to put the plot — so the plot lives in a supplier's spreadsheet, and the day it is needed is the day the container is loaded. The rows below are the app's own screen.",
          "Every gap is named, not counted. An oversized plot carrying only a point says so. A latitude past 90 — the signature of lat and long entered the wrong way round — is caught on save, not at customs."
        ]
      },
      {
        "heading": "Kept outside Odoo",
        "body": [
          "Disconnected — agronomist coordinates sit in emails, shared folders and CSVs outside Odoo.",
          "Found on loading day — the despatch team goes looking for a plot reference while the lorry waits.",
          "Silently swapped axes — a latitude written as a longitude is invisible until a declarant rejects it.",
          "All or nothing — a hard block on incomplete data stops goods that had nothing wrong with them.",
          "Result: the data is assembled by hand, on the day it is least available."
        ]
      },
      {
        "heading": "Held in the module",
        "body": [
          "Entered once — a plot carries supplier, country, commodity, area, coordinates and period.",
          "Lots point at plots — a farm is entered once and every lot off it refers back.",
          "Checked on save — the four-hectare rule and the coordinate range, before anything ships.",
          "A gate you set — refuse the despatch, record the gap, or do not check. Receipts never block.",
          "Result: a due diligence statement assembled from data Odoo already holds."
        ]
      },
      {
        "heading": "The four-hectare rule, built in",
        "body": [
          "Article 2(28) allows a single point for a plot of four hectares or less and asks for the boundary above that — except cattle, where the geolocation is of the establishment, not a field. An oversized plot with only a point is reported incomplete; a cattle establishment of any size is not."
        ]
      },
      {
        "heading": "Inverted coordinate detection",
        "body": [
          "A latitude past 90 is the signature of latitude and longitude entered the wrong way round, which is the commonest way this data arrives broken. It is caught when the plot is saved."
        ]
      },
      {
        "heading": "A despatch gate at a strength you choose",
        "body": [
          "Refuse the despatch outright, let it through with the gap recorded on the transfer, or do not check at all. The default records it — a rule that halts the warehouse on day one gets switched off on day two."
        ]
      },
      {
        "heading": "What this app does",
        "body": [
          "✓ Hold plots: supplier, country, commodity, area, coordinates or boundary, production period",
          "✓ Link lots and serial numbers to the plots they came off",
          "✓ Mark products as one of the seven Annex I commodities",
          "✓ Check a plot against the four-hectare rule and its coordinates for range",
          "✓ Assemble, per delivery, the content a statement needs, and name every gap",
          "✓ Record or refuse a despatch that cannot be traced to a plot"
        ]
      },
      {
        "heading": "One container held at the port, against $69 once",
        "body": [
          "Demurrage at the large EU container ports runs into the hundreds per container per day, and an inspection hold adds administrative cost on top. The figures vary by port and contract, so check your own — this module is a one-off licence with no per-transaction fee.",
          "The plot register, and a delivery checked line by line — which lots trace to a complete plot, and for the ones that do not, whether the problem is a missing plot, an incomplete one, or a product with no lot tracking at all.",
          "Whether your products could carry plot data at all.",
          "Records whose company conflicts with their links.",
          "Four audits for what your database accumulates.",
          "Who can actually read, write and delete what."
        ]
      }
    ],
    "scope": [
      "— File anything. Statements go to the Commission's own system; this produces the content",
      "— Tell you whether the land was deforested — that is a satellite question, and answering it from an ERP would be a guess dressed as a finding",
      "— Classify countries by risk. The benchmarking is amended, and a frozen copy would be worse than none",
      "— Ship an Annex I code list, for the same reason. Your HS code is quoted as you entered it",
      "— Verify that a boundary is where its coordinates say it is",
      "Before you buy: needs Odoo 19 Community or Enterprise with Inventory and Purchase. Products in scope have to be tracked by lot or serial number — without that there is nothing to attach a plot to, and the app says so rather than reporting a gap it cannot explain."
    ],
    "requires": [],
    "price": 67.14,
    "manifestPrice": 69.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.15",
    "license": "OPL-1",
    "depends": [
      "stock",
      "purchase"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_eudr_diligence",
    "screenshots": [
      "screenshot_plots.png",
      "screenshot_statement.png"
    ],
    "copyWords": 824,
    "hasVideo": true,
    "youtubeId": "g4aPiYXQXeg",
    "externalPage": null
  },
  {
    "tech": "mh_menu_visibility",
    "slug": "menu-visibility",
    "name": "Menu Visibility",
    "summary": "Hide menus from the roles that do not need them, many menus and many groups at once, with a preview of what one person would be left seeing and a one-click way to put it all back",
    "tagline": "Hide menus from the roles that do not need them, many menus and many groups at once, with a preview of what one person would be left seeing and a one-click way to put it all back",
    "intro": [],
    "features": [
      {
        "heading": "Change many menus and groups at once",
        "body": [
          "Choose many menus and many user roles in a single operation and include each menu's subtree when needed so you can hide whole branches together."
        ]
      },
      {
        "heading": "Preview impact on a real user",
        "body": [
          "See how many menus a specific user can see now and how many they would see after the change, so you can judge the impact before you apply it."
        ]
      },
      {
        "heading": "Plan shows what will actually change",
        "body": [
          "Produce a plan that lists the exact menu entries the operation would touch and gives counts of items it would change versus items already correct."
        ]
      },
      {
        "heading": "Apply, open or revert with one click",
        "body": [
          "Apply the planned restrictions, open the affected menus after applying, or revert the change to restore previous access with a single action."
        ]
      },
      {
        "heading": "Keep a record of what changed and why",
        "body": [
          "Each change keeps the plan it was applied from, a note saying who asked and when, and whether it is still in force, so the decision can be read back a year later."
        ]
      }
    ],
    "scope": [
      "It hides menus, it does not secure them. A hidden menu's action can still be reached by anyone who knows the URL, and the records behind it stay readable unless model access rights and record rules say otherwise. Those are the real controls, and there are separate apps here for both. Use this to take clutter away from a role, not to keep a determined user out.",
      "A folder goes when its last visible entry does. Odoo only counts a menu visible if it, or something under it, carries an action the person may open. Restrict the last such entry and the folders above it disappear too. The plan measures that for a named user rather than guessing at it.",
      "It does not hide buttons, tabs or fields. Fields are their own job and Field Access Rules does that one server-side. Buttons and tabs are not covered here at all."
    ],
    "requires": [],
    "price": 67.14,
    "manifestPrice": 69.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.6",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_menu_visibility",
    "screenshots": [
      "screenshot_plan.png"
    ],
    "copyWords": 355,
    "hasVideo": true,
    "youtubeId": "lrrmIBO3GF4",
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
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you buy it."
    ],
    "requires": [
      "Odoo 19 Community or Enterprise, with Accounting installed. This app also installs the free 1099 Threshold Check , which holds the per-year threshold table.",
      "Not affiliated with or endorsed by the IRS. This is a reporting aid, not tax advice - check the result with whoever files for you."
    ],
    "price": 67.14,
    "manifestPrice": 69.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "account",
      "mh_1099_threshold_check"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_1099_reporting",
    "screenshots": [
      "screenshot_run.png"
    ],
    "copyWords": 423,
    "hasVideo": true,
    "youtubeId": "pJlrKBZGX-4",
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
      }
    ],
    "scope": [
      "Every record that named them still names them. Every activity assigned to them is still assigned to them. Every scheduled action set to run as them is still set to run as them. None of it is reassigned, and nothing tells you any of it was there.",
      "One person, everything still attached to them, and the two categories that stop something happening called out separately. Each line opens the records it counted.",
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [
      "Odoo 19, Community or Enterprise. Needs Discuss (for activities). Administrator access, since the check reads across every model in the database. Nothing is written to any record it finds."
    ],
    "price": 67.14,
    "manifestPrice": 69.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.17",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_user_offboarding",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 319,
    "hasVideo": true,
    "youtubeId": "2pmq2pRXXZU",
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
    "price": 57.41,
    "manifestPrice": 59.0,
    "currency": "USD",
    "category": "Accounting/Localizations",
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "l10n_ro"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_ro_saft_exporter",
    "screenshots": [
      "screenshot_declaration.png"
    ],
    "copyWords": 205,
    "hasVideo": true,
    "youtubeId": "KTmlx96P0IA",
    "externalPage": null
  },
  {
    "tech": "mh_abc_analysis",
    "slug": "abc-analysis",
    "name": "ABC Analysis",
    "summary": "ABC classification of inventory by outgoing stock value, with XYZ analysis of demand variability (ABC XYZ matrix), per warehouse and category, saved on the product, in PDF and Excel",
    "tagline": "Which few products carry most of your outgoing value, and how steady their demand is, per warehouse and category, saved on the product",
    "intro": [
      "A few products carry most of the value that leaves your warehouse, and many carry almost none. Odoo Community does not tell you which is which, so the cycle count, the reorder review and the decision to stop buying something are all made without it. ABC Analysis ranks every product by what actually went out, classes it A, B or C, and adds an XYZ class for how steady its demand is.",
      "Pick a period, a warehouse and a category if you want one, press Run, and read the result as a list, a pivot, a graph, a PDF or an Excel file. Save the classes on the products to filter and group the product list by them, and to filter Physical Inventory."
    ],
    "features": [
      {
        "heading": "The definitions, stated exactly",
        "body": [
          "Basis: done stock moves from an internal location to a customer or to production inside the period, valued at the cost Odoo recorded on each move. Internal transfers, scrap, inventory adjustments, returns to a vendor and receipts are not demand and are left out, and so are consumables.",
          "Period: any date range, with day boundaries in your time zone. The default is the last 12 whole calendar months.",
          "ABC: products ranked by that value, largest first. A product is A while the products ranked above it hold less than 80% of the total, B while they hold less than 95%, and C after that. The product that crosses the line is still in the class it started in, so A is the fewest products that reach 80%. Both limits are yours to change. A product with stock on hand and no outgoing move in the period is C.",
          "XYZ: the coefficient of variation (standard deviation divided by the mean) of each product's outgoing quantity per calendar month across the period, with months that had no demand counting as zero. X is below 0.5, Y is below 1.0, Z is 1.0 or above, and both limits are yours to change. A product with no demand at all is Z."
        ]
      },
      {
        "heading": "Per warehouse and category",
        "body": [
          "Choose one or more warehouses and only stock leaving them counts, and only the stock they hold. Choose one or more product categories (sub-categories are included) to classify a range on its own. Leave both empty for the whole company. Quantities are counted in each product's own unit, so a dozen sold is twelve."
        ]
      },
      {
        "heading": "The ABC / XYZ matrix",
        "body": [
          "The nine cells, with the number of products and the outgoing value in each, are a pivot on screen and a table in the PDF and the Excel file. The A products with Z demand are named in the findings: high value and hard to plan, the first to watch for stock-outs."
        ]
      },
      {
        "heading": "Class saved on the product",
        "body": [
          "Press Save Classes on Products and the ABC class, the XYZ class and the date are written onto each product, separately for each company. Filter and group the product variants by them, open an ABC Classes list under Inventory, Reporting, and filter Physical Inventory to A, B or C items to count the A items more often. Products outside the analysis keep the class they had."
        ]
      },
      {
        "heading": "PDF and Excel",
        "body": [
          "A landscape PDF with the class totals, the matrix and the ranked list, and an Excel file with the ranked list and the matrix. Both carry the period, the scope and the limits you used."
        ]
      },
      {
        "heading": "Monthly refresh",
        "body": [
          "Tick Refresh monthly on an analysis and, once a month, it moves its period forward to the latest whole calendar months of the same length, runs again and saves the classes on the products. Analyses without the tick are never touched."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Inventory managers who decide what to count and how often, buyers who decide where reorder attention goes, and anyone asked \"which products actually matter?\""
        ]
      }
    ],
    "scope": [
      "It does not net customer returns off the demand, and it does not forecast anything. It does not change reordering rules, counting schedules or any cost. Value is what Odoo recorded on the move, so a product with no cost has no value and falls to C. The stock held figure is quantity on hand times the product's current cost, not what it was bought for. It reads moves and quants and writes only the classes you choose to save. Only Inventory Administrators can use it, matching Odoo's own rule for who sees stock value."
    ],
    "requires": [
      "Odoo 19 and 20 Community or Enterprise with Inventory and its valuation module (stock_account). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online."
    ],
    "price": 49.0,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "stock_account"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_abc_analysis",
    "screenshots": [
      "screenshot_abc.png"
    ],
    "copyWords": 748,
    "hasVideo": true,
    "youtubeId": "oYQ20R1TJ50",
    "externalPage": null
  },
  {
    "tech": "mh_attachment_versioning",
    "slug": "attachment-versioning",
    "name": "Attachment Versioning",
    "summary": "Document version control for attachments: a same-name upload becomes a new version, with version history and one-click restore",
    "tagline": "Upload a file with the same name to a record and it becomes the next version of that file - the chatter shows the current one, and every earlier version is one click away.",
    "intro": [
      "A revised contract or drawing gets attached to the record again under the same file name. Odoo keeps both side by side, nothing says which one is current, and sooner or later somebody opens - or sends - the old one. This app turns that second upload into a new version of the first, with the history kept and a Restore button on every older version. People keep attaching files exactly as they do today."
    ],
    "features": [
      {
        "heading": "New versions without a new habit",
        "body": [
          "When a file is attached to a record under a name that record already holds, it becomes the next version (v2, v3 ...) of that file. It happens wherever Odoo attaches a file to a record: the chatter's Attach files button, files on a message you send or log, and any other attachment created on a record by Odoo or by code. Files that were already there before you installed the app are numbered oldest first when the next copy arrives."
        ]
      },
      {
        "heading": "The chatter shows the current version",
        "body": [
          "The file list at the top of the chatter lists each file once, newest version only, with a small badge such as v3 once a file has more than one version. Messages keep the exact file they were sent with; inside a message an older version carries an \"old\" badge."
        ]
      },
      {
        "heading": "A Versions dialog",
        "body": [
          "Click the badge to see every version of the file: its number, the file name with a download link, who uploaded it, when, and its size. The current version is marked."
        ]
      },
      {
        "heading": "One-click restore",
        "body": [
          "Restore makes an older version the current one again. Nothing is deleted or renumbered, the chatter updates without a reload, and the next upload continues the numbering. Restoring needs write access to the record; seeing the history needs read access."
        ]
      },
      {
        "heading": "Deleting the current version",
        "body": [
          "If the current version is deleted, the newest remaining version takes its place instead of the whole history coming back as separate files."
        ]
      },
      {
        "heading": "Scope you control",
        "body": [
          "Binary-field values (a product's image, for example), links, files in Discuss channels and the PDFs Odoo saves itself while printing a report are never versioned. In General Settings, Attachment Versioning, you can also name models to leave out entirely, so files on those records behave exactly as in standard Odoo."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Administrators of databases where people attach contracts, quotes, drawings, certificates or price lists to records and upload them again when they change - and who would rather not rely on file names like \"final_v2_REAL.pdf\"."
        ]
      }
    ],
    "scope": [
      "It matches the exact file name on the same record. \"Contract v2.pdf\" is a different file from \"Contract.pdf\", not a new version of it, and a file on another record is never a version of this one.",
      "It keeps every version. There is no limit and no automatic clean-up, so old versions keep taking storage until you delete them. Older versions also still appear in Odoo's own attachment list under Settings, Technical.",
      "It does not compare or merge contents, and it does not stop duplicates: uploading the same file again simply makes another version. Duplicate File Guard (free) blocks byte-identical uploads and works alongside this app - when both are installed, the same name and the same content is still blocked.",
      "It is not a document management system. There are no folders, approvals, locks or check-out; it versions the files Odoo already attaches to records."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise. Needs the Discuss / chatter module (mail) only, which every Odoo database has. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online."
    ],
    "price": 49.0,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_attachment_versioning",
    "screenshots": [
      "screenshot_versions.png"
    ],
    "copyWords": 591,
    "hasVideo": true,
    "youtubeId": "gkC2dMWDym0",
    "externalPage": null
  },
  {
    "tech": "mh_data_cleaning",
    "slug": "data-cleaning",
    "name": "Data Cleaning",
    "summary": "Tidy a text field across every record at once - trim spaces, fix capitalisation, format phone numbers - with every value shown old against new before anything is written",
    "tagline": "Tidy a text field across every record at once - trim spaces, fix capitalisation, format phone numbers - with every value shown old against new before anything is written",
    "intro": [],
    "features": [
      {
        "heading": "Seven ways to tidy a field",
        "body": [
          "Trim the spaces at the ends, collapse repeated spaces inside, Capitalise Every Word or just the first letter, force upper or lower case, or format a phone number."
        ]
      },
      {
        "heading": "Preview every change before writing",
        "body": [
          "Show each current value next to the computed new value so you can confirm edits before anything is written."
        ]
      },
      {
        "heading": "Apply or revert planned edits",
        "body": [
          "Write the planned edits in a single operation or revert applied edits; the tool records the run state and reports how many will change, were already correct, or were skipped."
        ]
      },
      {
        "heading": "Target specific records and fields",
        "body": [
          "Limit a run to a chosen dataset, pick the specific text field to tidy, and restrict the operation with a search domain; you can open the affected records from the plan."
        ]
      },
      {
        "heading": "Normalise phone numbers by country",
        "body": [
          "Reformat telephone values against the record’s own country, falling back to the company’s. A number that cannot be read is left exactly as it is rather than rewritten into a guess."
        ]
      }
    ],
    "scope": [
      "It does not find or merge duplicate records. Merging safely means rewriting every reference that points at the record being removed, and Odoo only does that for contacts, through a wizard written for that one case. A generic version that deleted the loser without reassigning its references would leave orphans behind. This does the half that can be done safely.",
      "It changes stored data, so it keeps the old values. Upper and lower case destroy the original capitalisation - re-running the opposite action does not bring it back. Every run stores the exact prior value and one button restores it.",
      "It does not run on a schedule. Every run is planned and reviewed before it writes. A cron that rewrites stored text unattended is not something to hand anyone.",
      "On a translated field it writes one language. The language you are working in. The others keep what they have, and the plan says so before you apply it."
    ],
    "requires": [],
    "price": 49.0,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.6",
    "license": "OPL-1",
    "depends": [
      "base",
      "phone_validation"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_data_cleaning",
    "screenshots": [
      "screenshot_plan.png"
    ],
    "copyWords": 352,
    "hasVideo": true,
    "youtubeId": "AnmfBL7kRBY",
    "externalPage": null
  },
  {
    "tech": "mh_pos_commission",
    "slug": "pos-commission",
    "name": "POS Commission",
    "summary": "Commission for POS cashier and salesperson: add salesperson on pos orderline, commission by product and category, commission report and vendor bills",
    "tagline": "A salesperson on every POS order line, commission by product and category, and one vendor bill per salesperson each period.",
    "intro": [
      "Odoo's Point of Sale records who ran the register, not who sold each item. A shop that pays its staff commission on what they sell ends up reconciling the till against a spreadsheet every month, and refunds make it worse. Odoo Community has no commission in Point of Sale at all.",
      "This app puts a salesperson on every order line, works out commission when the order is paid, takes it back when the goods are refunded, and turns a period's commission into one vendor bill per salesperson."
    ],
    "features": [
      {
        "heading": "A salesperson on every line",
        "body": [
          "A Salesperson button on the order screen sets the salesperson of the selected line, and Salesperson for all lines in the Actions menu sets every line at once. New lines default to the cashier. The name shows under the line on the order and on the receipt, and Orders Analysis can be grouped and filtered by salesperson."
        ]
      },
      {
        "heading": "Rules by salesperson, product and category",
        "body": [
          "A rule is a percentage for a salesperson, a product, a product category (sub-categories included), or a mix. The most specific rule wins: a product rule beats a category rule, a sub-category beats its parent, and a rule for the salesperson beats one for everybody. A rate of 0 keeps a product, such as gift cards, out of commission."
        ]
      },
      {
        "heading": "Earned when the order is paid",
        "body": [
          "Each line earns its salesperson commission on the untaxed amount after discount, in company currency. The rate is stored on the commission line, so changing a rule later does not rewrite what was already earned."
        ]
      },
      {
        "heading": "Refunds take it back",
        "body": [
          "A refund adds negative commission lines for the salesperson who sold the refunded line, at the rate the sale paid. A partial refund takes back its share only."
        ]
      },
      {
        "heading": "Settle to vendor bills",
        "body": [
          "Settle Commission takes a period and, if you wish, some salespeople, or you select lines in the list. It creates one draft vendor bill per salesperson, to the work contact on their employee record. Settled lines are locked and cannot be settled twice. Cancel or delete the bill and its lines go back to To settle. A salesperson whose refunds outweigh their sales is carried to the next period instead of getting a negative bill."
        ]
      },
      {
        "heading": "Commission lines",
        "body": [
          "A list and a pivot of every commission line by salesperson, point of sale, product, product category and month, filtered to what is still to settle. Use Odoo's standard export for Excel."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops, cafes and showrooms that pay staff a share of what they sell at the till, and want the figure and the bill to come from the same orders."
        ]
      }
    ],
    "scope": [
      "No commission on margin, targets, tiers by volume or manager overrides, and no split of one line between two salespeople. Orders paid before the app was installed earn nothing. Commission is clawed back by a POS refund only, not by an invoice credited outside the Point of Sale. There is no payroll integration and no PDF statement: payment is a vendor bill to the employee's work contact, and Excel comes from Odoo's list export."
    ],
    "requires": [
      "Odoo 19 and Odoo 20, Community or Enterprise, with Point of Sale, Employees and Invoicing. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS). The salesperson list is the employees Odoo makes available at the till: on Odoo 19 every employee of the company unless the point of sale limits them under its employee access settings, and on Odoo 20 the employees assigned to the point of sale. Creating vendor bills needs the Accounting Billing access right."
    ],
    "price": 49.0,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "point_of_sale",
      "pos_hr",
      "account"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_commission",
    "screenshots": [
      "screenshot_commission_lines.png"
    ],
    "copyWords": 527,
    "hasVideo": true,
    "youtubeId": "Gs4FasulVvY",
    "externalPage": null
  },
  {
    "tech": "mh_pos_order_import",
    "slug": "pos-order-import",
    "name": "POS Order Import",
    "summary": "Import POS orders from Excel or CSV file: bulk import multiple POS orders with order lines and payments, every row checked before anything is created",
    "tagline": "Import POS orders from an Excel or CSV file, with their lines and payments, after a dry run that lists every problem and creates nothing.",
    "intro": [
      "Moving to Odoo from another till, or typing in sales from a day the register was offline, means getting past orders into Point of Sale. Odoo's POS Orders list has no Import button, and a generic import would only write table rows: it would not run Odoo's own tax, paid-state and session logic. The usual answer is a developer and a script, and a script that gets one payment wrong writes bad figures into your books.",
      "This app adds an Import Orders wizard. You give it a file with one row per order line, press Check File, and read the result. Nothing is created by a check. When the file is clean, Import creates the orders as Paid orders with their original dates and receipt numbers."
    ],
    "features": [
      {
        "heading": "Check first, import second",
        "body": [
          "Check File reads the whole file and lists every order with a status: Ready, Skipped (already in Odoo) or Problem. It reports an unknown or ambiguous product or customer, a payment method that is not on that point of sale, a quantity of 0 or less, a bad date or number, an order with no payment, and payments that do not add up to the order total as Odoo computes it. A check writes no order, payment, session, stock or accounting record and uses no order numbers. Import is only offered after a check with no problems, repeats the check, and imports nothing if any order has a problem: you fix the file and check again, so you never get half a file."
        ]
      },
      {
        "heading": "One row per order line, matched by name",
        "body": [
          "Columns are found by header: Reference, Date, Customer, Product, Quantity, Unit Price, Discount, Payment Method, Payment Amount, in any order. Rows with the same Reference are one order. A row can carry a line, a payment, or both, so an order paid half in cash and half by card is two payment rows. Product is matched on internal reference, then barcode, then exact name, and a name that fits two products is refused rather than guessed. Customer is matched on exact name or email. A Download Sample File button gives you the format. Excel (.xlsx, first sheet) and CSV (comma, semicolon or tab separated) are read."
        ]
      },
      {
        "heading": "Taxes and totals come from Odoo",
        "body": [
          "Each line takes the product's customer taxes as they are today, through the point of sale's fiscal position or the customer's, and the order's taxes and total are worked out by Odoo's own Point of Sale tax code, not by this app. Unit Price follows Odoo's convention: tax included for a price-included tax, otherwise tax excluded. The dry run shows each order's total next to its payments, and an order whose payments differ from that total is refused."
        ]
      },
      {
        "heading": "Into a new session, or an open one",
        "body": [
          "Either the app opens a new session on a point of sale that has none, or you pick a session that is already open. Closed sessions cannot be chosen. In a new session no stock moves and no delivery orders are created, and cost and margin are not computed, because the goods left long ago. Tick Close and post the session after the import and Odoo closes it the way it closes any session, posting its normal journal entry. In a session that is already open, stock follows that session's normal rules, and nothing is closed. Either way the app leaves a note on the session with the file attached."
        ]
      },
      {
        "heading": "Safe to run twice",
        "body": [
          "An order whose Reference is already a Receipt Number on that point of sale is skipped and shown as Skipped, so importing the same file again, or a file with some orders already entered, does not double anything. Other points of sale are not affected."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops and restaurants moving to Odoo POS from another system who want their sales history in, and teams recovering sales taken while the till was offline, who need the figures to be right before they land in Accounting."
        ]
      },
      {
        "heading": "What is created, exactly",
        "body": [
          "For each imported order: one POS order in the Paid state, dated and numbered from the file, with its lines and its payments. Odoo names the order from the point of sale and the part of the Reference after its last hyphen (MS-10412 becomes Furniture Shop - 10412) and keeps the full Reference as the Receipt Number. The order's employee is the user who ran the import, not the original cashier. In a new session nothing else exists until you close it. When you close it, Odoo creates the session journal entry, dated the day you close, and the orders move to Done. The app creates no invoices and no customers, products or payment methods. Stock moves are created only if you import into an open session whose own rules create them."
        ]
      }
    ],
    "scope": [
      "No refunds or negative quantities, no tips, no invoices, no lot or serial numbers, no combo products, no restaurant tables. It creates no customer, product or payment method: they must exist, and a row that names one that does not is a problem. It does not update an order that is already in Odoo. Prices are in the point of sale's currency. A new import session creates no stock moves or deliveries and does not compute cost or margin. The session closing entry is dated the day the session is closed, not the order dates. On a point of sale with a cash payment method, closing books the imported cash to the cash journal like any session. File dates are read in your timezone, and a date with no time means 12:00. On Odoo 20, stock moves in an open session exist only if the Point of Sale Stock module (pos_stock) is installed. Importing needs the Point of Sale Administrator access right. Reading .xlsx needs the Python package openpyxl on the server (Odoo's own import uses it too); CSV needs nothing extra."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise; installs Odoo's own Point of Sale app (point_of_sale). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 49.0,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "point_of_sale"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_order_import",
    "screenshots": [
      "screenshot_dry_run.png"
    ],
    "copyWords": 1003,
    "hasVideo": true,
    "youtubeId": "dCoQHVFa-Ws",
    "externalPage": null
  },
  {
    "tech": "mh_pos_orderline_location",
    "slug": "pos-orderline-location",
    "name": "POS Orderline Location",
    "summary": "Select stock location on the POS order line: view available quantity by location and generate location wise picking for each line",
    "tagline": "Choose the stock location of each Point of Sale order line, see the available quantity per location, and get one delivery per location.",
    "intro": [
      "Odoo's Point of Sale takes every sale from one source location, the one set on the operation type. A shop with a back room and a shop floor, or a second store that sells from its own shelves, has to fix the stock by hand after every sale that came from the other location. With this app the cashier picks the location on the order line, and the delivery follows."
    ],
    "features": [
      {
        "heading": "Pick the location on the line",
        "body": [
          "List the internal locations a Point of Sale may sell from on its configuration, tab Line Locations. With a list set, the cashier gets a Location button for the selected order line. Its popup shows each allowed location with the available quantity of that product (on hand minus reserved, sub-locations included) and says when the line asks for more than a location has. Choosing a short location is still allowed, as Odoo's own Point of Sale never blocks a sale on stock. The chosen location is shown under the line."
        ]
      },
      {
        "heading": "One picking per location",
        "body": [
          "When the order is validated, or at session closing if your company updates stock at closing, Odoo's delivery is created once per source location: one picking per location, with the moves of its lines, done as usual. Lines with no location chosen keep Odoo's behaviour and leave from the source location of the operation type. At session closing the lines of all the orders of the session are grouped, so you get one picking per location for the session, not one per order."
        ]
      },
      {
        "heading": "Refunds go back where they came from",
        "body": [
          "A refund line takes the location of the line it refunds, and its return comes back into that location, one return picking per location. This holds even if the location was removed from the Point of Sale's list since the sale."
        ]
      },
      {
        "heading": "Lines stay separate",
        "body": [
          "Two lines of the same product from different locations are never merged in the cart. Lot-tracked products are taken from the chosen location, and its sub-locations, as Odoo does."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops, cafes and counters that sell over the counter from more than one stock location, a back room and a shop floor, two stores, a warehouse and a shop, and want the stock to leave the right location at the till instead of being corrected afterwards."
        ]
      }
    ],
    "scope": [
      "It does not choose a location for the cashier and does not reserve stock: the cashier picks, and the move is done at validation. A choice never makes the app take stock from another location, so a short location goes negative, as in Odoo's Point of Sale. Ship-later orders are routed by Odoo's own rules and ignore the line location. Self-order and kiosk orders have no location choice and use the default. The location is not printed on the customer receipt. Locations must be internal locations of the company of the Point of Sale."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise; installs Odoo's own Point of Sale and Inventory apps. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 49.0,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "point_of_sale",
      "stock"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_orderline_location",
    "screenshots": [
      "screenshot_line_locations.png"
    ],
    "copyWords": 500,
    "hasVideo": true,
    "youtubeId": "c8pa-Ph8emY",
    "externalPage": null
  },
  {
    "tech": "mh_website_request_quote",
    "slug": "request-a-quote",
    "name": "Request a Quote",
    "summary": "Website quote request for the shop: quote only products hide the price and show Add to quote, customers request quote from the cart, you get a quotation (website RFQ), not a payment",
    "tagline": "Some products in your Odoo shop are sold on request. Mark them Quote Only: the price and Add to Cart go, and a cart holding one is sent to your sales team as a real quotation.",
    "intro": [
      "You sell some products at a list price and others at a price you agree with each buyer. Odoo's shop has nothing between \"show the price and take payment\" and \"hide the button\". A price-less product leaves the visitor with a Contact Us link and your team with an email to retype into a quotation.",
      "Request a Quote adds one checkbox to the product form. A product with Quote Only ticked shows \"Price on request\" and an Add to quote button. It goes into the normal shop cart next to products that do have a price. When the cart holds any quote-only product, the visitor, a guest or a logged-in customer, sends the cart as a quote request instead of paying. It arrives in Sales as a draft quotation, with the customer, the lines and the message they typed.",
      "Odoo 19 and 20, Community and Enterprise."
    ],
    "features": [
      {
        "heading": "How it differs from the free quote apps",
        "body": [
          "The free quote apps on the store each cover half of this. One switches the whole shop to quotes, so every product loses its price and a shop that also sells at list price cannot exist. Another adds a request button to a single product and logs it in a separate request record, not in Sales as a quotation.",
          "This app does both halves together. Quote-only and normal products live in one catalogue, one cart can hold both, and what reaches your team is a sale.order quotation that you price, send and confirm with the Sales tools you already use."
        ]
      },
      {
        "heading": "Quote Only, per product",
        "body": [
          "Tick Quote Only on the eCommerce tab of the product form. On the shop page the tile shows \"Price on request\" and has no Add to Cart button. On the product page the price is replaced by \"Price on request\", the button reads \"Add to quote\" and Buy Now is hidden. Untick it and the product sells normally again."
        ]
      },
      {
        "heading": "The price stays out of sight",
        "body": [
          "Beyond the shop and the product page, the price is left out of shop search suggestions, the product carousel snippet, the add-to-cart popup, the cart lines, the order summary and the structured data (JSON-LD) that search engines read. The shop's Price Range filter is bounded by the products that do have a price, so it cannot give away a quote-only price either."
        ]
      },
      {
        "heading": "One cart, no payment",
        "body": [
          "When a cart holds any quote-only product, it shows no total. Checkout reads \"Request quotation\", the step bar drops the Payment step and express checkout buttons are hidden. The customer fills in Odoo's usual address step. A guest becomes a contact on the quotation if your shop allows checking out as a guest, exactly as for a normal order. A last page lets them add an optional message to your team and send the request.",
          "The payment is refused on the server too, not only hidden: a cart with a quote-only product cannot be paid through the transaction route, whatever the page shows."
        ]
      },
      {
        "heading": "A real quotation for your team",
        "body": [
          "The cart becomes a draft quotation. The Salesperson is assigned the way Odoo assigns one to a web order (the website's salesperson, else the customer's), and a To-Do activity is scheduled for them, or for the sales team leader when there is no salesperson. The customer's message is logged on the quotation, and the order shows a Quote Request ribbon. Find them under Website > eCommerce > Orders > Quote Requests, or with the Website Quote Requests filter on Quotations.",
          "From there it is an ordinary quotation: set the prices, send it, and the customer accepts it the way they accept any quotation you send."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops that sell part of the catalogue at a negotiated price: B2B suppliers, made-to-order or configurable goods, installation and service packages, wholesale lines next to retail ones. If every product in your shop is sold on request, this works for you too, but the point of the app is the shop that has both."
        ]
      },
      {
        "heading": "Chasing quotes that go cold",
        "body": [
          "Quotation Aging is a free app from the same author. It counts open quotations into age bands with their value, and these requests are counted with the rest of your draft and sent quotations."
        ]
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 or 20, Community or Enterprise, with the eCommerce app (website_sale). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online."
    ],
    "price": 49.0,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "website_sale"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_website_request_quote",
    "screenshots": [
      "screenshot_shop.png",
      "screenshot_cart.png",
      "screenshot_quotation.png"
    ],
    "copyWords": 736,
    "hasVideo": true,
    "youtubeId": "6nG6wrro-DY",
    "externalPage": null
  },
  {
    "tech": "mh_store_locator",
    "slug": "store-locator",
    "name": "Store Locator",
    "summary": "Store finder with a map and list of your store locations: hours, directions, nearest store. Dealer locator, no Google Maps API key",
    "tagline": "A store finder page for your Odoo website: a map and list of your stores with hours, directions and nearest store sorting. No Google Maps API key.",
    "intro": [
      "Customers ask where your shops are, and the answer lives in a footer or a hand-made page with one map per address. This adds a /stores page to your website. Every store is an ordinary contact: tick Store, type the opening hours, add tags, give it coordinates and publish it. Visitors get a searchable list with a map beside it.",
      "The list, opening hours, search and directions links work without the map. The map is a bonus that appears only once the visitor has agreed to it."
    ],
    "features": [
      {
        "heading": "What it does",
        "body": [
          "A new \"Stores\" menu on your website points to /stores. The page lists every published store of the current website and company, in name order, with address, phone, email, opening hours and tags."
        ]
      },
      {
        "heading": "Where your visitors' data goes",
        "body": [
          "Map tiles are fetched by the visitor's browser from a tile server, which therefore sees the visitor's IP address. By default that server is OpenStreetMap's. So nothing about the map loads until the visitor has agreed:",
          "The visitor's position, used to sort by distance, stays in the browser. It is never sent to your server or to the tile server, and the map does not move to it. The Directions link sends nothing until a visitor clicks it, and then they are on Google Maps. The Geolocate button sends a store address to your geocoding provider, only when you click it.",
          "OpenStreetMap's tile servers are free but best effort, with no guarantee, and their usage policy asks busy sites to use another provider or their own server. If your site is busy, or your proxy sets a restrictive Referrer-Policy, put another tile server's URL in Settings. The URL must start with https:// and contain {z}, {x} and {y}."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Retailers, restaurants, workshops and dealer networks that run an Odoo website and want a store finder or dealer locator without a Google Maps API key or billing account."
        ]
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 or 20, Community or Enterprise, with the Website app and Odoo's Geolocation module (base_geolocalize, installed with this app). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online."
    ],
    "price": 49.0,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "website",
      "base_geolocalize"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_store_locator",
    "screenshots": [
      "screenshot_stores.png"
    ],
    "copyWords": 345,
    "hasVideo": true,
    "youtubeId": "Dp0Lb8S3hrI",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise, no other module needed. It does not undo changes for you - it tells you exactly what to undo. It does not restrict what the agent may read; that is Record Rule Preview and Field Access Rules . The superuser cannot be an agent - it bypasses access rules by design."
    ],
    "price": 48.16,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.12",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_ai_agent_guardrails",
    "screenshots": [
      "screenshot_agent.png",
      "screenshot_log.png"
    ],
    "copyWords": 368,
    "hasVideo": true,
    "youtubeId": "bipnHBtRO_U",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise, no other module needed. It records from the moment it is installed and cannot reconstruct what happened before - it does not pretend to. It logs access configuration, not what people did with the access."
    ],
    "price": 48.16,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.12",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_access_change_log",
    "screenshots": [
      "screenshot_changes.png"
    ],
    "copyWords": 339,
    "hasVideo": true,
    "youtubeId": "1TeQUJ4XMuU",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise, no other module needed. It grants access to a model, not to particular records or fields - which rows a user sees is Record Rule Preview , which columns they may read is Field Access Rules ."
    ],
    "price": 48.16,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.13",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_access_rights_bulk",
    "screenshots": [
      "screenshot_plan.png"
    ],
    "copyWords": 318,
    "hasVideo": true,
    "youtubeId": "WpsWa8j1PGI",
    "externalPage": null
  },
  {
    "tech": "mh_mcp_server",
    "slug": "mcp-server-for-odoo",
    "name": "MCP Server for Odoo",
    "summary": "MCP server exposing Odoo to Codex and other MCP clients - on the current 2026-07-28 revision, with an explicit list of what each connection may reach",
    "tagline": "MCP server exposing Odoo to Codex and other MCP clients - on the current 2026-07-28 revision, with an explicit list of what each connection may reach",
    "intro": [],
    "features": [
      {
        "heading": "Nothing is exposed until you list it",
        "body": [
          "The free MCP servers for Odoo hand the assistant the ORM and let access rights sort it out. That is reasonable for a person at a keyboard and poor for a model in a loop: access rights say what a user may do, and a model will do all of it. Here a profile names the models one connection may reach and at what access. The tool list the assistant receives is built from that profile, so the permitted models arrive as a fixed set of choices rather than something to find by trying."
        ]
      },
      {
        "heading": "The filter holds on writes, not just searches",
        "body": [
          "Narrow a model to the records you mean, and that filter is checked again on every write and delete by id. A filter enforced only on search is decoration: the assistant reads an id once and can change that record forever afterwards."
        ]
      },
      {
        "heading": "On the current revision of the protocol",
        "body": [
          "Implements revision 2026-07-28, which removed the initialize handshake, protocol-level sessions and the event stream, and made three request headers required and checked against the body. Clients that still open with the older initialize handshake, such as Codex CLI today, are served too, so the endpoint works with both. A ready-made Codex plugin with read-only Odoo skills is at github.com/Mithahara/odoo-codex-plugin."
        ]
      },
      {
        "heading": "Write limits and the change log come from Guardrails",
        "body": [
          "This does not carry its own write cap or record what changed, because that would be a second and weaker copy of an app we already ship. AI Agent Guardrails, which this requires, applies the limit and keeps the previous value of everything altered - and it does that in the ORM, so it holds for anything that login does, not only what arrives over MCP."
        ]
      },
      {
        "heading": "What was asked for, including what was refused",
        "body": [
          "Every call is recorded: the tool, the model, how many records, how long it took, and whether it was answered or refused. The refusals are the entries worth reading, because they are the ones that changed nothing and tell you what the assistant tried to do."
        ]
      }
    ],
    "scope": [
      "It is not an OAuth 2.1 resource server. The protocol's authorization section expects OAuth with a separate authorization server, discovery metadata and audience-bound tokens. This authenticates with an Odoo API key instead, which the specification allows for HTTP transports but does not describe. If your client insists on the OAuth flow, this is not the server for it.",
      "An ordinary API key opens it too. Keys minted here carry a scope that Odoo's normal RPC authentication refuses, so a key made for MCP cannot be turned around and used to drive XML-RPC. The reverse does not hold: Odoo treats an unscoped key as valid for every scope, so a global key belonging to the same user also works. The profile is the boundary - a login with no profile reaches nothing at all.",
      "It does not stream. Answers come back as one JSON response rather than an event stream. That is what the specification calls for when the result is ready at once, and current clients accept it, but a long-running tool cannot report progress.",
      "Tools only. No prompts and no resources. It does not run reports, post messages or call server actions either: those are ways to make something happen that a per-model permission cannot describe, and they are better refused than half-guarded.",
      "It does not widen anyone's rights. A profile narrows. Where Odoo's own access rules already refuse the user, ticking the box here changes nothing - the two controls compose, and the stricter one wins.",
      "On a multi-database Odoo you must name the database. A stateless request carries no session to read it from, so the database name has to be sent with the connection."
    ],
    "requires": [],
    "price": 48.16,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "mh_ai_agent_guardrails"
    ],
    "paidDepends": [
      {
        "tech": "mh_ai_agent_guardrails",
        "name": "AI Agent Guardrails",
        "price": 49.0
      }
    ],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_mcp_server",
    "screenshots": [
      "screenshot_profile.png",
      "screenshot_calls.png"
    ],
    "copyWords": 650,
    "hasVideo": true,
    "youtubeId": "nCPgpQ82gVU",
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
    "price": 47.69,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "website"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_a11y_auditor",
    "screenshots": [
      "screenshot_issues.png"
    ],
    "copyWords": 226,
    "hasVideo": true,
    "youtubeId": "Oq8yKSnLZIc",
    "externalPage": null
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
    "price": 47.69,
    "manifestPrice": 49.0,
    "currency": "USD",
    "category": "Manufacturing",
    "version": "19.0.1.0.13",
    "license": "OPL-1",
    "depends": [
      "quality"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_spc_cpk_analytics",
    "screenshots": [
      "screenshot_spc.png"
    ],
    "copyWords": 249,
    "hasVideo": true,
    "youtubeId": "l0T-RJGKNWs",
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
    "price": 39.31,
    "manifestPrice": 40.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.6",
    "license": "OPL-1",
    "depends": [
      "base_setup",
      "html_editor"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_llm_gateway",
    "screenshots": [
      "settings_screenshot.png"
    ],
    "copyWords": 288,
    "hasVideo": true,
    "youtubeId": "tNQBcdPYmWk",
    "externalPage": "/apps/byok-gateway"
  },
  {
    "tech": "mh_email_cc_bcc",
    "slug": "email-cc-bcc-rules",
    "name": "Email CC BCC Rules",
    "summary": "Real email CC BCC on Odoo mail - a Bcc field on templates, the composer and mail.mail that actually reaches the recipient, plus standing rules to blind-copy an archive address automatically",
    "tagline": "Real email CC BCC on Odoo mail - a Bcc field on templates, the composer and mail.mail that actually reaches the recipient.",
    "intro": [],
    "features": [
      {
        "heading": "A Bcc that actually arrives",
        "body": [
          "Odoo's mail server already handles Bcc correctly - it builds the delivery list from the To, Cc and Bcc addresses, then strips the Bcc line before sending. What is missing is any field to put an address in. Adding one by hand does not work either: Odoo checks every delivery address against the message's own recipients and quietly discards the rest, so a Bcc added as a header alone is thrown away. The mail is marked sent and nothing is logged. This puts the address where both steps can see it."
        ]
      },
      {
        "heading": "Blind, and tested for it",
        "body": [
          "There is a test that sends a message through a stand-in mail server and checks the address is in the delivery list and absent from every header the recipients receive. For a feature whose entire purpose is being invisible, \"it says sent\" is not evidence."
        ]
      },
      {
        "heading": "Sent once, not once per recipient",
        "body": [
          "A message to several people becomes several emails inside Odoo, one each, so every copy can be personalised. A Bcc added to all of them would deliver one copy per recipient - six recipients, six copies in the archive mailbox. This attaches it to exactly one, the way Odoo itself handles Cc."
        ]
      },
      {
        "heading": "Standing rules for an archive address",
        "body": [
          "Always blind-copy an address on messages sent from a chosen record type - an archive mailbox, a shared inbox, a compliance address - and narrow it to only the records you mean. A rule that cannot be read is skipped rather than stopping the message, and a filter that cannot be parsed is refused when you save it, not discovered at send time."
        ]
      },
      {
        "heading": "On templates, the composer and the mail itself",
        "body": [
          "A Bcc box in the send-by-email composer, and a Bcc field on mail templates where placeholders work - so an automated email can blind-copy an address taken from the record it is about."
        ]
      }
    ],
    "scope": [
      "It does not Bcc other people's chatter replies. Only messages you send through the composer, a template, or a standing rule. A colleague replying in the chatter is not silently blind-copied to anyone.",
      "It does not thread replies from a blind-copied address. Someone reading a Bcc is reading a message the record does not know they received. Quietly attaching their reply to the thread would show everyone following it that they were copied - the one thing a Bcc must never do. Their reply arrives in their mailbox and stays there.",
      "It does not change who Odoo notifies. Followers, subscriptions and recipients are untouched. The Bcc is added after Odoo has decided who the message goes to, so nothing about your existing notifications moves.",
      "It does not send a Bcc-only message. Odoo treats a mail with no visible recipient as a failure before it reaches this module. A Bcc rides along with a real message; it cannot replace one.",
      "Rules match one record type each. A rule covers one model - contacts, or invoices, or tasks - not a mixture. Cover several by adding a rule for each, which also keeps the filter on each one readable."
    ],
    "requires": [],
    "price": 39.0,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Productivity/Discuss",
    "version": "19.0.1.0.6",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_email_cc_bcc",
    "screenshots": [
      "screenshot_rules.png"
    ],
    "copyWords": 533,
    "hasVideo": true,
    "youtubeId": "Ih32rSivNZY",
    "externalPage": null
  },
  {
    "tech": "mh_fsn_analysis",
    "slug": "fsn-analysis",
    "name": "FSN Analysis",
    "summary": "Inventory movement analysis: fast moving, slow moving and non moving products (FSN classification) by how often each is issued, per warehouse and category, with the stock value in each class",
    "tagline": "Fast moving, slow moving and non moving products, by how often each is issued, with the stock value in each class.",
    "intro": [
      "Some products leave the warehouse every week, some twice a year, some not at all — and all of them sit in the same stock report. FSN analysis (fast, slow, non-moving) puts every product in one of three classes by how often it is issued, and shows the money held in each. Odoo Community has no FSN classification."
    ],
    "features": [
      {
        "heading": "What it does",
        "body": [
          "Choose a period in months, a warehouse and a category if you want one, and the two thresholds. Press Run Analysis. Every product with stock on hand, or issued in the period, gets a class, a count of issues, issues per month, the quantity issued, the date it was last issued, the quantity on hand and its value at cost."
        ]
      },
      {
        "heading": "The definitions, exactly",
        "body": [
          "An issue is one done stock move out of an internal location to a customer, into production, or to a transit location (another warehouse or company). A move picked from several bins or lots is one issue. Internal transfers, receipts, inventory adjustments, scrap, returns to vendors and dropships are not issues.",
          "Issues per month is the number of issues in the period divided by the number of months. The period is the last 12 months by default, counted back from the moment you run the analysis.",
          "Fast moving: at least 1 issue per month, or the threshold you set. Slow moving: issued at least once in the period and at or above the slow threshold, which is 0 by default so any issue counts. Non-moving: everything else, including products not issued at all in the period. Both thresholds and the period are yours to change on every analysis."
        ]
      },
      {
        "heading": "Stock value per class",
        "body": [
          "The analysis shows the number of products and the stock value of the fast, slow and non-moving classes; the PDF adds the share of the total each holds, and the findings give the non-moving and slow shares. Value is the quantity on hand today times the product's cost, in the analysis company's currency. The largest non-moving holdings are named in the findings."
        ]
      },
      {
        "heading": "Not the same question as Inventory Aging Report",
        "body": [
          "Aging measures how long ago something last left, in buckets of days. FSN measures how often a product is issued over a period. A product shipped once yesterday after a year of silence is 0-30 days in the aging report and slow moving here. A product shipped forty times last year and not since March is old in aging and fast here, if the period still covers the forty. Use aging to find stock that has stopped; use FSN to find products that never really moved."
        ]
      },
      {
        "heading": "List, pivot, graph, PDF and Excel",
        "body": [
          "The product list opens grouped by class, with filters for each class and for stock on hand, and groups by category. A pivot shows value and issues by class, and a graph shows value by class. Print a PDF with the class summary and a table of the non-moving products, or export every product to Excel."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Warehouse and inventory managers, buyers and finance leads who want to know which products deserve shelf space and working capital, and which do not, before a purchasing round or a stock take."
        ]
      }
    ],
    "scope": [
      "It does not forecast demand and does not change reordering rules, products or stock. The class lives in the analysis, not on the product. Customer returns are not netted off the issues. A product received recently and not yet issued is non-moving, the same as one bought years ago, so read the last-issued date next to the class. Stock value is at cost, not at sale price, and is today's stock, not stock at the end of the period. Products with no stock and no issue in the period are left out."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with Inventory (stock). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online. Inventory users can run it; each company sees only its own analyses."
    ],
    "price": 39.0,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_fsn_analysis",
    "screenshots": [
      "screenshot_fsn.png"
    ],
    "copyWords": 643,
    "hasVideo": true,
    "youtubeId": "zo4t_aW68ss",
    "externalPage": null
  },
  {
    "tech": "mh_stock_aging_report",
    "slug": "stock-aging-report",
    "name": "Inventory Aging Report",
    "summary": "Stock aging report (stock ageing, inventory ageing): how long stock has sat unsold and the capital tied up in each age bucket, per warehouse and category",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise with Inventory. Installs the free Dead Stock Check , which gives the headline figure. It reads existing moves and quants and writes nothing back to your inventory, and it does not tell you what to do with the stock - discount, return or write off remains a judgement call."
    ],
    "price": 39.0,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.17",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_stock_aging_report",
    "screenshots": [
      "screenshot_report.png"
    ],
    "copyWords": 324,
    "hasVideo": true,
    "youtubeId": "5gZIX1k6XNo",
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
    "price": 39.0,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_accounting_journal_control",
    "screenshots": [
      "screenshot_payment.png"
    ],
    "copyWords": 287,
    "hasVideo": true,
    "youtubeId": "NI-1QUI0XoI",
    "externalPage": null
  },
  {
    "tech": "mh_label_sheet_layouts",
    "slug": "label-sheet-layouts",
    "name": "Label Sheet Layouts",
    "summary": "Print Labels with a custom label size: product labels and barcode labels on your label sheet - rows, columns and margins in mm, start position on a used sheet, label per page for roll label printing, barcode or QR code",
    "tagline": "Print product labels on the sheet you actually have: set rows, columns and margins in mm, start on a part-used sheet, one label per page for rolls, barcode or QR.",
    "intro": [
      "Odoo's Print Labels window prints on a short list of fixed layouts: Dymo, 2 x 7, 4 x 7, 4 x 12 and ZPL. If the label stock you buy is any other size, the labels land across the cut lines, and the usual fix is a developer writing a new report. This app adds one more choice to that same window, Custom sheet, and you describe your stock in millimetres."
    ],
    "features": [
      {
        "heading": "Describe the sheet once",
        "body": [
          "A label sheet is a record: paper (A4, US Letter or a custom size in mm), rows and columns, label width and height, top and left margin, and the gap between columns and between rows. The form shows what is left over on the right and at the bottom, and refuses a layout that does not fit on the page. Four starter sheets are included (A4 with 21 labels, A4 with 24, US Letter with 30, and a 50 x 25 mm roll label). Treat them as starting points and check them against your stock."
        ]
      },
      {
        "heading": "Finish a part-used sheet, or print on a roll",
        "body": [
          "Start at Label skips the slots that are already used, counted left to right and then top to bottom, so a half-used sheet does not go in the bin. A sheet of one row and one column on a custom page size prints one label per page at the size of the label, which is what a roll label printer expects from its normal system driver."
        ]
      },
      {
        "heading": "It is Odoo's own window, so quantities and lots still work",
        "body": [
          "Custom sheet sits beside Dymo, 2 x 7 and the rest, on the Print Labels window that opens from a product or from a transfer. Copies, Operation Quantities from a receipt or delivery, one label per lot or serial number with the lot as the barcode, and the pricelist all come from Odoo, unchanged. The app only decides where each label goes on the page."
        ]
      },
      {
        "heading": "Barcode or QR, and what is on the label",
        "body": [
          "Each sheet chooses what a label shows: product name, internal reference, price (on Odoo 20 the Print With Price box in the window must also be ticked), the barcode (EAN-13 or EAN-8 when the value is valid, otherwise Code 128, or always Code 128) or a QR code, the digits under it, and the Extra Content typed in the window. Font size and the blank space inside each label are set per sheet. A barcode that would end up too short to scan is left off the label rather than printed unreadable."
        ]
      },
      {
        "heading": "Print a test sheet first",
        "body": [
          "Print Test Sheet draws every slot outlined and numbered, with the label size in each. Print it on plain paper and hold it against the label stock before you use real labels."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Warehouse and purchasing teams that print product or lot barcode labels on stock that is not one of Odoo's own sheet sizes, and anyone who has been cutting or re-buying label sheets to match Odoo."
        ]
      }
    ],
    "scope": [
      "It has no drag-and-drop label designer and no field picker beyond the switches above. It does not print directly to a printer and does not produce ZPL; the PDF goes through your browser and printer driver like any Odoo PDF, so print it at 100 percent (actual size) and use the test sheet to check your printer's own margins. It lays out labels in a regular grid of equal labels, so round or staggered layouts are not supported. The Lot/SN Labels choice on a transfer, and the location, package and packaging labels, keep Odoo's own formats. It was tested with Odoo's default PDF engine, wkhtmltopdf."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with Inventory (stock). Inventory Administrators create and edit label sheets under Inventory > Configuration > Products > Label Sheets; every internal user can print on them. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 39.0,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_label_sheet_layouts",
    "screenshots": [
      "screenshot_label_sheet.png"
    ],
    "copyWords": 633,
    "hasVideo": true,
    "youtubeId": "jw2miIwXGC0",
    "externalPage": null
  },
  {
    "tech": "mh_pos_sales_reports",
    "slug": "pos-sales-reports",
    "name": "POS Sales Reports",
    "summary": "POS sales report by cashier, payment method and session, profit and loss by product and category, top selling products, in PDF and Excel",
    "tagline": "Point of Sale sales by cashier, by session and by product, with a profit and loss that never counts a missing cost as margin.",
    "intro": [
      "Odoo 19 already prints a Sales Details report and ships an Orders Analysis pivot. Sales Details has no Excel export and no margin. Orders Analysis files an order paid partly in cash and partly by card under its first payment method only, and counts a line with no recorded cost as all margin.",
      "This app reads the same records Odoo keeps and lays them out for the questions a shop manager asks at the end of the day, the week and the month: who sold what, what came in by each payment method, which sessions came up short, and what the shop actually made."
    ],
    "features": [
      {
        "heading": "Every cashier, side by side",
        "body": [
          "Orders, refunds, gross sales, discounts, refunded and net sales for each cashier, across any date range and any number of Points of Sale, next to what each one took by payment method. An order paid half in cash and half by card is split exactly as it was paid."
        ]
      },
      {
        "heading": "The person who rang it up",
        "body": [
          "With Point of Sale employee login, the cashier is the employee Odoo records as Cashier on the order, so employees sharing one Odoo user each get a row of their own. Without employee login, it is the logged-in user."
        ]
      },
      {
        "heading": "A session report in one click",
        "body": [
          "A Sales Report button on the session form prints that session’s report; select several sessions in the list to print one report per session. Each session shows who opened it, its orders and net sales and, once it is closed, the expected cash, the counted cash and the difference Odoo recorded at closing."
        ]
      },
      {
        "heading": "Profit and loss by product and category",
        "body": [
          "Revenue excluding tax, the cost Odoo stored on each order line, margin and margin percentage, per product and per product category. Products are ranked by revenue, so the best sellers come first. A refund takes back both its revenue and its cost."
        ]
      },
      {
        "heading": "No margin on a cost that was never recorded",
        "body": [
          "A line with no cost — a product that has none, or a FIFO or average-cost product whose cost Odoo computes only when its session closes — has its revenue shown in a column of its own and left out of the margin. The report counts those lines and says why they have no cost."
        ]
      },
      {
        "heading": "Odoo’s own figures",
        "body": [
          "Order totals, payment amounts, the discount measure Odoo’s Sales Details uses, the cost stored on each line and the session’s own cash count — nothing is recalculated, so a session’s net sales and payments by method agree with Odoo’s Sales Details for the same session."
        ]
      },
      {
        "heading": "Your day, your currency",
        "body": [
          "Periods run from midnight to midnight in your time zone. A Point of Sale that sells in another currency is converted to the company’s at the rate Odoo stored on each order."
        ]
      },
      {
        "heading": "PDF and Excel for every report",
        "body": [
          "Print a landscape PDF that opens with a short summary of what stood out, then cashiers, sessions, categories and products; or export the same figures to an Excel workbook with a sheet for each."
        ]
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise with Point of Sale; nothing else to install. Third-party apps install on Odoo.sh or On-Premise only — they cannot be installed on Odoo Online (SaaS).",
      "It only reads: it posts nothing and changes no order, session or cost. Cash is counted per session, not per cashier, so cash differences are reported per session. Discounts are line discounts; a global discount is a product line of its own and is reported as one. Sales figures include tax; profit and loss figures exclude it. Only Point of Sale Administrators can run it, because it shows cost and margin. It adds nothing to the Point of Sale screen itself."
    ],
    "price": 39.0,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.1",
    "license": "OPL-1",
    "depends": [
      "point_of_sale"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_sales_reports",
    "screenshots": [
      "screenshot_report.png"
    ],
    "copyWords": 523,
    "hasVideo": true,
    "youtubeId": "fr1m0C2n6yE",
    "externalPage": null
  },
  {
    "tech": "mh_office_preview",
    "slug": "private-office-preview",
    "name": "Private Office Preview",
    "summary": "Attachment preview and document preview for DOCX and XLSX in chatter and file fields. Office preview and Excel preview in the browser - no file sent to Microsoft or Google.",
    "tagline": "Open DOCX and XLSX attachments in Odoo's own file viewer, rendered in the user's browser. No file is sent to Microsoft or Google, so it works on intranet and VPN servers.",
    "intro": [],
    "features": [
      {
        "heading": "What it does",
        "body": [
          "Odoo's file viewer shows PDFs, images, video and text. A Word or Excel attachment can only be downloaded, so people save it, open it in another program and come back. The free fix on the store sends every file to Microsoft's Office Online viewer, which needs a server reachable from the internet and hands your documents to a third party. This app renders DOCX and XLSX inside Odoo instead. The file is read from your Odoo server, drawn in the browser tab, and goes nowhere else."
        ]
      },
      {
        "heading": "Chatter attachments",
        "body": [
          "Click a Word or Excel file in any chatter and it opens in the same viewer that already shows PDFs and images, with the same next and previous arrows between files. Access is the same as for the download link: the viewer asks for the file the way the download button does, so anyone who cannot download it cannot preview it."
        ]
      },
      {
        "heading": "Attachment fields and file fields",
        "body": [
          "Fields that show attachments as small cards (many2many_binary, such as the attachments tab of an email template) only offered a download link. Their thumbnail now opens the viewer for anything it can show: DOCX, XLSX, PDF and images. Anything else keeps its download link. A binary file field gets a Preview button next to Download when the saved file is a DOCX, XLSX, PDF or image, judged by its file name. The button is hidden while the record has unsaved changes, because the file on the server may not be the one on screen."
        ]
      },
      {
        "heading": "Nothing leaves your server",
        "body": [
          "The document libraries ship inside the module: docx-preview (Apache-2.0) and JSZip (MIT), both loaded only when someone opens a preview. Excel files are drawn by the spreadsheet engine that Odoo Community already includes in its Spreadsheet module. There is no CDN and no external service. In our browser test the viewer made no request to any host other than the Odoo server."
        ]
      },
      {
        "heading": "Safe for files from outside",
        "body": [
          "A Word file is drawn inside a sandboxed frame that runs no script and blocks every network request. Embedded HTML parts of a DOCX are not rendered, and links other than http, https and mailto are removed. Excel files are opened read-only. A file over 10 MB, or a zip that is not a real workbook, shows a short message with a pointer to Download instead of freezing the tab."
        ]
      },
      {
        "heading": "Who this is for",
        "body": [
          "Admins of self-hosted, intranet or VPN Odoo servers who cannot, or will not, send customer contracts, price lists and budgets to Microsoft's online viewer, and users who are tired of downloading a file just to read it."
        ]
      }
    ],
    "scope": [
      "No PowerPoint (PPTX) preview. No legacy .doc or .xls files, and no OpenDocument files. The layout is approximate: this is a preview, not Word or Excel, so fonts, page breaks, list markers, charts and pictures can look different from the original, and comments and tracked changes are not shown. Excel formulas are recalculated in the browser by Odoo's spreadsheet engine, so a function that engine does not know can show an error. Previews are read-only: nothing is edited, converted or saved back. Files over 10 MB are not previewed. The attachment list inside the full-screen email composer is not changed."
    ],
    "requires": [
      "Odoo 19 or 20, Community or Enterprise, with the Discuss (mail) and Spreadsheet modules, which both ship with Odoo Community. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 39.0,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "mail",
      "spreadsheet"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_office_preview",
    "screenshots": [
      "screenshot_docx_preview.png",
      "screenshot_xlsx_preview.png"
    ],
    "copyWords": 564,
    "hasVideo": true,
    "youtubeId": "5_0rhoetNKI",
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
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "purchase"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_purchase_multi_level_approval",
    "screenshots": [
      "screenshot_tiers.png"
    ],
    "copyWords": 231,
    "hasVideo": true,
    "youtubeId": "4ci8k_dBuX0",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise with Inventory. It changes no rule and orders nothing - it reports what the rules would do against the demand you have had, and leaves the decision where it belongs."
    ],
    "price": 39.0,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.14",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_reorder_rule_audit",
    "screenshots": [
      "screenshot_audit.png"
    ],
    "copyWords": 355,
    "hasVideo": true,
    "youtubeId": "03nAYmHkGQ4",
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
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "sale_management"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_sale_order_power_tools",
    "screenshots": [
      "screenshot_order.png"
    ],
    "copyWords": 240,
    "hasVideo": true,
    "youtubeId": "Kxn1qGG6qho",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise with Project and Purchase. It changes nothing - no journal entries, no analytic lines, no orders. It has no opinion about what the budget should have been: it reports what has been committed, not whether committing it was wise. Projects with no analytic account are skipped."
    ],
    "price": 38.92,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Project",
    "version": "19.0.1.0.14",
    "license": "OPL-1",
    "depends": [
      "project",
      "purchase"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_project_cost_exposure",
    "screenshots": [
      "screenshot_exposure.png"
    ],
    "copyWords": 318,
    "hasVideo": true,
    "youtubeId": "mZFuv-o5q6w",
    "externalPage": null
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
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [
      "Odoo 19, Community or Enterprise. No dependencies beyond the base system. Administrator access on both databases."
    ],
    "price": 38.33,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_access_migration",
    "screenshots": [
      "screenshot_plan.png"
    ],
    "copyWords": 324,
    "hasVideo": true,
    "youtubeId": "jIFMc1kTjuU",
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
      }
    ],
    "scope": [
      "A retention period, set in Settings and applied by a nightly job. Two years by default. Zero keeps everything, which is a decision worth making on purpose rather than by leaving a box empty.",
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [
      "Odoo 19, Community or Enterprise. No dependencies beyond the base system. Administrator access to choose what is watched and to read the log."
    ],
    "price": 37.95,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "base_setup"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_field_change_log",
    "screenshots": [
      "screenshot_log.png",
      "screenshot_watch.png"
    ],
    "copyWords": 330,
    "hasVideo": true,
    "youtubeId": "K03FvPDZSiE",
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
    "price": 37.95,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_gdpr_breach_clock",
    "screenshots": [
      "screenshot_form.png"
    ],
    "copyWords": 268,
    "hasVideo": true,
    "youtubeId": "3hRUlkg_vwo",
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
    "price": 37.95,
    "manifestPrice": 39.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_breach_deadline_calc",
    "screenshots": [
      "screenshot_incident.png"
    ],
    "copyWords": 265,
    "hasVideo": true,
    "youtubeId": "f7lF6tp7uvw",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "hr"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_hr_employee_compliance",
    "screenshots": [
      "screenshot_documents.png"
    ],
    "copyWords": 196,
    "hasVideo": true,
    "youtubeId": "ffxuNTsuKeU",
    "externalPage": null
  },
  {
    "tech": "mh_letters_certificates",
    "slug": "letters-and-certificates",
    "name": "Letters and Certificates",
    "summary": "Letter template and certificate template: business letter, offer letter or certificate filled in from a contact or employee, printed as PDF on your letterhead",
    "tagline": "",
    "intro": [
      "Business letters, offer letters and certificates filled in from the contact or employee, printed on your company layout and saved to their chatter.",
      "Odoo prints quotations, invoices and delivery slips, but not a plain letter to a contact or an employee. So offer letters, experience certificates and certificates of appreciation get typed in a word processor, with the name and address pasted in by hand for every letter.",
      "This app keeps the text once, as a template, and fills in the fields of each record you choose."
    ],
    "features": [
      {
        "heading": "Write the template once",
        "body": [
          "Letters > Letter Templates holds the text. Type /field in the editor to pick a field of the contact or employee, or type placeholders such as {{ object.name }}, {{ object.country_id.name }}, {{ user.name }} or {{ today }}. A template can be a letter or a certificate."
        ]
      },
      {
        "heading": "Print from the record",
        "body": [
          "Select one or many contacts, open Action > Print Letter, choose the template and check the preview of the first letter. The wizard prints one PDF per record."
        ]
      },
      {
        "heading": "Saved on the chatter",
        "body": [
          "Each PDF is posted as an internal note with the file attached on the record it was written for, so the letter stays with that contact or employee and follows their access rights."
        ]
      },
      {
        "heading": "Your letterhead",
        "body": [
          "Letters print in portrait on the company's own document layout, with the logo, header and footer you set in Settings. With several companies, each letter uses the layout of the company its record belongs to."
        ]
      },
      {
        "heading": "Certificates",
        "body": [
          "A certificate prints on A4 landscape with no margins and an optional full-page background image. A bordered starter certificate comes with the app."
        ]
      },
      {
        "heading": "Contacts or employees",
        "body": [
          "A template applies to contacts, or to any other kind of record that has a chatter. Install Odoo's Employees app and choose Employee, and the same wizard prints employee letters. The app needs only Discuss (mail), so it does not install the Employees app for you."
        ]
      },
      {
        "heading": "No code in templates",
        "body": [
          "A placeholder is a field name and nothing else. It is looked up in the record's fields and read as the user who prints, with that user's access rights. A template that tries anything else, such as a method call, is refused with a message, and a field that user may not read is not printed."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Small and medium businesses that send the same few letters again and again: offer and confirmation letters, reference letters, experience certificates, course or partner certificates."
        ]
      }
    ],
    "scope": [
      "No electronic signature and no numbered register of issued certificates. Output is PDF, not Word files. Templates have no conditions or loops: a placeholder prints one field. Text is not translated per recipient; dates and numbers follow the language of the user who prints. It does not send letters by email. It sends no data anywhere."
    ],
    "requires": [
      "Odoo 19 and 20 Community or Enterprise; depends on Discuss (mail). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 29.0,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Productivity",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_letters_certificates",
    "screenshots": [
      "screenshot_template_form.png",
      "screenshot_letter_pdf.png"
    ],
    "copyWords": 463,
    "hasVideo": true,
    "youtubeId": "UhapTNFqxgc",
    "externalPage": null
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise, with Discuss. Installs the free Lost Messages Routing , which does the capturing. Only models that accept incoming mail can be targeted."
    ],
    "price": 29.0,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Productivity/Discuss",
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "mail",
      "mh_lost_messages_routing"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_lost_message_recovery",
    "screenshots": [
      "screenshot_message.png"
    ],
    "copyWords": 345,
    "hasVideo": true,
    "youtubeId": "PQMjAuo0kFE",
    "externalPage": null
  },
  {
    "tech": "mh_pos_card_charges",
    "slug": "pos-card-charges",
    "name": "POS Card Charges",
    "summary": "Credit card surcharge or POS fee by payment method: percentage or fixed transaction charge added as an order line when the card payment is added, on the receipt",
    "tagline": "A percentage or fixed card charge per payment method, added to the order as its own line when the card payment is added.",
    "intro": [
      "Taking cards costs you a percentage of every sale, and the till has nowhere to pass it on: Odoo's Point of Sale has no charge per payment method, so the fee is either swallowed, or keyed in by hand as a product line that nobody remembers to remove when the customer pays another way.",
      "This app adds three fields to a payment method: a percentage, a fixed amount and the product the charge is posted with. When the cashier adds a payment line of that method, one charge line of that product is added to the order, worked out on the part of the bill that payment line pays, and the payment line is raised by the charge. 2% + 0.50 on a 100.00 bill: the card line becomes 102.50 and the order gets a Card Charge line of 2.50.",
      "Check that card surcharging is allowed where you trade. Some countries and card schemes restrict or ban it, and that is your responsibility as the merchant; this app only adds the line you configure."
    ],
    "features": [
      {
        "heading": "The charge follows the payment line",
        "body": [
          "Typing a different amount on the card line recomputes its charge from that amount: 50.00 typed gives a 1.50 charge, a card line of 51.50 and 50.00 left to pay. Deleting the payment line deletes its charge. Every payment line has its own charge line, so a bill split over two cards is charged on each card's share, and a cash line is never charged."
        ]
      },
      {
        "heading": "An ordinary line, posted to its own account",
        "body": [
          "The charge is an order line of the charge product you choose, so it is printed on the receipt, invoiced with the order, and posted at session closing to that product's income account with that product's taxes. The Card Charge product that comes with the app has no taxes; set the taxes and income account that fit your books on it, or pick a different service product for each payment method. When the product carries a tax, the payment line is raised by the charge including that tax."
        ]
      },
      {
        "heading": "Refunds reverse it",
        "body": [
          "Refund the charge line together with the goods and the refund reverses the charge at the same account and tax. The app never adds a charge to a refund. The charge product is kept off the product screen, so it cannot be rung up by mistake."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops, cafes and counters that pay a percentage on card takings and are allowed to pass it on, and that would rather the till worked it out than the cashier."
        ]
      }
    ],
    "scope": [
      "No charge on cash payment methods or on refunds. One rate per payment method, not per card brand. The charge carries the charge product's own taxes; it is not split across the taxes of the goods sold. A tip added after the card line is not charged until that line is edited. If the cashier deletes a charge line from the order by hand, the card line stays raised; delete the payment line instead. Not tested with integrated payment terminals. It does not tell you whether surcharging is allowed where you trade."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise; installs Odoo's own Point of Sale app (point_of_sale). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 29.0,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "point_of_sale"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_card_charges",
    "screenshots": [
      "screenshot_order_with_charge.png"
    ],
    "copyWords": 539,
    "hasVideo": true,
    "youtubeId": "9xZU-tqh1oQ",
    "externalPage": null
  },
  {
    "tech": "mh_pos_invoice_journal",
    "slug": "pos-invoice-journal",
    "name": "POS Invoice Journal",
    "summary": "Choose the invoice journal for each POS order: multiple invoice journals per point of sale, journal selection on the POS payment screen, separate invoice numbering per journal",
    "tagline": "Choose the invoice journal for each POS order: one point of sale, several invoice journals, picked on the payment screen.",
    "intro": [
      "Odoo invoices every order of a point of sale in a single journal. If you keep B2B and B2C invoices, or tax invoices and simplified invoices, in separate numbering series, the cashier cannot choose: everything lands in the one series.",
      "This app lets a point of sale offer more than one sales journal. When the cashier ticks Invoice on the payment screen, a selector shows the point of sale's own journal first, and the cashier can pick another. The invoice is created in that journal and takes that journal's next number."
    ],
    "features": [
      {
        "heading": "Several invoice journals per point of sale",
        "body": [
          "In Settings, under Point of Sale, Default Journals, add Other invoice journals next to the point of sale's own journal. Only sales journals are accepted, and a journal that has its own currency must match the point of sale's currency."
        ]
      },
      {
        "heading": "A selector on the payment screen",
        "body": [
          "The Invoice journal selector appears when Invoice is ticked and the point of sale has more than one journal. It starts on the point of sale's own journal, so a cashier who does nothing gets exactly what Odoo does today. Unticking Invoice clears the pick."
        ]
      },
      {
        "heading": "The chosen journal is the one used",
        "body": [
          "The invoice is created in the chosen journal and gets the next number of that journal's sequence. The journal is saved on the order, so invoicing later from the backend, from the order form or with Create Invoices, uses it too."
        ]
      },
      {
        "heading": "Safe when the till is offline",
        "body": [
          "The choice is stored on the order like any other order field. An order paid while the till is offline keeps its journal in the browser's browser storage and sends it with the order when it syncs."
        ]
      },
      {
        "heading": "Backend view and filter",
        "body": [
          "The journal shows on the order form, which stays editable until the order is invoiced, as a list column, a search field and a group-by. When one Create Invoices run mixes journals, you get one invoice per journal instead of one mixed invoice."
        ]
      },
      {
        "heading": "Refunds stay in the series",
        "body": [
          "A refund of an order keeps the journal of that order, so the credit note lands in the same series as the invoice it reverses."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops and restaurants that issue invoices at the till and must keep separate invoice series, for example business customers against private customers, or full tax invoices against simplified ones."
        ]
      }
    ],
    "scope": [
      "It does not create journals or numbering sequences; set them up in Accounting. It does not decide the journal for the cashier, and it does not limit which cashier may use which journal. It does not change the session closing entry of orders that are not invoiced. It does not move an invoice that already exists to another journal. The selector is hidden when a point of sale has only one journal. An order paid offline and then reloaded in the browser before it syncs is a limit of Odoo's own Point of Sale, with or without this app."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with Point of Sale (it depends on point_of_sale). You create the sales journals and their sequences yourself in Accounting. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 29.0,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "point_of_sale"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_invoice_journal",
    "screenshots": [
      "screenshot_payment_screen.png"
    ],
    "copyWords": 509,
    "hasVideo": true,
    "youtubeId": "QqLscNfyeoo",
    "externalPage": null
  },
  {
    "tech": "mh_pos_line_pricelist",
    "slug": "pos-line-pricelist",
    "name": "POS Line Pricelist",
    "summary": "Set a different pricelist for the POS order line: change the pricelist on one cart line and its price changes according to the selected pricelist",
    "tagline": "Set a different pricelist for one line of the POS cart: pick it on the line and that line is priced from it, with the pricelist's name on the screen and the receipt.",
    "intro": [
      "A counter that sells trade and retail in one basket has no way to say so. Odoo's Point of Sale applies one pricelist to the whole order, so the trade prices are typed by hand, line by line, and every typed price is a chance to give margin away.",
      "This app adds a Line Pricelist button to the Actions of the product screen. Select a line, press it and choose one of the pricelists allowed for that Point of Sale: the line's unit price is read from that pricelist for the line's product and quantity, and the line shows the pricelist's name."
    ],
    "features": [
      {
        "heading": "Priced by the pricelist's own rules",
        "body": [
          "The price comes from Odoo's own pricelist calculation in the till, so a rule that depends on quantity applies as soon as the line reaches it: change the quantity and the line is priced again from the same pricelist. The tests use fixed-price rules and a quantity break."
        ]
      },
      {
        "heading": "The order keeps its own pricelist",
        "body": [
          "Changing the pricelist of the whole order reprices the other lines but never a line that has its own pricelist, and a new line of the same product does not merge into it. Choose Order pricelist on the line to hand it back."
        ]
      },
      {
        "heading": "Allowed pricelists, per Point of Sale",
        "body": [
          "Each Point of Sale has its own list of line pricelists (Settings > Point of Sale > Pricing). They must be among the pricelists available in that Point of Sale. With the list empty the button is not offered. A Managers only setting offers it to cashiers with the manager role only."
        ]
      },
      {
        "heading": "On the line, the receipt and the order",
        "body": [
          "The line shows the pricelist's name under it and the receipt prints it. The pricelist is stored on the order line: it is a column in the order's Products tab, and Point of Sale > Reporting > Line Pricelists lists and groups the lines that were priced this way."
        ]
      },
      {
        "heading": "A typed price wins",
        "body": [
          "A price typed on the line replaces its line pricelist: the name disappears and the typed price stays. Choosing a pricelist again replaces the typed price."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops and trade counters that serve trade and walk-in customers at one till, and that would rather the till read the trade price than the cashier type it."
        ]
      },
      {
        "heading": "The button",
        "body": [
          "The Line Pricelist popup for Office Lamp: the pricelists allowed for this Point of Sale, here Wholesale, and the order's own pricelist, Retail, which is the one the line has now."
        ]
      },
      {
        "heading": "The settings",
        "body": [
          "Settings > Point of Sale > Pricing: the pricelists allowed on a single line and the Managers only setting, for the selected Point of Sale."
        ]
      }
    ],
    "scope": [
      "Managers only decides who is offered the button in the till, as Odoo's own Price Control does; it is not checked on the server. Refund, tip, reward, discount and combo lines cannot be given a line pricelist. A line pricelist must be one of the pricelists available in the Point of Sale. The app does not create pricelists or rules, and changes only the unit price of the line: invoicing and session posting are Odoo's own. Tested on a retail Point of Sale, not on restaurant floors or self-order kiosks."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise; installs Odoo's own Point of Sale app (point_of_sale). The Point of Sale must use pricelists (Settings > Point of Sale > Pricing). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 29.0,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "point_of_sale"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_line_pricelist",
    "screenshots": [
      "screenshot_line_pricelist.png",
      "screenshot_line_pricelist_popup.png",
      "screenshot_settings.png"
    ],
    "copyWords": 565,
    "hasVideo": true,
    "youtubeId": "JcTHNh7ReVs",
    "externalPage": null
  },
  {
    "tech": "mh_pos_table_lock",
    "slug": "pos-waiter-table-lock",
    "name": "POS Waiter Table Lock",
    "summary": "Lock table to the waiter who opened it: other waiters cannot take that table's order, a manager can override and transfer the table",
    "tagline": "Lock each restaurant table to the waiter who opened it. Other employees are stopped at the table; a manager can open it and transfer it.",
    "intro": [
      "In Odoo's restaurant Point of Sale any employee at any till can open any table, ring items on it and take its payment. Orders record who is at the till, but nothing stops a second waiter walking up to a table that is not theirs, so items end up on the wrong bill and nobody is sure whose table it was.",
      "This app adds a setting to each Point of Sale, Lock Tables to Waiter. The waiter whose order for a table is saved first (Odoo saves it when the waiter leaves the table) owns that table. Other employees cannot open it; a manager can, and can hand it to someone else."
    ],
    "features": [
      {
        "heading": "The floor plan shows the waiter",
        "body": [
          "Every table that has an owner shows the waiter's first name and last initial, with a lock mark. The other tills get the owner together with the order, so a second till sees it as soon as it reads the order from the server."
        ]
      },
      {
        "heading": "Other waiters are stopped",
        "body": [
          "An employee who taps a table that belongs to someone else, picks its order from the Orders list, or moves an order onto it with Transfer / Merge gets a message and stays where they are. The check asks the server first, so it uses what the other tills have already saved. Managers are not stopped."
        ]
      },
      {
        "heading": "A manager PIN takes the table over",
        "body": [
          "If the owner has gone home, the waiter at the till can ask a manager to enter their PIN. The table then belongs to the waiter at the till, and the order's chatter records who took it, from whom, and which manager authorised it. A wrong PIN, or the PIN of an employee who is not a manager, opens nothing. Managers need a PIN code on their employee record."
        ]
      },
      {
        "heading": "Managers transfer a table",
        "body": [
          "A manager sees a Transfer Table button in the actions of a table's order and picks the employee the table goes to. The other tills are told, and the chatter records the transfer."
        ]
      },
      {
        "heading": "Checked on the server too",
        "body": [
          "Every time a till saves an order, the server compares the employee at the till with the table's waiter. An employee who is neither the waiter nor a manager cannot save changes to that table's order, whatever the screen showed. A till that is refused says so on screen, and its changes are not saved."
        ]
      },
      {
        "heading": "It outlasts the login",
        "body": [
          "The lock belongs to the order, not to the login. Switching the employee at the till, or the waiter going home, leaves the table locked to them until a manager transfers it. Odoo does not let a session be closed while a table order is open, so a locked table never ends up in a closed session. In the back office the order shows its Table Waiter, and Orders can be searched and grouped by it."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Restaurants and bars where several waiters share tills and tables, and the owner wants a table to stay with the waiter who opened it until a manager says otherwise."
        ]
      }
    ],
    "scope": [
      "It is a control on the shop floor, not a security boundary: Odoo identifies employees in the browser (PIN or barcode at the till) and this app trusts that identity. It locks whole tables, not single items, split bills or kitchen tickets. Linking tables in the floor plan editor is not locked. A cashier who takes payment for a table they did not open needs a manager or a transfer. A table that was already open when the lock is switched on belongs to the waiter whose till next saves an order with an item on it. If two waiters open the same free table on two tills before either till has saved an order for it, the table goes to the till that saves first; the other till is told and its items are not saved. An offline till can only check the tables it already has; the server checks again when it saves. Orders placed by customers on their own phone have no waiter until a waiter saves an item on that table."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise. Installs Odoo's own restaurant Point of Sale (pos_restaurant) and employee login (pos_hr, which needs the Employees app). Turn on Log in with Employees for the Point of Sale, then Lock Tables to Waiter. Managers are the employees pos_hr already treats as managers of that Point of Sale. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 29.0,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "pos_restaurant",
      "pos_hr"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_table_lock",
    "screenshots": [
      "screenshot_table_locked.png"
    ],
    "copyWords": 708,
    "hasVideo": true,
    "youtubeId": null,
    "externalPage": null
  },
  {
    "tech": "mh_website_product_tabs",
    "slug": "product-tabs",
    "name": "Product Tabs",
    "summary": "Add a custom tab to the website product page, like shipping policy, product specifications or care instructions. Create a tab once and show it on all products, eCommerce categories or chosen products.",
    "tagline": "Write shipping, care or warranty text once and show it as a tab on the product pages it belongs to: all products, eCommerce categories or chosen products.",
    "intro": [
      "The same shipping policy, returns note and care instructions belong on dozens of product pages. In Odoo you paste them into each product's description one at a time, and when the policy changes you edit every product again. Odoo's shared blocks do not help either: the \"More Information\" accordion item and the drop zone for all products show the same content on every product.",
      "Product Tabs lets you write a block once and choose where it shows. It appears as a tab under the product description on the shop's product page."
    ],
    "features": [
      {
        "heading": "Write it once, assign it by scope",
        "body": [
          "Each tab has a title, a rich text body and a scope: all products, eCommerce categories, or specific products. Change the tab's text and every product page it reaches shows the new text, except products that have their own text for that tab."
        ]
      },
      {
        "heading": "Categories include their sub-categories",
        "body": [
          "A tab assigned to Furnitures also shows on products filed under Furnitures / Chairs, so one assignment covers a whole branch of your catalogue."
        ]
      },
      {
        "heading": "Own text for one product",
        "body": [
          "The product form gets a Product Tabs page listing the tabs assigned to that product, where you can give the product its own text for any of them. Leave a tab's default text empty and it only appears on products that have their own text - the way to run a Specifications tab with different content on every product."
        ]
      },
      {
        "heading": "Tabs on desktop, an accordion on phones",
        "body": [
          "On screens 768 pixels and wider the tabs are Bootstrap tabs. On phones they become an accordion, one item open at a time. Both use the Bootstrap already loaded on your website; the app adds no JavaScript to the shop."
        ]
      },
      {
        "heading": "Ordered, per website, translatable",
        "body": [
          "Drag tabs into order in the list. If you run several websites, limit a tab to one of them or leave it on all. Titles and text are translated with Odoo's own translation tool, and archiving a tab hides it without deleting it."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops on Odoo eCommerce where many products share the same shipping, returns, care or warranty notes - furniture, apparel, electronics - and anyone tired of keeping those notes in sync by hand across product descriptions."
        ]
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 or 20, Community or Enterprise, with the eCommerce app (website_sale). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online."
    ],
    "price": 29.0,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "website_sale"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_website_product_tabs",
    "screenshots": [
      "screenshot_product_page.png",
      "screenshot_tab_list.png",
      "screenshot_product_form.png"
    ],
    "copyWords": 393,
    "hasVideo": true,
    "youtubeId": "kJP5X8lH1xY",
    "externalPage": null
  },
  {
    "tech": "mh_purchase_product_docs",
    "slug": "purchase-product-docs",
    "name": "Purchase Product Docs",
    "summary": "Product documents on purchase orders: brochures, drawings or datasheets attached to RFQ emails automatically and appended to the purchase order PDF",
    "tagline": "Product documents on purchase orders: brochures, drawings or datasheets attached to RFQ emails automatically and appended to the purchase order PDF.",
    "intro": [
      "Odoo's Sales app can attach a product's documents to a quotation. The Purchase app cannot, so the drawing or datasheet that belongs with a part has to be found and attached to every request for quotation by hand. This app adds the same switch to Purchase."
    ],
    "features": [
      {
        "heading": "What it does",
        "body": [
          "On any document in a product's Documents, choose when it goes out with an order: On RFQ and PO (attached to the RFQ email and still attached when the confirmed order is sent), On confirmed PO only, or Hidden, which is the default, so nothing changes until you choose. Click Send by Email on an RFQ or a purchase order and the flagged documents of the ordered products are already in the email's attachments. You can remove any of them before sending, as with any attachment."
        ]
      },
      {
        "heading": "Append to the PDF",
        "body": [
          "Tick Append to PO PDF on a document that is an uploaded PDF and its pages are added to the end of the order's own PDF, both when you print the RFQ or purchase order and in the PDF Odoo attaches to the email. A document that is appended is not also sent as a separate file."
        ]
      },
      {
        "heading": "Per product, once",
        "body": [
          "Documents belong to the product, or to one variant of it. A document used by several order lines is sent once, and documents of products that are not on the order are never sent."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Procurement teams in manufacturing and trading who send the same drawing, specification or datasheet with every request for quotation for a part."
        ]
      }
    ],
    "scope": [
      "It does not show the documents to vendors in the portal, and it does not touch Odoo's own Sales documents. Only an uploaded file is attached: a document that is a web link has no file and is skipped. Only PDFs can be appended; images, Word and Excel files are sent as separate attachments even when Append to PO PDF is ticked. An appended PDF that cannot be read is skipped and logged, and the order still prints. If Odoo's optional purchase e-invoicing XML is embedded in the order PDF, it is not carried into the merged file."
    ],
    "requires": [
      "Odoo 19 and Odoo 20, Community or Enterprise, with the Purchase app. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 29.0,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Purchases",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "purchase"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_purchase_product_docs",
    "screenshots": [
      "screenshot_docs.png"
    ],
    "copyWords": 378,
    "hasVideo": true,
    "youtubeId": "19hj4HO-6gg",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise with Inventory. It does not run counts or create adjustments - it reads the ones you already posted. Values are at cost."
    ],
    "price": 29.0,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.13",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_count_accuracy",
    "screenshots": [
      "screenshot_accuracy.png"
    ],
    "copyWords": 357,
    "hasVideo": true,
    "youtubeId": "m0A3u_4iMDc",
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
      }
    ],
    "scope": [
      "It counts across the whole database rather than as that user, so the figure is what exists and would be hidden. Counting as the user would report zero the moment the rule was on, which is exactly the wrong reassurance."
    ],
    "requires": [
      "Odoo 19 Community or Enterprise with Inventory. It restricts what people see, not what they may do - which operations they can perform is access rights . It does not restrict by location within a warehouse, and it writes nothing to your stock."
    ],
    "price": 29.0,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.13",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_warehouse_access",
    "screenshots": [
      "screenshot_access.png",
      "screenshot_count.png"
    ],
    "copyWords": 320,
    "hasVideo": true,
    "youtubeId": "j1kBnmIzSno",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise. Depends only on base, nothing leaves your server, and it is restricted to Settings administrators."
    ],
    "price": 28.22,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_company_audit",
    "screenshots": [
      "screenshot_audit.png"
    ],
    "copyWords": 289,
    "hasVideo": true,
    "youtubeId": "4B3sdWoHqoM",
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
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 Community or Enterprise, no other module needed. It changes who is in a group, not what the group can do - that is access rights , record rules and field access ."
    ],
    "price": 28.22,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.14",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_group_membership_bulk",
    "screenshots": [
      "screenshot_plan.png"
    ],
    "copyWords": 311,
    "hasVideo": true,
    "youtubeId": "ftktjPUI06w",
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
    "price": 28.22,
    "manifestPrice": 29.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.6",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "paidDepends": [],
    "downloads": 0,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_currency_rounding_tool",
    "screenshots": [
      "settings_screenshot.png",
      "view_entries_screenshot.png"
    ],
    "copyWords": 288,
    "hasVideo": true,
    "youtubeId": "GCuPAEGlPf0",
    "externalPage": "/apps/multi-currency-rounding"
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
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_1099_threshold_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 219,
    "hasVideo": true,
    "youtubeId": "_yZsy7fNKsc",
    "externalPage": null
  },
  {
    "tech": "mh_abc_check",
    "slug": "abc-check",
    "name": "ABC Check",
    "summary": "ABC classification in one number: how few products make 80% of your stock consumption value, and how much stock is held in C items",
    "tagline": "How few products make 80% of your outgoing value, and how much stock you hold in the ones that barely sell",
    "intro": [
      "Most of what leaves your warehouse comes from a handful of products, and most of the range barely moves. How handful, and how much stock is sitting in the tail, is the first thing ABC classification tells you, and Odoo Community does not show it anywhere.",
      "Press Check Stock and get one set of figures for the last 12 whole calendar months: how many products it takes to reach 80% of the outgoing value, how many sit in the last 5%, what the C items hold at cost, and the ten largest products by value."
    ],
    "features": [
      {
        "heading": "The same definition as ABC Analysis",
        "body": [
          "Basis: done stock moves from an internal location to a customer or to production, valued at the cost Odoo recorded on each move. Internal transfers, scrap, inventory adjustments, returns to a vendor and receipts are not demand, and consumables are left out. Products are ranked by that value, largest first. A products are the fewest that reach 80% of the total (the one that crosses the line is included), B reach 95%, and C are the rest, including products with stock and no outgoing move at all."
        ]
      },
      {
        "heading": "What you get",
        "body": [
          "The number of products that went out, the number needed to reach 80%, the number in the last 5%, the total outgoing value, the number of C products and the stock they hold at current cost, in a sentence you can read out. Below it, the ten largest products with their value, their share and the cumulative share."
        ]
      },
      {
        "heading": "It says when the answer is nothing",
        "body": [
          "If nothing went out to a customer or to production in the period, it says so rather than reporting a comfortable zero. Checking again replaces the list in place."
        ]
      }
    ],
    "scope": [],
    "requires": [
      "Odoo 19 and 20 Community or Enterprise with Inventory and its valuation module (stock_account). Free, and deliberately one set of figures per company: the period is the last 12 whole calendar months and the limits are 80% and 95%. It writes nothing to your products or stock, and it does not net returns off the demand."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "stock_account"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_abc_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 306,
    "hasVideo": true,
    "youtubeId": "zzWHx_uctbU",
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
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [
      "Odoo 19, Community or Enterprise. No dependencies beyond the base system. Administrator access, since it reads the access configuration. Nothing is written to it."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 9,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_access_config_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 208,
    "hasVideo": true,
    "youtubeId": "sK-pzY569iI",
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
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 9,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_access_snapshot",
    "screenshots": [
      "screenshot_snapshot.png"
    ],
    "copyWords": 249,
    "hasVideo": true,
    "youtubeId": "t7MX5v77ehI",
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
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "purchase"
    ],
    "paidDepends": [],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_purchase_approval_exposure",
    "screenshots": [
      "screenshot_exposure.png"
    ],
    "copyWords": 215,
    "hasVideo": true,
    "youtubeId": "mDGK5_x-vXw",
    "externalPage": null
  },
  {
    "tech": "mh_archive_stock_guard",
    "slug": "archive-stock-guard",
    "name": "Archive Stock Guard",
    "summary": "Block archiving products that still have stock on hand or open transfers, and list the archived products still holding stock",
    "tagline": "Block archiving products that still have stock on hand or open transfers, and list the archived products still holding stock",
    "intro": [
      "Odoo stops you archiving a stock location that still holds products. It does not stop you archiving a product that does. Archive a product while it still has stock and it disappears from the default product and stock screens, while the units are still on the shelf and still in your valuation. This puts the same guard on products."
    ],
    "features": [
      {
        "heading": "What it blocks",
        "body": [
          "Archiving a product is refused, with a message naming the product and why, when it has either of these:",
          "Stock on hand. A quantity that is not zero (a negative one counts too) in an internal or transit location, in any company.",
          "An open transfer. Any stock move that is not done and not cancelled: a draft, waiting, ready or partly done receipt, delivery or internal transfer."
        ]
      },
      {
        "heading": "Every way of archiving",
        "body": [
          "The check sits on the product variant, which is where Odoo's archiving ends up. Archive from the list or the form, on a template or on one variant, or for a whole selection at once: all of them go through it. Archiving a template archives its variants, so one variant with stock blocks the template. A selection is refused as a whole: nothing is archived halfway. Removing an attribute value from a product, which makes Odoo archive the variants that used it, is refused the same way."
        ]
      },
      {
        "heading": "A message that tells you what to do",
        "body": [
          "The error lists each product with its location and quantity, or the transfer that is still open (for example WH/OUT/00012). It lists up to 8 products, and up to 3 reasons for each."
        ]
      },
      {
        "heading": "Who can still archive",
        "body": [
          "Users in the group Archive Products With Stock (Settings > Users, under Inventory). Inventory Administrators do not get it automatically, on purpose: the guard would mean nothing if every stock manager were exempt. OdooBot is never blocked, so data files and module upgrades that archive products still run."
        ]
      },
      {
        "heading": "Archived With Stock",
        "body": [
          "Inventory > Reporting > Archived With Stock lists the stock that archived products still hold, by product and location, with the quantity and its value. It also finds products that were archived before you installed the app. It is shown to Inventory Administrators."
        ]
      }
    ],
    "scope": [
      "It does not look at reserved quantities, reordering rules, or orders that have not created a transfer yet. A confirmed order whose delivery does not exist, or a quotation, does not block archiving.",
      "It does not stop code that runs as the superuser , and it does not touch products that are already archived. It does not un-archive anything.",
      "It does not move or write off the stock. It only refuses, and shows you what is in the way."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise. Also requires Inventory with valuation (stock_account). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "stock_account"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_archive_stock_guard",
    "screenshots": [
      "screenshot_blocked.png",
      "screenshot_archived_with_stock.png"
    ],
    "copyWords": 458,
    "hasVideo": true,
    "youtubeId": "3ELP7aL-lpI",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "web"
    ],
    "paidDepends": [],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_archived_match_hint",
    "screenshots": [
      "screenshot_hint.png"
    ],
    "copyWords": 206,
    "hasVideo": true,
    "youtubeId": "BIu7wax4LiM",
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
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [
      "Odoo 19, Community or Enterprise. Needs Discuss. Administrator access, since it reads the model and field definitions. Nothing is written to any of them."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "paidDepends": [],
    "downloads": 13,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_audit_trail_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 293,
    "hasVideo": true,
    "youtubeId": "v5K8FevVRrE",
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
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "sale",
      "crm"
    ],
    "paidDepends": [],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_awaiting_reply_badge",
    "screenshots": [
      "screenshot_badge.png"
    ],
    "copyWords": 201,
    "hasVideo": true,
    "youtubeId": "P0TNQJBS5ls",
    "externalPage": null
  },
  {
    "tech": "mh_report_barcode_qr",
    "slug": "barcode-and-qr-on-reports",
    "name": "Barcode and QR on Reports",
    "summary": "Barcode in report and qrcode in report: the order number as a barcode or QR on quotations, purchase orders, invoices and delivery slips, ready for a scanner",
    "tagline": "Print the order number as a barcode or QR code on quotations, purchase orders, invoices and delivery slips, ready for a scanner.",
    "intro": [
      "Odoo prints a barcode of the document number on Picking Operations, but not on quotations, purchase orders, invoices or delivery slips. Those carry the number as plain text, so whoever receives the paper has to type it. This app prints the number as a Code 128 barcode or a QR code on those PDFs, so a scanner or a phone camera reads it straight into a search box."
    ],
    "features": [
      {
        "heading": "What it does",
        "body": [
          "For each of four document types you choose None, Barcode (Code 128) or QR code: Quotations and Sales Orders, RFQs and Purchase Orders, Invoices, and Delivery Slips. One more setting puts the code at the start of the document, under the title block where Odoo prints one, or at the end of the document. All five settings are in Settings, General Settings, under Companies."
        ]
      },
      {
        "heading": "Every document layout",
        "body": [
          "The code is added to Odoo's document layout, so it appears whichever layout your company uses, and on the PDF Odoo builds when you send a document by email as well as when you print it. Invoices are covered with or without the payment block, and pro-forma invoices follow the Quotations and Sales Orders setting."
        ]
      },
      {
        "heading": "Per company",
        "body": [
          "The settings belong to the company. A document is printed with the settings of its own company, even when you print it while working in another one."
        ]
      },
      {
        "heading": "Only the apps you have",
        "body": [
          "It does not install Sales, Purchase, Invoicing or Inventory. A document type whose app is not installed is simply never printed, and the setting for it does nothing."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Warehouses and offices that receive your paper and scan the number into their own system, drivers whose delivery slip is checked at a gate, and anyone who files printed orders and wants to find them by scanning."
        ]
      }
    ],
    "scope": [
      "It prints the number Odoo already gave the document. It does not change numbering and does not add barcodes to the product lines. A QR code holds the document number only, not a portal link or payment details. A draft invoice numbered \"/\" gets no code until it is posted. An invoice that was already sent keeps the PDF Odoo stored at that time; printing it again gives a new PDF with the code. Document numbers with non-ASCII characters are printed as text by Odoo's barcode widget, not as a code. Other reports, such as Picking Operations (which has its own barcode) and the return slip, are not changed."
    ],
    "requires": [
      "Odoo 19 and Odoo 20, Community or Enterprise. It depends only on the Odoo base apps; Sales, Purchase, Invoicing and Inventory are optional and each one switches on its own document type when installed. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "base_setup",
      "web"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_report_barcode_qr",
    "screenshots": [
      "screenshot_quotation.png"
    ],
    "copyWords": 427,
    "hasVideo": true,
    "youtubeId": "0PFUzOOhYXI",
    "externalPage": null
  },
  {
    "tech": "mh_before_after_slider",
    "slug": "before-and-after-slider",
    "name": "Before and After Slider",
    "summary": "Before and after image slider snippet: compare two images with a draggable, swipeable slider. Drag and drop it on any website page",
    "tagline": "Before and after image slider snippet: compare two images with a draggable, swipeable slider. Drag and drop it on any website page",
    "intro": [
      "Odoo's website builder has no image comparison block. Odoo 20's Duo Images block puts two photos side by side and that is all; Odoo 19 has nothing close. If you want a visitor to see a renovation, a retouch or a repair as a before and after, you end up pasting in an outside widget that loads somebody else's scripts. This is a native building block instead."
    ],
    "features": [
      {
        "heading": "What it does",
        "body": [
          "One block, two photos. It stacks a Before photo and an After photo with a divider between them. Visitors drag the divider with a mouse or swipe it on a phone, and the Before photo is revealed up to the divider.",
          "Keyboard and screen reader friendly. The handle can be reached with Tab and shows a clear focus ring. Left and Right (or Down and Up) arrows move it by 5 percent, Home and End jump to 0 and 100. It is exposed as an ARIA slider with a value from 0 to 100.",
          "Works in the website editor. Find it under the Images category of the block picker, drop it on a page, then double-click either photo to replace it through Odoo's own media dialog. The Before and After captions are normal editable text.",
          "Nothing leaves your server. The slider's script and style are part of the module. No external scripts, fonts or images, no tracking, no data sent anywhere. It also works on phones, where the page still scrolls vertically when a swipe starts on the slider."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Anyone running an Odoo website who needs to show a change: renovation and cleaning companies, photographers and retouchers, dentists and clinics, landscapers, repair shops, before and after product comparisons."
        ]
      }
    ],
    "scope": [
      "There is no vertical (top and bottom) mode, no options panel for the starting position (it always starts at 50 percent) and no automatic animation. The slider is not active inside the editor; you see both photos and edit them, and the slider runs on the published page. Use two photos with the same proportions: the After photo sets the height of the block and the Before photo is cropped to fit it. It compares exactly two images and does not add captions beyond Before and After."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise. Needs the Website app. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "website"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_before_after_slider",
    "screenshots": [
      "screenshot_slider.png"
    ],
    "copyWords": 391,
    "hasVideo": true,
    "youtubeId": "2LC_ROCegnM",
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
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_breach_deadline_clock",
    "screenshots": [
      "screenshot_deadlines.png"
    ],
    "copyWords": 258,
    "hasVideo": true,
    "youtubeId": "qQ-FCRf6G9w",
    "externalPage": null
  },
  {
    "tech": "mh_bulk_scrap",
    "slug": "bulk-scrap",
    "name": "Bulk Scrap",
    "summary": "Bulk scrap: scrap multiple products at once, or a whole transfer with its lots in one step, instead of one product at a time",
    "tagline": "Bulk scrap: scrap multiple products at once, or a whole transfer with its lots in one step, instead of one product at a time",
    "intro": [
      "Odoo scraps one product at a time: open Scrap, pick a product, a quantity and a lot, validate, and start again. Writing off a damaged pallet of forty lines, or everything on a transfer that arrived broken, means forty trips through the same form. This adds a Bulk Scrap screen where you list every product, lot and quantity once and scrap them together, and a Scrap All button on any transfer that fills the list in for you."
    ],
    "features": [
      {
        "heading": "Many products on one screen",
        "body": [
          "Open Inventory > Operations > Adjustments > Bulk Scrap. Add a line for each product with its lot or serial number and quantity, and the screen shows how much of it is available at that location. If you use multiple locations, each line has its own source location. The scrap reason, the scrap location and the Replenish Quantities option are set once for the whole batch."
        ]
      },
      {
        "heading": "Scrap a whole transfer",
        "body": [
          "Open any transfer and choose Scrap All in the Actions menu. The screen opens with one line per product, lot and location already filled in. A done transfer is scrapped from where it put the goods, a transfer still open from what it reserved. Change or remove any line, then scrap."
        ]
      },
      {
        "heading": "Odoo's own scrap underneath",
        "body": [
          "Every line is scrapped by Odoo's own scrap code, so stock, valuation, the scrap reason and replenishment behave as when you scrap one product at a time, and the results show in Inventory > Operations > Adjustments > Scrap as usual. On Odoo 19 each line becomes a scrap order. Odoo 20 no longer has scrap orders, so each line becomes a scrap stock move, which is how Odoo 20 records a scrap."
        ]
      },
      {
        "heading": "All or nothing",
        "body": [
          "Lines are checked against the stock available at their location one after another, so two lines of the same product add up. If any line is short, has no lot or has a zero quantity, nothing is scrapped at all and the message lists every line to fix."
        ]
      }
    ],
    "scope": [
      "It does not offer Odoo's \"scrap anyway\" override. A line that is short of stock stops the whole batch.",
      "One reason and one scrap location apply to the whole batch. Scrap different reasons in separate batches.",
      "It works in each product's own unit of measure , and it does not carry packages or owners: a line scraps from a location and lot, and is refused if the stock sits in a package. Scrap All skips anything that is not in an internal location, so a delivered order has nothing to scrap."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise. Requires Inventory (stock). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "paidDepends": [],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_bulk_scrap",
    "screenshots": [
      "screenshot_bulk_scrap.png"
    ],
    "copyWords": 447,
    "hasVideo": true,
    "youtubeId": "lG5TiRjlEaQ",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "paidDepends": [],
    "downloads": 18,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_chatter_search",
    "screenshots": [
      "screenshot_search.png"
    ],
    "copyWords": 148,
    "hasVideo": true,
    "youtubeId": "CIzUDEHkoNc",
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
      }
    ],
    "scope": [
      "When a model holds more rows than one pass reads, it says so on the result. A clean result from a partial read is not a clean result, and presenting it as one would be worse than not checking at all."
    ],
    "requires": [
      "Odoo 19 Community or Enterprise. Depends only on base and nothing leaves your server."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Accounting/Accounting",
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_company_mismatch_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 252,
    "hasVideo": true,
    "youtubeId": "lJZ9FG88HfU",
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
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "website"
    ],
    "paidDepends": [],
    "downloads": 19,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_cookie_consent_banner",
    "screenshots": [
      "screenshot_banner.png",
      "screenshot_log.png"
    ],
    "copyWords": 141,
    "hasVideo": true,
    "youtubeId": "oZB66fEcACE",
    "externalPage": null
  },
  {
    "tech": "mh_cost_price_history",
    "slug": "cost-price-history-report",
    "name": "Cost Price History Report",
    "summary": "Product cost price history - see every cost change Odoo already records, with what the cost was before, what changed and who changed it",
    "tagline": "Product cost price history - see every cost change Odoo already records, with what the cost was before, what changed and who changed it",
    "intro": [],
    "features": [
      {
        "heading": "Odoo already records this. It just never shows you.",
        "body": [
          "Every time somebody changes a product's cost, Odoo writes down the product, the new cost, the date and the user. There is exactly one screen for that data in the whole system - a single-record form reached from a stock move - and no list, no filter and no menu. This is the missing report. It stores nothing new."
        ]
      },
      {
        "heading": "What it was, what it became, who changed it",
        "body": [
          "Every cost change newest first: the previous cost, the new one, the difference in money and as a percentage, and the person who typed it. Filter to a month, to rises or to falls. Group by product, by month or by user."
        ]
      },
      {
        "heading": "\"Previous\" means the real previous cost",
        "body": [
          "It is read from the product's whole history, not from the row above it on screen. If it were taken from what you can see, filtering to one month would report each change as a move from the last visible cost rather than the real one - and every figure on the page would be wrong in a way nothing on the page reveals."
        ]
      },
      {
        "heading": "Without the noise Odoo leaves in the data",
        "body": [
          "Odoo writes a line the moment a product is created, reading \"from None to 0.0\". Left alone it puts a cost change on every product you own, dated the day it was created. Those are hidden by default, and so are valuation entries from stock moves, which are a different thing and would make the percentages meaningless."
        ]
      },
      {
        "heading": "A starting cost is not a rise from nothing",
        "body": [
          "The earliest cost on record is shown as a change of zero rather than an infinite increase, so new and migrated products do not sit at the top of every \"biggest increases\" list."
        ]
      }
    ],
    "scope": [
      "It does not record anything. If Odoo did not already store a change, this cannot show it. Cost edits made before you upgraded are not there, and neither is anything Odoo chooses not to keep.",
      "It does not cover FIFO products. Odoo skips them on purpose: with FIFO the cost is worked out from the stock layers rather than typed, so there is no \"someone changed it\" to record. Average-cost and standard-cost products are covered.",
      "It does not show stock valuation entries. Those come from moves, not from somebody changing a price, and Odoo's own stock valuation report covers them. Mixing them in would make the percentages meaningless.",
      "It needs Inventory with valuation. That is the module where Odoo keeps this data. Reading it needs the Inventory Manager right, which is Odoo's setting and not one this changes."
    ],
    "requires": [],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "stock_account"
    ],
    "paidDepends": [],
    "downloads": 24,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_cost_price_history",
    "screenshots": [
      "screenshot_history.png"
    ],
    "copyWords": 458,
    "hasVideo": true,
    "youtubeId": "l3mtcfUOXhw",
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
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 7,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_cpk_calculator",
    "screenshots": [
      "screenshot_capability.png"
    ],
    "copyWords": 248,
    "hasVideo": true,
    "youtubeId": "9h70PXbS50Q",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "paidDepends": [],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_currency_rounding_report",
    "screenshots": [
      "screenshot_report.png"
    ],
    "copyWords": 272,
    "hasVideo": true,
    "youtubeId": "gTeVeAwpZ2M",
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
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "paidDepends": [],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_dac7_threshold_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 245,
    "hasVideo": true,
    "youtubeId": "TDkbVzrHKko",
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
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "mh_stale_user_assignment",
      "mh_orphan_attachment_scan",
      "mh_portal_stale_grant",
      "mh_cron_health_badge"
    ],
    "paidDepends": [],
    "downloads": 8,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_housekeeping",
    "screenshots": [
      "screenshot_menu.png",
      "screenshot_portal.png"
    ],
    "copyWords": 405,
    "hasVideo": true,
    "youtubeId": "cE6ne4vyCVg",
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
    "version": "19.0.1.0.18",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "paidDepends": [],
    "downloads": 17,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_dead_stock_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 230,
    "hasVideo": true,
    "youtubeId": "gczfDSRzpp4",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "base",
      "web",
      "mail"
    ],
    "paidDepends": [],
    "downloads": 19,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_direct_download_base",
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
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "base",
      "web"
    ],
    "paidDepends": [],
    "downloads": 9,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_advanced_web_domain_widget",
    "screenshots": [
      "screenshot_snippets.png"
    ],
    "copyWords": 112,
    "hasVideo": true,
    "youtubeId": "8e7__0ocje4",
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
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [
      "Odoo 19, Community or Enterprise. No dependencies beyond the base system. Administrator access, since it reads the user list. Nothing is written to any user record."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 10,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_dormant_user_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 259,
    "hasVideo": true,
    "youtubeId": "nHVpJk13WbY",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "mail"
    ],
    "paidDepends": [],
    "downloads": 10,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_duplicate_attachment_guard",
    "screenshots": [
      "screenshot_guard.png"
    ],
    "copyWords": 161,
    "hasVideo": true,
    "youtubeId": "obEii-Cy3bY",
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
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [
      "Odoo 19, Community or Enterprise. No dependencies beyond the base system. Administrator access, since it reads every group and access right. Nothing is written to any of them."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Tools",
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 10,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_duplicate_group_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 223,
    "hasVideo": true,
    "youtubeId": "-STwrstIUPQ",
    "externalPage": null
  },
  {
    "tech": "mh_duplicate_product_check",
    "slug": "duplicate-product-check",
    "name": "Duplicate Product Check",
    "summary": "Find duplicate products: the same name, internal reference or vendor product code created twice, and the stock split between the copies",
    "tagline": "Find duplicate products: the same name, internal reference or vendor product code created twice, and the stock split between the copies",
    "intro": [
      "Odoo warns you when you type an internal reference that already exists. It never looks back. Nothing in Odoo lists the duplicates that are already in your catalogue, so the same product entered twice sits there, each copy holding some of the stock. Open Inventory > Reporting > Duplicate Products and this scans the catalogue and shows the groups of products that look like the same thing entered twice."
    ],
    "features": [
      {
        "heading": "Three ways to match",
        "body": [
          "By name: case, spaces and punctuation are ignored, so \"Blue Widget\", \"blue widget\" and \"Blue-Widget.\" are one group. By internal reference: the same rule, across products. A product with several variants matches through any of its variants' references. By vendor product code: the same code from the same vendor on two or more products. Archived products are included, and a product can appear in more than one group."
        ]
      },
      {
        "heading": "The stock split",
        "body": [
          "Open a group to see each copy with its quantity on hand and its stock value in internal locations. Groups where two or more copies hold stock are shown in red in the list, so you can see where the stock is split before you decide which copy to keep. The list shows how many groups there are and how many products sit in them."
        ]
      },
      {
        "heading": "It rescans every time you open it",
        "body": [
          "Opening the menu rebuilds the list from the current catalogue, so it is never stale. The Open Products button on a group lists its products, archived ones included, so you can review them or hand them to Merge Duplicate Products."
        ]
      }
    ],
    "scope": [
      "It does not change anything. It never merges, archives or edits a product.",
      "It matches text, not meaning. \"Blue Widget\" and \"Widget (blue)\" are not found. Names that differ by a word are different names.",
      "It does not compare across companies. Products of different companies are never grouped together, and a product shared by all companies is only compared with other shared products.",
      "Stock and value cover the companies selected in the company switcher when you open the list, and only internal locations. It needs the Inventory Manager right, which is Odoo's setting."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise. Also requires Inventory with valuation (stock_account). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "stock_account"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_duplicate_product_check",
    "screenshots": [
      "screenshot_groups.png",
      "screenshot_stock_split.png"
    ],
    "copyWords": 370,
    "hasVideo": true,
    "youtubeId": "xfjKFi7hqlU",
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
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [
      "Odoo 19, Community or Enterprise. Needs Inventory. Nothing is written to your products — the check reads them and stores its own result."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_eudr_scope_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 297,
    "hasVideo": true,
    "youtubeId": "j9my54mDJoI",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "paidDepends": [],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_cash_exact_match",
    "screenshots": [
      "screenshot_matches.png"
    ],
    "copyWords": 224,
    "hasVideo": true,
    "youtubeId": "fjuYNAWgj4E",
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
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 11,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_field_help_editor",
    "screenshots": [
      "screenshot_dialog.png"
    ],
    "copyWords": 193,
    "hasVideo": true,
    "youtubeId": "hbIvO6V7XlA",
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
    "version": "19.0.1.0.12",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 14,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_field_lock",
    "screenshots": [
      "screenshot_rule.png"
    ],
    "copyWords": 259,
    "hasVideo": true,
    "youtubeId": "QNbv5AVPXDs",
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
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 10,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_gdpr_72h_clock",
    "screenshots": [
      "screenshot_clock.png"
    ],
    "copyWords": 274,
    "hasVideo": true,
    "youtubeId": "Fkpar9NWEWM",
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
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [
      "A Google Ads account you control, a developer token from your own Google Ads Manager account, and an OAuth client plus refresh token from your own Google Cloud project. The Python packages google-ads and cryptography must be available to your Odoo instance."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 10,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_google_ads_spend",
    "screenshots": [
      "screenshot_spend.png"
    ],
    "copyWords": 213,
    "hasVideo": true,
    "youtubeId": "ejyrD-S8cGg",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "base",
      "website"
    ],
    "paidDepends": [],
    "downloads": 26,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_google_reviews_snippet",
    "screenshots": [
      "screenshot_settings.png"
    ],
    "copyWords": 83,
    "hasVideo": true,
    "youtubeId": "SwbM-2VBNG4",
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
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "hr"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_hr_expiry_exposure",
    "screenshots": [
      "screenshot_exposure.png"
    ],
    "copyWords": 288,
    "hasVideo": true,
    "youtubeId": "uUao9t25K7E",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "account"
    ],
    "paidDepends": [],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_journal_access_report",
    "screenshots": [
      "screenshot_access.png"
    ],
    "copyWords": 238,
    "hasVideo": true,
    "youtubeId": "aVbpgh1lB7U",
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
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "project"
    ],
    "paidDepends": [],
    "downloads": 7,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_kanban_wip_limits",
    "screenshots": [
      "screenshot_wip.png"
    ],
    "copyWords": 128,
    "hasVideo": true,
    "youtubeId": "fQhmUQ7PW-w",
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
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "base",
      "web"
    ],
    "paidDepends": [],
    "downloads": 16,
    "storeUrl": "https://apps.odoo.com/apps/modules/18.0/mh_list_view_manager",
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
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "base",
      "mail"
    ],
    "paidDepends": [],
    "downloads": 8,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_lost_messages_routing",
    "screenshots": [
      "screenshot_lost_messages.png"
    ],
    "copyWords": 118,
    "hasVideo": true,
    "youtubeId": "2POVDhYnSKo",
    "externalPage": null
  },
  {
    "tech": "mh_matomo_analytics",
    "slug": "matomo-analytics",
    "name": "Matomo Analytics",
    "summary": "Matomo analytics on the Odoo website, with eCommerce tracking of product views, cart updates and orders. Loads only after cookie consent",
    "tagline": "Matomo analytics on the Odoo website, with eCommerce tracking of product views, cart updates and orders. Loads only after cookie consent",
    "intro": [
      "Enter your Matomo URL and site ID in Website settings and your Odoo website reports to Matomo: page views, and for the shop the product views, cart updates and orders with their value. Nothing is requested from Matomo, and no Matomo cookie is set, until the visitor accepts analytics cookies."
    ],
    "features": [
      {
        "heading": "What is sent to your Matomo",
        "body": [
          "Page views with the page address and referrer. For shop events, the product ID, name, eCommerce category, price and quantity, the cart or order value, and the order reference on completed orders. Names, emails, phone numbers and addresses are never sent. Matomo itself also records what any tracker records from a browser, such as the visitor's IP address and browser, and sets its own cookies (_pk_*) once consent is given. If your Matomo URL is a Matomo Cloud address, that data goes to Matomo (InnoCraft), a third party; with your own server it stays with you. A short version of this is shown next to the setting in Website settings."
        ]
      },
      {
        "heading": "Shop tracking",
        "body": [
          "A product page reports a product view (setEcommerceView). Each add to cart sends the whole cart, every line with its quantity, because Matomo replaces the cart on every update. The first checkout page sends the cart again. The order confirmation page sends the order (trackEcommerceOrder) with the order reference, total, subtotal, tax and shipping, once per order in each browser. The product ID sent is Odoo's product variant ID. Switch on Ecommerce for the site in Matomo to see the reports."
        ]
      },
      {
        "heading": "Consent and exclusions",
        "body": [
          "Built on our free Website Tracking Base, which is installed with it. The Matomo script waits for analytics consent from Odoo's Cookies Bar (\"Allow all\") or from our free Cookie Consent Banner (the Analytics box). Marketing consent alone does not load it. With neither banner switched on it never loads. It never loads for internal users, so your own visits and the website editor are not tracked."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Odoo websites and shops that want Matomo, self-hosted or Matomo Cloud, for privacy-friendly analytics, without pasting tracking code into the website by hand or loading anything before consent."
        ]
      }
    ],
    "scope": [
      "It has no cookieless mode: without analytics consent it does nothing, so a visitor who declines is not counted at all. It does not use Matomo's server-side tracking API, so it cannot report orders from visitors who decline cookies or use a blocker. Quantity changes and removals made on the cart page are not sent when they happen (the cart is sent again when checkout starts), and it does not report refunds, site search, goals, custom dimensions or Matomo Tag Manager. It does not install Matomo, create the site in it, or show Matomo reports inside Odoo. The Matomo URL must be https. One Matomo site per website. It is a technical control, not legal advice: what your cookie policy says remains yours to decide."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with the Website and eCommerce apps. Also requires Website Tracking Base (free), installed automatically. A Matomo you run yourself or a Matomo Cloud account. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "mh_website_tracking_base"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_matomo_analytics",
    "screenshots": [
      "screenshot_settings.png"
    ],
    "copyWords": 497,
    "hasVideo": true,
    "youtubeId": "V2GTDV5KDpE",
    "externalPage": null
  },
  {
    "tech": "mh_merge_products",
    "slug": "merge-duplicate-products",
    "name": "Merge Duplicate Products",
    "summary": "Merge duplicate products into one: sale orders, purchase orders, transfers, stock and vendor prices all move to the product you keep",
    "tagline": "Merge duplicate products into one: sale orders, purchase orders, transfers, stock and vendor prices all move to the product you keep",
    "intro": [
      "Odoo has no way to merge two products. When the same product has been created twice, you either live with both or archive one and lose the link to its history and its stock. Select the duplicates in Inventory > Products, choose Action > Merge Products, pick the one to keep and press Preview. You get a list of every table and field that will be re-pointed, with a record count for each and a View button to open the records. Nothing changes until you press Merge."
    ],
    "features": [
      {
        "heading": "Every record that points at a duplicate moves",
        "body": [
          "The merge re-points every many2one that refers to the product or its variant, in every installed app. The list is read from your database when you press Preview, so it includes apps installed after this one. With Inventory, Sales, Purchase, Manufacturing and Accounting that covers sale and purchase order lines, stock moves and move lines, stock quants, lots, vendor pricelists, pricelist rules, bills of materials and their components, manufacturing orders, invoice lines and reordering rules. It also moves the links other records hold to the product (many2many), chatter messages, attachments, activities and followers."
        ]
      },
      {
        "heading": "The preview is a rehearsal",
        "body": [
          "Preview runs the whole merge and rolls it back, so a problem is reported before you press Merge, not halfway through it. The merge itself is one transaction: if anything fails, nothing is changed. After it, the app checks that none of the columns it re-pointed still holds a duplicate, and undoes the merge if one does."
        ]
      },
      {
        "heading": "The duplicates are archived, not deleted",
        "body": [
          "A note on the kept product lists what moved, and each duplicate gets a note saying where it went. The duplicate keeps its own settings (price, cost, taxes, category, barcode, description, images) and the kept product keeps its own. The duplicate's own many2many settings (tax links, routes) and its field images stay with it, and the preview lists them under \"Stays\"."
        ]
      },
      {
        "heading": "What it refuses",
        "body": [
          "It will not merge, and tells you why, when the products have a different unit of measure, product type, storable setting or tracking, or a different cost method on their category. It will not merge products of different companies, or a product with attribute variants (archived variants count). It will not merge into an archived product. It will not merge when a bill of materials would end up containing its own finished product, or when two lots of the same tracked product would share a name.",
          "It also refuses when the move would break a database rule, for example two reordering rules for the same product and location, or when a table that Odoo does not manage still points at the product."
        ]
      },
      {
        "heading": "Need to find the duplicates first?",
        "body": [
          "Duplicate Product Check lists the groups of products with the same name, internal reference or vendor product code, and shows the stock split between the copies.",
          "Get Duplicate Product Check"
        ]
      }
    ],
    "scope": [
      "It cannot be undone. The duplicates stay archived, but the records that moved do not move back.",
      "It does not merge variants or different units of measure, and it does not copy the duplicate's own settings onto the kept product.",
      "It does not rewrite references stored as plain text or numbers inside saved filters, domains or custom fields. It does not move the barcode of a duplicate: it stays on the archived product.",
      "It rewrites posted and done documents. Invoice lines and done stock moves point at the kept product afterwards. Needs the Inventory Manager right, which is Odoo's setting. It counts records of all companies, including ones you cannot see."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise. Also requires Inventory with valuation (stock_account). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "stock_account"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_merge_products",
    "screenshots": [
      "screenshot_preview.png"
    ],
    "copyWords": 610,
    "hasVideo": true,
    "youtubeId": "jKWjXaDYF6A",
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
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [
      "A Meta Business Manager account you control, and a System User access token with read access to the ad account. The Python packages requests and cryptography must be available to your Odoo instance - both are standard on Odoo Online and Odoo.sh."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 8,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_meta_ads_spend",
    "screenshots": [
      "screenshot_spend.png"
    ],
    "copyWords": 197,
    "hasVideo": true,
    "youtubeId": "bAwqMV1YWJY",
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
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [
      "A Microsoft Advertising account you control, a developer token from the Microsoft Advertising Developer Portal, and an OAuth client plus refresh token from your own Azure AD (Entra ID) app registration. The Python packages bingads and cryptography must be available to your Odoo instance."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_microsoft_ads_viewer",
    "screenshots": [
      "screenshot_campaigns.png"
    ],
    "copyWords": 212,
    "hasVideo": true,
    "youtubeId": "D7o7J-3pWpU",
    "externalPage": null
  },
  {
    "tech": "mh_microsoft_uet_tag",
    "slug": "microsoft-uet-tag",
    "name": "Microsoft UET Tag",
    "summary": "Microsoft UET tag (Bing Ads) for the Odoo website, with purchase conversions and revenue for Microsoft Advertising. Loads only after cookie consent",
    "tagline": "Microsoft UET tag (Bing Ads) for the Odoo website, with purchase conversions and revenue for Microsoft Advertising. Loads only after cookie consent",
    "intro": [
      "Paste your Microsoft UET tag ID into Website settings and your shop reports completed orders to Microsoft Advertising with revenue, currency and order reference, so Microsoft Ads can count purchase conversions and optimise for sales. Nothing is sent, and Microsoft's script is not even requested, until the visitor accepts marketing cookies.",
      "Sends page and order events to Microsoft Advertising only after the visitor accepts marketing cookies."
    ],
    "features": [
      {
        "heading": "What is sent to Microsoft",
        "body": [
          "Page loads, and for shop events the product IDs, the ecommerce page type (product or cart) and the value, and on completed orders the revenue, currency and order reference. Names, emails, phone numbers and addresses are never sent. The tag runs in the visitor's browser, so Microsoft also receives what any tag receives from a browser, such as the page address and the visitor's IP address. A short version of this is shown next to the setting in Website settings."
        ]
      },
      {
        "heading": "Events",
        "body": [
          "The tag's own page load on every page. A product-page event on a product page and a cart event when a product is added and when the checkout starts, carrying the product IDs and value for dynamic remarketing. A purchase event on the order confirmation page with revenue, currency and the order reference, once per order in each browser."
        ]
      },
      {
        "heading": "Consent and exclusions",
        "body": [
          "Built on our free Website Tracking Base, which is installed with it. The tag waits for marketing consent from Odoo's Cookies Bar (\"Allow all\") or from our free Cookie Consent Banner (the Marketing box). Analytics consent alone does not load it. With neither banner switched on it never loads. It never loads for internal users, so your own visits and the website editor are not tracked."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Odoo shops that advertise on Microsoft Advertising (Bing) and want purchase conversions with revenue reported, without adding code to the website by hand or loading anything before consent."
        ]
      }
    ],
    "scope": [
      "It does not use Microsoft's server-side Conversions API, so it cannot report orders from visitors who decline cookies or use a blocker. It does not send customer data for enhanced conversions. It does not connect to the Microsoft Advertising account, import conversions or manage campaigns. It has no custom goals beyond purchase, and it reports only products added through Odoo's standard add-to-cart request. One UET tag ID per website. You create the UET tag and the purchase conversion goal in Microsoft Advertising yourself. It is a technical control, not legal advice: what your policy says remains yours to decide."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with the Website and eCommerce apps. Also requires Website Tracking Base (free), installed automatically. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "mh_website_tracking_base"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_microsoft_uet_tag",
    "screenshots": [
      "screenshot_settings.png"
    ],
    "copyWords": 433,
    "hasVideo": true,
    "youtubeId": "dRdXWkpTkww",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 12,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_orphan_attachment_scan",
    "screenshots": [
      "screenshot_scan.png",
      "screenshot_confirm.png"
    ],
    "copyWords": 282,
    "hasVideo": true,
    "youtubeId": "boiWCJu7GJc",
    "externalPage": null
  },
  {
    "tech": "mh_pos_a4_receipt",
    "slug": "pos-a4-receipt",
    "name": "POS A4 Receipt",
    "summary": "Print POS receipt in A4 size: an invoice style A4 document for any POS order, printed from the till after payment and from the backend",
    "tagline": "An invoice style A4 PDF of any POS order, from the receipt screen at the till and from the backend.",
    "intro": [
      "The Point of Sale receipt is made for an 80 mm thermal printer. Business customers ask for the receipt on A4 paper, laid out like an invoice, and Point of Sale has no A4 version of it. This app adds one: a PDF of the order with your company header, the customer, the lines, the taxes, the payments and the change."
    ],
    "features": [
      {
        "heading": "A4 Receipt at the till",
        "body": [
          "After payment, the receipt screen gets an A4 Receipt button on Odoo 19, and an A4 Receipt entry in the Print menu on Odoo 20. It downloads the PDF of that order."
        ]
      },
      {
        "heading": "Any order, from the backend",
        "body": [
          "In Point of Sale > Orders > Orders, the Print menu has A4 Receipt for one order or for several selected orders, so a customer who comes back next week can still have one."
        ]
      },
      {
        "heading": "Laid out like an invoice",
        "body": [
          "Your company header and footer from the document layout, the customer's address and tax ID when the order has a customer, and the order's date, number, Point of Sale and cashier. Lines show description, quantity, unit price, taxes and amount, plus a discount column when a line carries a discount."
        ]
      },
      {
        "heading": "Totals that add up",
        "body": [
          "Untaxed amount, each tax, a Rounding line when the order was cash rounded, the total, how it was paid by payment method, and the change given. A refund prints as a Refund Receipt with negative amounts. Every figure is read from the order as Odoo stored it, and the taxes come from Odoo's own tax engine."
        ]
      },
      {
        "heading": "One switch per Point of Sale",
        "body": [
          "Settings > Point of Sale > Bills & Receipts has an A4 Receipt setting, on by default. Turning it off removes the entry at the till for that Point of Sale; printing from the backend stays available."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops that sell to businesses and are asked for a proper document, not a till slip: trade counters, wholesalers with a counter, and any shop whose customers claim the purchase as an expense."
        ]
      }
    ],
    "scope": [
      "The PDF is made by the server. An order paid while the till is offline has not reached the server yet, so the till says so, instead of failing without a word, and the order can be printed from the backend once it has synced.",
      "It does not replace the thermal receipt and does not change it. It is not an invoice: nothing is created or posted, and the invoice number is shown only if the order was already invoiced. The paper is A4 portrait whatever your default paper format is; there are no other sizes and no layout editor, and the header and footer are your company's document layout. It does not email the receipt or print on its own after payment. On Odoo 19 the till button is on the receipt screen after payment only, not in the order list."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with Point of Sale; nothing else to install. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "point_of_sale"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_a4_receipt",
    "screenshots": [
      "screenshot_a4_receipt.png",
      "screenshot_receipt_screen.png"
    ],
    "copyWords": 494,
    "hasVideo": true,
    "youtubeId": "4vnsOcau1uo",
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
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "base",
      "point_of_sale",
      "analytic"
    ],
    "paidDepends": [],
    "downloads": 19,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_analytic_account",
    "screenshots": [
      "screenshot_settings.png"
    ],
    "copyWords": 147,
    "hasVideo": true,
    "youtubeId": "1wqXbBRLIwk",
    "externalPage": null
  },
  {
    "tech": "mh_pos_discount_reasons",
    "slug": "pos-discount-reasons",
    "name": "POS Discount Reasons",
    "summary": "Predefined discount reasons in POS: apply a discount from a list of reasons and track which cashier gave which discount, and why",
    "tagline": "Predefined discount reasons in POS: apply a discount from a list of reasons and track which cashier gave which discount, and why",
    "intro": [],
    "features": [
      {
        "heading": "A discount with no reason is a leak you cannot trace",
        "body": [
          "A cashier gives 20% off and Odoo records the 20%. It does not record why, so at the end of the month nobody can tell a damaged item from a favour to a friend. This app adds the missing field: a list of reasons you control, picked on the till, stored on the order line and reported next to the cashier who gave the discount."
        ]
      },
      {
        "heading": "Reasons you define",
        "body": [
          "Keep the list under Point of Sale > Configuration > Discount Reasons: a name, an optional discount percentage, and the Points of Sale that offer it. Leave the Points of Sale empty and the reason is offered everywhere in the company. A reason at 0% records why without changing the discount the cashier typed."
        ]
      },
      {
        "heading": "A Discount Reason button on the till",
        "body": [
          "The Actions menu of the Point of Sale screen gets a Discount Reason button. The cashier picks a reason, and its percentage is set on the selected line. When the order has more than one line, the cashier chooses between the selected line and all lines. The reason is shown under the line in the cart, and taking the discount off the line takes the reason off with it."
        ]
      },
      {
        "heading": "Make the reason compulsory",
        "body": [
          "Switch on Require a Discount Reason in the Point of Sale settings, next to Line Discounts. A cashier who typed a discount by hand is then asked \"Why was this discount given?\" before the order is paid, and cannot pay without picking a reason. A refund line takes the reason of the line it refunds, so refunded discounts net off under the same reason."
        ]
      },
      {
        "heading": "Reported by reason and by cashier",
        "body": [
          "Point of Sale > Reporting > Discounts by Reason is Odoo's own Orders Analysis, filtered to discounted lines: the discount amount and the number of lines for each reason, side by side for each cashier, with a graph and a list. Discounts given without a reason get a row of their own. Discount Reason and Cashier are also added to Orders Analysis itself, to filter and group by. With employee login, the cashier is the employee who rang the order up."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops and restaurants where cashiers give discounts and the owner wants to know why: damaged stock, staff pricing, price matching, loyal customers."
        ]
      }
    ],
    "scope": [
      "It does not print the reason on the receipt. It is stored on the order line and shown in the cart and in the report.",
      "It covers line discounts only. The global discount button of Odoo's Point of Sale, loyalty rewards and pricelist prices are not given reasons.",
      "It does not limit or approve discounts. It records why; it does not decide how much a cashier may give or ask a manager to agree.",
      "It does not change orders already sold. Lines sold before you install it appear in the report with no reason.",
      "It follows Odoo's own discount rights. An employee whose Point of Sale role may not give discounts does not see the button. If a Point of Sale has no reason set up, the compulsory check does not apply there."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise. Needs Point of Sale. Works with or without POS employee login. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "point_of_sale"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_discount_reasons",
    "screenshots": [
      "screenshot_report.png"
    ],
    "copyWords": 545,
    "hasVideo": true,
    "youtubeId": "UWO4AkuvxWY",
    "externalPage": null
  },
  {
    "tech": "mh_pos_hourly_sales",
    "slug": "pos-hourly-sales-report",
    "name": "POS Hourly Sales Report",
    "summary": "Hourly report of POS sales by hour and weekday: orders and revenue per point of sale, to see peak selling hours",
    "tagline": "See which hours of the day and which days of the week your Point of Sale sells most, in the time zone you work in.",
    "intro": [
      "Odoo's Orders Analysis groups Point of Sale sales by date, from day up to year. It cannot fold all your days onto the 24 hours of one day, or onto the 7 days of one week, and that is the view that shows a peak hour or a quiet weekday. On Odoo 20 the Order Date has an Hour option, but it lists every hour of every date one by one. This app adds the two missing group-bys to Orders Analysis, and a Sales by Hour menu that opens them as a grid."
    ],
    "features": [
      {
        "heading": "What the grid shows",
        "body": [
          "Open Point of Sale > Reporting > Sales by Hour. Hours of the day run down the side, weekdays across the top, and every cell holds the number of orders and the total sales. Switch to the chart view for a bar chart of sales by hour."
        ]
      },
      {
        "heading": "Your hours, not UTC",
        "body": [
          "Odoo stores every order time in UTC. The hour and the weekday are worked out in the time zone set in your own user Preferences when you open the report, the same way Odoo works out days when it groups by Order Date. A sale at 18:40 UTC on a Monday shows as 00:10 on Tuesday for a user in India, and summer time is applied for the date of each sale."
        ]
      },
      {
        "heading": "Odoo's own figures",
        "body": [
          "The grid reads Odoo's own Orders Analysis, so the totals are the ones you already trust, with the same Not Cancelled filter. A refund is an order of its own with negative amounts and counts in the hour it was made, as it does in Orders Analysis. Filter by Point of Sale, period, product, product category or customer exactly as there."
        ]
      },
      {
        "heading": "Also in Orders Analysis",
        "body": [
          "Hour of Day and Weekday are added to the Group By menu of Odoo's own Orders Analysis, so you can combine them with any other grouping, such as hour by Point of Sale."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops, cafes and counters that roster staff, plan deliveries or time promotions around the hours that sell. Works for retail as well as restaurants."
        ]
      }
    ],
    "scope": [
      "It stores nothing and adds no table: it reads Odoo's own order report. It shows no average basket, because a pivot cannot divide one figure by another, so orders and sales sit side by side. Hours follow the time zone of whoever reads the report, so a chain with shops in several time zones sees every shop in one zone. It has no PDF of its own; the grid exports to Excel with the download button Odoo puts on every pivot. It adds nothing to the Point of Sale screen. Sales by cashier and by payment method, and profit by product, are in the paid POS Sales Reports."
    ],
    "requires": [
      "Odoo 19 or 20, Community or Enterprise, with Point of Sale installed. Nothing else is needed. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "point_of_sale"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_hourly_sales",
    "screenshots": [
      "screenshot_hourly_grid.png"
    ],
    "copyWords": 482,
    "hasVideo": true,
    "youtubeId": "dmyOzFy3ccI",
    "externalPage": null
  },
  {
    "tech": "mh_pos_payment_reference",
    "slug": "pos-payment-reference",
    "name": "POS Payment Reference",
    "summary": "Add payment reference on pos order payment line: card, UPI or bank transfer reference, required per payment method, on the receipt and in backend orders",
    "tagline": "Ask the cashier for the card slip, UPI or bank transfer reference when a payment is added, and keep it on the receipt and on the order.",
    "intro": [
      "Odoo's Point of Sale already has a payment reference field on every payment, but only a payment terminal integration can fill it. When a cashier takes a card on a standalone machine, a UPI payment or a bank transfer, the payment screen has nowhere to type the reference, so it never reaches Odoo and nobody can find the payment later.",
      "This app adds one setting to each payment method, Ask for Reference: No, Optional or Required. It writes into Odoo's own payment reference field, so there is no new column to maintain."
    ],
    "features": [
      {
        "heading": "Asked when the payment is added",
        "body": [
          "Add a Card, UPI or Bank payment on the payment screen and a popup asks for the reference. It then sits under the payment line, and a click on it changes it until the order is validated. Payment methods set to No never ask."
        ]
      },
      {
        "heading": "On the receipt",
        "body": [
          "The reference prints under its payment line on the receipt."
        ]
      },
      {
        "heading": "Findable in the backend",
        "body": [
          "The reference is a column in Point of Sale > Orders > Payments and in the order's Payments tab. Search Payments by it, search Orders by the reference of any of their payments, or use the Reference Missing filter on Payments to list payments whose method asks for one but has none."
        ]
      },
      {
        "heading": "Terminal payments are left alone",
        "body": [
          "A payment line run by a payment terminal or QR integration is not prompted when added, and a reference that integration already wrote is shown read-only and never replaced."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops that take card, UPI or bank transfer payments outside Odoo's terminal integrations and need to match a payment to a slip, a bank statement line or a customer query."
        ]
      },
      {
        "heading": "Validation can be blocked",
        "body": [
          "With Required, the order cannot be validated while the reference is empty: validation asks again and stops, with a message naming the payment method, if it is not given. Optional never blocks."
        ]
      }
    ],
    "scope": [
      "It does not check a reference with a bank, card network or UPI provider; it stores what the cashier types. Payments added by hand in the backend order form are not checked. It does not prompt for payment lines run by a terminal or QR integration. It adds no card charge or fee and changes no accounting entry."
    ],
    "requires": [
      "Odoo 19 or 20, Community or Enterprise, with Point of Sale; nothing else to install. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "point_of_sale"
    ],
    "paidDepends": [],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_payment_reference",
    "screenshots": [
      "screenshot_payment_screen.png",
      "screenshot_payments_list.png"
    ],
    "copyWords": 400,
    "hasVideo": true,
    "youtubeId": "jNXn_9r80SQ",
    "externalPage": null
  },
  {
    "tech": "mh_pos_reorder",
    "slug": "pos-reorder",
    "name": "POS Reorder",
    "summary": "Re-order a past POS order from the POS screen: repeat the whole order or specific products into a new order, without scanning everything again",
    "tagline": "Repeat a past POS order into a new one: all of its lines or only the ones you pick, with the same customer, from the order list in the till.",
    "intro": [
      "A regular customer buys the same basket every week and the cashier scans all of it again. Odoo's Point of Sale can reprint or refund a past order, but it has no way to repeat one.",
      "This app adds a Reorder button, beside Details and Invoice, on a paid order in the POS order list (the Orders screen, or Refund on the product screen). It opens the lines of that order, each ticked with its quantity. Untick what you do not want, change a quantity, press Reorder: a new order opens on the product screen with the same customer and those products."
    ],
    "features": [
      {
        "heading": "Pick lines and quantities",
        "body": [
          "Every offered line is ticked and shows the product and the quantity it was sold at. Untick a line to leave it out, or change its quantity; a quantity of 0 leaves the line out as well. Reorder stays disabled until at least one line is chosen."
        ]
      },
      {
        "heading": "Today's prices or the original ones",
        "body": [
          "By default each product is priced as if you had just rung it up: from the pricelist that applies to the new order, so a price that changed since the first sale is the new price. Tick Keep the original prices to carry over each line's unit price and discount exactly as it was sold."
        ]
      },
      {
        "heading": "Same customer",
        "body": [
          "The new order has the customer of the old one, set the way you would set it yourself, so the customer's pricelist and fiscal position apply to the new order."
        ]
      },
      {
        "heading": "Only what was bought",
        "body": [
          "Refund lines, tips, discount lines, reward lines, combo lines and products no longer sold in this Point of Sale are not offered, and the dialog says how many lines were left out. An order with nothing to offer has its Reorder button disabled."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Counters with repeat customers: bakeries and cafes with a standing order, trade counters, and any shop where a customer asks for the same as last time."
        ]
      }
    ],
    "scope": [
      "It copies the product, the quantity and, if you ask, the unit price and discount. It does not copy lot or serial numbers, line notes, customer notes or custom attribute values, and it does not copy payments or the order's own pricelist or fiscal position (they come from the customer, as for any new order). It works from the till's order list: it adds no backend screen, no report and no setting. Tested on a retail Point of Sale, not on restaurant floors."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise; installs Odoo's own Point of Sale app (point_of_sale). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Sales/Point of Sale",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "point_of_sale"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pos_reorder",
    "screenshots": [
      "screenshot_reorder_dialog.png"
    ],
    "copyWords": 436,
    "hasVideo": true,
    "youtubeId": "_EV44COTJ9A",
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
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "website"
    ],
    "paidDepends": [],
    "downloads": 7,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_a11y_page_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 226,
    "hasVideo": true,
    "youtubeId": "t3SFqaXh2z4",
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
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "hr"
    ],
    "paidDepends": [],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pay_transparency_readiness",
    "screenshots": [
      "screenshot_readiness.png"
    ],
    "copyWords": 261,
    "hasVideo": true,
    "youtubeId": "amv1ksvUc1w",
    "externalPage": null
  },
  {
    "tech": "mh_pinterest_tag",
    "slug": "pinterest-tag",
    "name": "Pinterest Tag",
    "summary": "Pinterest Tag for the Odoo website with eCommerce events: page visit, add to cart and checkout with order value. Loads only after cookie consent",
    "tagline": "Pinterest Tag for the Odoo website with eCommerce events: page visit, add to cart and checkout with order value. Loads only after cookie consent",
    "intro": [
      "Paste your Pinterest Tag ID into Website settings and your shop reports what Pinterest Ads needs to optimise for sales: page visits, add to cart and completed orders (Pinterest's checkout event), each with value, currency and the products. Nothing is sent, and Pinterest's script is not even requested, until the visitor accepts marketing cookies.",
      "Sends page and order events to Pinterest only after the visitor accepts marketing cookies."
    ],
    "features": [
      {
        "heading": "What is sent to Pinterest",
        "body": [
          "Page visits, and for shop events the product ID, name, eCommerce category, price and quantity, the order quantity, value and currency, and the order reference on completed orders. Names, emails, phone numbers and addresses are never sent: the app does not use Pinterest's enhanced match. The tag runs in the visitor's browser, so Pinterest also receives what any tag receives from a browser, such as the page address and the visitor's IP address. A short version of this is shown next to the setting in Website settings."
        ]
      },
      {
        "heading": "Events",
        "body": [
          "A page visit on every page. A pagevisit event carrying the product on a product page, addtocart when a product is added, and checkout on the order confirmation page, once per order in each browser. These events carry value, currency, order quantity and the products as line items; checkout also carries the order reference as order_id."
        ]
      },
      {
        "heading": "Consent and exclusions",
        "body": [
          "Built on our free Website Tracking Base, which is installed with it. The tag waits for marketing consent from Odoo's Cookies Bar (\"Allow all\") or from our free Cookie Consent Banner (the Marketing box). Analytics consent alone does not load it. With neither banner switched on it never loads. It never loads for internal users, so your own visits and the website editor are not tracked."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Odoo shops that advertise on Pinterest and want purchases with order value reported, without adding code to the website by hand or loading anything before consent."
        ]
      }
    ],
    "scope": [
      "It does not use Pinterest's Conversions API or any server-side sending, so it cannot report orders from visitors who decline cookies or use a blocker. It does not send customer data for enhanced match. It does not connect to Pinterest Ads or manage campaigns. It does not send a separate checkout-start event, has no search or sign-up events and does not add a domain-verification meta tag. It reports only products added through Odoo's standard add-to-cart request. One Tag ID per website. It is a technical control, not legal advice: what your policy says remains yours to decide."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with the Website and eCommerce apps. Also requires Website Tracking Base (free), installed automatically. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "mh_website_tracking_base"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_pinterest_tag",
    "screenshots": [
      "screenshot_settings.png"
    ],
    "copyWords": 437,
    "hasVideo": true,
    "youtubeId": "DaLegrt02js",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "base",
      "web"
    ],
    "paidDepends": [],
    "downloads": 18,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_popup_message",
    "screenshots": [
      "screenshot_message.png"
    ],
    "copyWords": 112,
    "hasVideo": true,
    "youtubeId": "ZFAMGvjx2tY",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "portal",
      "base_setup"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_portal_stale_grant",
    "screenshots": [
      "screenshot_sweep.png",
      "screenshot_badge.png"
    ],
    "copyWords": 227,
    "hasVideo": true,
    "youtubeId": "I04Ya_1wYyE",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "product"
    ],
    "paidDepends": [],
    "downloads": 8,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_product_multi_barcode",
    "screenshots": [
      "screenshot_barcodes.png"
    ],
    "copyWords": 111,
    "hasVideo": true,
    "youtubeId": "7GQ1MRz9sw4",
    "externalPage": null
  },
  {
    "tech": "mh_website_size_chart",
    "slug": "product-size-chart",
    "name": "Product Size Chart",
    "summary": "Product size chart for the website: a size guide link on the product page opens the chart. Assign one size chart to many products at once",
    "tagline": "A size guide link on the product page opens your size chart. Write each chart once, assign it to categories or products.",
    "intro": [
      "Odoo's product page has no size chart. You can paste a table into each product's description by hand, but then every product needs its own copy, and nothing sits next to the size options where a shopper is looking. This adds a \"Size guide\" link under the variant options of every product page a chart applies to."
    ],
    "features": [
      {
        "heading": "What it does",
        "body": [
          "A size chart is a record with a size table, an optional image and an optional \"how to measure\" note. Assign it to eCommerce categories, to individual products, or both. The product page shows a \"Size guide\" link under the variant options; it opens the chart in a dialog.",
          "The dialog works with the keyboard: Tab to the link, Enter to open it, Escape to close it. The chart is plain HTML, so it can be translated per language."
        ]
      },
      {
        "heading": "Which chart a product shows",
        "body": [
          "A chart set on the product itself wins. Otherwise the chart on the product's nearest eCommerce category is used, so a chart on Clothing / Tops beats one on Clothing, and a chart on Clothing covers every subcategory that has none of its own. If two charts sit on the same category, the one higher in the Size Charts list wins. Archived charts are never shown."
        ]
      },
      {
        "heading": "Assign one chart to many products",
        "body": [
          "Assign the chart to a category and every product in it is covered. Or open the chart's Products tab and add many products at once. Or select products in the eCommerce product list and set the Size Chart column once; Odoo applies it to every selected row."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shops that sell clothing, shoes or anything else sold by size, and want one chart per range instead of a pasted table on every product."
        ]
      }
    ],
    "scope": [
      "It assigns by eCommerce category only, not by internal (accounting) product category. It shows one chart per product page, not a different chart per variant. It does not recommend a size or convert units. It sends no data anywhere. If a product has no chart, nothing is added to its page."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with the eCommerce app (website_sale). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "website_sale"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_website_size_chart",
    "screenshots": [
      "screenshot_size_guide.png",
      "screenshot_chart_form.png"
    ],
    "copyWords": 365,
    "hasVideo": true,
    "youtubeId": "e6YrARMlMko",
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
    "version": "19.0.1.0.14",
    "license": "OPL-1",
    "depends": [
      "project",
      "purchase"
    ],
    "paidDepends": [],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_project_commitment_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 237,
    "hasVideo": true,
    "youtubeId": "KOX__HBC34E",
    "externalPage": null
  },
  {
    "tech": "mh_purchase_order_labels",
    "slug": "purchase-order-labels",
    "name": "Purchase Order Labels",
    "summary": "Purchase product labels: print barcode labels from purchase orders and RFQs in Odoo's own Print Labels, with the quantity taken from the order lines",
    "tagline": "Purchase product labels: print barcode labels from purchase orders and RFQs in Odoo's own Print Labels, with the quantity taken from the order lines",
    "intro": [
      "Goods arrive, and every item needs a barcode label before it goes on the shelf. Odoo prints product labels from products, receipts and manufacturing orders, but not from the purchase order. So the labels for an order are typed in product by product, quantity by quantity, or they wait until the receipt exists.",
      "This adds a Print Labels button to RFQs and purchase orders, and a Print Labels action on the purchase order list. It opens Odoo's own Print Labels window, with the number of labels for each product already worked out from the order."
    ],
    "features": [
      {
        "heading": "Odoo's own label window, opened from the order",
        "body": [
          "There is no new label format and no new designer. Every format Odoo already offers in Print Labels is there, ZPL included, and the same Print button produces the same output. Only the choice of how many labels to print is added."
        ]
      },
      {
        "heading": "Ordered, received or custom",
        "body": [
          "Ordered Quantities is the default: print the labels before the goods arrive, to be ready at the dock. Received Quantities prints only what has come in so far, for a delivery that arrives in parts. Custom is Odoo's own fixed number of copies per product."
        ]
      },
      {
        "heading": "How the number of labels is worked out",
        "body": [
          "The line quantity is converted to the product's own unit of measure, and lines for the same product are added together, across every order you selected.",
          "A product counted in units gets one label per unit, rounded up. That includes any unit defined from Units, such as Dozens or Pack of 6: 2 packs of 6 of a product kept in Units print 12 labels. A product measured by weight, length, volume or time gets one label, which is the rule Odoo itself uses when it prints labels from a receipt."
        ]
      },
      {
        "heading": "Several orders at once",
        "body": [
          "Select orders in the list and choose Print Labels from the Actions menu. Quantities for the same product add up into one set of labels. Cancelled orders and service lines, such as freight, are left out."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Buyers and warehouse staff who label goods themselves when they arrive and would rather print the labels from the order than re-enter every product and quantity."
        ]
      }
    ],
    "scope": [
      "It does not print lot or serial number labels. Those exist only once goods are received, and Odoo prints them from the receipt.",
      "It does not add label formats, sizes or designs. The formats are the ones Odoo already has.",
      "It does not print from sale orders. It works on RFQs and purchase orders only.",
      "It does not print packaging labels from order quantities. An order quantity counts product units, so the Odoo 20 Packaging option is offered with Custom copies only."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise. Needs Purchase and Inventory (purchase_stock). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Purchases",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "purchase_stock"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_purchase_order_labels",
    "screenshots": [
      "screenshot_print_labels.png"
    ],
    "copyWords": 469,
    "hasVideo": true,
    "youtubeId": "fyNj0tkN5As",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "sale"
    ],
    "paidDepends": [],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_quotation_aging",
    "screenshots": [
      "screenshot_aging.png"
    ],
    "copyWords": 224,
    "hasVideo": true,
    "youtubeId": "f_TrXAYKkrI",
    "externalPage": null
  },
  {
    "tech": "mh_report_pdf_appendix",
    "slug": "report-pdf-appendix",
    "name": "Report PDF Appendix",
    "summary": "Merge PDF attachments with invoice, purchase order and delivery slip reports: terms and conditions or certificates appended when you print or email",
    "tagline": "Merge PDF attachments with invoice, purchase order and delivery slip reports: your terms and conditions or a certificate added at the end when you print or email.",
    "intro": [
      "Odoo can add a header, a footer and product PDFs to a quotation. Invoices, purchase orders and delivery slips have nothing like it: the terms and conditions or the certificate that belongs behind them has to be attached to every email by hand, or it never gets sent. This app lets you say once that a PDF follows a report. Every printed or emailed copy of that report then carries its pages at the end."
    ],
    "features": [
      {
        "heading": "Pick the reports, upload the PDFs",
        "body": [
          "In Settings, Report PDF Appendix, a rule lists the reports it applies to (Invoices, Purchase Order, Delivery Slip, or any other PDF report you choose) and the PDF files whose pages follow the document, in the order you set. An optional company limits the rule to one company, and a rule can be archived without losing it."
        ]
      },
      {
        "heading": "Print, email and Send and Print",
        "body": [
          "Odoo builds the PDF for the print button, for the email attachment and for Send and Print on invoices through the same step, and the appendix is added there, so all three carry it. Printing several documents of one of Odoo's standard reports in one go puts each document's own appendix right behind it, so the pages of one document are never separated from its appendix."
        ]
      },
      {
        "heading": "PDFs attached to the document itself",
        "body": [
          "A rule can also append the document's own PDF attachments that you have ticked Append to printed PDF, for example a certificate uploaded to one delivery. The tick is on the attachment form (Settings, Technical, Database Structure, Attachments, in developer mode)."
        ]
      },
      {
        "heading": "Safe by default",
        "body": [
          "Only real PDF files can be uploaded. An appended PDF that cannot be read, because it is damaged or password protected, is skipped and a warning is logged, and the document still prints. Files embedded in the document itself, such as e-invoicing XML, are kept. The copy Odoo stores on a document (the invoice PDF saved on a posted invoice) stays without the appendix, so a reprint never gets it twice."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Companies that must send their terms and conditions with every invoice or purchase order, suppliers who send a conformity or quality certificate with every delivery, and anyone tired of attaching the same PDF to emails by hand."
        ]
      }
    ],
    "scope": [
      "It adds pages from PDF files only. Images, Word and Excel files are rejected on upload, and a flagged attachment that is not a PDF is ignored. The appendix is the same for every language and every customer: a rule is chosen by report and company, not by customer, language or any condition on the document. Files embedded in an appended PDF are not carried over. It does not stamp, number or sign pages. When you print 30 invoices in one PDF you get 30 copies of the appendix."
    ],
    "requires": [
      "Odoo 19 and Odoo 20, Community or Enterprise. It depends only on the Odoo base apps; Sales, Purchase, Invoicing and Inventory are optional and their reports can be chosen once installed. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 8,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_report_pdf_appendix",
    "screenshots": [
      "screenshot_report_appendix.png"
    ],
    "copyWords": 488,
    "hasVideo": true,
    "youtubeId": "-4BFJf4JFs0",
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
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_gdpr_retention_exposure",
    "screenshots": [
      "screenshot_exposure.png"
    ],
    "copyWords": 254,
    "hasVideo": true,
    "youtubeId": "m6Ff2diIqug",
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
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "l10n_ro"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_ro_saft_readiness",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 239,
    "hasVideo": true,
    "youtubeId": "-XgApwV6z0o",
    "externalPage": null
  },
  {
    "tech": "mh_same_name_file_check",
    "slug": "same-name-file-check",
    "name": "Same-Name File Check",
    "summary": "Find records holding several attachments with the same file name - revisions nobody versioned - and the storage old copies cost. Free document version check.",
    "tagline": "Find the records holding the same file name more than once - the revisions nobody versioned - and what the older copies take up.",
    "intro": [
      "A revised contract or drawing rarely replaces the old one. Someone uploads it again, and the record ends up holding contract.pdf three times - nobody sure which one is current, and every old copy still stored. Odoo does not group attachments by file name, so finding these means opening records one by one."
    ],
    "features": [
      {
        "heading": "One list of every repeated file name",
        "body": [
          "Settings > Same-Name Files shows one row per record that holds the same file name more than once: the model, the record, the file name, how many copies there are and when the last one arrived. Search it by model or group it by model."
        ]
      },
      {
        "heading": "Revisions told apart from duplicates",
        "body": [
          "Each row says how many of the copies actually differ. Three different contents under one name are three revisions; two identical copies are a plain duplicate, and those rows are greyed out. A filter shows each kind on its own."
        ]
      },
      {
        "heading": "What the older copies take up",
        "body": [
          "Older Copies (MB) is the size of the older contents under that name, each counted once, leaving out the newest. Odoo stores identical files only once, so an identical copy adds nothing to it. The column is totalled at the bottom of the list and per model when grouped."
        ]
      },
      {
        "heading": "From the row to the files",
        "body": [
          "Clicking a row opens the record the files are attached to. Show Copies opens Odoo's own attachment list filtered to exactly those copies, with size, author and upload date side by side, where you can open, download or delete each one."
        ]
      },
      {
        "heading": "Read-only, and always current",
        "body": [
          "It is one database view over Odoo's attachment table. Nothing is stored, scheduled or changed, so the list is up to date every time it opens."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Administrators of databases where people attach documents to records - quotes, contracts, drawings, certificates - and upload them again when they change. It is also a quick way to see whether versioning would be worth having before you pay for it."
        ]
      }
    ],
    "scope": [
      "It changes nothing. It lists; removing an old copy is done by you, in Odoo's own attachment list.",
      "It matches names exactly. quote.pdf and quote v2.pdf are different names, so a revision uploaded under a new name is not found.",
      "It does not know why a name repeats. Anything attached to the same record twice under the same name is listed, whether a person uploaded it or Odoo attached it.",
      "The storage figure is per record. If the same old file is also attached somewhere else in the database, deleting it here does not free that space.",
      "Some files are out of scope: the values of binary fields such as images, links, and files not yet attached to a record, such as a chatter upload whose message was never sent.",
      "It does not stop the next copy. That is what the app below is for."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise. No other module needed - it covers attachments from every app. The menu is under Settings, for Settings administrators only; in a multi-company database each row belongs to the company of its newest copy, and administrators see only their own companies' rows.",
      "Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Extra Tools",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_same_name_file_check",
    "screenshots": [
      "screenshot_same_name_files.png"
    ],
    "copyWords": 496,
    "hasVideo": true,
    "youtubeId": "3FStNJuTaDs",
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
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 8,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_cron_health_badge",
    "screenshots": [
      "screenshot_list.png",
      "screenshot_form.png"
    ],
    "copyWords": 252,
    "hasVideo": true,
    "youtubeId": "2e4V5XIM9RE",
    "externalPage": null
  },
  {
    "tech": "mh_schema_markup",
    "slug": "schema-markup",
    "name": "Schema Markup",
    "summary": "Structured data for rich results: Local Business schema with address and business hours, and FAQ schema built from your website FAQ blocks",
    "tagline": "Structured data for rich results: Local Business schema with address and business hours, and FAQ schema built from your website FAQ blocks",
    "intro": [
      "Odoo has no Local Business or FAQ structured data (checked in the Odoo 19 and 20 source). This app adds both to your website as JSON-LD: your address, phone and opening hours as a Local Business, and the questions and answers of your FAQ blocks as a FAQ page. Each has its own switch in Website settings. Nothing is sent to any third party."
    ],
    "features": [
      {
        "heading": "Local Business",
        "body": [
          "On the homepage and the Contact us page: your company name, address, phone and logo, plus a business type you choose (shop, restaurant, bakery, hair salon, dentist, and so on), a price range, optional map coordinates, opening hours, and your social profile links. The address and phone come from your company record. Opening hours are one line per time range, such as Mo-Fr 09:00-17:00 or Sa,Su 10:00-14:00, checked when you save. Nothing is published for a company with no street or city."
        ]
      },
      {
        "heading": "FAQ from your own blocks",
        "body": [
          "On any website page with a FAQ Block or FAQ List block, the questions and answers on the page become a FAQ page entry, read from the page as you wrote it and in the language the page is shown in. Edit the block and the data follows. Answers are published as plain text."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Businesses with a shop, office or venue on an Odoo website, and sites with FAQ blocks, that want structured data without pasting code into the page header by hand."
        ]
      }
    ],
    "scope": [
      "Since August 2023 Google shows FAQ rich results only for well-known government and health websites. Do not expect FAQ stars in search results for a shop or a business. FAQ data is still valid structured data that search engines and answer engines can read, and Local Business data is what Google uses to understand your address and opening hours. This app does not promise rich results.",
      "It does not publish anything for products, reviews, articles or breadcrumbs: Odoo covers products and breadcrumbs itself. FAQ data is read only from website pages built in the editor, not from blog posts, product descriptions or forum pages, and only from the FAQ Block and FAQ List blocks: the plain Accordion and Topics List blocks are not treated as FAQs. It publishes one location per website, from the company record, with no holiday or special hours. It does not check your markup with Google, submit anything, manage your Google Business Profile or guarantee rich results. A link to the Schema Markup Validator is next to the settings for checking your pages."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with the Website app. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "website"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_schema_markup",
    "screenshots": [
      "screenshot_settings.png"
    ],
    "copyWords": 439,
    "hasVideo": true,
    "youtubeId": "kundn6WP0Hc",
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
      }
    ],
    "scope": [
      "Stated up front so nothing about the scope is a surprise after you install it."
    ],
    "requires": [
      "A Snapchat Ads account you control, and an OAuth client plus refresh token from your own Snapchat developer app. The Python packages requests and cryptography must be available to your Odoo instance - both are standard on Odoo Online and Odoo.sh."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Marketing/Marketing",
    "version": "19.0.1.0.8",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_snapchat_ads_viewer",
    "screenshots": [
      "screenshot_campaigns.png"
    ],
    "copyWords": 207,
    "hasVideo": true,
    "youtubeId": "LRNepUzFemo",
    "externalPage": null
  },
  {
    "tech": "mh_snapchat_pixel",
    "slug": "snapchat-pixel",
    "name": "Snapchat Pixel",
    "summary": "Snap Pixel for the Odoo website with eCommerce events: view content, add to cart, start checkout and purchase with value. Loads only after consent",
    "tagline": "Snap Pixel for the Odoo website with eCommerce events: view content, add to cart, start checkout and purchase with value. Loads only after consent",
    "intro": [
      "Paste your Snap Pixel ID into Website settings and your shop reports what Snapchat Ads needs to optimise for sales: page views, product views, add to cart, checkout start and completed orders, each with price and currency. Nothing is sent, and Snap's script is not even requested, until the visitor accepts marketing cookies.",
      "Sends page and order events to Snapchat only after the visitor accepts marketing cookies."
    ],
    "features": [
      {
        "heading": "What is sent to Snapchat",
        "body": [
          "Page views, and for shop events the product IDs, the eCommerce category of the first product, the number of items, the order value and currency, and the order reference on completed orders. Names, emails, phone numbers and addresses are never sent: the app does not use Snap's automated matching. The pixel runs in the visitor's browser, so Snapchat also receives what any pixel receives from a browser, such as the page address and the visitor's IP address. A short version of this is shown next to the setting in Website settings."
        ]
      },
      {
        "heading": "Events",
        "body": [
          "PAGE_VIEW on every page. VIEW_CONTENT on a product page, ADD_CART when a product is added, START_CHECKOUT when the checkout starts, and PURCHASE on the order confirmation page, once per order in each browser. The shop events carry price, currency, the product IDs and the number of items; PURCHASE also carries the order reference as transaction_id."
        ]
      },
      {
        "heading": "Consent and exclusions",
        "body": [
          "Built on our free Website Tracking Base, which is installed with it. The pixel waits for marketing consent from Odoo's Cookies Bar (\"Allow all\") or from our free Cookie Consent Banner (the Marketing box). Analytics consent alone does not load it. With neither banner switched on it never loads. It never loads for internal users, so your own visits and the website editor are not tracked."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Odoo shops that advertise on Snapchat and want purchases with order value reported, without adding code to the website by hand or loading anything before consent."
        ]
      }
    ],
    "scope": [
      "It does not use Snap's Conversions API or any server-side sending, so it cannot report orders from visitors who decline cookies or use a blocker. It does not send customer data for automated matching. It does not connect to Snapchat Ads or manage campaigns. It has no search or sign-up events, and it reports only products added through Odoo's standard add-to-cart request. One Pixel ID per website. It is a technical control, not legal advice: what your policy says remains yours to decide."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with the Website and eCommerce apps. Also requires Website Tracking Base (free), installed automatically. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "mh_website_tracking_base"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_snapchat_pixel",
    "screenshots": [
      "screenshot_settings.png"
    ],
    "copyWords": 425,
    "hasVideo": true,
    "youtubeId": "gvm2R_5u9zw",
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
    "version": "19.0.1.0.9",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 7,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_stale_user_assignment",
    "screenshots": [
      "screenshot_sweep.png",
      "screenshot_reassign.png"
    ],
    "copyWords": 345,
    "hasVideo": true,
    "youtubeId": "SCYHVdFTROU",
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
    "version": "19.0.1.0.10",
    "license": "OPL-1",
    "depends": [
      "stock_account"
    ],
    "paidDepends": [],
    "downloads": 31,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_stock_card_ledger",
    "screenshots": [
      "screenshot_ledger.png"
    ],
    "copyWords": 42,
    "hasVideo": true,
    "youtubeId": "22k0LEje6hA",
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
    "version": "19.0.1.0.13",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "paidDepends": [],
    "downloads": 10,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_count_error_check",
    "screenshots": [
      "screenshot_check.png"
    ],
    "copyWords": 227,
    "hasVideo": true,
    "youtubeId": "Y8U7Kq5Tf7Q",
    "externalPage": null
  },
  {
    "tech": "mh_stock_valuation_closing",
    "slug": "stock-valuation-closing",
    "name": "Stock Valuation Closing",
    "summary": "Inventory valuation against the general ledger, and the stock variation closing entry, which Odoo Community computes but gives no menu to open",
    "tagline": "Inventory valuation against the general ledger, and the stock variation closing entry, which Odoo Community computes but gives no menu to open",
    "intro": [],
    "features": [
      {
        "heading": "It is already in your Odoo. You just cannot open it.",
        "body": [
          "Odoo 19 and 20 ship an Inventory Valuation screen that compares what your stock is worth with what the general ledger says it is worth, shows the gap, and has a button that books the stock variation closing entry to close it. They also ship a daily or monthly job that creates that entry for you. Neither has a menu, and the setting that switches the job on is on no form. This app adds the doors and nothing else."
        ]
      },
      {
        "heading": "Two menus, one screen",
        "body": [
          "Inventory > Reporting > Valuation vs Ledger and Accounting > Reporting > Inventory Valuation both open Odoo's own screen: the ledger balance of your stock accounts at the start, the stock variation to book, and the real stock value at the end, for today or any date you pick. On Odoo 20 the screen also lists accruals (bills to receive, invoiced not delivered and the like), and its Generate Entries button posts those entries as well as the closing entry. On Odoo 19 the button is Generate Entry and books the closing entry only."
        ]
      },
      {
        "heading": "The closing settings, on a form at last",
        "body": [
          "Settings > Inventory > Valuation gets three fields: the closing period (Manual, Daily or Monthly), the Stock Journal and the Stock Valuation Account that the closing entry uses. Choose Daily or Monthly and Odoo's own job creates and posts the entry by itself, so it only makes sense once you trust the figures."
        ]
      },
      {
        "heading": "Nothing is recomputed here",
        "body": [
          "The figures, the closing entry and the job are Odoo's own code and behave exactly as Odoo's do. This app has no models, no data and no calculation of its own. It was tested by posting real closing entries in both versions and checking that the ledger balance of the stock account ends up equal to the stock value, and that closing again says there is nothing left to close."
        ]
      },
      {
        "heading": "Who sees it",
        "body": [
          "The menus show for users with the Accounting Administrator right. Odoo's screen has to read the ledger and the entry it creates is an accounting entry, so a stock manager without that right would only get an access error. The Inventory menu also needs Inventory Administrator, as everything under Inventory > Reporting does. Invoicing users do not see the menus."
        ]
      }
    ],
    "scope": [
      "It does not export to PDF or Excel. Odoo's own screen has no export: the buttons are in its source, switched off. It shows one total per stock account, not a list of products.",
      "It does not create stock journal entries when a transfer is validated. That is a different job, and Odoo decides it from your product categories.",
      "It does not set up your accounts. The comparison needs a stock valuation account on your product categories. If there is none, there is nothing to compare.",
      "It does not change how Odoo values stock. It will not make a missing or wrong ledger balance right; it shows the gap and lets Odoo's entry close it."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with Inventory and Accounting (module stock_account). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "stock_account"
    ],
    "paidDepends": [],
    "downloads": 6,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_stock_valuation_closing",
    "screenshots": [
      "screenshot_menu.png",
      "screenshot_valuation.png",
      "screenshot_settings.png"
    ],
    "copyWords": 524,
    "hasVideo": true,
    "youtubeId": "TJAkfot0Obo",
    "externalPage": null
  },
  {
    "tech": "mh_task_pdf_report",
    "slug": "task-pdf-report",
    "name": "Task PDF Report",
    "summary": "Print task PDF report from the task form: description, assignees, deadline, stage, subtasks and timesheets on one page, with a sign-off box",
    "tagline": "Print a task as a PDF from the task form: description, assignees, deadline, subtasks and timesheets on one sheet, with a sign-off box.",
    "intro": [
      "Odoo's Project app has no printable task. You can print timesheets, but there is nothing to hand to the person doing the work, or to the customer who has to sign it off. This app adds a Task Sheet (PDF) entry to the Print menu of the task form and of the task list, and prints the task as Odoo already holds it."
    ],
    "features": [
      {
        "heading": "What it does",
        "body": [
          "The sheet carries the title, project and stage; who the task is assigned to, the deadline, the customer, the status, the priority and the tags; and the description as written in the task.",
          "Sub-tasks are listed with their stage, assignees, deadline and status. When the Timesheets app is installed and you may read timesheets, the timesheet lines are listed oldest first with their total in hours."
        ]
      },
      {
        "heading": "Sign-off box",
        "body": [
          "At the foot of the sheet are two boxes to fill in by pen: completed by and customer sign-off, each with room for name, signature and date, and the customer's name on the second when the task has one."
        ]
      },
      {
        "heading": "Several tasks at once",
        "body": [
          "Select tasks in the list and print once: every task starts on its own page. The sheet prints in your company's document layout, so the letterhead is the one you already use."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Field and service teams who hand a job sheet to a technician and get it signed on site, project managers who file a printed record of a finished task, and anyone who needs a task on paper for a customer."
        ]
      }
    ],
    "scope": [
      "It does not shrink a long description to fit one page: the sheet is one page for an ordinary task and runs onto a second page when the description or the timesheets are long. It does not print the chatter, attachments, custom task properties or dependencies, and it prints only the first level of sub-tasks. It does not collect the signature on screen: the box is for pen and paper. It stores nothing and adds no fields, menus or settings. Without the Timesheets app the sheet has no timesheet section."
    ],
    "requires": [
      "Odoo 19 and Odoo 20, Community or Enterprise, with the Project app. Timesheets is optional and switches on the timesheet section. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Services/Project",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "project"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_task_pdf_report",
    "screenshots": [
      "screenshot_task_sheet.png"
    ],
    "copyWords": 366,
    "hasVideo": true,
    "youtubeId": "JbmdRTP4mG4",
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
    "version": "19.0.1.0.7",
    "license": "OPL-1",
    "depends": [
      "project",
      "hr_timesheet"
    ],
    "paidDepends": [],
    "downloads": 11,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_task_timer",
    "screenshots": [
      "screenshot_timer.png"
    ],
    "copyWords": 255,
    "hasVideo": true,
    "youtubeId": "ZYjiRL8IsWA",
    "externalPage": null
  },
  {
    "tech": "mh_tiktok_pixel",
    "slug": "tiktok-pixel",
    "name": "TikTok Pixel",
    "summary": "TikTok Pixel for the Odoo website with eCommerce events: view content, add to cart, checkout and purchase with value. Loads only after cookie consent",
    "tagline": "TikTok Pixel for the Odoo website with eCommerce events: view content, add to cart, checkout and purchase with value. Loads only after cookie consent",
    "intro": [
      "Paste your TikTok Pixel ID into Website settings and your shop reports what TikTok Ads needs to optimise for sales: page views, product views, add to cart, checkout start and completed orders, each with value and currency. Nothing is sent, and TikTok's script is not even requested, until the visitor accepts marketing cookies.",
      "Sends page and order events to TikTok only after the visitor accepts marketing cookies."
    ],
    "features": [
      {
        "heading": "What is sent to TikTok",
        "body": [
          "Page views, and for shop events the product ID, name, eCommerce category, price and quantity, the order value and currency, and the order reference on completed orders. Names, emails, phone numbers and addresses are never sent: the app does not use TikTok's advanced matching. The pixel runs in the visitor's browser, so TikTok also receives what any pixel receives from a browser, such as the page address and the visitor's IP address. A short version of this is shown next to the setting in Website settings."
        ]
      },
      {
        "heading": "Events",
        "body": [
          "Page view on every page. ViewContent on a product page, AddToCart when a product is added, InitiateCheckout when the checkout starts, and CompletePayment on the order confirmation page, once per order in each browser. The shop events carry value, currency and the products."
        ]
      },
      {
        "heading": "Consent and exclusions",
        "body": [
          "Built on our free Website Tracking Base, which is installed with it. The pixel waits for marketing consent from Odoo's Cookies Bar (\"Allow all\") or from our free Cookie Consent Banner (the Marketing box). Analytics consent alone does not load it. With neither banner switched on it never loads. It never loads for internal users, so your own visits and the website editor are not tracked."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Odoo shops that advertise on TikTok and want purchases with order value reported, without adding code to the website by hand or loading anything before consent."
        ]
      }
    ],
    "scope": [
      "It does not use TikTok's Events API or any server-side sending, so it cannot report orders from visitors who decline cookies or use a blocker. It does not send customer data for advanced matching. It does not connect to TikTok Ads or manage campaigns. It has no search or registration events, and it reports only products added through Odoo's standard add-to-cart request. One Pixel ID per website. It is a technical control, not legal advice: what your policy says remains yours to decide."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with the Website and eCommerce apps. Also requires Website Tracking Base (free), installed automatically. Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "mh_website_tracking_base"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_tiktok_pixel",
    "screenshots": [
      "screenshot_settings.png"
    ],
    "copyWords": 408,
    "hasVideo": true,
    "youtubeId": "ICVQziyY7Tw",
    "externalPage": null
  },
  {
    "tech": "mh_transfer_creation_rights",
    "slug": "transfer-creation-rights",
    "name": "Transfer Creation Rights",
    "summary": "Restrict who can create receipts, delivery orders and internal transfers by hand, while orders, reordering rules, returns and backorders keep creating them",
    "tagline": "Restrict who can create receipts, delivery orders and internal transfers by hand, while orders, reordering rules, returns and backorders keep creating them",
    "intro": [
      "Anybody with Inventory access can press New on the Transfers list and invent a receipt or a delivery. Odoo has rights for working in Inventory, but none for making a transfer up, so a delivery nobody ordered or a receipt nobody can trace to a purchase is one click away for every warehouse user. This adds three rights to the user form, one each for receipts, delivery orders and internal transfers. Take a right away from a user and that person can no longer create that kind of transfer by hand."
    ],
    "features": [
      {
        "heading": "Three rights on the user form",
        "body": [
          "Under Supply Chain on the Access Rights tab of the user form you get three Yes/No lines: Create Receipts by Hand, Create Delivery Orders by Hand and Create Internal Transfers by Hand. Without the matching right, saving a new transfer of that type, duplicating one or importing one is refused with a message that says which right is missing. A right covers its own type only: someone who may create receipts still cannot create a delivery."
        ]
      },
      {
        "heading": "What carries on as before",
        "body": [
          "Only a person pressing Save on a transfer is stopped. Transfers that Odoo creates for you are not touched, whatever rights the user has: receipts from confirmed purchase orders, deliveries from confirmed sales orders, transfers made by reordering rules and routes, manufacturing component transfers, dropshipping, returns, backorders and the next step of a multi-step receipt. Each of these is tested with a user who holds none of the three rights."
        ]
      },
      {
        "heading": "Installing it changes nothing on day one",
        "body": [
          "When you install it, everybody who can already use Inventory is given all three rights, so nobody is locked out. Restrict a person by taking a right away on their user form. Inventory Administrators always have all three. People you give Inventory access later do not get the rights until you add them."
        ]
      }
    ],
    "scope": [
      "It does not hide the New button. A user without the right can open the form and fill it in, and is refused when saving.",
      "It stops the Odoo web interface, not integrations. Transfers created through the external API, scheduled actions or another app's code are treated as automatic and are not stopped.",
      "It does not limit what people do with existing transfers. Validating, editing and cancelling are still governed by Odoo's own Inventory rights. It does not restrict by warehouse, and it does not cover manufacturing, repair or dropship operation types."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise. Requires Inventory (stock). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_transfer_creation_rights",
    "screenshots": [
      "screenshot_rights.png",
      "screenshot_refused.png"
    ],
    "copyWords": 422,
    "hasVideo": true,
    "youtubeId": "KlrBy6ekijc",
    "externalPage": null
  },
  {
    "tech": "mh_variant_routes",
    "slug": "variant-routes",
    "name": "Variant Routes",
    "summary": "Different routes for product variants: buy one variant, manufacture or dropship another, instead of one route for the whole product",
    "tagline": "Different routes for product variants: buy one variant, manufacture or dropship another, instead of one route for the whole product",
    "intro": [
      "In Odoo, the routes of a product (Dropship, Replenish on Order, and the ones you create) are ticked on the product template. Every variant of the product gets the same routes. If the red shirt is shipped straight from the supplier and the blue one is made or bought for your own stock, Odoo only lets you do that if red and blue are two separate products. This app lets you tick routes on the variant itself."
    ],
    "features": [
      {
        "heading": "Routes on the variant",
        "body": [
          "Open a variant (the Variants button on the product, or Inventory > Products > Product Variants) and tick its routes under Variant Routes. Those routes replace the product's routes for that variant only. You can pick from the same routes Odoo offers on the product: the ones marked Applicable on Product."
        ]
      },
      {
        "heading": "Nothing changes until you tick one",
        "body": [
          "A variant with no variant routes keeps using the routes of its product, and follows the product when you change them. You can set routes on one variant and leave the rest alone. Untick them and the variant goes back to the product's routes."
        ]
      },
      {
        "heading": "Odoo uses it where it matters",
        "body": [
          "Odoo looks up routes on the variant when it searches for a rule. So the variant's routes decide whether a sales order line is drop shipped, which rule a reordering rule replenishes with, and what the Routes report shows for the variant. A route picked on a sales order line still wins over the variant's routes, as it does over the product's."
        ]
      },
      {
        "heading": "Seen in the variant list",
        "body": [
          "The Product Variants list gets a Routes column showing the routes each variant uses, and a filter, Has Variant Routes, for the variants that have their own."
        ]
      }
    ],
    "scope": [
      "Buy and Manufacture are not offered by default. Odoo leaves them off the product's route list (Applicable on Product is off) and picks them from vendors and bills of materials. To choose them per variant, tick Applicable on Product on those routes in Inventory > Configuration > Routes. A Buy route on a variant still needs a vendor, and a Manufacture route needs a bill of materials for it.",
      "The Replenish button on the product form pre-selects a route from the product, not from the variant. For a variant with its own routes, choose the route in the wizard. The View Diagram button on the product form shows the product's routes.",
      "Category routes still apply to the variant, added to the variant's routes, as they are for the product.",
      "It does not add routes or rules. Dropship, Buy and Manufacture need Odoo's Dropshipping, Purchase and Manufacturing apps installed, as before.",
      "If Odoo creates a variant again (for example after you change the product's attributes), the new variant starts with no variant routes."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise. Also requires Inventory (stock). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Warehouse",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "stock"
    ],
    "paidDepends": [],
    "downloads": 5,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_variant_routes",
    "screenshots": [
      "screenshot_variant_list.png",
      "screenshot_variant_form.png"
    ],
    "copyWords": 474,
    "hasVideo": true,
    "youtubeId": "ktUBnmaQ04M",
    "externalPage": null
  },
  {
    "tech": "mh_website_tracking_base",
    "slug": "website-tracking-base",
    "name": "Website Tracking Base",
    "summary": "Consent gated tracking base for website pixels: one cookie consent check, no tags for internal users, and shop events with order value. Sends nothing on its own",
    "tagline": "Consent gated tracking base for website pixels: one cookie consent check, no tags for internal users, and shop events with order value. Sends nothing on its own",
    "intro": [
      "This app sends nothing anywhere and loads no third-party script. It is the shared layer under our free pixel apps, so that each pixel does not have to invent its own consent check, its own \"not for staff\" rule and its own copy of the order data. Install it on its own and nothing changes on your website. Install a pixel app (TikTok Pixel is the first) and it is installed for you."
    ],
    "features": [
      {
        "heading": "Pixel apps built on it",
        "body": [
          "TikTok Pixel. More are planned and will be listed here as they ship."
        ]
      },
      {
        "heading": "One consent check for every pixel",
        "body": [
          "A pixel app built on this base waits until the visitor has accepted that kind of cookie. If your site uses our free Cookie Consent Banner, it reads the visitor's saved choice per category (analytics or marketing) and ignores a choice made under an older policy version, so bumping the policy version asks everyone again. If you use Odoo's own Cookies Bar instead, \"Allow all\" counts as consent and \"Essential only\" does not. If both are switched on, Odoo's Cookies Bar is the one on screen and the one that counts. If neither is switched on, nobody asks the visitor, so nothing loads. Settings shows which of the three applies to your website. A consent given later in the same visit takes effect straight away, without a reload."
        ]
      },
      {
        "heading": "Never for your own team",
        "body": [
          "Nothing is added to the page for internal users, so your own visits, and anything you do in the website editor, are never counted."
        ]
      },
      {
        "heading": "One set of shop events, the same on Odoo 19 and 20",
        "body": [
          "The base builds its own order data on the server: product view, add to cart, begin checkout and purchase, each with value and currency, and the products with their ID, name, category, price and quantity. It does not use Odoo's Google Analytics data, so it does not depend on a Google Analytics key being set, and it looks the same on both versions. Value excludes tax and shipping. The purchase event also carries the order reference, tax, shipping and total. Customer names, emails, phone numbers and addresses are never part of it."
        ]
      },
      {
        "heading": "For developers building a pixel",
        "body": [
          "A pixel module needs a settings field, a loader and an event map. The contract is written at the top of the module's tracking.js file."
        ]
      },
      {
        "heading": "Who it is for",
        "body": [
          "Shop owners who want a pixel on their Odoo website without sending anything before the visitor agrees, and developers who want to build a pixel on a ready consent check and order feed."
        ]
      }
    ],
    "scope": [
      "It does not send data anywhere by itself. It has no pixel, no tag and no account to connect. It is not a cookie banner: it needs Odoo's Cookies Bar or our Cookie Consent Banner, and with neither switched on no pixel loads. It reports only products added through Odoo's standard add-to-cart request, and checkout and order events once per cart and once per order in each browser. It does not report removals from the cart, wishlist actions or searches. It sends no advanced matching or customer data. It is a technical control, not legal advice: what your policy says remains yours to decide."
    ],
    "requires": [
      "Odoo 19 and 20, Community or Enterprise, with the Website and eCommerce apps (website_sale). Third-party apps install on Odoo.sh or On-Premise only - they cannot be installed on Odoo Online (SaaS)."
    ],
    "price": 0.0,
    "manifestPrice": 0.0,
    "currency": "USD",
    "category": "Website/Website",
    "version": "19.0.1.0.0",
    "license": "OPL-1",
    "depends": [
      "website_sale"
    ],
    "paidDepends": [],
    "downloads": 3,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_website_tracking_base",
    "screenshots": [
      "screenshot_settings.png"
    ],
    "copyWords": 556,
    "hasVideo": true,
    "youtubeId": "TBtGoYnoBhs",
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
    "version": "19.0.1.0.11",
    "license": "OPL-1",
    "depends": [
      "base"
    ],
    "paidDepends": [],
    "downloads": 4,
    "storeUrl": "https://apps.odoo.com/apps/modules/20.0/mh_whistleblower_deadlines",
    "screenshots": [
      "screenshot_deadlines.png"
    ],
    "copyWords": 274,
    "hasVideo": true,
    "youtubeId": "ZnAz7XTDZg0",
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
