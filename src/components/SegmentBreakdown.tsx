import type { SegmentBreakdown as SegmentBreakdownType } from "@/types/catalog";
import { StatusPill } from "@/components/Badge";
import { getSegmentTotals } from "@/lib/analyticsModel";

type SegmentBreakdownProps = {
  segments: SegmentBreakdownType[];
  copy: {
    title: string;
    helper: string;
    largest: string;
    total: string;
  };
  statusLabels: {
    Ready: string;
    Watch: string;
    planned: string;
  };
};

export function SegmentBreakdown({ segments, copy, statusLabels }: SegmentBreakdownProps) {
  const totals = getSegmentTotals(segments);

  return (
    <article className="segment-panel">
      <h3>{copy.title}</h3>
      <p className="helper-copy">{copy.helper}</p>
      <ul>
        {totals.normalized.map((segment) => (
          <li key={segment.id}>
            <span className="segment-panel__label">
              <span>{segment.label}</span>
              <strong>{segment.value}%</strong>
            </span>
            <span className="segment-panel__bar" aria-hidden="true">
              <span style={{ inlineSize: `${segment.share}%` }} />
            </span>
            <StatusPill
              status={segment.status === "healthy" ? "Ready" : segment.status === "watch" ? "Watch" : "planned"}
              label={
                segment.status === "healthy"
                  ? statusLabels.Ready
                  : segment.status === "watch"
                    ? statusLabels.Watch
                    : statusLabels.planned
              }
            />
          </li>
        ))}
      </ul>
      <p className="helper-copy">
        {copy.largest}: {totals.largest.label}. {copy.total}: {totals.total}%.
      </p>
    </article>
  );
}
