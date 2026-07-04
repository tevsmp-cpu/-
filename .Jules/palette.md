## 2025-05-15 - [Dashboard Accessibility & Micro-interactions]
**Learning:** Interactive dashboard elements (metric cards, view toggles) often lack semantic depth when built purely with `div`s and Framer Motion. Using `motion.button` with `aria-pressed` and `focus-visible` rings significantly improves the experience for keyboard and screen reader users without sacrificing design.
**Action:** Always prefer `motion.button` for interactive cards and apply `aria-pressed` to stateful filter buttons to provide clear feedback on the active selection.
