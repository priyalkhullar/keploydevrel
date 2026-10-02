import type { MDXComponents } from "mdx/types";
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

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,
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
