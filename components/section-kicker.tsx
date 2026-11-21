import type { ReactNode } from "react";

export function SectionKicker({ children, index, tone = "default" }: { children: ReactNode; index?: string; tone?: "default" | "light" }) {
  return (
    <div className={`section-kicker${tone === "light" ? " section-kicker--light" : ""}`}>
      <span>{children}</span>
      {index ? <span className="section-kicker-index">{index}</span> : null}
    </div>
  );
}
