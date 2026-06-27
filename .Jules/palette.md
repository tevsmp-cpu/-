## 2025-05-15 - [Accessibility & Micro-interactions]
**Learning:** Standard dashboard cards should be semantic buttons (`motion.button`) with `aria-label` providing a text summary of the card's data. Adding `whileTap={{ scale: 0.98 }}` provides immediate tactile feedback that enhances the perceived responsiveness.
**Action:** Always convert interactive 'div' cards to 'button' or 'motion.button' and include `focus-visible` rings matching the design system.

## 2025-05-15 - [Responsive Filter Layouts]
**Learning:** Using `grid-cols-N` for a large number of filter items (like 9 categories) leads to layout overflow and focus ring clipping. `flex flex-wrap` is more robust and naturally handles varying item counts while maintaining accessibility.
**Action:** Prefer `flex flex-wrap` for segmented controls or category filters with many items.
