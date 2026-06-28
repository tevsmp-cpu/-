## 2026-06-28 - Semantic Metric Cards and Focus States
**Learning:** Converting interactive containers (like metric cards) from `div` to `button` with descriptive `aria-label`s significantly improves screen reader support and keyboard discoverability without breaking the layout if `text-left` is applied.
**Action:** Always use `motion.button` for interactive dashboard tiles and ensure `focus-visible` rings are consistent with the brand color (Red-500).

## 2026-06-28 - Accessible Toggle Groups
**Learning:** Segmented controls or view toggles require `aria-pressed` to communicate the active state, and `focus-visible:ring-inset` with `focus-visible:z-10` ensures focus indicators are not clipped by adjacent borders or sibling elements.
**Action:** Apply `aria-pressed` and `focus-visible:z-10` to all custom segmented control buttons.
