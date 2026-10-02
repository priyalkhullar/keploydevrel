import { Info, Lightbulb, OctagonAlert, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  info: {
    icon: Info,
    label: "Note",
    box: "border-blue-500/40 bg-blue-500/10",
    accent: "text-blue-700 dark:text-blue-300",
  },
  tip: {
    icon: Lightbulb,
    label: "Tip",
    box: "border-emerald-500/40 bg-emerald-500/10",
    accent: "text-emerald-700 dark:text-emerald-300",
  },
  warning: {
    icon: TriangleAlert,
    label: "Warning",
    box: "border-amber-500/50 bg-amber-500/10",
    accent: "text-amber-800 dark:text-amber-300",
  },
  danger: {
    icon: OctagonAlert,
    label: "Danger",
    box: "border-red-500/40 bg-red-500/10",
    accent: "text-red-700 dark:text-red-300",
  },
} as const;

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: keyof typeof variants;
  title?: string;
  children: ReactNode;
}) {
  const v = variants[type];
  const Icon = v.icon;
  return (
    <aside
      role="note"
      className={cn("not-prose my-6 rounded-lg border border-l-4 p-4", v.box)}
    >
      <div className={cn("mb-1 flex items-center gap-2 text-sm font-semibold", v.accent)}>
        <Icon className="size-4 shrink-0" aria-hidden />
        <span>{title ?? v.label}</span>
      </div>
      <div className="text-sm leading-relaxed [&_a]:underline [&_code]:rounded [&_code]:bg-foreground/10 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.85em] [&_p]:my-2 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
