import type { SegmentBreakdown, TrendPoint } from "@/types/catalog";

export function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

export function getTrendChange(points: TrendPoint[]) {
  if (points.length < 2) {
    return { delta: 0, direction: "steady" as const };
  }

  const first = points[0].value;
  const last = points[points.length - 1].value;
  const delta = last - first;

  return {
    delta,
    direction: delta > 0 ? ("up" as const) : delta < 0 ? ("down" as const) : ("steady" as const)
  };
}

export function getTrendSummary(points: TrendPoint[]) {
  const { delta, direction } = getTrendChange(points);
  const peak = points.reduce((max, point) => (point.value > max.value ? point : max), points[0]);
  const latest = points[points.length - 1];

  return {
    latest,
    peak,
    delta,
    direction,
    sentence:
      direction === "up"
        ? `Latest value is ${formatPercent(latest.value)}, up ${Math.abs(delta)} points from the first period.`
        : direction === "down"
          ? `Latest value is ${formatPercent(latest.value)}, down ${Math.abs(delta)} points from the first period.`
          : `Latest value is ${formatPercent(latest.value)}, unchanged from the first period.`
  };
}

export function getSegmentTotals(segments: SegmentBreakdown[]) {
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);
  const largest = segments.reduce((max, segment) => (segment.value > max.value ? segment : max), segments[0]);

  return {
    total,
    largest,
    normalized: segments.map((segment) => ({
      ...segment,
      share: total === 0 ? 0 : Math.round((segment.value / total) * 100)
    }))
  };
}

export function buildSparklinePath(points: TrendPoint[], width = 360, height = 140, padding = 14) {
  if (points.length === 0) {
    return "";
  }

  const values = points.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = points.length === 1 ? 0 : (width - padding * 2) / (points.length - 1);

  return points
    .map((point, index) => {
      const x = padding + index * step;
      const y = height - padding - ((point.value - min) / range) * (height - padding * 2);
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}
