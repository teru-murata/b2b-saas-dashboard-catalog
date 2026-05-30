import { describe, expect, it } from "vitest";
import type { SegmentBreakdown, TrendPoint } from "@/types/catalog";
import {
  buildSparklinePath,
  formatPercent,
  getSegmentTotals,
  getTrendChange,
  getTrendSummary
} from "./analyticsModel";

const points: TrendPoint[] = [
  { id: "w1", label: "Week 1", value: 40, note: "Baseline" },
  { id: "w2", label: "Week 2", value: 55, note: "Improved" },
  { id: "w3", label: "Week 3", value: 64, note: "Latest" }
];

const segments: SegmentBreakdown[] = [
  { id: "ready", label: "Ready", value: 30, status: "healthy" },
  { id: "watch", label: "Watch", value: 20, status: "watch" }
];

describe("analytics model utilities", () => {
  it("formats percent values", () => {
    expect(formatPercent(71.4)).toBe("71%");
  });

  it("derives trend change and summary", () => {
    expect(getTrendChange(points)).toEqual({ delta: 24, direction: "up" });
    expect(getTrendSummary(points).sentence).toContain("up 24 points");
  });

  it("summarizes segment totals", () => {
    expect(getSegmentTotals(segments).normalized.map((segment) => segment.share)).toEqual([60, 40]);
  });

  it("builds a deterministic sparkline path", () => {
    expect(buildSparklinePath(points, 100, 50, 10)).toBe("M 10.00 40.00 L 50.00 21.25 L 90.00 10.00");
  });
});
