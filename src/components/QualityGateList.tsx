import type { QualityGate } from "@/types/catalog";
import { StatusPill } from "@/components/Badge";

type QualityGateListProps = {
  gates: QualityGate[];
};

export function QualityGateList({ gates }: QualityGateListProps) {
  return (
    <div className="quality-grid">
      {gates.map((gate) => (
        <article key={gate.id} className="quality-card">
          <div className="card-topline">
            <h3>{gate.label}</h3>
            <StatusPill status={gate.status} />
          </div>
          <p>{gate.detail}</p>
        </article>
      ))}
    </div>
  );
}
