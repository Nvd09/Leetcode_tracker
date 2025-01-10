import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// This would typically come from your backend
const completedProblems = [
  { number: "1", name: "Two Sum", attempts: 2, topic: "Arrays" },
  { number: "20", name: "Valid Parentheses", attempts: 1, topic: "Stack" },
  { number: "121", name: "Best Time to Buy and Sell Stock", attempts: 3, topic: "Dynamic Programming" },
]

export default function CompletedProblemsList() {
  return (
    <Card className="bg-stone-50 border-stone-200">
      <CardHeader>
        <CardTitle>Completed Problems</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex justify-between font-medium">
          <span className="w-1/2">Problem</span>
          <span className="w-1/4">Topic</span>
          <span className="w-1/4 text-right">Attempts</span>
        </div>
        <ul className="space-y-2">
          {completedProblems.map((problem) => (
            <li key={problem.number} className="flex justify-between items-center">
              <span className="w-1/2">{problem.number}. {problem.name}</span>
              <span className="w-1/4 text-sm text-stone-600">{problem.topic}</span>
              <span className="w-1/4 text-sm text-stone-600 text-right">{problem.attempts}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

