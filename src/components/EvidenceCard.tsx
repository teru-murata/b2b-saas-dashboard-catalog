import type { EvidenceCard as EvidenceCardType } from "@/types/catalog";
import { StatusPill } from "@/components/Badge";

type EvidenceCardProps = {
  item: EvidenceCardType;
  labels: {
    demonstrates: string;
    matters: string;
    phaseEvidence: string;
    expandsLater: string;
  };
  statusLabel: string;
};

export function EvidenceCard({ item, labels, statusLabel }: EvidenceCardProps) {
  return (
    <article className="evidence-card">
      <div className="card-topline">
        <span className="category-label">{item.categoryLabel ?? item.category.replaceAll("_", " ")}</span>
        <StatusPill status={item.status} label={statusLabel} />
      </div>
      <h3>{item.title}</h3>
      <dl>
        <div>
          <dt>{labels.demonstrates}</dt>
          <dd>{item.demonstrates}</dd>
        </div>
        <div>
          <dt>{labels.matters}</dt>
          <dd>{item.matters}</dd>
        </div>
        <div>
          <dt>{labels.phaseEvidence}</dt>
          <dd>{item.phaseEvidence}</dd>
        </div>
        <div>
          <dt>{labels.expandsLater}</dt>
          <dd>{item.expandsLater}</dd>
        </div>
      </dl>
    </article>
  );
}
