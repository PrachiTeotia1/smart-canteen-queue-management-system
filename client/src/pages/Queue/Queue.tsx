import { useState } from "react";

import {
  QueueStatus,
} from "../../components/common/QueueStatus/QueueStatus";

import type {
  QueueStatusType,
} from "../../components/common/QueueStatus/QueueStatus";

import { Button } from "../../components/ui/Button/Button";
import { Typography } from "../../components/ui/Typography/Typography";
import { QueueTimeline } from "../../components/common/QueueTimeline/QueueTimeline";

import { getNextQueueStatus } from "../../utils/queue";

const queueData = {
  queueNumber: "A-102",

  initialPosition: 7,

  peopleAhead: {
    waiting: 7,
    preparing: 4,
    ready: 0,
    completed: 0,
  },

  estimatedWait: {
    waiting: 15,
    preparing: 8,
    ready: 0,
    completed: 0,
  },
};

function calculateQueueProgress(
  initialPosition: number,
  currentPosition: number
): number {
  if (initialPosition <= 0) {
    return 100;
  }

  const progress =
    ((initialPosition - currentPosition) / initialPosition) * 100;

  return Math.round(
    Math.max(0, Math.min(100, progress))
  );
}

export function Queue() {
  const [status, setStatus] =
    useState<QueueStatusType>("waiting");

  const currentPeopleAhead =
    queueData.peopleAhead[status];

  const currentEstimatedWait =
    queueData.estimatedWait[status];

  const progress = calculateQueueProgress(
    queueData.initialPosition,
    currentPeopleAhead
  );

  const advanceQueue = () => {
  const nextStatus = getNextQueueStatus(status);

  if (nextStatus) {
    setStatus(nextStatus);
  }
};

  const resetQueue = () => {
    setStatus("waiting");
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <section>
        <Typography variant="h1">
          Your Queue
        </Typography>

        <Typography
          variant="body"
          className="mt-2 text-[#6B7280]"
        >
          Track your order and know when it will be ready.
        </Typography>
      </section>

      {/* Current Queue */}
      <section>
        <QueueStatus
          queueNumber={queueData.queueNumber}
          peopleAhead={currentPeopleAhead}
          estimatedWait={currentEstimatedWait}
          status={status}
          progress={progress}
        />
      </section>
    {/* Queue Timeline */}
        <section>
        <QueueTimeline currentStatus={status} />
        </section>
      {/* Development Controls */}
      <section className="rounded-2xl bg-white p-6">
        <Typography variant="h3">
          Queue simulation
        </Typography>

        <Typography
          variant="body-sm"
          className="mt-2 text-[#6B7280]"
        >
          Development controls for testing queue states.
        </Typography>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button
            variant="primary"
            onClick={advanceQueue}
            disabled={status === "completed"}
          >
            Advance Queue
          </Button>

          <Button
            variant="outline"
            onClick={resetQueue}
          >
            Reset
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Queue;