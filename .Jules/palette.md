## 2024-05-23 - [Accessibility: Interactive Card Pattern]
**Learning:** In this dashboard, complex cards with `onClick` were initially implemented as `div`s, making them inaccessible to keyboard users. Converting them to `motion.button` with `text-left`, `w-full`, and `focus-visible:ring-red-500` (the brand color) provides a consistent and accessible interactive experience.
**Action:** Use `motion.button` for all interactive dashboard cards; apply `whileTap={{ scale: 0.98 }}` for tactile feedback and ensure `aria-label` includes the card's primary information.
