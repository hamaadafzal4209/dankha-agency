"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[100] h-[400px] w-[400px] rounded-full blur-3xl transition-opacity duration-300"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        opacity: visible ? 0.25 : 0,
        background:
          "radial-gradient(circle, var(--secondary-glow), transparent 60%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
