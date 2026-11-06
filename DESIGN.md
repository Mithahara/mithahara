# Mithahara design system

Structure and rules follow the Cohere design MD (getdesign `cohere`): flat surfaces, hairline borders, pill CTAs, rounded media cards, huge tight display type, one dark band per page, uppercase mono labels. Colours and fonts are ours.

## Fonts (unchanged)
Spectral (headings, weight 500, tracking -0.02 to -0.035em) / Archivo (body and UI) / Space Mono (labels, uppercase).

## Colour roles (Cohere role -> our token)
| Role | Token |
|---|---|
| canvas (default page background) | `--canvas` #FFFFFF |
| warm cream (sparingly, legacy) | `--sand` #F6F1E2, `--sand-card` #F2ECD8 |
| hairline | `--border-sand` #E0D8B8 |
| ink / footer | `--ink` #201D15 |
| deep-green dark band | `--moss-deep` #1B3F2E |
| brand green (primary CTA, links, chips, focus) | `--moss` #337958, `--moss-dark` #295F45 |
| teal tint surface (alternating section band) | `--moss-tint` (moss mixed 10% into white) |
| coral accent (labels, prices, Coming Soon chip) | `--gold` #E89B75, `--gold-text` #B5502E |
| coral tint surface (alternating section band, stat strip) | `--gold-tint` (gold mixed 18% into white) |
| muted text | `--text-muted` #565042 |

## Shape
Radius: 4 / 8 (`--r-sm`) / 16 (`--r-md` cards) / 22 (`--r-lg` bands) / 32 (`--r-pill` buttons). Chips are fully round. No shadows, no left accent bars.

## Rules
- Canvas is white. Pages alternate white sections with one teal-tint (`--moss-tint`) or coral-tint (`--gold-tint`) band for rhythm — never fall back to the cream `--sand` family as the default wash.
- Primary CTA: moss (teal) pill, white text (sand pill on a dark band, for contrast). Secondary: 1px ink outline pill.
- Cards sitting inside a tinted section are `--canvas` (white) so they read as a layer above the tint, not blended into it.
- Coral/gold can now fill a soft surface (a tint band, a stat strip) as well as small accents (labels, prices, one chip) — keep it to one tinted surface per page, not the whole page.
- One dark `--moss-deep` band per page (the closing CTA).
- Open space and ruled rows over boxed cards where a list will do.
- Focus: 2px moss outline.
