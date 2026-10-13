"use client";
import type { ReactNode } from "react";
export function HeroGlow({ children }: { children: ReactNode }) {
  return (
    <header
      id="home"
      className="hero"
      onMouseMove={(e) => {
        const b = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - b.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - b.top}px`);
      }}
    >
      {children}
    </header>
  );
}
