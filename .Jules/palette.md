## 2025-05-15 - [Interactive Metric Cards & Icon Buttons]
**Learning:** In a data-heavy dashboard, interactive items like MetricCards should be semantic buttons rather than divs to ensure keyboard focusability. Icon-only buttons (Settings, Close) are common patterns here and must always include `aria-label` and visible focus states (`focus-visible:ring-2`).
**Action:** Use `motion.button` with `type="button"`, `text-left`, and `focus-visible` styles for any clickable container. Always add `aria-label` to icon-only interactive elements and `aria-hidden="true"` to decorative icons.
