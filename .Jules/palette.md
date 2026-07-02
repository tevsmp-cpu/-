## 2025-05-14 - Semantic Dashboard Interactivity
**Learning:** In dashboard interfaces with dense interactive cards, using semantic `motion.button` instead of `div` ensures immediate accessibility. Providing a descriptive `aria-label` that summarizes the card's data (name, value, unit) allows screen reader users to quickly scan the grid without deep-diving into every child element.
**Action:** Always prefer semantic button roles for interactive dashboard items and ensure `focus-visible` rings are used to avoid clipping in grid/flex layouts while maintaining a clean aesthetic for mouse users.
