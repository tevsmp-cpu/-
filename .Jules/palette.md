## 2025-05-15 - Interactive Semantic Elements and Responsive Toggles
**Learning:** Dashboard metrics implemented as `div` or `motion.div` lack keyboard accessibility. Toggles and filters using fixed `grid-cols-N` layouts are prone to clipping when labels are localized or long (especially in Russian).
**Action:** Always use `button` (or `motion.button`) with `type="button"` for clickable dashboard items. Use `flex flex-wrap` for category/filter lists to accommodate variable label lengths and ensure visibility.
