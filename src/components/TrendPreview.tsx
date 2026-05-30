import type { TrendPoint } from "@/types/catalog";
import { buildSparklinePath, formatPercent, getTrendSummary } from "@/lib/analyticsModel";

type TrendPreviewProps = {
  points: TrendPoint[];
  copy: {
    title: string;
    description: string;
    metaTitle: string;
    svgTitle: string;
    latestUp: (latest: string, delta: number) => string;
    latestDown: (latest: string, delta: number) => string;
    latestSteady: (latest: string) => string;
    insightTitle: string;
    insightSentence: (direction: "up" | "down" | "steady", delta: number, peak: string, peakLabel: string) => string;
    lightweightNote: string;
    barsLabel: string;
  };
};

export function TrendPreview({ points, copy }: TrendPreviewProps) {
  const max = Math.max(...points.map((point) => point.value));
  const min = Math.min(...points.map((point) => point.value));
  const path = buildSparklinePath(points);
  const summary = getTrendSummary(points);
  const summarySentence =
    summary.direction === "up"
      ? copy.latestUp(formatPercent(summary.latest.value), Math.abs(summary.delta))
      : summary.direction === "down"
        ? copy.latestDown(formatPercent(summary.latest.value), Math.abs(summary.delta))
        : copy.latestSteady(formatPercent(summary.latest.value));

  return (
    <div className="trend-preview" aria-labelledby="trend-preview-title">
      <div className="trend-preview__header">
        <h3 id="trend-preview-title">{copy.title}</h3>
        <p>{copy.description}</p>
      </div>
      <div className="sparkline-panel">
        <div className="sparkline-panel__meta">
          <p id="sparkline-title">{copy.metaTitle}</p>
          <strong>{formatPercent(summary.latest.value)}</strong>
          <span id="sparkline-summary">{summarySentence}</span>
        </div>
        <svg
          viewBox="0 0 360 140"
          role="img"
          aria-labelledby="sparkline-svg-title sparkline-svg-desc"
          focusable="false"
        >
          <title id="sparkline-svg-title">{copy.svgTitle}</title>
          <desc id="sparkline-svg-desc">
            {summarySentence}
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
        <h4>{copy.insightTitle}</h4>
        <p>{copy.insightSentence(summary.direction, summary.delta, formatPercent(summary.peak.value), summary.peak.label)}</p>
        <p>{copy.lightweightNote}</p>
      </div>
      <ul className="trend-bars" aria-label={copy.barsLabel}>
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
