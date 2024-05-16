"use client";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Algo deu errado, tente novamente.</h1>
      <button
        className="mt-5 hover:text-blue-500 transition-colors duration-300"
        onClick={() => reset()}
      >
        Tentar novamente
      </button>
    </div>
  );
}