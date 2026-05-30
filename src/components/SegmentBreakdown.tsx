import type { SegmentBreakdown as SegmentBreakdownType } from "@/types/catalog";
import { StatusPill } from "@/components/Badge";
import { getSegmentTotals } from "@/lib/analyticsModel";

type SegmentBreakdownProps = {
  segments: SegmentBreakdownType[];
};

export function SegmentBreakdown({ segments }: SegmentBreakdownProps) {
  const totals = getSegmentTotals(segments);

  return (
    <article className="segment-panel">
      <h3>Segment breakdown</h3>
      <p className="helper-copy">
        Values are static sample shares. Text labels and percentages keep the visual readable without relying on color.
      </p>
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
            <StatusPill status={segment.status === "healthy" ? "Ready" : segment.status === "watch" ? "Watch" : "planned"} />
          </li>
        ))}
      </ul>
      <p className="helper-copy">
        Largest segment: {totals.largest.label}. Total sample share: {totals.total}%.
      </p>
    </article>
  );
}
