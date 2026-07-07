## 2025-05-15 - Accessibility for Metric Dashboards
**Learning:** Metric cards that are interactive must be semantic buttons (`<button>`) rather than `div`s with `onClick` to ensure keyboard accessibility and proper screen reader interaction. Combining `aria-label` with localized numeric formatting (`toLocaleString('ru-RU')`) provides a superior experience for screen reader users by summarizing the card's content.
**Action:** Always refactor interactive `div` containers to `motion.button`, add `type="button"`, and provide a concise, localized `aria-label` summarizing the key data.

## 2025-05-15 - Layout Responsiveness for Localized Filters
**Learning:** Fixed grids (e.g., `grid-cols-5`) can cause overlap when localized labels (like Russian) are longer than expected. Using `flex flex-wrap` on filter containers provides more robust responsiveness.
**Action:** Prefer `flex flex-wrap` over fixed `grid` for navigation and filter bars to handle dynamic content and localization.
