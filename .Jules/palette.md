## 2025-05-14 - Focus Ring Management in Grouped Controls
**Learning:** In UI components like Segmented Controls (View Toggles) implemented with `overflow-hidden` containers, standard focus rings are often clipped by the parent or obscured by adjacent buttons.
**Action:** Use `focus-visible:ring-inset` to keep the ring within the button's bounds and `focus-visible:z-10` to ensure the active button's focus state appears above its siblings.

## 2025-05-14 - Semantic Interactive Containers
**Learning:** Modern dashboards often use complex cards as interactive elements. Using `div` with `onClick` breaks keyboard navigation and screen reader support.
**Action:** Convert interactive cards to `button` or `motion.button` elements with `type="button"`, `text-left`, and a descriptive `aria-label` that summarizes the card's content for non-visual users.
