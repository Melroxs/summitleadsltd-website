type ProcessItem = { number: string; title: string; copy: string };

export function ProcessTimeline({ items, compact = false }: { items: readonly ProcessItem[]; compact?: boolean }) {
  return (
    <ol className={`process-timeline${compact ? " process-timeline--compact" : ""}`}>
      {items.map((item) => (
        <li className="process-step" key={item.number}>
          <span className="process-step-number">{item.number}</span>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
        </li>
      ))}
    </ol>
  );
}
