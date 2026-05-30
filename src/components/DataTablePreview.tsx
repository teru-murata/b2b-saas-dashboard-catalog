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
  copy: {
    toolbarSearch: string;
    searchPlaceholder: string;
    segmentLabel: string;
    allSegments: string;
    statusLabel: string;
    allStatuses: string;
    clearFilters: string;
    resultShowing: string;
    resultOf: string;
    resultRecords: string;
    averageConfidence: string;
    statusCountsLabel: string;
    activeFilters: string;
    noFilters: string;
    anySearch: string;
    columns: Record<TableSortKey | "ownerWorkflow" | "status", string>;
    sortIdle: string;
    sortAsc: string;
    sortDesc: string;
    sortAriaIdle: string;
    sortAriaReverse: string;
    scrollCue: string;
    regionLabel: string;
    caption: string;
    emptyTitle: string;
    emptyBody: string;
    helper: string;
  };
  statusLabels: {
    Ready: string;
    Watch: string;
    Review: string;
  };
};

export function DataTablePreview({ rows, copy, statusLabels }: DataTablePreviewProps) {
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
      return copy.sortAriaIdle;
    }

    return `${sort.direction === "asc" ? copy.sortAsc : copy.sortDesc}. ${copy.sortAriaReverse}`;
  }

  function getSortButtonLabel(label: string, key: TableSortKey) {
    return `${label}. ${getSortAssistiveLabel(key)}`;
  }

  function getSortIndicator(key: TableSortKey) {
    if (sort.key !== key) {
      return copy.sortIdle;
    }

    return sort.direction === "asc" ? copy.sortAsc : copy.sortDesc;
  }

  return (
    <div className="table-preview">
      <TableToolbar
        filters={filters}
        segments={segments}
        copy={copy}
        statusLabels={statusLabels}
        onFilterChange={updateFilter}
        onClear={() => setFilters({ search: "", segment: "all", status: "all" })}
      />
      <ResultSummary
        summary={summary}
        hasActiveFilters={Boolean(hasActiveFilters)}
        filters={filters}
        copy={copy}
        statusLabels={statusLabels}
      />
      <p id="table-scroll-cue" className="table-scroll-cue">
        {copy.scrollCue}
      </p>
      <div
        className="table-scroll"
        role="region"
        aria-label={copy.regionLabel}
        aria-describedby="table-scroll-cue"
        tabIndex={0}
      >
        <table>
          <caption>{copy.caption}</caption>
          <thead>
            <tr>
              <th scope="col" aria-sort={getAriaSort("accountSegment")}>
                <button
                  type="button"
                  className="table-sort-button"
                  aria-label={getSortButtonLabel(copy.columns.accountSegment, "accountSegment")}
                  onClick={() => updateSort("accountSegment")}
                >
                  {copy.columns.accountSegment}
                  <span className="sort-indicator" aria-hidden="true">
                    {getSortIndicator("accountSegment")}
                  </span>
                </button>
              </th>
              <th scope="col" aria-sort={getAriaSort("signal")}>
                <button
                  type="button"
                  className="table-sort-button"
                  aria-label={getSortButtonLabel(copy.columns.signal, "signal")}
                  onClick={() => updateSort("signal")}
                >
                  {copy.columns.signal}
                  <span className="sort-indicator" aria-hidden="true">
                    {getSortIndicator("signal")}
                  </span>
                </button>
              </th>
              <th scope="col">{copy.columns.ownerWorkflow}</th>
              <th scope="col" aria-sort={getAriaSort("confidence")}>
                <button
                  type="button"
                  className="table-sort-button"
                  aria-label={getSortButtonLabel(copy.columns.confidence, "confidence")}
                  onClick={() => updateSort("confidence")}
                >
                  {copy.columns.confidence}
                  <span className="sort-indicator" aria-hidden="true">
                    {getSortIndicator("confidence")}
                  </span>
                </button>
              </th>
              <th scope="col">{copy.columns.status}</th>
              <th scope="col" aria-sort={getAriaSort("lastReviewed")}>
                <button
                  type="button"
                  className="table-sort-button"
                  aria-label={getSortButtonLabel(copy.columns.lastReviewed, "lastReviewed")}
                  onClick={() => updateSort("lastReviewed")}
                >
                  {copy.columns.lastReviewed}
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
                    <StatusPill status={row.status} label={statusLabels[row.status]} />
                  </td>
                  <td>{row.lastReviewed}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>
                  <div className="table-empty-state">
                    <span className="table-empty-state__mark" aria-hidden="true" />
                    <strong>{copy.emptyTitle}</strong>
                    <span>{copy.emptyBody}</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="helper-copy">{copy.helper}</p>
    </div>
  );
}

type TableToolbarProps = {
  filters: TableFilters;
  segments: string[];
  copy: DataTablePreviewProps["copy"];
  statusLabels: DataTablePreviewProps["statusLabels"];
  onFilterChange: (key: keyof TableFilters, value: string) => void;
  onClear: () => void;
};

function TableToolbar({ filters, segments, copy, statusLabels, onFilterChange, onClear }: TableToolbarProps) {
  return (
    <div className="table-toolbar">
      <label>
        {copy.toolbarSearch}
        <input
          type="search"
          value={filters.search}
          onChange={(event) => onFilterChange("search", event.target.value)}
          placeholder={copy.searchPlaceholder}
        />
      </label>
      <label>
        {copy.segmentLabel}
        <select value={filters.segment} onChange={(event) => onFilterChange("segment", event.target.value)}>
          <option value="all">{copy.allSegments}</option>
          {segments.map((segment) => (
            <option key={segment} value={segment}>
              {segment}
            </option>
          ))}
        </select>
      </label>
      <label>
        {copy.statusLabel}
        <select value={filters.status} onChange={(event) => onFilterChange("status", event.target.value)}>
          <option value="all">{copy.allStatuses}</option>
          <option value="Ready">{statusLabels.Ready}</option>
          <option value="Watch">{statusLabels.Watch}</option>
          <option value="Review">{statusLabels.Review}</option>
        </select>
      </label>
      <button type="button" onClick={onClear}>
        {copy.clearFilters}
      </button>
    </div>
  );
}

type ResultSummaryProps = {
  summary: ReturnType<typeof getTableSummary>;
  hasActiveFilters: boolean;
  filters: TableFilters;
  copy: DataTablePreviewProps["copy"];
  statusLabels: DataTablePreviewProps["statusLabels"];
};

function ResultSummary({ summary, hasActiveFilters, filters, copy, statusLabels }: ResultSummaryProps) {
  return (
    <div className="result-summary" aria-live="polite">
      <p>
        {copy.resultShowing} <strong>{summary.visible}</strong> {copy.resultOf} <strong>{summary.total}</strong>{" "}
        {copy.resultRecords}
        {summary.visible > 0 ? <> {copy.averageConfidence} <strong>{summary.averageConfidence}%</strong>.</> : null}
      </p>
      <ul aria-label={copy.statusCountsLabel}>
        <li>{statusLabels.Ready}: {summary.ready}</li>
        <li>{statusLabels.Watch}: {summary.watch}</li>
        <li>{statusLabels.Review}: {summary.review}</li>
      </ul>
      {hasActiveFilters ? (
        <p className="active-filters">
          {copy.activeFilters}: {filters.search ? `"${filters.search}"` : copy.anySearch},{" "}
          {filters.segment === "all" ? copy.allSegments : filters.segment},{" "}
          {filters.status === "all" ? copy.allStatuses : statusLabels[filters.status as keyof typeof statusLabels]}
        </p>
      ) : (
        <p className="active-filters">{copy.noFilters}</p>
      )}
    </div>
  );
}
