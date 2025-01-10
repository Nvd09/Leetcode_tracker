"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    console.log("Form submitted:", { name, username, password });
    router.push("/topic-selection");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-100">
      <Card className="w-full max-w-md bg-stone-50 border-stone-200">
        <CardHeader>
          <CardTitle>Login to Leetcode Tracker</CardTitle>
          <CardDescription>
            Enter your details to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="johndoe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-amber-100 text-amber-900 hover:bg-amber-200">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-stone-50 px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => console.log("Gmail login")}>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 mr-2"
                fill="currentColor">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Gmail
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => console.log("Apple login")}>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 mr-2"
                fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.5-2.08-.53-3.23 0-1.44.67-2.2.54-3.05-.36-4.48-4.92-3.74-11.98 1.4-12.26 1.26.11 2.16.73 2.95.78 1.06-.17 2.07-.8 3.24-.68 1.76.18 3.06.97 3.89 2.4-3.6 2.14-2.73 6.78.83 8.16-.8 1.71-1.83 3.36-2.95 4.74v-3.19zm-3.14-19.01c.15 1.37-.37 2.55-1.14 3.52-.85 1.05-2.08 1.86-3.39 1.75-.18-1.33.4-2.49 1.14-3.43.87-1.1 2.21-1.86 3.39-1.84z" />
              </svg>
              Apple
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
