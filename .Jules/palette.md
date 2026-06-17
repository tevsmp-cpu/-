## 2025-05-14 - [Interactive Cards Accessibility]
**Learning:** Using `div` or `motion.div` for clickable dashboard cards makes them inaccessible to keyboard users and screen readers. Even if they have `onClick` handlers, they are not in the tab order and lack the semantic "button" role.
**Action:** Always use `<button>` (or `motion.button`) with `type="button"` for interactive elements. Ensure they have `text-left` if they contain multiline content, and provide clear visual feedback via `focus-visible` rings. Add `aria-label` to summarize the card's content for screen readers.
