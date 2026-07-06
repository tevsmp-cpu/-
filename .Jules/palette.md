# Palette's Journal - MIEX IT Dashboard

## 2025-05-23 - Interactive Card Semantics
**Learning:** In a data-heavy dashboard where cards trigger detailed overlays, using semantic `<button>` (or `motion.button`) is critical for keyboard accessibility and screen reader support. Traditional `div` wrappers with `onClick` hide the interactive nature from assistive technologies.
**Action:** Always wrap interactive cards in `<button type="button">`, provide a descriptive `aria-label` summarizing the card's data, and ensure a high-contrast focus ring (e.g., `focus-visible:ring-red-500` for this brand) to guide keyboard users.

## 2025-05-23 - Localized Accessibility Labels
**Learning:** When adding `aria-label` to components in a localized application, ensure that dynamic data (like numbers) follows the application's prevailing locale (e.g., `ru-RU` for this project) to maintain consistency in announcement (e.g., decimal separators).
**Action:** Use `.toLocaleString('ru-RU')` for numeric values in `aria-label` when the dashboard is Russian-localized.
