"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const dailyTopics = [
  { day: "Monday", topic: "Arrays" },
  { day: "Tuesday", topic: "Linked Lists" },
  { day: "Wednesday", topic: "Trees" },
  { day: "Thursday", topic: "DFS" },
  { day: "Friday", topic: "Tries" },
];

export default function DailyTopics() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <Card className="bg-stone-50 border-stone-200">
      <CardHeader>
        <CardTitle>Daily Topics</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {dailyTopics.map((dayTopic) => (
            <li
              key={dayTopic.day}
              className="flex justify-between items-center">
              <span>{dayTopic.day}</span>
              <Button
                variant="ghost"
                onClick={() => setSelectedTopic(dayTopic.topic)}
                className="text-amber-900 hover:bg-amber-100">
                {dayTopic.topic}
              </Button>
            </li>
          ))}
        </ul>
        {selectedTopic && (
          <div className="mt-4 p-4 bg-amber-50 rounded border border-amber-200">
            <p className="font-medium">Selected Topic: {selectedTopic}</p>
            <p className="mt-2">
              Start practicing problems related to {selectedTopic}!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
