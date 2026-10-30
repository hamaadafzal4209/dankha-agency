/** Spring presets for the service pages, so every element settles with the same feel */

/** Content arriving on screen: a soft settle with a hint of overshoot */
export const springIn = { type: "spring", stiffness: 210, damping: 26, mass: 0.9 } as const;

/** Things that follow the pointer: quick and without wobble */
export const springSnappy = { type: "spring", stiffness: 520, damping: 42, mass: 0.7 } as const;

/** Opening and closing panels: no overshoot, so text never bounces past its edge */
export const springPanel = { type: "spring", stiffness: 300, damping: 34 } as const;
