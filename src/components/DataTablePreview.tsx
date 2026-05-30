"use client";

import { useMemo, useState } from "react";
import type { TableFilters, TableRecord, TableSort, TableSortKey } from "@/types/catalog";
import { StatusPill } from "@/components/Badge";
import {
  filterCatalogRows,
  getTableSummary,
  getUniqueSegments,
  sortCatalogRows
} from "@/lib/tableModel";

type DataTablePreviewProps = {
  rows: TableRecord[];
};

export function DataTablePreview({ rows }: DataTablePreviewProps) {
  const [filters, setFilters] = useState<TableFilters>({
    search: "",
    segment: "all",
    status: "all"
  });
  const [sort, setSort] = useState<TableSort>({ key: "confidence", direction: "desc" });
  const segments = useMemo(() => getUniqueSegments(rows), [rows]);

  const visibleRows = useMemo(() => {
    return sortCatalogRows(filterCatalogRows(rows, filters), sort);
  }, [filters, rows, sort]);

  const summary = useMemo(() => getTableSummary(visibleRows, rows.length), [rows.length, visibleRows]);
  const hasActiveFilters = filters.search || filters.segment !== "all" || filters.status !== "all";

  function updateFilter(key: keyof TableFilters, value: string) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function updateSort(key: TableSortKey) {
    setSort((current) =>
      current.key === key
        ? { key, direction: current.direction === "asc" ? "desc" : "asc" }
        : { key, direction: key === "confidence" || key === "lastReviewed" ? "desc" : "asc" }
    );
  }

  function getAriaSort(key: TableSortKey) {
    if (sort.key !== key) {
      return "none";
    }

    return sort.direction === "asc" ? "ascending" : "descending";
  }

  function getSortAssistiveLabel(key: TableSortKey) {
    if (sort.key !== key) {
      return "Not sorted. Activate to sort this column.";
    }

    return `Sorted ${sort.direction === "asc" ? "ascending" : "descending"}. Activate to reverse order.`;
  }

  function getSortButtonLabel(label: string, key: TableSortKey) {
    return `${label}. ${getSortAssistiveLabel(key)}`;
  }

  function getSortIndicator(key: TableSortKey) {
    if (sort.key !== key) {
      return "Sort";
    }

    return sort.direction === "asc" ? "Asc" : "Desc";
  }

  return (
    <div className="table-preview">
      <TableToolbar
        filters={filters}
        segments={segments}
        onFilterChange={updateFilter}
        onClear={() => setFilters({ search: "", segment: "all", status: "all" })}
      />
      <ResultSummary summary={summary} hasActiveFilters={Boolean(hasActiveFilters)} filters={filters} />
      <p id="table-scroll-cue" className="table-scroll-cue">
        More columns are available across the table. On narrow screens, scroll sideways inside the table area.
      </p>
      <div
        className="table-scroll"
        role="region"
        aria-label="Static data table preview"
        aria-describedby="table-scroll-cue"
        tabIndex={0}
      >
        <table>
          <caption>
            Public-safe sample records showing account segment signals, owner workflows, confidence, status,
            and review recency.
          </caption>
          <thead>
            <tr>
              <th scope="col" aria-sort={getAriaSort("accountSegment")}>
                <button
                  type="button"
                  className="table-sort-button"
                  aria-label={getSortButtonLabel("Account segment", "accountSegment")}
                  onClick={() => updateSort("accountSegment")}
                >
                  Account segment
                  <span className="sort-indicator" aria-hidden="true">
                    {getSortIndicator("accountSegment")}
                  </span>
                </button>
              </th>
              <th scope="col" aria-sort={getAriaSort("signal")}>
                <button
                  type="button"
                  className="table-sort-button"
                  aria-label={getSortButtonLabel("Signal", "signal")}
                  onClick={() => updateSort("signal")}
                >
                  Signal
                  <span className="sort-indicator" aria-hidden="true">
                    {getSortIndicator("signal")}
                  </span>
                </button>
              </th>
              <th scope="col">Owner workflow</th>
              <th scope="col" aria-sort={getAriaSort("confidence")}>
                <button
                  type="button"
                  className="table-sort-button"
                  aria-label={getSortButtonLabel("Confidence", "confidence")}
                  onClick={() => updateSort("confidence")}
                >
                  Confidence
                  <span className="sort-indicator" aria-hidden="true">
                    {getSortIndicator("confidence")}
                  </span>
                </button>
              </th>
              <th scope="col">Status</th>
              <th scope="col" aria-sort={getAriaSort("lastReviewed")}>
                <button
                  type="button"
                  className="table-sort-button"
                  aria-label={getSortButtonLabel("Last reviewed", "lastReviewed")}
                  onClick={() => updateSort("lastReviewed")}
                >
                  Last reviewed
                  <span className="sort-indicator" aria-hidden="true">
                    {getSortIndicator("lastReviewed")}
                  </span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.length > 0 ? (
              visibleRows.map((row) => (
                <tr key={row.id}>
                  <th scope="row">{row.accountSegment}</th>
                  <td>{row.signal}</td>
                  <td>{row.ownerWorkflow}</td>
                  <td>{row.confidence}%</td>
                  <td>
                    <StatusPill status={row.status} />
                  </td>
                  <td>{row.lastReviewed}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>
                  <div className="table-empty-state">
                    <span className="table-empty-state__mark" aria-hidden="true" />
                    <strong>No matching sample records.</strong>
                    <span>Adjust search, segment, or status filters to restore the table.</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="helper-copy">
        Table clarity matters because many BtoB SaaS workflows rely on dense operational records. This
        phase demonstrates the baseline without adding a table library.
      </p>
    </div>
  );
}

type TableToolbarProps = {
  filters: TableFilters;
  segments: string[];
  onFilterChange: (key: keyof TableFilters, value: string) => void;
  onClear: () => void;
};

function TableToolbar({ filters, segments, onFilterChange, onClear }: TableToolbarProps) {
  return (
    <div className="table-toolbar">
      <label>
        Search records
        <input
          type="search"
          value={filters.search}
          onChange={(event) => onFilterChange("search", event.target.value)}
          placeholder="Try Ready, Watch, or activation"
        />
      </label>
      <label>
        Segment
        <select value={filters.segment} onChange={(event) => onFilterChange("segment", event.target.value)}>
          <option value="all">All segments</option>
          {segments.map((segment) => (
            <option key={segment} value={segment}>
              {segment}
            </option>
          ))}
        </select>
      </label>
      <label>
        Status
        <select value={filters.status} onChange={(event) => onFilterChange("status", event.target.value)}>
          <option value="all">All statuses</option>
          <option value="Ready">Ready</option>
          <option value="Watch">Watch</option>
          <option value="Review">Review</option>
        </select>
      </label>
      <button type="button" onClick={onClear}>
        Clear filters
      </button>
    </div>
  );
}

type ResultSummaryProps = {
  summary: ReturnType<typeof getTableSummary>;
  hasActiveFilters: boolean;
  filters: TableFilters;
};

function ResultSummary({ summary, hasActiveFilters, filters }: ResultSummaryProps) {
  return (
    <div className="result-summary" aria-live="polite">
      <p>
        Showing <strong>{summary.visible}</strong> of <strong>{summary.total}</strong> sample records.
        {summary.visible > 0 ? <> Average confidence is <strong>{summary.averageConfidence}%</strong>.</> : null}
      </p>
      <ul aria-label="Visible status counts">
        <li>Ready: {summary.ready}</li>
        <li>Watch: {summary.watch}</li>
        <li>Review: {summary.review}</li>
      </ul>
      {hasActiveFilters ? (
        <p className="active-filters">
          Active filters: {filters.search ? `search "${filters.search}"` : "any search"},{" "}
          {filters.segment === "all" ? "all segments" : filters.segment},{" "}
          {filters.status === "all" ? "all statuses" : filters.status}
        </p>
      ) : (
        <p className="active-filters">No filters are active.</p>
      )}
    </div>
  );
}
