## 2025-05-15 - [Accessible Semantic Components]
**Learning:** Using `motion.button` (or standard `button`) instead of `div` for interactive items is crucial for keyboard accessibility. When doing so, it's important to use `text-left` and `w-full` to maintain the expected layout, and `focus-visible` to ensure focus states are only shown to keyboard users.
**Action:** Always prefer semantic button elements for clickable items and add `aria-label` when the internal text doesn't fully describe the action or state.

## 2025-05-15 - [Tactile Feedback Variations]
**Learning:** Different scales for `whileTap` animations feel better for different component sizes. `scale: 0.98` works well for large cards, `scale: 0.95` for medium-sized toggles, and `scale: 0.9` for small icon buttons.
**Action:** Use varied `whileTap` scales based on the visual weight of the interactive element.
