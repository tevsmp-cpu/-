## 2025-05-14 - Interactive Cards Accessibility Pattern
**Learning:** Metric cards were initially 'div' elements with 'onClick', making them inaccessible to keyboard and screen-reader users. Converting them to 'motion.button' with 'type="button"' and 'text-left' preserves the layout while enabling semantic interaction.
**Action:** Always use 'button' or 'motion.button' for interactive card components, ensuring 'aria-label' provides a summary of the card's content for screen readers.

## 2025-05-14 - Design System Focus States
**Learning:** The dashboard uses a minimalist design where default focus rings can be jarring. Using 'focus-visible:ring-red-500' ensures focus is only visible to keyboard users and matches the MOEX brand color.
**Action:** Use 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500' for all interactive elements to maintain accessibility without compromising mouse-user aesthetics.
