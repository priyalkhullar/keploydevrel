import type { ReactNode } from "react";

export function Steps({ children }: { children: ReactNode }) {
  return (
    <ol className="not-prose relative my-8 list-none space-y-8 p-0 [counter-reset:step]">
      {children}
    </ol>
  );
}

export function Step({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <li className="relative pl-12 [counter-increment:step] before:absolute before:left-0 before:top-0 before:flex before:size-8 before:items-center before:justify-center before:rounded-full before:border before:bg-background before:text-sm before:font-semibold before:content-[counter(step)] after:absolute after:bottom-[-2rem] after:left-4 after:top-9 after:w-px after:bg-border last:after:hidden">
      <h3 className="mb-2 mt-1 text-base font-semibold leading-snug">{title}</h3>
      <div className="space-y-3 text-[0.95rem] leading-relaxed [&_a]:underline [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.85em]">
        {children}
      </div>
    </li>
  );
}
