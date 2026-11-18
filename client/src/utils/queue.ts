import type { QueueStatusType } from "../components/common/QueueStatus/QueueStatus";

import {
  QUEUE_STATUS_TRANSITIONS,
} from "../constants/queue";

export function getNextQueueStatus(
  currentStatus: QueueStatusType
): QueueStatusType | null {
  return QUEUE_STATUS_TRANSITIONS[currentStatus][0] ?? null;
}