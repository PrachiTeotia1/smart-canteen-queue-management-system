import type { QueueStatusType } from "../QueueStatus/QueueStatus";
import { Typography } from "../../ui/Typography/Typography";

interface QueueTimelineProps {
  currentStatus: QueueStatusType;
}

const timelineSteps: {
  status: QueueStatusType;
  label: string;
}[] = [
  {
    status: "waiting",
    label: "Waiting",
  },
  {
    status: "preparing",
    label: "Preparing",
  },
  {
    status: "ready",
    label: "Ready",
  },
  {
    status: "completed",
    label: "Completed",
  },
];

export function QueueTimeline({
  currentStatus,
}: QueueTimelineProps) {
  const currentIndex = timelineSteps.findIndex(
    (step) => step.status === currentStatus
  );

  return (
    <div
      className="rounded-2xl bg-white p-6"
      aria-label="Queue status timeline"
    >
      <Typography variant="h3">
        Order progress
      </Typography>

      <div className="mt-6 space-y-5">
        {timelineSteps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;

          return (
            <div
              key={step.status}
              className="flex items-center gap-4"
            >
              <div
                className={`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    isCurrent
                      ? "bg-[#FF7A00] text-white scale-110"
                      : isCompleted
                        ? "bg-[#FFE1C2] text-[#FF7A00]"
                        : "bg-[#F1E5D8] text-[#9CA3AF]"
                  }
                `}
                aria-hidden="true"
              >
                {isCompleted ? "✓" : index + 1}
              </div>

              <div className="min-w-0">
                <Typography
                  variant="body"
                  className={
                    isCurrent
                      ? "font-semibold text-[#FF7A00]"
                      : isCompleted
                        ? "font-medium text-[#1F2937]"
                        : "text-[#9CA3AF]"
                  }
                >
                  {step.label}
                </Typography>

                {isCurrent && (
                  <Typography
                    variant="caption"
                    className="text-[#6B7280]"
                  >
                    Current status
                  </Typography>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}