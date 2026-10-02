import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t py-8 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>Written by {site.author}</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <a className="underline underline-offset-4 hover:text-foreground" href={site.repoUrl} target="_blank" rel="noopener noreferrer">
            Source on GitHub
          </a>
          <span>Built with Next.js and MDX</span>
        </p>
      </div>
    </footer>
  );
}
