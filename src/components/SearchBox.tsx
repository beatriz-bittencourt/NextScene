"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

interface SearchBoxProps {
}

export default function SearchBox({}: SearchBoxProps) {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  const { theme } = useTheme(); 

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  const inputClassName = theme === 'light' ? "h-12 rounded-md placeholder-gray-500 outline-none bg-zinc-100 mr-4 p-4" : "h-12 rounded-md placeholder-gray-500 outline-none bg-zinc-900 mr-4 p-4";

  return (
    <form className="flex justify-end max-w-6xl mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Procure um filme..."
        className={inputClassName} 
        value={search}
        onChange={handleSearchChange}
      />
      <button
        className="text-blue-500 disabled:text-gray-400 hover:text-blue-700 font-semibold mr-3"
        disabled={search === ''}
      >
        Procurar
      </button>
    </form>
  );
}

