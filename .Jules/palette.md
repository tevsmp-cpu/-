# Palette UX Journal

## 2025-05-14 - [Accessibility Pattern for Interactive Cards]
**Learning:** In this Vite/React/Tailwind dashboard, interactive cards (like MetricCard) and list items were implemented as `div` elements. This prevents keyboard navigation and doesn't communicate "button" intent to screen readers.
**Action:** Always use `button` or `motion.button` for interactive items. Apply `type="button"`, `text-left`, and `w-full` to maintain layout. Ensure visible focus via `focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none`. For `motion` components, add `whileTap={{ scale: 0.98 }}` for tactile feedback. Always provide localized `aria-label` for icon-heavy or data-heavy items.
