"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const topics = [
  "Arrays",
  "Linked Lists",
  "Trees",
  "Graphs",
  "Dynamic Programming",
  "Sorting and Searching",
  "Recursion",
  "Backtracking",
  "Greedy Algorithms",
  "Bit Manipulation",
  "Math",
  "String Manipulation",
];

export default function TopicSelection() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const router = useRouter();

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    router.push(`/leetcode-tracker?topic=${encodeURIComponent(topic)}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-100">
      <Card className="w-full max-w-4xl bg-stone-50 border-stone-200">
        <CardHeader>
          <CardTitle>Which topic would you like to tackle today?</CardTitle>
          <CardDescription>
            Select a topic to start your Leetcode practice
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {topics.map((topic) => (
              <Button
                key={topic}
                onClick={() => handleTopicSelect(topic)}
                className="h-auto py-4 px-6 font-bold bg-amber-100 text-amber-900 hover:bg-amber-200 whitespace-normal text-left">
                {topic}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
