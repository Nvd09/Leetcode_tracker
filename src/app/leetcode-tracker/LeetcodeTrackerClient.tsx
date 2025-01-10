"use client";

import { useSearchParams } from "next/navigation";
import TodaysTopic from "@/components/TodaysTopic";
import CompletedProblemForm from "@/components/CompletedProblemForm";
import CompletedProblemsList from "@/components/CompletedProblemsList";
import UncompletedTopics from "@/components/UncompletedTopics";
import DailyTopics from "@/components/DailyTopics";

export default function LeetcodeTrackerClient() {
  const searchParams = useSearchParams();
  const selectedTopic =
    searchParams.get("topic") || "Breadth First Search, Graphs";

  return (
    <main className="container mx-auto px-4 py-8 flex gap-8">
      <div className="w-2/3 space-y-8">
        <TodaysTopic topic={selectedTopic} />
        <CompletedProblemForm />
        <CompletedProblemsList />
      </div>
      <div className="w-1/3 space-y-8">
        <UncompletedTopics />
        <DailyTopics />
      </div>
    </main>
  );
}
