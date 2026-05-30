import type { TrendPoint } from "@/types/catalog";

type TrendPreviewProps = {
  points: TrendPoint[];
};

export function TrendPreview({ points }: TrendPreviewProps) {
  const max = Math.max(...points.map((point) => point.value));

  return (
    <div className="trend-preview" aria-labelledby="trend-preview-title">
      <div className="trend-preview__header">
        <h3 id="trend-preview-title">Analytics visual preview</h3>
        <p>Dependency-free trend bars with adjacent text so status is not color-only.</p>
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
