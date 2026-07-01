## 2025-05-15 - [Accessibility Pass & Interactivity]
**Learning:** Interactive items like Metric Cards should be semantic `button` elements to ensure keyboard focusability. When these buttons are part of a grid or flex container, use `text-left w-full` to preserve layout. For segmented controls (View Toggle), use `focus-visible:ring-inset` and `focus-visible:z-10` to prevent focus rings from being clipped by sibling elements or container `overflow-hidden`.
**Action:** Always prefer `motion.button` for clickable cards and apply `aria-pressed` to toggle states.

**Learning:** Optional fields in ARIA labels (like `metric.description`) can result in the string "undefined" being read by screen readers if not handled.
**Action:** Use conditional templates: `${metric.description ? ` ${metric.description}` : ''}`.
