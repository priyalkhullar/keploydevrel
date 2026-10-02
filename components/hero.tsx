import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";

const badges = ["Go", "Keploy", "Postgres", site.readTime];

export function Hero() {
  return (
    <section className="border-b py-10 sm:py-14">
      <ul className="mb-4 flex flex-wrap gap-2" aria-label="Topics">
        {badges.map((b) => (
          <li key={b}>
            <Badge variant="secondary">{b}</Badge>
          </li>
        ))}
      </ul>
      <h1 className="max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
        {site.title}
      </h1>
      <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">{site.subtitle}</p>
    </section>
  );
}
