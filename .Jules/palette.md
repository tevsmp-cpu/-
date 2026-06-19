## 2025-05-15 - [Accessible Cards Pattern]
**Learning:** In a dashboard with interactive metric cards, converting `div` elements to `button` or `motion.button` is critical for keyboard navigation. Using `text-left` and `w-full` on these buttons ensures layout consistency while providing the correct semantic behavior.
**Action:** Always prefer `button` for any interactive item and ensure `focus-visible` styles are prominent (e.g., `ring-blue-600`).
