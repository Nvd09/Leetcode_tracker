"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CompletedProblemForm from "./CompletedProblemForm";

export default function LeetcodeTracker() {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

  const handleSelectProblem = (problem: string) => {
    setSelectedProblem(problem);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Today&apos;s Topic: Breadth First Search, Graphs
      </h2>
      <div className="flex space-x-4 mb-6">
        <Button
          onClick={() => handleSelectProblem("662. Clone a Graph")}
          variant={
            selectedProblem === "662. Clone a Graph" ? "default" : "outline"
          }
          className="flex-1">
          662. Clone a Graph
        </Button>
        <Button
          onClick={() => handleSelectProblem("Other problems")}
          variant={selectedProblem === "Other problems" ? "default" : "outline"}
          className="flex-1">
          Try other problems
        </Button>
      </div>
      {selectedProblem && (
        <div className="mb-6 p-4 bg-gray-100 rounded">
          <p className="font-medium">Selected: {selectedProblem}</p>
          {selectedProblem === "662. Clone a Graph" ? (
            <p className="mt-2">
              You&apos;re working on cloning a graph. Good luck!
            </p>
          ) : (
            <p className="mt-2">
              Exploring other BFS and Graph problems. Happy coding!
            </p>
          )}
        </div>
      )}
      <CompletedProblemForm />
    </div>
  );
}
