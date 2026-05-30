import type { ComponentProps } from "react";
import type { DashboardMetric, SegmentBreakdown, TrendPoint } from "@/types/catalog";
import { MetricCard } from "@/components/MetricCard";
import { SegmentBreakdown as SegmentBreakdownPanel } from "@/components/SegmentBreakdown";
import { TrendPreview } from "@/components/TrendPreview";

type DashboardPreviewProps = {
  metrics: DashboardMetric[];
  segments: SegmentBreakdown[];
  trend: TrendPoint[];
  copy: {
    scenarioEyebrow: string;
    scenarioTitle: string;
    scenarioDescription: string;
    scenarioItems: { label: string; detail: string }[];
  };
  segmentCopy: ComponentProps<typeof SegmentBreakdownPanel>["copy"];
  trendCopy: ComponentProps<typeof TrendPreview>["copy"];
  statusLabels: ComponentProps<typeof SegmentBreakdownPanel>["statusLabels"];
};

export function DashboardPreview({ metrics, segments, trend, copy, segmentCopy, trendCopy, statusLabels }: DashboardPreviewProps) {
  return (
    <div className="dashboard-preview">
      <div className="metric-grid">
        {metrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>
      <div className="dashboard-preview__body">
        <article className="scenario-panel">
          <p className="section-eyebrow">{copy.scenarioEyebrow}</p>
          <h3>{copy.scenarioTitle}</h3>
          <p>{copy.scenarioDescription}</p>
          <ul className="scenario-list">
            {copy.scenarioItems.map((item) => (
              <li key={item.label}>
                <strong>{item.label}:</strong> {item.detail}
              </li>
            ))}
          </ul>
        </article>
        <SegmentBreakdownPanel segments={segments} copy={segmentCopy} statusLabels={statusLabels} />
      </div>
      <TrendPreview points={trend} copy={trendCopy} />
    </div>
  );
}
