import { describe, expect, it } from "vitest";
import type { TableRecord } from "@/types/catalog";
import {
  filterCatalogRows,
  getTableSummary,
  normalizeSearchText,
  sortCatalogRows
} from "./tableModel";

const rows: TableRecord[] = [
  {
    id: "a",
    accountSegment: "Enterprise",
    signal: "Pipeline health",
    ownerWorkflow: "Quarterly review",
    confidence: 88,
    status: "Ready",
    lastReviewed: "2026-05-14"
  },
  {
    id: "b",
    accountSegment: "Growth",
    signal: "Activation signal",
    ownerWorkflow: "Review queue",
    confidence: 58,
    status: "Watch",
    lastReviewed: "2026-05-24"
  },
  {
    id: "c",
    accountSegment: "Mid-market",
    signal: "Retention signal",
    ownerWorkflow: "Triage loop",
    confidence: 70,
    status: "Review",
    lastReviewed: "2026-05-20"
  }
];

describe("table model utilities", () => {
  it("normalizes search text", () => {
    expect(normalizeSearchText("  Pipeline   HEALTH ")).toBe("pipeline health");
  });

  it("filters by search, segment, and status", () => {
    const result = filterCatalogRows(rows, {
      search: "activation",
      segment: "Growth",
      status: "Watch"
    });

    expect(result.map((row) => row.id)).toEqual(["b"]);
  });

  it("sorts by confidence and last reviewed date", () => {
    expect(sortCatalogRows(rows, { key: "confidence", direction: "desc" }).map((row) => row.id)).toEqual([
      "a",
      "c",
      "b"
    ]);
    expect(sortCatalogRows(rows, { key: "lastReviewed", direction: "asc" }).map((row) => row.id)).toEqual([
      "a",
      "c",
      "b"
    ]);
  });

  it("summarizes visible rows", () => {
    expect(getTableSummary(rows, 6)).toEqual({
      visible: 3,
      total: 6,
      ready: 1,
      watch: 1,
      review: 1,
      averageConfidence: 72
    });
  });
});
