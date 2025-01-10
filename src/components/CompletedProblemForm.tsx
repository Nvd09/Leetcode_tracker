'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function CompletedProblemForm() {
  const [link, setLink] = useState('')
  const [tries, setTries] = useState('')
  const [intuition, setIntuition] = useState('')
  const [problemDetails, setProblemDetails] = useState<{ name: string; number: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate fetching problem details
    const fakeFetch = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            name: "Two Sum",
            number: "1"
          })
        }, 1000)
      })
    }

    const details = await fakeFetch() as { name: string; number: string }
    setProblemDetails(details)
    // In a real application, you would save this data, including the intuition, to your backend
    console.log('Intuition:', intuition)
  }

  return (
    <Card className="bg-stone-50 border-stone-200">
      <CardHeader>
        <CardTitle>Log Completed Problem</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="problem-link">Completed Problem Link</Label>
            <Input
              id="problem-link"
              type="url"
              placeholder="https://leetcode.com/problems/..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="intuition">Intuition</Label>
            <Input
              id="intuition"
              placeholder="Describe your approach..."
              value={intuition}
              onChange={(e) => setIntuition(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="tries">Number of Tries</Label>
            <Input
              id="tries"
              type="number"
              min="1"
              value={tries}
              onChange={(e) => setTries(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="bg-amber-100 text-amber-900 hover:bg-amber-200">Submit</Button>

          {problemDetails && (
            <div className="mt-4 p-4 bg-green-50 rounded border border-green-200">
              <p className="font-medium">Problem Completed:</p>
              <p>{problemDetails.number}. {problemDetails.name}</p>
              <p>Number of tries: {tries}</p>
              <p>Intuition: {intuition}</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

