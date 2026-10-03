import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { TableOfContents } from "@/components/table-of-contents";
import { MobileToc } from "@/components/mobile-toc";
import { BackToTop } from "@/components/back-to-top";
import { ReadingProgress } from "@/components/reading-progress";
import { site, siteUrl } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-code", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: `%s | ${site.shortTitle}` },
  description: site.subtitle,
  alternates: { canonical: "/" },
  authors: [{ name: site.author }],
  keywords: site.keywords,
  openGraph: {
    type: "article",
    siteName: site.shortTitle,
    locale: "en_US",
    url: "/",
    title: site.title,
    description: site.subtitle,
    authors: [site.author],
    publishedTime: site.datePublished,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.subtitle },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF4EA" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: site.title,
  description: site.subtitle,
  author: { "@type": "Person", name: site.author },
  datePublished: site.datePublished,
  inLanguage: "en",
  mainEntityOfPage: { "@type": "WebPage", "@id": siteUrl },
  about: { "@type": "Thing", name: "Keploy" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:ring-2 focus:ring-ring"
          >
            Skip to content
          </a>
          <ReadingProgress />
          <SiteHeader />
          <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">
            <Hero />
            <div className="grid gap-12 py-10 lg:grid-cols-[minmax(0,1fr)_14rem]">
              <div className="min-w-0">
                <MobileToc />
                <article className="prose prose-neutral dark:prose-invert w-full max-w-[72ch] min-w-0 prose-headings:scroll-mt-20 prose-headings:font-semibold prose-a:underline prose-a:underline-offset-4 prose-code:before:content-none prose-code:after:content-none prose-pre:m-0 prose-pre:bg-transparent prose-pre:p-0 [&_h2_a]:no-underline [&_h3_a]:no-underline">
                  {children}
                </article>
              </div>
              <aside className="hidden lg:block">
                <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
                  <TableOfContents />
                </div>
              </aside>
            </div>
          </main>
          <SiteFooter />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
