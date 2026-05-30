import type { QualityGate } from "@/types/catalog";
import { StatusPill } from "@/components/Badge";

type QualityGateListProps = {
  gates: QualityGate[];
  statusLabels: Record<QualityGate["status"], string>;
};

export function QualityGateList({ gates, statusLabels }: QualityGateListProps) {
  return (
    <div className="quality-grid">
      {gates.map((gate) => (
        <article key={gate.id} className="quality-card">
          <div className="card-topline">
            <h3>{gate.label}</h3>
            <StatusPill status={gate.status} label={statusLabels[gate.status]} />
          </div>
          <p>{gate.detail}</p>
        </article>
      ))}
    </div>
  );
}
