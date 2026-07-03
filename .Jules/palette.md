## 2025-05-15 - Accessible Metric Cards and Flexible Layouts
**Learning:** Interactive cards implemented as 'div' elements are inaccessible to keyboard users and lack semantic context. Furthermore, rigid 'grid' layouts for localized text (like Russian) often lead to overlap when content length varies.
**Action:** Always use 'motion.button' or 'button' for interactive card elements, providing descriptive 'aria-label' and visible 'focus-visible' states. Use 'flex flex-wrap' for navigation/filter bars to ensure robust responsiveness across languages.
