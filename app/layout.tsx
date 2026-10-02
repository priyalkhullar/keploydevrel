import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { TableOfContents } from "@/components/table-of-contents";
import { ReadingProgress } from "@/components/reading-progress";
import { site } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-code", subsets: ["latin"] });

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "article",
  },
  twitter: { card: "summary", title: site.title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ReadingProgress />
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">
            <Hero />
            <div className="grid gap-12 py-10 lg:grid-cols-[minmax(0,1fr)_14rem]">
              <article className="prose prose-neutral dark:prose-invert w-full max-w-[72ch] min-w-0 prose-headings:scroll-mt-20 prose-headings:font-semibold prose-a:underline-offset-4 prose-code:before:content-none prose-code:after:content-none prose-pre:m-0 prose-pre:bg-transparent prose-pre:p-0 [&_h2_a]:no-underline [&_h3_a]:no-underline">
                {children}
              </article>
              <aside className="hidden lg:block">
                <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
                  <TableOfContents />
                </div>
              </aside>
            </div>
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
