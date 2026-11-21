"use client";

import { useState } from "react";
import { ecosystemSteps } from "@/lib/content";

export function EcosystemExplorer() {
  const [activeStep, setActiveStep] = useState(1);
  const active = ecosystemSteps[activeStep];

  return (
    <div className="ecosystem-explorer">
      <div className="ecosystem-nodes" role="group" aria-label="Growth system stages">
        {ecosystemSteps.map((step, index) => (
          <div className="ecosystem-node-wrap" key={step.title}>
            <button
              className={`ecosystem-node${activeStep === index ? " is-active" : ""}`}
              type="button"
              aria-pressed={activeStep === index}
              aria-label={`${index + 1}. ${step.title}`}
              onPointerEnter={() => setActiveStep(index)}
              onFocus={() => setActiveStep(index)}
              onClick={() => setActiveStep(index)}
            >
              <span className="ecosystem-node-index">0{index + 1}</span>
              <span>{step.title}</span>
            </button>
            {index < ecosystemSteps.length - 1 ? <span className="ecosystem-arrow" aria-hidden="true">→</span> : null}
          </div>
        ))}
      </div>
      <div className="ecosystem-detail" aria-live="polite">
        <span className="eyebrow">STAGE 0{activeStep + 1}</span>
        <h3>{active.title}</h3>
        <p>{active.detail}</p>
      </div>
    </div>
  );
}
