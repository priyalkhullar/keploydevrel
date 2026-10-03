"use client";

import { useEffect, useState } from "react";

export type Heading = { id: string; text: string; level: 2 | 3 };

// Headings get their ids at build time from rehype-slug; scan the DOM once after mount.
export function useHeadings(): Heading[] {
  const [headings, setHeadings] = useState<Heading[]>([]);
  useEffect(() => {
    const els = document.querySelectorAll<HTMLHeadingElement>("article h2[id], article h3[id]");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(
      Array.from(els, (el) => ({
        id: el.id,
        text: el.textContent ?? "",
        level: el.tagName === "H2" ? 2 : 3,
      })),
    );
  }, []);
  return headings;
}
