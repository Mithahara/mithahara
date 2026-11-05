# Mithahara design system

Structure and rules follow the Cohere design MD (getdesign `cohere`): flat surfaces, hairline borders, pill CTAs, rounded media cards, huge tight display type, one dark band per page, uppercase mono labels. Colours and fonts are ours.

## Fonts (unchanged)
Spectral (headings, weight 500, tracking -0.02 to -0.035em) / Archivo (body and UI) / Space Mono (labels, uppercase).

## Colour roles (Cohere role -> our token)
| Role | Token |
|---|---|
| canvas | `--sand` #F6F1E2 |
| soft-stone surface | `--sand-card` #F2ECD8 |
| hairline | `--border-sand` #E0D8B8 |
| ink / primary CTA / footer | `--ink` #201D15 |
| deep-green dark band | `--moss-deep` #1B3F2E |
| brand green (links, chips, focus) | `--moss` #337958, `--moss-dark` #295F45 |
| coral accent (labels, prices, Coming Soon chip) | `--gold` #E89B75, `--gold-text` #B5502E |
| muted text | `--text-muted` #565042 |

## Shape
Radius: 4 / 8 (`--r-sm`) / 16 (`--r-md` cards) / 22 (`--r-lg` bands) / 32 (`--r-pill` buttons). Chips are fully round. No shadows, no left accent bars.

## Rules
- Primary CTA: ink pill (sand pill on a dark band). Secondary: 1px ink outline pill.
- Brand green is for links, chips and the dark band, not the main CTA.
- Coral/gold stays small: labels, prices, one chip. Never a surface.
- One dark `--moss-deep` band per page (the closing CTA).
- Open space and ruled rows over boxed cards where a list will do.
- Focus: 2px moss outline.
