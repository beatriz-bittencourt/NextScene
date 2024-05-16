import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

interface Result {
  id: number;
  backdrop_path?: string;
  poster_path?: string;
  title?: string;
  name?: string;
  overview?: string;
  release_date?: string;
  first_air_date?: string;
  vote_count?: number;
}

interface CardProps {
  result: Result;
}

const formatarData = (data: string | undefined) => {
  if (!data) return '';
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
};

export default function Card({ result }: CardProps) {
  return (
    <div className="group cursor-pointer hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 m-3 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.poster_path || result.backdrop_path}`}
          alt="Image"
          layout="responsive"
          width={100}
          height={150}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 "
        />
        <div className="p-2">
          <h2 className="text-md font-bold ">{result.title || result.name}</h2>
          <p className="line-clamp-2 text-sm">{result.overview}</p> 
          <p className="flex items-center mt-3 text-sm">
            {formatarData(result.release_date || result.first_air_date)}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
