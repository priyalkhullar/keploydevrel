"use client";

import { useEffect, useRef, useState } from "react";

function Panel1() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 570" role="img" aria-labelledby="p1t p1d" className="w-full h-auto block rounded-xl">
      <title id="p1t">Panel 1: The pain of hand-written tests</title>
      <desc id="p1d">A tired developer sits at a laptop beside a leaning tower of test and mock files and says &quot;So many mocks.&quot;</desc>
      <style>{`
        :root {
          --ink: #0F172A;
          --bg: #FFF4EA;
          --floor: #FFE6D2;
          --card: #FFFFFF;
          --orange: #F97316;
          --indigo: #4F46E5;
          --indigo-lt: #818CF8;
          --tint: #FFDFC7;
          --skin: #F2C29B;
          --hair: #1E293B;
          --desk: #334155;
          --lap: #CBD5E1;
          --screen: #1E293B;
          --red: #EF4444;
        }
        .cm-s  { stroke: var(--ink); stroke-width: 5; stroke-linejoin: round; stroke-linecap: round; }
        .cm-s3 { stroke: var(--ink); stroke-width: 3.5; stroke-linejoin: round; stroke-linecap: round; fill: none; }
        .cm-ink { fill: var(--ink); }
        .cm-bg { fill: var(--bg); } .cm-floor { fill: var(--floor); } .cm-card { fill: var(--card); }
        .cm-or { fill: var(--orange); } .cm-in { fill: var(--indigo); } .cm-inlt { fill: var(--indigo-lt); }
        .cm-tint { fill: var(--tint); } .cm-skin { fill: var(--skin); } .cm-hair { fill: var(--hair); }
        .cm-desk { fill: var(--desk); } .cm-lap { fill: var(--lap); } .cm-screen { fill: var(--screen); }
        .cm-t { font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif; font-weight: 800; fill: var(--ink); }
        .cm-w { fill: #fff; }
        .cm-sfx { font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif; font-weight: 800;
               fill: var(--orange); stroke: var(--ink); stroke-width: 8; paint-order: stroke; stroke-linejoin: round; }
      `}</style>
      <defs>
        <pattern id="p1-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r="2.3" fill="#F97316" opacity="0.35"/>
        </pattern>
        <clipPath id="p1-frame"><rect x="8" y="8" width="770" height="545" rx="14"/></clipPath>
      </defs>
      <rect x="20" y="20" width="770" height="545" rx="14" className="cm-ink"/>
      <rect x="8" y="8" width="770" height="545" rx="14" className="cm-bg"/>
      <g clipPath="url(#p1-frame)">
        <rect x="8" y="456" width="770" height="97" className="cm-floor"/>
        <rect x="650" y="130" width="130" height="300" fill="url(#p1-dots)"/>
        <path d="M70 440 Q70 322 130 306 Q190 322 190 440 Z" className="cm-in cm-s"/>
        <path d="M118 318 L116 352 M144 318 L146 352" className="cm-s3"/>
        <rect x="30" y="430" width="740" height="26" rx="6" className="cm-desk cm-s"/>
        <rect x="235" y="412" width="170" height="18" rx="6" className="cm-lap cm-s"/>
        <rect x="250" y="300" width="140" height="114" rx="8" className="cm-screen cm-s"/>
        <rect x="266" y="318" width="70" height="10" rx="5" className="cm-or"/>
        <rect x="266" y="338" width="100" height="10" rx="5" className="cm-inlt"/>
        <rect x="266" y="358" width="54" height="10" rx="5" fill="#64748B"/>
        <circle cx="360" cy="388" r="15" fill="#EF4444" stroke="#fff" strokeWidth="3"/>
        <path d="M353 381 L367 395 M367 381 L353 395" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none"/>
        <path d="M175 355 Q205 400 245 410" fill="none" stroke="var(--ink)" strokeWidth="29" strokeLinecap="round"/>
        <path d="M175 355 Q205 400 245 410" fill="none" stroke="var(--indigo)" strokeWidth="18" strokeLinecap="round"/>
        <circle cx="250" cy="410" r="13" className="cm-skin cm-s3" style={{ fill: "var(--skin)" }}/>
        <circle cx="130" cy="255" r="46" className="cm-skin cm-s"/>
        <path d="M84 252 Q84 202 132 204 Q178 204 176 252 Q160 226 130 228 Q104 228 84 252 Z" className="cm-hair" style={{ stroke: "var(--ink)", strokeWidth: 4, strokeLinejoin: "round" }}/>
        <path d="M106 244 L124 248 M154 244 L136 248" className="cm-s3"/>
        <path d="M108 256 H124 M136 256 H152" className="cm-s3"/>
        <path d="M108 267 Q116 273 124 267 M136 267 Q144 273 152 267" className="cm-s3" opacity="0.5"/>
        <path d="M116 285 Q130 277 144 285" className="cm-s3"/>
        <path d="M186 222 Q199 242 186 251 Q173 242 186 222 Z" fill="#7DD3FC" stroke="var(--ink)" strokeWidth="3.5" strokeLinejoin="round"/>
        <g transform="rotate(-2 535 413)"><rect x="450" y="396" width="170" height="34" rx="4" className="cm-tint cm-s"/><text x="535" y="419" textAnchor="middle" fontSize="15" className="cm-t">db_mock_2.json</text></g>
        <g transform="rotate(3 535 377)"><rect x="450" y="360" width="170" height="34" rx="4" className="cm-card cm-s"/><text x="535" y="383" textAnchor="middle" fontSize="15" className="cm-t">test_17.go</text></g>
        <g transform="rotate(-3 535 341)"><rect x="450" y="324" width="170" height="34" rx="4" className="cm-tint cm-s"/><text x="535" y="347" textAnchor="middle" fontSize="15" className="cm-t">users_mock.json</text></g>
        <g transform="rotate(2.5 535 305)"><rect x="450" y="288" width="170" height="34" rx="4" className="cm-card cm-s"/><text x="535" y="311" textAnchor="middle" fontSize="15" className="cm-t">test_18.go</text></g>
        <g transform="rotate(-2 535 269)"><rect x="450" y="252" width="170" height="34" rx="4" className="cm-tint cm-s"/><text x="535" y="275" textAnchor="middle" fontSize="15" className="cm-t">mock_9.json</text></g>
        <g transform="rotate(4 535 233)"><rect x="450" y="216" width="170" height="34" rx="4" className="cm-card cm-s"/><text x="535" y="239" textAnchor="middle" fontSize="15" className="cm-t">test_19.go</text></g>
        <path d="M636 205 l16 -8 M640 232 l20 0 M631 258 l16 8" className="cm-s3"/>
        <path d="M280 140 H390 Q430 140 430 180 V190 Q430 230 390 230 H320 L205 262 L270 230 H280 Q240 230 240 190 V180 Q240 140 280 140 Z" className="cm-card cm-s"/>
        <text x="335" y="180" textAnchor="middle" fontSize="27" className="cm-t">So many</text>
        <text x="335" y="212" textAnchor="middle" fontSize="27" className="cm-t">mocks.</text>
        <text x="668" y="182" textAnchor="middle" fontSize="44" className="cm-sfx" transform="rotate(-8 668 182)">SIGH.</text>
        <rect x="40" y="40" width="490" height="84" rx="8" className="cm-ink"/>
        <rect x="34" y="34" width="490" height="84" rx="8" className="cm-card cm-s"/>
        <text x="66" y="70" fontSize="25" className="cm-t">Testing an API =</text>
        <text x="66" y="102" fontSize="25" className="cm-t">every request &amp; mock, by hand.</text>
        <circle cx="34" cy="34" r="24" className="cm-or cm-s"/>
        <text x="34" y="44" textAnchor="middle" fontSize="28" className="cm-t cm-w">1</text>
      </g>
      <rect x="8" y="8" width="770" height="545" rx="14" fill="none" stroke="var(--ink)" strokeWidth="6"/>
    </svg>
  );
}

function Panel2() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 570" role="img" aria-labelledby="p2t p2d" className="w-full h-auto block rounded-xl">
      <title id="p2t">Panel 2: Keploy sits between your app and its database.</title>
      <desc id="p2d">The Watcher bot stands between the Go app and Postgres database with two-way traffic arrows through it, while a small developer in the corner asks &quot;Who is that?&quot;.</desc>
      <style>{`
        :root {
          --ink: #0F172A;
          --bg: #FFF4EA;
          --floor: #FFE6D2;
          --card: #FFFFFF;
          --orange: #F97316;
          --indigo: #4F46E5;
          --indigo-lt: #818CF8;
          --green: #16A34A;
          --red: #EF4444;
          --tint: #FFDFC7;
          --skin: #F2C29B;
          --hair: #1E293B;
          --desk: #334155;
          --lap: #CBD5E1;
          --screen: #1E293B;
        }
        .cm-s  { stroke: var(--ink); stroke-width: 5; stroke-linejoin: round; stroke-linecap: round; }
        .cm-s3 { stroke: var(--ink); stroke-width: 3.5; stroke-linejoin: round; stroke-linecap: round; fill: none; }
        .cm-ink { fill: var(--ink); }
        .cm-bg { fill: var(--bg); } .cm-floor { fill: var(--floor); } .cm-card { fill: var(--card); }
        .cm-or { fill: var(--orange); } .cm-in { fill: var(--indigo); } .cm-inlt { fill: var(--indigo-lt); }
        .cm-gr { fill: var(--green); } .cm-red { fill: var(--red); }
        .cm-tint { fill: var(--tint); } .cm-skin { fill: var(--skin); } .cm-hair { fill: var(--hair); }
        .cm-desk { fill: var(--desk); } .cm-lap { fill: var(--lap); } .cm-screen { fill: var(--screen); }
        .cm-t { font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif; font-weight: 800; fill: var(--ink); }
        .cm-w { fill: #fff; }
        .cm-sfx { font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif; font-weight: 800;
               fill: var(--orange); stroke: var(--ink); stroke-width: 8; paint-order: stroke; stroke-linejoin: round; }
      `}</style>
      <defs>
        <pattern id="p2-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r="2.3" fill="#F97316" opacity="0.35"/>
        </pattern>
        <clipPath id="p2-frame"><rect x="8" y="8" width="770" height="545" rx="14"/></clipPath>
      </defs>
      <rect x="20" y="20" width="770" height="545" rx="14" className="cm-ink"/>
      <rect x="8" y="8" width="770" height="545" rx="14" className="cm-bg"/>
      <g clipPath="url(#p2-frame)">
        <rect x="8" y="456" width="770" height="97" className="cm-floor"/>
        <rect x="630" y="120" width="148" height="336" fill="url(#p2-dots)"/>
        <g>
          <rect x="85" y="205" width="145" height="175" rx="14" className="cm-in cm-s"/>
          <rect x="85" y="205" width="145" height="42" rx="14" className="cm-ink"/>
          <rect x="85" y="233" width="145" height="14" className="cm-ink"/>
          <text x="157" y="233" textAnchor="middle" fontSize="18" fontWeight="800" fill="#FFF" className="cm-t">GO APP</text>
          <rect x="108" y="262" width="100" height="26" rx="6" className="cm-card cm-s"/>
          <text x="157" y="280" textAnchor="middle" fontSize="15" fontWeight="800" fill="#4F46E5" className="cm-t">:8080</text>
          <circle cx="115" cy="310" r="5" fill="#16A34A"/>
          <circle cx="130" cy="310" r="5" fill="#F97316"/>
          <circle cx="145" cy="310" r="5" className="cm-inlt"/>
          <rect x="108" y="332" width="70" height="8" rx="4" className="cm-inlt"/>
          <rect x="108" y="348" width="45" height="8" rx="4" fill="#CBD5E1"/>
        </g>
        <path d="M240 248 H310" className="cm-s"/>
        <path d="M300 240 L315 248 L300 256" className="cm-s" fill="var(--ink)"/>
        <path d="M310 328 H240" className="cm-s"/>
        <path d="M250 320 L235 328 L250 336" className="cm-s" fill="var(--ink)"/>
        <g>
          <path d="M400 190 V155" className="cm-s"/>
          <circle cx="400" cy="146" r="11" className="cm-in cm-s"/>
          <path d="M330 260 Q305 275 315 295" className="cm-s" fill="none"/>
          <circle cx="313" cy="295" r="9" className="cm-or cm-s"/>
          <path d="M470 260 Q495 275 485 295" className="cm-s" fill="none"/>
          <circle cx="487" cy="295" r="9" className="cm-or cm-s"/>
          <rect x="330" y="190" width="140" height="170" rx="28" className="cm-or cm-s"/>
          <circle cx="400" cy="250" r="42" className="cm-card cm-s"/>
          <circle cx="400" cy="250" r="28" className="cm-in"/>
          <circle cx="400" cy="250" r="17" fill="#0F172A"/>
          <circle cx="391" cy="241" r="7" fill="#FFFFFF"/>
          <circle cx="410" cy="260" r="3.5" fill="#818CF8"/>
          <ellipse cx="365" cy="300" rx="8" ry="5" fill="#FFDFC7" opacity="0.9"/>
          <ellipse cx="435" cy="300" rx="8" ry="5" fill="#FFDFC7" opacity="0.9"/>
          <path d="M386 308 Q400 320 414 308" className="cm-s3"/>
        </g>
        <path d="M480 248 H550" className="cm-s"/>
        <path d="M540 240 L555 248 L540 256" className="cm-s" fill="var(--ink)"/>
        <path d="M550 328 H480" className="cm-s"/>
        <path d="M490 320 L475 328 L490 336" className="cm-s" fill="var(--ink)"/>
        <g>
          <path d="M565 225 V340 C565 365 705 365 705 340 V225 Z" className="cm-inlt cm-s"/>
          <ellipse cx="635" cy="225" rx="70" ry="24" className="cm-inlt cm-s"/>
          <path d="M565 282 C565 302 705 302 705 282" fill="none" className="cm-s"/>
          <rect x="585" y="252" width="100" height="30" rx="6" className="cm-card cm-s"/>
          <text x="635" y="273" textAnchor="middle" fontSize="16" className="cm-t">Postgres</text>
          <circle cx="585" cy="330" r="5" fill="#16A34A"/>
        </g>
        <g transform="translate(10, 20)">
          <path d="M35 440 Q35 375 75 365 Q115 375 115 440 Z" className="cm-in cm-s"/>
          <path d="M68 375 L67 400 M82 375 L83 400" className="cm-s3"/>
          <circle cx="75" cy="330" r="30" className="cm-skin cm-s"/>
          <path d="M45 328 Q45 294 76 296 Q107 296 105 328 Q95 311 75 312 Q57 312 45 328 Z" className="cm-hair" style={{ stroke: "var(--ink)", strokeWidth: 3.5, strokeLinejoin: "round" }}/>
          <circle cx="68" cy="328" r="3" className="cm-ink"/>
          <circle cx="85" cy="328" r="3" className="cm-ink"/>
          <path d="M63 320 L73 322 M80 320 L90 318" className="cm-s3"/>
          <circle cx="77" cy="342" r="3.5" className="cm-ink"/>
          <path d="M100 270 H200 Q215 270 215 288 V294 Q215 312 200 312 H145 L120 330 L128 312 H100 Q85 312 85 294 V288 Q85 270 100 270 Z" className="cm-card cm-s"/>
          <text x="150" y="297" textAnchor="middle" fontSize="16" className="cm-t">Who is that?</text>
        </g>
        <rect x="40" y="40" width="480" height="84" rx="8" className="cm-ink"/>
        <rect x="34" y="34" width="480" height="84" rx="8" className="cm-card cm-s"/>
        <text x="66" y="70" fontSize="24" className="cm-t">Keploy sits between</text>
        <text x="66" y="102" fontSize="24" className="cm-t">your app and its database.</text>
        <circle cx="34" cy="34" r="24" className="cm-or cm-s"/>
        <text x="34" y="44" textAnchor="middle" fontSize="28" className="cm-t cm-w">2</text>
      </g>
      <rect x="8" y="8" width="770" height="545" rx="14" fill="none" stroke="var(--ink)" strokeWidth="6"/>
    </svg>
  );
}

function Panel3() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 570" role="img" aria-labelledby="p3t p3d" className="w-full h-auto block rounded-xl">
      <title id="p3t">Panel 3: Send six requests. Keploy writes the tests.</title>
      <desc id="p3d">Six API request chips enter the Go app while six test cards pop out of the Watcher bot alongside a keploy record terminal chip and SFX CLICK!.</desc>
      <style>{`
        :root {
          --ink: #0F172A;
          --bg: #FFF4EA;
          --floor: #FFE6D2;
          --card: #FFFFFF;
          --orange: #F97316;
          --indigo: #4F46E5;
          --indigo-lt: #818CF8;
          --green: #16A34A;
          --red: #EF4444;
          --tint: #FFDFC7;
          --skin: #F2C29B;
          --hair: #1E293B;
          --desk: #334155;
          --lap: #CBD5E1;
          --screen: #1E293B;
        }
        .cm-s  { stroke: var(--ink); stroke-width: 5; stroke-linejoin: round; stroke-linecap: round; }
        .cm-s3 { stroke: var(--ink); stroke-width: 3.5; stroke-linejoin: round; stroke-linecap: round; fill: none; }
        .cm-ink { fill: var(--ink); }
        .cm-bg { fill: var(--bg); } .cm-floor { fill: var(--floor); } .cm-card { fill: var(--card); }
        .cm-or { fill: var(--orange); } .cm-in { fill: var(--indigo); } .cm-inlt { fill: var(--indigo-lt); }
        .cm-gr { fill: var(--green); } .cm-red { fill: var(--red); }
        .cm-tint { fill: var(--tint); } .cm-skin { fill: var(--skin); } .cm-hair { fill: var(--hair); }
        .cm-desk { fill: var(--desk); } .cm-lap { fill: var(--lap); } .cm-screen { fill: var(--screen); }
        .cm-t { font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif; font-weight: 800; fill: var(--ink); }
        .cm-w { fill: #fff; }
        .cm-sfx { font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif; font-weight: 800;
               fill: var(--orange); stroke: var(--ink); stroke-width: 8; paint-order: stroke; stroke-linejoin: round; }
      `}</style>
      <defs>
        <pattern id="p3-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r="2.3" fill="#F97316" opacity="0.35"/>
        </pattern>
        <clipPath id="p3-frame"><rect x="8" y="8" width="770" height="545" rx="14"/></clipPath>
      </defs>
      <rect x="20" y="20" width="770" height="545" rx="14" className="cm-ink"/>
      <rect x="8" y="8" width="770" height="545" rx="14" className="cm-bg"/>
      <g clipPath="url(#p3-frame)">
        <rect x="8" y="456" width="770" height="97" className="cm-floor"/>
        <rect x="630" y="120" width="148" height="336" fill="url(#p3-dots)"/>
        <g>
          <rect x="546" y="40" width="220" height="48" rx="8" className="cm-ink"/>
          <rect x="540" y="34" width="220" height="48" rx="8" fill="#1E293B" className="cm-s"/>
          <circle cx="558" cy="48" r="4" fill="#EF4444"/>
          <circle cx="570" cy="48" r="4" fill="#F59E0B"/>
          <circle cx="582" cy="48" r="4" fill="#16A34A"/>
          <text x="558" y="68" fontSize="14" fontFamily="monospace" fontWeight="700" fill="#38BDF8">$ keploy record</text>
        </g>
        <g>
          <g transform="translate(25, 142)">
            <rect x="0" y="0" width="150" height="34" rx="6" className="cm-card cm-s"/>
            <rect x="6" y="5" width="48" height="24" rx="4" className="cm-or"/>
            <text x="30" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#FFF" className="cm-t">POST</text>
            <text x="100" y="22" textAnchor="middle" fontSize="12" className="cm-t">/authors</text>
            <path d="M152 17 H178 M170 11 L180 17 L170 23" className="cm-s3"/>
          </g>
          <g transform="translate(25, 186)">
            <rect x="0" y="0" width="150" height="34" rx="6" className="cm-card cm-s"/>
            <rect x="6" y="5" width="48" height="24" rx="4" className="cm-or"/>
            <text x="30" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#FFF" className="cm-t">POST</text>
            <text x="100" y="22" textAnchor="middle" fontSize="12" className="cm-t">/books</text>
            <path d="M152 17 H178 M170 11 L180 17 L170 23" className="cm-s3"/>
          </g>
          <g transform="translate(25, 230)">
            <rect x="0" y="0" width="150" height="34" rx="6" className="cm-card cm-s"/>
            <rect x="6" y="5" width="42" height="24" rx="4" className="cm-inlt"/>
            <text x="27" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0F172A" className="cm-t">GET</text>
            <text x="100" y="22" textAnchor="middle" fontSize="12" className="cm-t">/books</text>
            <path d="M152 17 H178 M170 11 L180 17 L170 23" className="cm-s3"/>
          </g>
          <g transform="translate(25, 274)">
            <rect x="0" y="0" width="150" height="34" rx="6" className="cm-card cm-s"/>
            <rect x="6" y="5" width="42" height="24" rx="4" className="cm-inlt"/>
            <text x="27" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0F172A" className="cm-t">GET</text>
            <text x="100" y="22" textAnchor="middle" fontSize="12" className="cm-t">/authors</text>
            <path d="M152 17 H178 M170 11 L180 17 L170 23" className="cm-s3"/>
          </g>
          <g transform="translate(25, 318)">
            <rect x="0" y="0" width="150" height="34" rx="6" className="cm-card cm-s"/>
            <rect x="6" y="5" width="42" height="24" rx="4" className="cm-inlt"/>
            <text x="27" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0F172A" className="cm-t">GET</text>
            <text x="100" y="22" textAnchor="middle" fontSize="12" className="cm-t">/books/1</text>
            <path d="M152 17 H178 M170 11 L180 17 L170 23" className="cm-s3"/>
          </g>
          <g transform="translate(25, 362)">
            <rect x="0" y="0" width="150" height="34" rx="6" className="cm-card cm-s"/>
            <rect x="6" y="5" width="42" height="24" rx="4" className="cm-inlt"/>
            <text x="27" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0F172A" className="cm-t">GET</text>
            <text x="100" y="22" textAnchor="middle" fontSize="12" className="cm-t">/authors/1</text>
            <path d="M152 17 H178 M170 11 L180 17 L170 23" className="cm-s3"/>
          </g>
        </g>
        <g>
          <rect x="225" y="210" width="125" height="170" rx="14" className="cm-in cm-s"/>
          <rect x="225" y="210" width="125" height="38" rx="14" className="cm-ink"/>
          <rect x="225" y="234" width="125" height="14" className="cm-ink"/>
          <text x="287" y="235" textAnchor="middle" fontSize="16" fontWeight="800" fill="#FFF" className="cm-t">GO APP</text>
          <rect x="242" y="260" width="90" height="24" rx="6" className="cm-card cm-s"/>
          <text x="287" y="277" textAnchor="middle" fontSize="14" fontWeight="800" fill="#4F46E5" className="cm-t">:8080</text>
          <circle cx="250" cy="305" r="4" fill="#16A34A"/>
          <circle cx="262" cy="305" r="4" fill="#F97316"/>
          <circle cx="274" cy="305" r="4" className="cm-inlt"/>
          <rect x="242" y="325" width="60" height="8" rx="4" className="cm-or"/>
          <rect x="242" y="340" width="40" height="8" rx="4" className="cm-inlt"/>
        </g>
        <path d="M352 295 H385" className="cm-s"/>
        <path d="M375 287 L390 295 L375 303" className="cm-s" fill="var(--ink)"/>
        <g>
          <path d="M455 190 V155" className="cm-s"/>
          <circle cx="455" cy="146" r="11" className="cm-in cm-s"/>
          <path d="M385 260 Q365 270 375 290" className="cm-s" fill="none"/>
          <circle cx="373" cy="290" r="8" className="cm-or cm-s"/>
          <path d="M525 260 Q545 240 555 255" className="cm-s" fill="none"/>
          <circle cx="557" cy="255" r="8" className="cm-or cm-s"/>
          <rect x="385" y="190" width="140" height="170" rx="28" className="cm-or cm-s"/>
          <circle cx="455" cy="250" r="42" className="cm-card cm-s"/>
          <circle cx="455" cy="250" r="28" className="cm-in"/>
          <circle cx="455" cy="250" r="17" fill="#0F172A"/>
          <circle cx="446" cy="241" r="7" fill="#FFFFFF"/>
          <circle cx="465" cy="260" r="3.5" fill="#818CF8"/>
          <ellipse cx="420" cy="300" rx="8" ry="5" fill="#FFDFC7" opacity="0.9"/>
          <ellipse cx="490" cy="300" rx="8" ry="5" fill="#FFDFC7" opacity="0.9"/>
          <path d="M440 305 Q455 322 470 305 Z" className="cm-ink"/>
        </g>
        <g>
          <path d="M545 220 L565 210 M545 295 L570 295 M545 350 L565 365" className="cm-s3"/>
          <g transform="translate(580, 142)">
            <rect x="0" y="0" width="150" height="34" rx="6" className="cm-card cm-s"/>
            <circle cx="20" cy="17" r="10" className="cm-gr cm-s"/>
            <path d="M15 17 L19 21 L26 13" stroke="#FFF" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <text x="88" y="22" textAnchor="middle" fontSize="12" className="cm-t">test_1.yaml</text>
          </g>
          <g transform="translate(585, 186)">
            <rect x="0" y="0" width="150" height="34" rx="6" className="cm-card cm-s"/>
            <circle cx="20" cy="17" r="10" className="cm-gr cm-s"/>
            <path d="M15 17 L19 21 L26 13" stroke="#FFF" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <text x="88" y="22" textAnchor="middle" fontSize="12" className="cm-t">test_2.yaml</text>
          </g>
          <g transform="translate(590, 230)">
            <rect x="0" y="0" width="150" height="34" rx="6" className="cm-card cm-s"/>
            <circle cx="20" cy="17" r="10" className="cm-gr cm-s"/>
            <path d="M15 17 L19 21 L26 13" stroke="#FFF" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <text x="88" y="22" textAnchor="middle" fontSize="12" className="cm-t">test_3.yaml</text>
          </g>
          <g transform="translate(588, 274)">
            <rect x="0" y="0" width="150" height="34" rx="6" className="cm-card cm-s"/>
            <circle cx="20" cy="17" r="10" className="cm-gr cm-s"/>
            <path d="M15 17 L19 21 L26 13" stroke="#FFF" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <text x="88" y="22" textAnchor="middle" fontSize="12" className="cm-t">test_4.yaml</text>
          </g>
          <g transform="translate(583, 318)">
            <rect x="0" y="0" width="150" height="34" rx="6" className="cm-card cm-s"/>
            <circle cx="20" cy="17" r="10" className="cm-gr cm-s"/>
            <path d="M15 17 L19 21 L26 13" stroke="#FFF" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <text x="88" y="22" textAnchor="middle" fontSize="12" className="cm-t">test_5.yaml</text>
          </g>
          <g transform="translate(578, 362)">
            <rect x="0" y="0" width="150" height="34" rx="6" className="cm-card cm-s"/>
            <circle cx="20" cy="17" r="10" className="cm-gr cm-s"/>
            <path d="M15 17 L19 21 L26 13" stroke="#FFF" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <text x="88" y="22" textAnchor="middle" fontSize="12" className="cm-t">test_6.yaml</text>
          </g>
        </g>
        <text x="670" y="125" textAnchor="middle" fontSize="40" className="cm-sfx" transform="rotate(-6 670 125)">CLICK!</text>
        <rect x="40" y="40" width="460" height="84" rx="8" className="cm-ink"/>
        <rect x="34" y="34" width="460" height="84" rx="8" className="cm-card cm-s"/>
        <text x="66" y="70" fontSize="24" className="cm-t">Send six requests.</text>
        <text x="66" y="102" fontSize="24" className="cm-t">Keploy writes the tests.</text>
        <circle cx="34" cy="34" r="24" className="cm-or cm-s"/>
        <text x="34" y="44" textAnchor="middle" fontSize="28" className="cm-t cm-w">3</text>
      </g>
      <rect x="8" y="8" width="770" height="545" rx="14" fill="none" stroke="var(--ink)" strokeWidth="6"/>
    </svg>
  );
}

function Panel4() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 570" role="img" aria-labelledby="p4t p4d" className="w-full h-auto block rounded-xl">
      <title id="p4t">Panel 4: Saved: six tests and nine mocks.</title>
      <desc id="p4d">The Watcher bot presents a tests folder with six YAML cards and a mocks.yaml file with a 9 badge and tags 2 DNS and 7 Postgres while the developer smiles in approval.</desc>
      <style>{`
        :root {
          --ink: #0F172A;
          --bg: #FFF4EA;
          --floor: #FFE6D2;
          --card: #FFFFFF;
          --orange: #F97316;
          --indigo: #4F46E5;
          --indigo-lt: #818CF8;
          --green: #16A34A;
          --red: #EF4444;
          --tint: #FFDFC7;
          --skin: #F2C29B;
          --hair: #1E293B;
          --desk: #334155;
          --lap: #CBD5E1;
          --screen: #1E293B;
        }
        .cm-s  { stroke: var(--ink); stroke-width: 5; stroke-linejoin: round; stroke-linecap: round; }
        .cm-s3 { stroke: var(--ink); stroke-width: 3.5; stroke-linejoin: round; stroke-linecap: round; fill: none; }
        .cm-ink { fill: var(--ink); }
        .cm-bg { fill: var(--bg); } .cm-floor { fill: var(--floor); } .cm-card { fill: var(--card); }
        .cm-or { fill: var(--orange); } .cm-in { fill: var(--indigo); } .cm-inlt { fill: var(--indigo-lt); }
        .cm-gr { fill: var(--green); } .cm-red { fill: var(--red); }
        .cm-tint { fill: var(--tint); } .cm-skin { fill: var(--skin); } .cm-hair { fill: var(--hair); }
        .cm-desk { fill: var(--desk); } .cm-lap { fill: var(--lap); } .cm-screen { fill: var(--screen); }
        .cm-t { font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif; font-weight: 800; fill: var(--ink); }
        .cm-w { fill: #fff; }
        .cm-sfx { font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif; font-weight: 800;
               fill: var(--orange); stroke: var(--ink); stroke-width: 8; paint-order: stroke; stroke-linejoin: round; }
      `}</style>
      <defs>
        <pattern id="p4-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r="2.3" fill="#F97316" opacity="0.35"/>
        </pattern>
        <clipPath id="p4-frame"><rect x="8" y="8" width="770" height="545" rx="14"/></clipPath>
      </defs>
      <rect x="20" y="20" width="770" height="545" rx="14" className="cm-ink"/>
      <rect x="8" y="8" width="770" height="545" rx="14" className="cm-bg"/>
      <g clipPath="url(#p4-frame)">
        <rect x="8" y="456" width="770" height="97" className="cm-floor"/>
        <rect x="630" y="120" width="148" height="336" fill="url(#p4-dots)"/>
        <g transform="translate(0, 20)">
          <path d="M40 440 Q40 330 100 315 Q160 330 160 440 Z" className="cm-in cm-s"/>
          <path d="M88 328 L86 360 M114 328 L116 360" className="cm-s3"/>
          <circle cx="100" cy="265" r="42" className="cm-skin cm-s"/>
          <path d="M54 262 Q54 212 102 214 Q148 214 146 262 Q130 236 100 238 Q74 238 54 262 Z" className="cm-hair" style={{ stroke: "var(--ink)", strokeWidth: 4, strokeLinejoin: "round" }}/>
          <path d="M78 258 Q88 248 98 258 M112 258 Q122 248 132 258" className="cm-s3"/>
          <path d="M84 280 Q105 300 126 280" className="cm-s3"/>
          <ellipse cx="72" cy="275" rx="7" ry="4" fill="#FFDFC7" opacity="0.9"/>
          <ellipse cx="138" cy="275" rx="7" ry="4" fill="#FFDFC7" opacity="0.9"/>
        </g>
        <g>
          <path d="M280 200 V165" className="cm-s"/>
          <circle cx="280" cy="156" r="11" className="cm-in cm-s"/>
          <path d="M210 270 Q190 290 205 310" className="cm-s" fill="none"/>
          <circle cx="203" cy="310" r="8" className="cm-or cm-s"/>
          <path d="M350 270 Q370 260 385 275" className="cm-s" fill="none"/>
          <circle cx="387" cy="275" r="8" className="cm-or cm-s"/>
          <rect x="210" y="200" width="140" height="170" rx="28" className="cm-or cm-s"/>
          <circle cx="280" cy="260" r="42" className="cm-card cm-s"/>
          <circle cx="280" cy="260" r="28" className="cm-in"/>
          <circle cx="280" cy="260" r="17" fill="#0F172A"/>
          <circle cx="271" cy="251" r="7" fill="#FFFFFF"/>
          <circle cx="290" cy="270" r="3.5" fill="#818CF8"/>
          <ellipse cx="245" cy="310" rx="8" ry="5" fill="#FFDFC7" opacity="0.9"/>
          <ellipse cx="315" cy="310" rx="8" ry="5" fill="#FFDFC7" opacity="0.9"/>
          <path d="M266 318 Q280 330 294 318" className="cm-s3"/>
        </g>
        <g transform="translate(390, 160)">
          <rect x="6" y="6" width="190" height="210" rx="12" className="cm-ink"/>
          <path d="M0 16 H60 L75 32 H190 Q200 32 200 42 V210 Q200 220 190 220 H10 Q0 220 0 210 Z" className="cm-inlt cm-s"/>
          <text x="20" y="24" fontSize="16" className="cm-t" fill="#FFF">tests/</text>
          <rect x="150" y="8" width="36" height="20" rx="10" className="cm-gr cm-s"/>
          <text x="168" y="23" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FFF" className="cm-t">6</text>
          <rect x="0" y="38" width="200" height="182" rx="10" className="cm-card cm-s"/>
          <g transform="translate(15, 52)">
            <rect x="0" y="0" width="170" height="22" rx="4" className="cm-bg cm-s3" fill="var(--bg)"/>
            <text x="10" y="15" fontSize="11" className="cm-t">test_1.yaml</text>
            <circle cx="155" cy="11" r="5" fill="#16A34A"/>
            <rect x="0" y="26" width="170" height="22" rx="4" className="cm-bg cm-s3" fill="var(--bg)"/>
            <text x="10" y="41" fontSize="11" className="cm-t">test_2.yaml</text>
            <circle cx="155" cy="37" r="5" fill="#16A34A"/>
            <rect x="0" y="52" width="170" height="22" rx="4" className="cm-bg cm-s3" fill="var(--bg)"/>
            <text x="10" y="67" fontSize="11" className="cm-t">test_3.yaml</text>
            <circle cx="155" cy="63" r="5" fill="#16A34A"/>
            <rect x="0" y="78" width="170" height="22" rx="4" className="cm-bg cm-s3" fill="var(--bg)"/>
            <text x="10" y="93" fontSize="11" className="cm-t">test_4.yaml</text>
            <circle cx="155" cy="89" r="5" fill="#16A34A"/>
            <rect x="0" y="104" width="170" height="22" rx="4" className="cm-bg cm-s3" fill="var(--bg)"/>
            <text x="10" y="119" fontSize="11" className="cm-t">test_5.yaml</text>
            <circle cx="155" cy="115" r="5" fill="#16A34A"/>
            <rect x="0" y="130" width="170" height="22" rx="4" className="cm-bg cm-s3" fill="var(--bg)"/>
            <text x="10" y="145" fontSize="11" className="cm-t">test_6.yaml</text>
            <circle cx="155" cy="141" r="5" fill="#16A34A"/>
          </g>
        </g>
        <g transform="translate(610, 160)">
          <rect x="6" y="6" width="150" height="220" rx="10" className="cm-ink"/>
          <path d="M0 10 Q0 0 10 0 H115 L150 35 V210 Q150 220 140 220 H10 Q0 220 0 210 Z" className="cm-card cm-s"/>
          <path d="M115 0 V35 H150 Z" className="cm-tint cm-s"/>
          <text x="15" y="28" fontSize="15" className="cm-t">mocks.yaml</text>
          <line x1="15" y1="36" x2="105" y2="36" stroke="var(--ink)" strokeWidth="2"/>
          <circle cx="75" cy="90" r="28" className="cm-or cm-s"/>
          <text x="75" y="100" textAnchor="middle" fontSize="32" className="cm-t cm-w">9</text>
          <text x="75" y="132" textAnchor="middle" fontSize="11" fontWeight="800" className="cm-t">MOCKS SAVED</text>
          <g transform="translate(12, 148)">
            <rect x="0" y="0" width="60" height="24" rx="6" className="cm-inlt cm-s3" fill="var(--indigo-lt)"/>
            <text x="30" y="16" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0F172A">2 DNS</text>
            <rect x="66" y="0" width="60" height="24" rx="6" className="cm-tint cm-s3" fill="var(--tint)"/>
            <text x="96" y="16" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0F172A">7 Postgres</text>
          </g>
          <path d="M75 190 L78 182 L86 179 L78 176 L75 168 L72 176 L64 179 L72 182 Z" fill="#F97316"/>
        </g>
        <path d="M380 145 L384 135 L394 131 L384 127 L380 117 L376 127 L366 131 L376 135 Z" fill="#F97316"/>
        <path d="M740 135 L743 127 L751 124 L743 121 L740 113 L737 121 L729 124 L737 127 Z" fill="#4F46E5"/>
        <rect x="40" y="40" width="460" height="84" rx="8" className="cm-ink"/>
        <rect x="34" y="34" width="460" height="84" rx="8" className="cm-card cm-s"/>
        <text x="66" y="70" fontSize="24" className="cm-t">Saved: six tests</text>
        <text x="66" y="102" fontSize="24" className="cm-t">and nine mocks.</text>
        <circle cx="34" cy="34" r="24" className="cm-or cm-s"/>
        <text x="34" y="44" textAnchor="middle" fontSize="28" className="cm-t cm-w">4</text>
      </g>
      <rect x="8" y="8" width="770" height="545" rx="14" fill="none" stroke="var(--ink)" strokeWidth="6"/>
    </svg>
  );
}

function Panel5() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 570" role="img" aria-labelledby="p5t p5d" className="w-full h-auto block rounded-xl">
      <title id="p5t">Panel 5: Now switch the database off.</title>
      <desc id="p5d">A wall switch is flipped to OFF, the Postgres cylinder is asleep with closed eyes and an unplugged power cable, the Watcher holds a finger to its lips, and a red chip reads Postgres: not running.</desc>
      <style>{`
        :root {
          --ink: #0F172A;
          --bg: #FFF4EA;
          --floor: #FFE6D2;
          --card: #FFFFFF;
          --orange: #F97316;
          --indigo: #4F46E5;
          --indigo-lt: #818CF8;
          --green: #16A34A;
          --red: #EF4444;
          --tint: #FFDFC7;
          --skin: #F2C29B;
          --hair: #1E293B;
          --desk: #334155;
          --lap: #CBD5E1;
          --screen: #1E293B;
        }
        .cm-s  { stroke: var(--ink); stroke-width: 5; stroke-linejoin: round; stroke-linecap: round; }
        .cm-s3 { stroke: var(--ink); stroke-width: 3.5; stroke-linejoin: round; stroke-linecap: round; fill: none; }
        .cm-ink { fill: var(--ink); }
        .cm-bg { fill: var(--bg); } .cm-floor { fill: var(--floor); } .cm-card { fill: var(--card); }
        .cm-or { fill: var(--orange); } .cm-in { fill: var(--indigo); } .cm-inlt { fill: var(--indigo-lt); }
        .cm-gr { fill: var(--green); } .cm-red { fill: var(--red); }
        .cm-tint { fill: var(--tint); } .cm-skin { fill: var(--skin); } .cm-hair { fill: var(--hair); }
        .cm-desk { fill: var(--desk); } .cm-lap { fill: var(--lap); } .cm-screen { fill: var(--screen); }
        .cm-t { font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif; font-weight: 800; fill: var(--ink); }
        .cm-w { fill: #fff; }
        .cm-sfx { font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif; font-weight: 800;
               fill: var(--orange); stroke: var(--ink); stroke-width: 8; paint-order: stroke; stroke-linejoin: round; }
      `}</style>
      <defs>
        <pattern id="p5-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r="2.3" fill="#F97316" opacity="0.35"/>
        </pattern>
        <clipPath id="p5-frame"><rect x="8" y="8" width="770" height="545" rx="14"/></clipPath>
      </defs>
      <rect x="20" y="20" width="770" height="545" rx="14" className="cm-ink"/>
      <rect x="8" y="8" width="770" height="545" rx="14" className="cm-bg"/>
      <g clipPath="url(#p5-frame)">
        <rect x="8" y="456" width="770" height="97" className="cm-floor"/>
        <rect x="630" y="120" width="148" height="336" fill="url(#p5-dots)"/>
        <g transform="translate(60, 180)">
          <rect x="6" y="6" width="110" height="170" rx="12" className="cm-ink"/>
          <rect x="0" y="0" width="110" height="170" rx="12" className="cm-card cm-s"/>
          <circle cx="55" cy="18" r="4" className="cm-ink"/>
          <circle cx="55" cy="152" r="4" className="cm-ink"/>
          <rect x="35" y="36" width="40" height="98" rx="8" fill="#0F172A"/>
          <text x="55" y="55" textAnchor="middle" fontSize="13" fontWeight="800" fill="#94A3B8" className="cm-t">ON</text>
          <rect x="39" y="76" width="32" height="52" rx="6" className="cm-red cm-s"/>
          <line x1="47" y1="102" x2="63" y2="102" stroke="#FFF" strokeWidth="3" strokeLinecap="round"/>
          <text x="55" y="146" textAnchor="middle" fontSize="14" fontWeight="800" fill="#EF4444" className="cm-t">OFF</text>
          <path d="M118 70 Q130 95 118 120" stroke="var(--ink)" strokeWidth="3.5" strokeDasharray="5 4" fill="none"/>
        </g>
        <g>
          <path d="M340 190 V155" className="cm-s"/>
          <circle cx="340" cy="146" r="11" className="cm-in cm-s"/>
          <path d="M270 260 Q250 275 260 295" className="cm-s" fill="none"/>
          <circle cx="258" cy="295" r="9" className="cm-or cm-s"/>
          <path d="M410 260 Q430 240 395 242" className="cm-s" fill="none"/>
          <circle cx="390" cy="242" r="8" className="cm-or cm-s"/>
          <rect x="270" y="190" width="140" height="170" rx="28" className="cm-or cm-s"/>
          <circle cx="340" cy="250" r="42" className="cm-card cm-s"/>
          <path d="M316 250 Q340 230 364 250" className="cm-s" fill="none"/>
          <path d="M325 258 Q340 272 355 258" className="cm-s3"/>
          <ellipse cx="305" cy="300" rx="8" ry="5" fill="#FFDFC7" opacity="0.9"/>
          <ellipse cx="375" cy="300" rx="8" ry="5" fill="#FFDFC7" opacity="0.9"/>
          <path d="M330 310 Q340 318 350 310" className="cm-s3"/>
          <path d="M380 140 H450 Q465 140 465 155 V165 Q465 180 450 180 H410 L395 195 L402 180 H380 Q365 180 365 165 V155 Q365 140 380 140 Z" className="cm-card cm-s"/>
          <text x="415" y="165" textAnchor="middle" fontSize="16" className="cm-t">Shhh...</text>
        </g>
        <g>
          <text x="680" y="180" fontSize="34" className="cm-t" fill="var(--indigo)" transform="rotate(10 680 180)">Z</text>
          <text x="715" y="145" fontSize="26" className="cm-t" fill="var(--indigo)" transform="rotate(15 715 145)">z</text>
          <text x="740" y="118" fontSize="20" className="cm-t" fill="var(--indigo)" transform="rotate(20 740 118)">z</text>
          <path d="M550 230 V345 C550 370 690 370 690 345 V230 Z" className="cm-inlt cm-s"/>
          <ellipse cx="620" cy="230" rx="70" ry="24" className="cm-inlt cm-s"/>
          <path d="M550 287 C550 307 690 307 690 287" fill="none" className="cm-s"/>
          <rect x="570" y="250" width="100" height="30" rx="6" className="cm-card cm-s"/>
          <text x="620" y="271" textAnchor="middle" fontSize="16" className="cm-t">Postgres</text>
          <path d="M590 305 L608 305 M632 305 L650 305" className="cm-s" strokeWidth="4"/>
          <circle cx="620" cy="322" r="5" className="cm-ink"/>
          <circle cx="570" cy="335" r="5" className="cm-red"/>
          <path d="M560 355 Q510 405 450 415" fill="none" stroke="var(--ink)" strokeWidth="6" strokeLinecap="round"/>
          <rect x="424" y="405" width="26" height="20" rx="4" className="cm-ink"/>
          <rect x="412" y="408" width="12" height="4" className="cm-ink"/>
          <rect x="412" y="417" width="12" height="4" className="cm-ink"/>
          <path d="M400 398 L390 408 M398 424 L388 428" className="cm-s3"/>
        </g>
        <g transform="translate(510, 400)">
          <rect x="4" y="4" width="210" height="36" rx="18" className="cm-ink"/>
          <rect x="0" y="0" width="210" height="36" rx="18" className="cm-card cm-s"/>
          <circle cx="22" cy="18" r="7" className="cm-red cm-s"/>
          <text x="115" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fill="#EF4444" className="cm-t">Postgres: not running</text>
        </g>
        <rect x="40" y="40" width="460" height="84" rx="8" className="cm-ink"/>
        <rect x="34" y="34" width="460" height="84" rx="8" className="cm-card cm-s"/>
        <text x="66" y="70" fontSize="24" className="cm-t">Now switch the</text>
        <text x="66" y="102" fontSize="24" className="cm-t">database off.</text>
        <circle cx="34" cy="34" r="24" className="cm-or cm-s"/>
        <text x="34" y="44" textAnchor="middle" fontSize="28" className="cm-t cm-w">5</text>
      </g>
      <rect x="8" y="8" width="770" height="545" rx="14" fill="none" stroke="var(--ink)" strokeWidth="6"/>
    </svg>
  );
}

function Panel6() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 570" role="img" aria-labelledby="p6t p6d" className="w-full h-auto block rounded-xl">
      <title id="p6t">Panel 6: Replay: 6 passed, 0 failed.</title>
      <desc id="p6d">A terminal card shows keploy test with six green check rows and 6 passed 0 failed summary, the Watcher wears a DB mask saying Postgres? That&apos;s me., and the developer gives a thumbs-up beside a green PASS! SFX.</desc>
      <style>{`
        :root {
          --ink: #0F172A;
          --bg: #FFF4EA;
          --floor: #FFE6D2;
          --card: #FFFFFF;
          --orange: #F97316;
          --indigo: #4F46E5;
          --indigo-lt: #818CF8;
          --green: #16A34A;
          --red: #EF4444;
          --tint: #FFDFC7;
          --skin: #F2C29B;
          --hair: #1E293B;
          --desk: #334155;
          --lap: #CBD5E1;
          --screen: #1E293B;
        }
        .cm-s  { stroke: var(--ink); stroke-width: 5; stroke-linejoin: round; stroke-linecap: round; }
        .cm-s3 { stroke: var(--ink); stroke-width: 3.5; stroke-linejoin: round; stroke-linecap: round; fill: none; }
        .cm-ink { fill: var(--ink); }
        .cm-bg { fill: var(--bg); } .cm-floor { fill: var(--floor); } .cm-card { fill: var(--card); }
        .cm-or { fill: var(--orange); } .cm-in { fill: var(--indigo); } .cm-inlt { fill: var(--indigo-lt); }
        .cm-gr { fill: var(--green); } .cm-red { fill: var(--red); }
        .cm-tint { fill: var(--tint); } .cm-skin { fill: var(--skin); } .cm-hair { fill: var(--hair); }
        .cm-desk { fill: var(--desk); } .cm-lap { fill: var(--lap); } .cm-screen { fill: var(--screen); }
        .cm-t { font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif; font-weight: 800; fill: var(--ink); }
        .cm-w { fill: #fff; }
        .cm-sfx-gr { font-family: "Plus Jakarta Sans", Inter, system-ui, sans-serif; font-weight: 800;
                  fill: var(--green); stroke: var(--ink); stroke-width: 8; paint-order: stroke; stroke-linejoin: round; }
      `}</style>
      <defs>
        <pattern id="p6-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r="2.3" fill="#F97316" opacity="0.35"/>
        </pattern>
        <clipPath id="p6-frame"><rect x="8" y="8" width="770" height="545" rx="14"/></clipPath>
      </defs>
      <rect x="20" y="20" width="770" height="545" rx="14" className="cm-ink"/>
      <rect x="8" y="8" width="770" height="545" rx="14" className="cm-bg"/>
      <g clipPath="url(#p6-frame)">
        <rect x="8" y="456" width="770" height="97" className="cm-floor"/>
        <rect x="630" y="120" width="148" height="336" fill="url(#p6-dots)"/>
        <g transform="translate(30, 145)">
          <rect x="8" y="8" width="330" height="280" rx="12" className="cm-ink"/>
          <rect x="0" y="0" width="330" height="280" rx="12" fill="#1E293B" className="cm-s"/>
          <path d="M0 12 Q0 0 12 0 H318 Q330 0 330 12 V32 H0 Z" fill="#0F172A"/>
          <line x1="0" y1="32" x2="330" y2="32" stroke="var(--ink)" strokeWidth="2"/>
          <circle cx="18" cy="16" r="4" fill="#EF4444"/>
          <circle cx="30" cy="16" r="4" fill="#F59E0B"/>
          <circle cx="42" cy="16" r="4" fill="#16A34A"/>
          <text x="165" y="20" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="700" fill="#94A3B8">keploy test</text>
          <text x="18" y="54" fontSize="13" fontFamily="monospace" fontWeight="700" fill="#38BDF8">$ keploy test</text>
          <g fontFamily="monospace" fontSize="11" fontWeight="700">
            <text x="18" y="78" fill="#16A34A">✓</text>
            <text x="32" y="78" fill="#E2E8F0">test-1</text>
            <text x="100" y="78" fill="#16A34A">PASSED</text>
            <text x="155" y="78" fill="#64748B">(2ms)</text>
            <text x="18" y="98" fill="#16A34A">✓</text>
            <text x="32" y="98" fill="#E2E8F0">test-2</text>
            <text x="100" y="98" fill="#16A34A">PASSED</text>
            <text x="155" y="98" fill="#64748B">(3ms)</text>
            <text x="18" y="118" fill="#16A34A">✓</text>
            <text x="32" y="118" fill="#E2E8F0">test-3</text>
            <text x="100" y="118" fill="#16A34A">PASSED</text>
            <text x="155" y="118" fill="#64748B">(1ms)</text>
            <text x="18" y="138" fill="#16A34A">✓</text>
            <text x="32" y="138" fill="#E2E8F0">test-4</text>
            <text x="100" y="138" fill="#16A34A">PASSED</text>
            <text x="155" y="138" fill="#64748B">(2ms)</text>
            <text x="18" y="158" fill="#16A34A">✓</text>
            <text x="32" y="158" fill="#E2E8F0">test-5</text>
            <text x="100" y="158" fill="#16A34A">PASSED</text>
            <text x="155" y="158" fill="#64748B">(4ms)</text>
            <text x="18" y="178" fill="#16A34A">✓</text>
            <text x="32" y="178" fill="#E2E8F0">test-6</text>
            <text x="100" y="178" fill="#16A34A">PASSED</text>
            <text x="155" y="178" fill="#64748B">(2ms)</text>
          </g>
          <line x1="18" y1="195" x2="312" y2="195" stroke="#334155" strokeWidth="1.5"/>
          <rect x="18" y="210" width="294" height="34" rx="6" fill="#16A34A" opacity="0.2" stroke="#16A34A" strokeWidth="2"/>
          <text x="165" y="232" textAnchor="middle" fontSize="14" fontFamily="monospace" fontWeight="800" fill="#4ADE80">6 passed · 0 failed</text>
        </g>
        <g>
          <path d="M465 200 V165" className="cm-s"/>
          <circle cx="465" cy="156" r="11" className="cm-in cm-s"/>
          <path d="M395 270 Q375 285 385 305" className="cm-s" fill="none"/>
          <circle cx="383" cy="305" r="8" className="cm-or cm-s"/>
          <path d="M535 270 Q555 285 545 305" className="cm-s" fill="none"/>
          <circle cx="547" cy="305" r="8" className="cm-or cm-s"/>
          <rect x="395" y="200" width="140" height="170" rx="28" className="cm-or cm-s"/>
          <circle cx="465" cy="260" r="42" className="cm-card cm-s"/>
          <circle cx="465" cy="260" r="28" className="cm-in"/>
          <path d="M395 260 H535" className="cm-s3"/>
          <rect x="420" y="236" width="90" height="48" rx="8" className="cm-card cm-s"/>
          <text x="465" y="269" textAnchor="middle" fontSize="24" className="cm-t" fill="var(--indigo)">DB</text>
          <ellipse cx="430" cy="310" rx="8" ry="5" fill="#FFDFC7" opacity="0.9"/>
          <ellipse cx="500" cy="310" rx="8" ry="5" fill="#FFDFC7" opacity="0.9"/>
          <path d="M451 318 Q465 330 479 318" className="cm-s3"/>
          <path d="M420 130 H550 Q565 130 565 148 V158 Q565 176 550 176 H495 L475 196 L482 176 H420 Q405 176 405 158 V148 Q405 130 420 130 Z" className="cm-card cm-s"/>
          <text x="485" y="159" textAnchor="middle" fontSize="16" className="cm-t">Postgres? That&apos;s me.</text>
        </g>
        <g transform="translate(0, 20)">
          <path d="M600 440 Q600 330 660 315 Q720 330 720 440 Z" className="cm-in cm-s"/>
          <path d="M648 328 L646 360 M674 328 L676 360" className="cm-s3"/>
          <circle cx="660" cy="265" r="42" className="cm-skin cm-s"/>
          <path d="M614 262 Q614 212 662 214 Q708 214 706 262 Q690 236 660 238 Q634 238 614 262 Z" className="cm-hair" style={{ stroke: "var(--ink)", strokeWidth: 4, strokeLinejoin: "round" }}/>
          <path d="M638 258 Q648 248 658 258 M672 258 Q682 248 692 258" className="cm-s3"/>
          <path d="M644 280 Q665 302 686 280" className="cm-s3"/>
          <path d="M615 345 Q575 355 570 305" fill="none" stroke="var(--ink)" strokeWidth="24" strokeLinecap="round"/>
          <path d="M615 345 Q575 355 570 305" fill="none" stroke="var(--indigo)" strokeWidth="14" strokeLinecap="round"/>
          <g transform="translate(570, 305)">
            <circle cx="0" cy="0" r="13" className="cm-skin cm-s3" style={{ fill: "var(--skin)" }}/>
            <path d="M0 0 V-24" stroke="var(--ink)" strokeWidth="12" strokeLinecap="round"/>
            <path d="M0 0 V-24" stroke="var(--skin)" strokeWidth="6" strokeLinecap="round"/>
            <circle cx="0" cy="-24" r="4.5" fill="var(--skin)"/>
          </g>
        </g>
        <text x="690" y="160" textAnchor="middle" fontSize="44" className="cm-sfx-gr" transform="rotate(-6 690 160)">PASS!</text>
        <rect x="40" y="40" width="440" height="84" rx="8" className="cm-ink"/>
        <rect x="34" y="34" width="440" height="84" rx="8" className="cm-card cm-s"/>
        <text x="66" y="70" fontSize="24" className="cm-t">Replay:</text>
        <text x="66" y="102" fontSize="24" className="cm-t">6 passed, 0 failed.</text>
        <circle cx="34" cy="34" r="24" className="cm-or cm-s"/>
        <text x="34" y="44" textAnchor="middle" fontSize="28" className="cm-t cm-w">6</text>
      </g>
      <rect x="8" y="8" width="770" height="545" rx="14" fill="none" stroke="var(--ink)" strokeWidth="6"/>
    </svg>
  );
}

export function ComicStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visiblePanels, setVisiblePanels] = useState<boolean[]>([true, true, true, true, true, true]);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const elements = containerRef.current?.querySelectorAll(".comic-panel-item");
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisiblePanels((prev) => {
              if (prev[index]) return prev;
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const panels = [Panel1, Panel2, Panel3, Panel4, Panel5, Panel6];

  return (
    <section className="my-10">
      <h2 id="the-60-second-version" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
        The 60-second version
      </h2>

      <div ref={containerRef} className="flex flex-col gap-8 max-w-[880px] mx-auto">
        {panels.map((PanelComponent, index) => (
          <div
            key={index}
            data-index={index}
            className={`comic-panel-item transition-all duration-500 transform ${
              visiblePanels[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } ${index % 2 === 1 ? "md:rotate-[0.5deg] md:translate-x-1" : "md:-rotate-[0.5deg] md:-translate-x-1"}`}
          >
            <PanelComponent />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="#why-keploy-for-go-developers"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg shadow-md hover:shadow-lg transition-all"
        >
          Now do it yourself ↓
        </a>
      </div>
    </section>
  );
}
