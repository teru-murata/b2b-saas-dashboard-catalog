import type { EvidenceCard as EvidenceCardType } from "@/types/catalog";
import { StatusPill } from "@/components/Badge";

type EvidenceCardProps = {
  item: EvidenceCardType;
};

export function EvidenceCard({ item }: EvidenceCardProps) {
  return (
    <article className="evidence-card">
      <div className="card-topline">
        <span className="category-label">{item.category.replaceAll("_", " ")}</span>
        <StatusPill status={item.status} />
      </div>
      <h3>{item.title}</h3>
      <dl>
        <div>
          <dt>Demonstrates</dt>
          <dd>{item.demonstrates}</dd>
        </div>
        <div>
          <dt>Why it matters</dt>
          <dd>{item.matters}</dd>
        </div>
        <div>
          <dt>Phase 2 evidence</dt>
          <dd>{item.phaseEvidence}</dd>
        </div>
        <div>
          <dt>Expanded later</dt>
          <dd>{item.expandsLater}</dd>
        </div>
      </dl>
    </article>
  );
}
