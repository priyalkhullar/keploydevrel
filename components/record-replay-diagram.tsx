const box = "fill-card stroke-border";
const label = "fill-foreground text-[13px] font-medium";
const sub = "fill-muted-foreground text-[10.5px]";
const arrow = "stroke-foreground/70";

function Defs() {
  return (
    <defs>
      <marker id="rr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" className="fill-foreground/70" />
      </marker>
    </defs>
  );
}

export function RecordReplayDiagram() {
  return (
    <figure className="not-prose my-8">
      <svg
        viewBox="0 0 360 400"
        role="img"
        aria-labelledby="rr-title rr-desc"
        className="mx-auto h-auto w-full max-w-md"
      >
        <title id="rr-title">Keploy record and replay</title>
        <desc id="rr-desc">
          Record: a client calls the app, the app calls Postgres, and Keploy captures both the API
          calls and the database calls. Replay: Keploy calls the app and answers its database
          queries from the recorded mocks, so Postgres is not needed.
        </desc>
        <Defs />

        {/* RECORD */}
        <text x="10" y="22" className="fill-orange-700 dark:fill-orange-400 text-[12px] font-semibold tracking-wider">RECORD</text>
        <rect x="10" y="40" width="86" height="48" rx="8" className={box} />
        <text x="53" y="69" textAnchor="middle" className={label}>Client</text>
        <rect x="137" y="40" width="86" height="48" rx="8" className={box} />
        <text x="180" y="69" textAnchor="middle" className={label}>Go app</text>
        <rect x="264" y="40" width="86" height="48" rx="8" className={box} />
        <text x="307" y="69" textAnchor="middle" className={label}>Postgres</text>
        <line x1="97" y1="64" x2="135" y2="64" className={arrow} strokeWidth="1.5" markerEnd="url(#rr-arrow)" />
        <line x1="224" y1="64" x2="262" y2="64" className={arrow} strokeWidth="1.5" markerEnd="url(#rr-arrow)" />
        <rect x="10" y="108" width="340" height="52" rx="10" className="fill-orange-500/10 stroke-orange-500" strokeDasharray="5 4" />
        <text x="180" y="130" textAnchor="middle" className="fill-orange-700 dark:fill-orange-300 text-[13px] font-semibold">Keploy captures both</text>
        <text x="180" y="148" textAnchor="middle" className={sub}>API calls and database calls</text>
        <path d="M53 90 V108 M180 90 V108 M307 90 V108" className="stroke-orange-500" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        <text x="180" y="184" textAnchor="middle" className={sub}>saved as test cases and mocks</text>

        <line x1="10" y1="206" x2="350" y2="206" className="stroke-border" />

        {/* REPLAY */}
        <text x="10" y="236" className="fill-orange-700 dark:fill-orange-400 text-[12px] font-semibold tracking-wider">REPLAY</text>
        <rect x="10" y="254" width="86" height="48" rx="8" className="fill-orange-500/10 stroke-orange-500" />
        <text x="53" y="283" textAnchor="middle" className="fill-orange-700 dark:fill-orange-300 text-[13px] font-semibold">Keploy</text>
        <rect x="137" y="254" width="86" height="48" rx="8" className={box} />
        <text x="180" y="283" textAnchor="middle" className={label}>Go app</text>
        <rect x="264" y="254" width="86" height="48" rx="8" className="fill-card stroke-orange-500" strokeDasharray="5 4" />
        <text x="307" y="275" textAnchor="middle" className={label}>Mocked</text>
        <text x="307" y="291" textAnchor="middle" className={label}>Postgres</text>
        <line x1="97" y1="278" x2="135" y2="278" className={arrow} strokeWidth="1.5" markerEnd="url(#rr-arrow)" />
        <line x1="224" y1="278" x2="262" y2="278" className={arrow} strokeWidth="1.5" markerEnd="url(#rr-arrow)" />
        <text x="180" y="334" textAnchor="middle" className={sub}>recorded requests are sent to the app;</text>
        <text x="180" y="350" textAnchor="middle" className={sub}>its DB queries are answered from recorded mocks</text>
        <text x="180" y="374" textAnchor="middle" className={sub}>responses are compared with the recording</text>
      </svg>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        Record once against a real database; replay as often as you like without one.
      </figcaption>
    </figure>
  );
}
