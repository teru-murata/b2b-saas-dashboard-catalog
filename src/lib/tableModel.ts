import type { TableFilters, TableRecord, TableSort } from "@/types/catalog";

export function normalizeSearchText(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function filterCatalogRows(rows: TableRecord[], filters: TableFilters) {
  const query = normalizeSearchText(filters.search);
  const segment = filters.segment === "all" ? "" : filters.segment;
  const status = filters.status === "all" ? "" : filters.status;

  return rows.filter((row) => {
    const searchText = normalizeSearchText(
      [row.accountSegment, row.signal, row.ownerWorkflow, row.status, row.lastReviewed].join(" ")
    );
    const matchesSearch = query ? searchText.includes(query) : true;
    const matchesSegment = segment ? row.accountSegment === segment : true;
    const matchesStatus = status ? row.status === status : true;

    return matchesSearch && matchesSegment && matchesStatus;
  });
}

export function sortCatalogRows(rows: TableRecord[], sort: TableSort) {
  return [...rows].sort((a, b) => {
    const modifier = sort.direction === "asc" ? 1 : -1;

    if (sort.key === "confidence") {
      return (a.confidence - b.confidence) * modifier;
    }

    if (sort.key === "lastReviewed") {
      return (Date.parse(a.lastReviewed) - Date.parse(b.lastReviewed)) * modifier;
    }

    return a[sort.key].localeCompare(b[sort.key]) * modifier;
  });
}

export function getTableSummary(rows: TableRecord[], totalRows: number) {
  const ready = rows.filter((row) => row.status === "Ready").length;
  const watch = rows.filter((row) => row.status === "Watch").length;
  const review = rows.filter((row) => row.status === "Review").length;
  const averageConfidence =
    rows.length === 0
      ? 0
      : Math.round(rows.reduce((sum, row) => sum + row.confidence, 0) / rows.length);

  return {
    visible: rows.length,
    total: totalRows,
    ready,
    watch,
    review,
    averageConfidence
  };
}

export function getUniqueSegments(rows: TableRecord[]) {
  return Array.from(new Set(rows.map((row) => row.accountSegment))).sort((a, b) => a.localeCompare(b));
}
