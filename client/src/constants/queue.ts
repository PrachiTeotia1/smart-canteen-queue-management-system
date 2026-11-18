import type { QueueStatusType } from "../components/common/QueueStatus/QueueStatus";

export const QUEUE_STATUS_FLOW: QueueStatusType[] = [
  "waiting",
  "preparing",
  "ready",
  "completed",
];

export const QUEUE_STATUS_TRANSITIONS: Record<
  QueueStatusType,
  readonly QueueStatusType[]
> = {
  waiting: ["preparing"],
  preparing: ["ready"],
  ready: ["completed"],
  completed: [],
};

export function canTransitionQueueStatus(
  currentStatus: QueueStatusType,
  nextStatus: QueueStatusType
): boolean {
  return QUEUE_STATUS_TRANSITIONS[currentStatus].includes(
    nextStatus
  );
}