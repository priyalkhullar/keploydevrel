"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useHeadings } from "@/components/use-headings";

export function TableOfContents() {
  const headings = useHeadings();
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const els = document.querySelectorAll<HTMLHeadingElement>("article h2[id], article h3[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -65% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function go(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  }

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 font-semibold">On this page</p>
      <ul className="space-y-1.5 border-l">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => go(e, h.id)}
              aria-current={activeId === h.id ? "true" : undefined}
              className={cn(
                "-ml-px block rounded-sm border-l-2 border-transparent py-0.5 text-muted-foreground transition-colors hover:text-foreground",
                h.level === 2 ? "pl-3" : "pl-6",
                activeId === h.id && "border-orange-500 font-medium text-foreground",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
