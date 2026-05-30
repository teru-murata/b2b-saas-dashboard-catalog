import type { DashboardMetric } from "@/types/catalog";
import { Badge } from "@/components/Badge";

type MetricCardProps = {
  metric: DashboardMetric;
};

export function MetricCard({ metric }: MetricCardProps) {
  const tone = metric.signal === "strong" ? "strong" : metric.signal === "watch" ? "watch" : "steady";

  return (
    <article className="metric-card">
      <div className="metric-card__header">
        <h3>{metric.label}</h3>
        <Badge tone={tone}>{metric.change}</Badge>
      </div>
      <p className="metric-card__value">{metric.value}</p>
      <p>{metric.description}</p>
    </article>
  );
}
