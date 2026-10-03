"use client";

import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { useHeadings } from "@/components/use-headings";
import { cn } from "@/lib/utils";

export function MobileToc() {
  const headings = useHeadings();
  const ref = useRef<HTMLDetailsElement>(null);

  if (headings.length === 0) return <div className="lg:hidden" aria-hidden />;

  return (
    <details ref={ref} className="group mb-8 rounded-lg border bg-muted/40 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
        On this page
        <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden />
      </summary>
      <nav aria-label="On this page (mobile)" className="border-t px-4 py-2">
        <ul className="space-y-1 text-sm">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={() => ref.current?.removeAttribute("open")}
                className={cn("block py-1.5 text-muted-foreground hover:text-foreground", h.level === 3 && "pl-4")}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
