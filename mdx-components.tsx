import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";
import { Callout } from "@/components/callout";
import { CodeBlock } from "@/components/code-block";
import { RecordReplayDiagram } from "@/components/record-replay-diagram";
import { Step, Steps } from "@/components/steps";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Table(props: ComponentProps<"table">) {
  return (
    <div role="region" aria-label="Table" tabIndex={0} className="my-6 overflow-x-auto">
      <table {...props} className="my-0" />
    </div>
  );
}

function Th(props: ComponentProps<"th">) {
  return <th scope="col" {...props} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,
    table: Table,
    th: Th,
    Callout,
    Steps,
    Step,
    RecordReplayDiagram,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    ...components,
  };
}
