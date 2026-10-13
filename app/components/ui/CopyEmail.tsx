"use client";
import { useState } from "react";
export function CopyEmail({ email, primary }: { email: string; primary?: boolean }) {
  const [done, setDone] = useState(false);
  return (
    <button
      className={`btn${primary ? " primary" : ""}`}
      onClick={() => {
        navigator.clipboard.writeText(email).then(() => {
          setDone(true);
          setTimeout(() => setDone(false), 2000);
        });
      }}
    >
      {done ? "Copied!" : "Copy my email"}
    </button>
  );
}
