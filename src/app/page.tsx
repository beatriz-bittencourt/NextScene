import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

interface Params {
  genre?: string;
}

export default async function Page({ searchParams }: { searchParams: Params }) {
  const genre = searchParams.genre || 'trending';

  let apiUrl = '';
  if (genre === 'top_rated') {
    apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  } else {
    apiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`;
  }

  const res = await fetch(apiUrl);
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const results = data.results;

  return (
    <div className="">
      <Results results={results} />
    </div>
  );
}