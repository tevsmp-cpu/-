## 2025-03-24 - [Focus Ring Clipping in Toggles]
**Learning:** Interactive items inside containers with `overflow-hidden` (like segmented controls or button groups) often have their focus rings clipped if using standard `ring-2`.
**Action:** Use `focus-visible:ring-inset` combined with `z-10` to ensure the focus indicator remains visible and is not cut off by the container's boundaries or overlapping siblings.
