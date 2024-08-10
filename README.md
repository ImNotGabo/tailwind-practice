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

.{m|p}-{size}

| Sizes                |     |
| -------------------- | --- |
| 0, 1, 2, 3, 4, 5, 6, | +1  |
| 8, 10, 12            | +2  |
| 16, 20, 24           | +4  |
| 32, 40, 48, 56, 64   | +8  |
