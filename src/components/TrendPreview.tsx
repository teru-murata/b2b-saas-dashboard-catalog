import type { TrendPoint } from "@/types/catalog";
import { buildSparklinePath, formatPercent, getTrendSummary } from "@/lib/analyticsModel";

type TrendPreviewProps = {
  points: TrendPoint[];
};

export function TrendPreview({ points }: TrendPreviewProps) {
  const max = Math.max(...points.map((point) => point.value));
  const min = Math.min(...points.map((point) => point.value));
  const path = buildSparklinePath(points);
  const summary = getTrendSummary(points);

  return (
    <div className="trend-preview" aria-labelledby="trend-preview-title">
      <div className="trend-preview__header">
        <h3 id="trend-preview-title">Analytics visual preview</h3>
        <p>Dependency-free SVG trend and list-backed values so the visual is meaningful without a chart library.</p>
      </div>
      <div className="sparkline-panel">
        <div className="sparkline-panel__meta">
          <p id="sparkline-title">Workflow quality trend</p>
          <strong>{formatPercent(summary.latest.value)}</strong>
          <span id="sparkline-summary">{summary.sentence}</span>
        </div>
        <svg
          viewBox="0 0 360 140"
          role="img"
          aria-labelledby="sparkline-svg-title sparkline-svg-desc"
          focusable="false"
        >
          <title id="sparkline-svg-title">Workflow quality trend sparkline</title>
          <desc id="sparkline-svg-desc">
            {summary.sentence} Latest value is {formatPercent(summary.latest.value)}.
          </desc>
          <line x1="14" y1="126" x2="346" y2="126" className="sparkline-axis" />
          <line x1="14" y1="14" x2="14" y2="126" className="sparkline-axis" />
          <text x="16" y="24" className="sparkline-label">
            {formatPercent(max)}
          </text>
          <text x="16" y="122" className="sparkline-label">
            {formatPercent(min)}
          </text>
          <path d={path} className="sparkline-path" />
          {points.map((point, index) => {
            const x = 14 + (index * (360 - 28)) / (points.length - 1);
            const y = 126 - ((point.value - min) / (max - min || 1)) * 112;

            return (
              <g key={point.id}>
                <line x1={x} y1="126" x2={x} y2={y} className="sparkline-guide" />
                <circle cx={x} cy={y} r="4.5" className="sparkline-point" />
                <text x={x} y={Math.max(20, y - 10)} className="sparkline-label sparkline-label--value">
                  {formatPercent(point.value)}
                </text>
                <text x={x} y="136" className="sparkline-label sparkline-label--tick">
                  {point.label.replace("Week ", "W")}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="insight-summary">
        <h4>Insight summary</h4>
        <p>
          The sample trend moves {summary.direction === "up" ? "upward" : summary.direction} by{" "}
          {Math.abs(summary.delta)} points from first to latest period. Peak sample value is{" "}
          {formatPercent(summary.peak.value)} in {summary.peak.label}.
        </p>
        <p>This is a lightweight implementation, not a full charting system.</p>
      </div>
      <ul className="trend-bars" aria-label="Workflow quality trend by week">
        {points.map((point) => (
          <li key={point.id}>
            <span className="trend-bars__label">{point.label}</span>
            <span className="trend-bars__track" aria-hidden="true">
              <span className="trend-bars__bar" style={{ inlineSize: `${(point.value / max) * 100}%` }} />
            </span>
            <span className="trend-bars__value">{point.value}%</span>
            <span className="trend-bars__note">{point.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
