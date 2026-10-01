"use client";

import { useEffect, useId, useState } from "react";

/* Renders a Mermaid diagram from the locally bundled library: no CDN, works offline.
   The theme is set so the diagram matches the deck (white, one blue accent). */
export default function Mermaid({ chart, label }) {
  const id = "mmd" + useId().replace(/[^a-zA-Z0-9]/g, "");
  const [svg, setSvg] = useState("");
  useEffect(() => {
    let live = true;
    (async () => {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "base",
        fontFamily: "var(--font-inter), Inter, sans-serif",
        flowchart: { curve: "basis", htmlLabels: true, nodeSpacing: 36, rankSpacing: 28, padding: 16, wrappingWidth: 520 },
        themeVariables: {
          fontSize: "32px",
          primaryColor: "#ffffff",
          primaryBorderColor: "#CBD5E1",
          primaryTextColor: "#0B1020",
          lineColor: "#1e40af",
          secondaryColor: "#EEF2FF",
          tertiaryColor: "#F8FAFC",
          clusterBkg: "#F8FAFC",
          clusterBorder: "#CBD5E1",
        },
      });
      const { svg } = await mermaid.render(id, chart);
      if (live) setSvg(svg);
    })();
    return () => { live = false; };
  }, [chart, id]);
  return <div role="img" aria-label={label} className="mermaid-host" dangerouslySetInnerHTML={{ __html: svg }} />;
}
