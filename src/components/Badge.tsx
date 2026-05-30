import type { EvidenceStatus } from "@/types/catalog";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "neutral" | "strong" | "watch" | "steady";
};

type StatusPillProps = {
  status: EvidenceStatus | "Ready" | "Watch" | "Review";
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return <span data-tone={tone}>{children}</span>;
}

export function StatusPill({ status }: StatusPillProps) {
  return <span data-status={status.toLowerCase()}>{status}</span>;
}
