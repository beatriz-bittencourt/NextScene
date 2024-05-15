// SearchBox.tsx
"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBoxProps {
  // Add any props you might need here
}

export default function SearchBox({}: SearchBoxProps) {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  const searchInput = (
    <input
      type="text"
      placeholder="Procure um filme..."
      className="h-12 rounded-md placeholder-gray-500 outline-none bg-transparent"
      value={search}
      onChange={handleSearchChange}
    />
  );

  return (
    <form
      className="flex justify-end max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      {searchInput}
      <button
        className="text-blue-500 disabled:text-gray-400 hover:text-blue-700 font-semibold"
        disabled={search === ''}
      >
        Procurar
      </button>
    </form>
  );
}