import type { DeliveryMilestone } from "@/types/catalog";
import { StatusPill } from "@/components/Badge";

type DeliveryTimelineProps = {
  milestones: DeliveryMilestone[];
};

export function DeliveryTimeline({ milestones }: DeliveryTimelineProps) {
  return (
    <ol className="delivery-timeline">
      {milestones.map((milestone) => (
        <li key={milestone.id}>
          <div>
            <h3>{milestone.label}</h3>
            <p>{milestone.detail}</p>
          </div>
          <StatusPill status={milestone.status} />
        </li>
      ))}
    </ol>
  );
}
