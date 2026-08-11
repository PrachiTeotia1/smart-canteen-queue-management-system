import { Badge } from "../../ui/Badge/Badge";
import { Card } from "../../ui/Card/Card";
import { Typography } from "../../ui/Typography/Typography";

export type QueueStatusType =
  | "waiting"
  | "preparing"
  | "ready"
  | "completed";

interface QueueStatusProps {
  queueNumber: string;
  peopleAhead: number;
  estimatedWait: number;
  status: QueueStatusType;
}

const statusConfig: Record<
  QueueStatusType,
  {
    label: string;
    variant: "default" | "success" | "warning" | "danger" | "info" | "accent";
  }
> = {
  waiting: {
    label: "Waiting",
    variant: "info",
  },
  preparing: {
    label: "Preparing",
    variant: "warning",
  },
  ready: {
    label: "Ready",
    variant: "success",
  },
  completed: {
    label: "Completed",
    variant: "default",
  },
};

export function QueueStatus({
  queueNumber,
  peopleAhead,
  estimatedWait,
  status,
}: QueueStatusProps) {
  const currentStatus = statusConfig[status];

  return (
    <Card
      variant="elevated"
      padding="lg"
      className="
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-0.5
      "
    >
      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <Typography
              variant="body-sm"
              className="font-medium text-[#6B7280]"
            >
              Your current queue
            </Typography>

            <Typography
              variant="h2"
              className="mt-1"
            >
              #{queueNumber}
            </Typography>
          </div>

          <Badge
            variant={currentStatus.variant}
            dot
          >
            {currentStatus.label}
          </Badge>
        </div>

        {/* Queue Information */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-[#FFF9F3] p-4">
            <Typography variant="caption">
              People ahead
            </Typography>

            <Typography
              variant="h3"
              className="mt-1"
            >
              {peopleAhead}
            </Typography>
          </div>

          <div className="rounded-xl bg-[#FFF9F3] p-4">
            <Typography variant="caption">
              Estimated wait
            </Typography>

            <Typography
              variant="h3"
              className="mt-1"
            >
              ~{estimatedWait} min
            </Typography>
          </div>
        </div>

        {/* Progress */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <Typography variant="caption">
              Queue progress
            </Typography>

            <Typography variant="caption">
              {peopleAhead === 0 ? "Almost ready" : "In progress"}
            </Typography>
          </div>

          <div
            className="h-2 overflow-hidden rounded-full bg-[#F1E5D8]"
            role="progressbar"
            aria-label="Queue progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.max(
              0,
              Math.min(100, 100 - peopleAhead * 10)
            )}
          >
            <div
              className="
                h-full
                rounded-full
                bg-[#FF7A00]
                transition-all
                duration-500
              "
              style={{
                width: `${Math.max(
                  10,
                  Math.min(100, 100 - peopleAhead * 10)
                )}%`,
              }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}