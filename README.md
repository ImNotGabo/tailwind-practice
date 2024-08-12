# Tailwind's Numbering System

- 1 rem = 4 in Tailwind (multiplied by 4).

  - if base font size is 16px = 1 rem, then 1rem = 4px in Tailwind.
  - Example, width of 16px in Tailwind: .w-4
  - 1.25rem = 5 in Tailwind (20px): .w-5
  - 1.5rem = 6 in Tailwind (24px): .w-6
  - 2rem = 8 in Tailwind (32px): .w-8
  - 3rem = 12 in Tailwind (48px): .w-12
  - 4rem = 16 in Tailwind (64px): .w-16

- 1px = 1 in Tailwind (multiplied by 1).

  - if base font size is 16px = 1 rem, then 1px = 1px in Tailwind.
  - Example, width of 1px in Tailwind: .w-1
  - 1.25px = 1.25 in Tailwind (4px): .w-1.25
  - 1.5px = 1.5 in Tailwind (6px): .w-1.5
  - 2px = 2 in Tailwind (8px): .w-2
  - 3px = 3 in Tailwind (12px): .w-3
  - 4px = 4 in Tailwind (16px): .w-4

- 1% = 0.01 in Tailwind (multiplied by 100).
  - if base font size is 16px = 1 rem, then 1% = 0.01 in Tailwind.
  - Example, width of 1% in Tailwind: .w-1%
  - 1.25% = 0.0125 in Tailwind (0.04px): .w-1.25%
  - 1.5% = 0.015 in Tailwind (0.06px): .w-1.5%
  - 2% = 0.02 in Tailwind (0.08px): .w-2%
  - 3% = 0.03 in Tailwind (0.12px): .w-3%
  - 4% = 0.04 in Tailwind (0.16px): .w-4%

## Width & Height

.{w|h}-{size}

| Sizes                   |                         |
| ----------------------- | ----------------------- |
| 0, 1, 2, 3, 4, 5, 6,    | +1                      |
| 8, 10, 12               | +2                      |
| 16, 20, 24              | +4                      |
| 32, 40, 48, 56, 64      | +8                      |
| 1/2... / 1/{3, 4, 5, 6} | Every digit in fraction |
| Screen, full, min, max  | Every size in screen    |

## Margin & Padding

.{m|p{t|b|l|r|x|y}-{size}}

| Sizes                |     |
| -------------------- | --- |
| 0, 1, 2, 3, 4, 5, 6, | +1  |
| 8, 10, 12            | +2  |
| 16, 20, 24           | +4  |
| 32, 40, 48, 56, 64   | +8  |

## Styling Text - Font Family

.font-{family}

| Families |                            |
| -------- | -------------------------- |
| sans     | Helvetica or similar       |
| serif    | Times New Roman or similar |
| mono     | Monospace or similar       |

## Styling Text - Font Size

.text-{size}

| Sizes | rem   | Pixels |
| ----- | ----- | ------ |
| xs    | 0.75  | 12px   |
| sm    | 0.875 | 14px   |
| base  | 1     | 16px   |
| lg    | 1.125 | 18px   |
| xl    | 1.25  | 20px   |
| 2xl   | 1.5   | 24px   |
| 3xl   | 1.875 | 30px   |
| 4xl   | 2.25  | 36px   |
| 5xl   | 3     | 48px   |
| 6xl   | 3.75  | 60px   |
| 7xl   | 4.5   | 72px   |
| 8xl   | 6     | 96px   |
| 9xl   | 8     | 128px  |

## Styling Text - Text Alignment

.text-{align}

| Aligns  |                     |
| ------- | ------------------- |
| left    | Left-aligned text   |
| center  | Center-aligned text |
| right   | Right-aligned text  |
| justify | Justified text      |

## Styling Text - Text Color

.text-{color}

| Colors                                                     | Shades    |
| ---------------------------------------------------------- | --------- |
| black, white                                               | -         |
| gray, red, yellow, green, teal, indigo, blue, purple, pink | 100 - 900 |

## Styling Text - Font Weight

.font-{weight}

| Weights   |     |
| --------- | --- |
| hairline  | 100 |
| thin      | 200 |
| light     | 300 |
| normal    | 400 |
| medium    | 500 |
| semibold  | 600 |
| bold      | 700 |
| extrabold | 800 |
| black     | 900 |

## Styling Text - Letter Spacing

.tracking-{size}

| Sizes   | em     |
| ------- | ------ |
| tighter | -0.05  |
| tight   | -0.025 |
| normal  | 0      |
| wide    | 0.025  |
| wider   | 0.05   |
| widest  | 0.1    |

NOTE: Tracking is in em, not rem. em units are based on the parent element's font size, not the document root font size.

## Styling Text - Line Height

.leading-{size}

| Sizes   | rem   | Pixels |
| ------- | ----- | ------ |
| none    | 1     | 16px   |
| tight   | 1.25  | 20px   |
| snug    | 1.375 | 22px   |
| normal  | 1.5   | 24px   |
| relaxed | 1.625 | 26px   |
| loose   | 2     | 32px   |

## Styling Text - Text Decoration

.decoration-{decoration}

| Decorations     |
| --------------- |
| underline       |
| line-through    |
| no-underline    |
| no-line-through |

## Borders

## Borders Thickness

.border-{thickness}

| Thicknesses | Px  |
| ----------- | --- |
| none-0      | 0   |
| thin-1      | 1px |
| medium-2    | 2px |
| thick-4     | 4px |
| extra-thick | 8px |

.border-{side}-{thickness}

| Sides         | Thicknesses | Px  |
| ------------- | ----------- | --- |
| t, b, l , r   | none-0      | 0   |
| thin-empty    | 1           | 1px |
| medium-2      | 2           | 2px |
| thick-4       | 4           | 4px |
| extra-thick-8 | 8           | 8px |

## Borders Colors

.border-{color}-{shade}

| Colors                                                     | Shades  |
| ---------------------------------------------------------- | ------- |
| black, white                                               | -       |
| gray, red, yellow, green, teal, indigo, blue, purple, pink | 100-900 |

## Borders Style

.border-{style}

| Styles |
| ------ |
| solid  |
| dashed |
| dotted |
| double |
| hidden |
| none   |
| dotted |
| double |
| hidden |
| none   |

NOTE: The dashed, dotted, and double border styles are not supported in Safari.

## Borders Radius

.rounded-{size}

| Sizes | rem   | px     |
| ----- | ----- | ------ |
| none  | 0     | 0      |
| sm    | 0.125 | 2px    |
| base  | 0.25  | 4px    |
| md    | 0.375 | 6px    |
| lg    | 0.5   | 8px    |
| xl    | 0.75  | 12px   |
| 2xl   | 1     | 16px   |
| full  | 0     | 9999px |

.rounded-{side}-{radius}

| Sides | -                         |
| ----- | ------------------------- |
| t     | Top-left, Top-right       |
| b     | Bottom-left, Bottom-right |
| l     | Top-left, Bottom-left     |
| r     | Top-right, Bottom-right   |
| tl    | Top-left                  |
| tr    | Top-right                 |
| bl    | Bottom-left               |
| br    | Bottom-right              |

| Sizes         | Sides                                                          |
| ------------- | -------------------------------------------------------------- |
| .rounded-none | rounded-t-none, rounded-b-none, rounded-l-none, rounded-r-none |
| .rounded-sm   | rounded-t-sm, rounded-b-sm, rounded-l-sm, rounded-r-sm         |
| .rounded-base | rounded-t-base, rounded-b-base, rounded-l-base, rounded-r-base |
| .rounded-md   | rounded-t-md, rounded-b-md, rounded-l-md, rounded-r-md         |
| .rounded-lg   | rounded-t-lg, rounded-b-lg, rounded-l-lg, rounded-r-lg         |
| .rounded-xl   | rounded-t-xl, rounded-b-xl, rounded-l-xl, rounded-r-xl         |
| .rounded-2xl  | rounded-t-2xl, rounded-b-2xl, rounded-l-2xl, rounded-r-2xl     |
| .rounded-full | rounded-t-full, rounded-b-full, rounded-l-full, rounded-r-full |

## Display Modes

| Display Modes |                            |
| ------------- | -------------------------- |
| _block_       | Display as a block         |
| inline        | Display as an inline       |
| inline-block  | Display as an inline-block |
| _flex_        | Display as a flex          |
| inline-flex   | Display as an inline-flex  |
| table         | Display as a table         |
| table-row     | Display as a table-row     |
| table-cell    | Display as a table-cell    |
| _hidden_      | Hide an element            |

## Flexbox Directions (Horizontal & Vertical)

.justify-{alignment}

| Alignnments | Default (horizontal)                                   |
| ----------- | ------------------------------------------------------ |
| start       | Items are packed to the start                          |
| end         | Items are packed to the end                            |
| center      | Items are centered                                     |
| between     | Items are evenly distributed in the space              |
| around      | Items are evenly distributed around the flex container |
| evenly      | Items are evenly distributed                           |
| stretch     | Items stretch to fill the container                    |

.items-{alignment}

| Alginments | Fill container (vertical)                              |
| ---------- | ------------------------------------------------------ |
| start      | Items are packed to the start                          |
| end        | Items are packed to the end                            |
| center     | Items are centered                                     |
| between    | Items are evenly distributed in the space              |
| around     | Items are evenly distributed around the flex container |
| evenly     | Items are evenly distributed                           |
| stretch    | Items stretch to fill the container                    |

## Flexbox Directions

.flex-{direction}

| Directions  |
| ----------- |
| row         |
| col         |
| row-reverse |
| col-reverse |

## Flexbox Wrap

.flex-wrap

| Wraps        |         |
| ------------ | ------- |
| wrap         | Default |
| nowrap       |
| wrap-reverse |

## Styling Text - Text Transform

.uppercase, .lowercase, .capitalize, .normal-case

## Styling Text - Italics

.italic or .not-italic

