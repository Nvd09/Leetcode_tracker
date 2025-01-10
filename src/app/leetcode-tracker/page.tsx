import { Suspense } from "react";
import Header from "@/components/Header";
import LeetcodeTrackerClient from "./LeetcodeTrackerClient";

export default function LeetcodeTracker() {
  return (
    <div className="min-h-screen bg-stone-100">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <LeetcodeTrackerClient />
      </Suspense>
    </div>
  );
}
