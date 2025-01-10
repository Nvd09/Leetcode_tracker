import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b bg-stone-200">
      <h1 className="text-2xl font-semibold">Leetcode Tracker</h1>
      <Link href="/account" className="text-gray-600 hover:text-gray-900">
        My Account
      </Link>
    </header>
  );
}
