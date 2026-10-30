"use client";

import { useEffect } from "react";

/** A bouncy spring (stiffness 380, damping ratio 0.42) sampled for the Web Animations API */
const releaseSpring =
  "linear(0, 0.064, 0.2244, 0.4353, 0.6574, 0.8606, 1.0253, 1.142, 1.2097, 1.2334, 1.2222, 1.1871, 1.1388, 1.0868, 1.0384, 0.9986, 0.9698, 0.9525, 0.9457, 0.9474, 0.955, 0.966, 0.9781, 0.9896, 0.9992, 1.0063, 1.0107, 1.0126, 1.0124, 1.0108, 1.0083, 1.0055, 1.0028, 1.0004, 0.9987, 0.9976, 1)";

const pressable = 'button:not(:disabled), [role="button"], [data-press]';
const animationId = "press-spring";

/** The button, button-styled link or small icon link a pointer or key press landed on, if any */
function pressTarget(target: EventTarget | null): HTMLElement | null {
  if (!(target instanceof Element)) {
    return null;
  }
  const element = target.closest<HTMLElement>(`${pressable}, a`);
  if (!element || element.closest("[data-no-press]")) {
    return null;
  }
  if (element.matches(pressable)) {
    return element;
  }
  const { width, height } = element.getBoundingClientRect();
  return width <= 64 && height <= 64 && element.querySelector("svg, img") ? element : null;
}

function cancelPress(element: HTMLElement) {
  element.getAnimations().forEach((animation) => animation.id === animationId && animation.cancel());
}

/**
 * Gives every button and icon a tactile press: it dips in while held and springs back with a little overshoot on
 * release. The dip is a fixed few pixels, so small icons and wide buttons feel equally firm. Mounted once for the
 * whole site; it animates the `scale` property only, so it never fights an element's own transitions.
 */
export function PressSpring() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("animate" in HTMLElement.prototype)) {
      return;
    }

    let pressed: HTMLElement | null = null;

    const press = (target: EventTarget | null) => {
      const element = pressTarget(target);
      if (!element) {
        return;
      }
      pressed = element;
      const { width } = element.getBoundingClientRect();
      const depth = Math.min(0.06, 6 / Math.max(width, 1));
      cancelPress(element);
      const animation = element.animate([{ scale: "1" }, { scale: String(1 - depth) }], {
        duration: 140,
        easing: "cubic-bezier(0.2, 0, 0, 1)",
        fill: "forwards",
      });
      animation.id = animationId;
    };

    const release = () => {
      const element = pressed;
      if (!element) {
        return;
      }
      pressed = null;
      const current = getComputedStyle(element).scale;
      cancelPress(element);
      const animation = element.animate([{ scale: current === "none" ? "1" : current }, { scale: "1" }], {
        duration: 650,
        easing: releaseSpring,
      });
      animation.id = animationId;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button === 0) {
        press(event.target);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.key === "Enter" || event.key === " ") && !event.repeat) {
        press(event.target);
      }
    };

    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    window.addEventListener("keyup", release);
    window.addEventListener("blur", release);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      window.removeEventListener("keyup", release);
      window.removeEventListener("blur", release);
    };
  }, []);

  return null;
}
