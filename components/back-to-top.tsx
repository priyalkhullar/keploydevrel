"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function top() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  if (!show) return null;
  return (
    <button
      type="button"
      onClick={top}
      aria-label="Back to top"
      className="fixed bottom-4 right-4 z-40 inline-flex size-11 items-center justify-center rounded-full border bg-background text-foreground shadow-md hover:bg-muted"
    >
      <ArrowUp className="size-5" aria-hidden />
    </button>
  );
}
