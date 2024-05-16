import Image from 'next/image';
import React from 'react';
import Genres from '@/components/Genres';
import { format, isValid } from 'date-fns'; // Importa a função isValid de date-fns

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=pt-BR`
  );
  const movie = await res.json();

  // Função para formatar a data no padrão brasileiro
  const formatarData = (data: string) => {
    const parsedDate = new Date(data);
    if (isValid(parsedDate)) {
      return format(parsedDate, 'dd/MM/yyyy');
    } else {
      return 'Data inválida';
    }
  };

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          alt='Poster do filme'
          className="rounded-lg"
          style={{ maxWidth: '100%', height: '100%' }}
        />
        <div className="p-2 text-justify">
          <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
          <p className='text-md mb-3'>{movie.overview}</p>
          
          <div className=' mt-7'>
          <div className="mb-3">
            {movie.genres && movie.genres.length > 0 ? (
              <div className="flex flex-wrap">
                <span className="font-bold mr-1 ">Gênero:</span>
                {movie.genres.map((genre: any, index: number) => (
                  <Genres key={index} index={index} name={genre.name} length={movie.genres.length} />
                ))}
              </div>
            ) : (
              <span>Informações de gênero indisponíveis</span>
            )}
          </div>      
          <p className='mb-3'>
            <span className='font-bold mr-1'>Data de lançamento: </span>
            {formatarData(movie.release_date || movie.first_air_date)}
          </p>
          <p>
            <span className='font-bold mr-1'>Avaliações: </span>
            {movie.vote_count}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
