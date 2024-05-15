import Results from "@/components/Results";

interface SearchPageProps {
  params: {
    searchBar: string;
  };
}

interface MovieResult {
  id: number;
  original_title: string;
}

export default async function SearchPage({ params }: SearchPageProps) {
  const { searchBar } = params;
  const apiKey = process.env.API_KEY;

  const fetchSearchResults = async (searchBar: string) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchBar}&language=pt-BR&page=1&include_adult=false`
      );
      return res.json();
    } catch (error) {
      console.error("Erro ao buscar os resultados de pesquisa", error);
      return null;
    }
  };

  const data = await fetchSearchResults(searchBar);
  if (!data) {
    return <div>Error fetching search results</div>;
  }

  const results = data.results as MovieResult[];

  return (
    <div>
      {results && results.length === 0 ? (
        <h1 className="text-center pt-6">Não foram encontrados <br/>
        resultados para essa busca.</h1>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
}