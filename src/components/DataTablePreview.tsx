"use client";

import { useMemo, useState } from "react";
import type { TableRecord } from "@/types/catalog";
import { StatusPill } from "@/components/Badge";

type DataTablePreviewProps = {
  rows: TableRecord[];
};

export function DataTablePreview({ rows }: DataTablePreviewProps) {
  const [filter, setFilter] = useState("");
  const [sortDescending, setSortDescending] = useState(true);

  const visibleRows = useMemo(() => {
    const query = filter.trim().toLowerCase();
    const filtered = query
      ? rows.filter((row) =>
          [row.accountSegment, row.signal, row.ownerWorkflow, row.status]
            .join(" ")
            .toLowerCase()
            .includes(query)
        )
      : rows;

    return [...filtered].sort((a, b) =>
      sortDescending ? b.confidence - a.confidence : a.confidence - b.confidence
    );
  }, [filter, rows, sortDescending]);

  return (
    <div className="table-preview">
      <div className="table-toolbar">
        <label>
          Filter sample records
          <input
            type="search"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            placeholder="Try Ready, Watch, or activation"
          />
        </label>
        <button type="button" onClick={() => setSortDescending((value) => !value)}>
          Confidence {sortDescending ? "high to low" : "low to high"}
        </button>
      </div>
      <div className="table-scroll" role="region" aria-label="Static data table preview" tabIndex={0}>
        <table>
          <caption>
            Public-safe sample records showing account segment signals, owner workflows, confidence, status,
            and review recency.
          </caption>
          <thead>
            <tr>
              <th scope="col">Account segment</th>
              <th scope="col">Signal</th>
              <th scope="col">Owner workflow</th>
              <th scope="col">Confidence</th>
              <th scope="col">Status</th>
              <th scope="col">Last reviewed</th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row) => (
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
            ))}
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
