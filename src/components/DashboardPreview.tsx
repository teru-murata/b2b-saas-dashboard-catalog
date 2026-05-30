import type { DashboardMetric, SegmentBreakdown, TrendPoint } from "@/types/catalog";
import { MetricCard } from "@/components/MetricCard";
import { StatusPill } from "@/components/Badge";
import { TrendPreview } from "@/components/TrendPreview";

type DashboardPreviewProps = {
  metrics: DashboardMetric[];
  segments: SegmentBreakdown[];
  trend: TrendPoint[];
};

export function DashboardPreview({ metrics, segments, trend }: DashboardPreviewProps) {
  return (
    <div className="dashboard-preview">
      <div className="metric-grid">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>
      <div className="dashboard-preview__body">
        <article className="scenario-panel">
          <p className="section-eyebrow">Data-rich dashboard scenario</p>
          <h3>Pipeline health review</h3>
          <p>
            A static, public-safe scenario that combines account segment signals, operational efficiency,
            activation signals, and a review queue into one decision surface.
          </p>
          <ul className="scenario-list">
            <li>
              <strong>Typed boundary:</strong> sample records are imported from TypeScript data.
            </li>
            <li>
              <strong>Quality signal:</strong> status is expressed with text and color, never color alone.
            </li>
            <li>
              <strong>Future-ready:</strong> deeper table and analytics behavior is intentionally deferred.
            </li>
          </ul>
        </article>
        <article className="segment-panel">
          <h3>Segment breakdown</h3>
          <ul>
            {segments.map((segment) => (
              <li key={segment.id}>
                <span>{segment.label}</span>
                <strong>{segment.value}%</strong>
                <StatusPill status={segment.status === "healthy" ? "Ready" : segment.status === "watch" ? "Watch" : "planned"} />
              </li>
            ))}
          </ul>
        </article>
      </div>
      <TrendPreview points={trend} />
    </div>
  );
}
