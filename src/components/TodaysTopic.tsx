"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface TodaysTopicProps {
  topic: string;
}

export default function TodaysTopic({ topic }: TodaysTopicProps) {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

  const handleSelectProblem = (problem: string) => {
    setSelectedProblem(problem);
  };

  return (
    <Card className="bg-stone-50 border-stone-200">
      <CardHeader>
        <CardTitle>Today&apos;s Topic: {topic}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button
            onClick={() => handleSelectProblem(`Problem 1 for ${topic}`)}
            variant={
              selectedProblem === `Problem 1 for ${topic}`
                ? "default"
                : "outline"
            }
            className="h-auto py-4 px-6 font-bold bg-amber-100 text-amber-900 hover:bg-amber-200 whitespace-normal text-left"
            style={{ minHeight: "80px" }}>
            Problem 1 for {topic}
          </Button>
          <Button
            onClick={() => handleSelectProblem(`Other ${topic} problems`)}
            variant={
              selectedProblem === `Other ${topic} problems`
                ? "default"
                : "outline"
            }
            className="h-auto py-4 px-6 font-bold bg-amber-100 text-amber-900 hover:bg-amber-200 whitespace-normal text-left"
            style={{ minHeight: "80px" }}>
            Other {topic} Problems
          </Button>
        </div>
        {selectedProblem && (
          <div className="p-4 bg-stone-200 rounded">
            <p className="font-medium">Selected: {selectedProblem}</p>
            <p className="mt-2">
              You&apos;re working on {selectedProblem}. Good luck!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
