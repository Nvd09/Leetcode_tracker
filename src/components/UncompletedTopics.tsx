import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const topics = [
  "Dynamic Programming",
  "Binary Search",
  "Depth-First Search",
  "Two Pointers",
  "Sliding Window",
];

export default function UncompletedTopics() {
  return (
    <Card className="bg-stone-50 border-stone-200">
      <CardHeader>
        <CardTitle>Incomplete Topics from this week</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              {topic}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
