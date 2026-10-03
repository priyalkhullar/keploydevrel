"use client";

import { Check, Copy } from "lucide-react";
import { useRef, useState, type ComponentProps } from "react";

export function CodeBlock({ children, ...props }: ComponentProps<"pre">) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const language = (props as Record<string, unknown>)["data-language"] as string | undefined;

  async function copy() {
    const text = preRef.current?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="code-block not-prose relative my-0 overflow-hidden rounded-lg border bg-muted/40">
      <div className="flex items-center justify-between border-b bg-muted/60 px-3 py-1.5 text-xs">
        <span className="font-mono uppercase tracking-wide text-foreground/75">
          {language ?? "text"}
        </span>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy code"
          className="inline-flex items-center gap-1.5 rounded px-1.5 py-1 text-foreground/75 transition-colors hover:text-foreground"
        >
          {copied ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
          <span aria-hidden>{copied ? "Copied" : "Copy"}</span>
        </button>
        <span role="status" aria-live="polite" className="sr-only">
          {copied ? "Copied" : ""}
        </span>
      </div>
      <pre
        ref={preRef}
        {...props}
        role="group"
        aria-label={`Code: ${language ?? "text"}`}
        className="m-0 overflow-x-auto bg-transparent p-4 font-mono text-[0.85rem] leading-relaxed"
        tabIndex={0}
      >
        {children}
      </pre>
    </div>
  );
}
