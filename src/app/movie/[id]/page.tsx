import Image from 'next/image';
import React from 'react';

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx:auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          alt='Poster do filme'
          className="rounded-lg"
          style={{ maxWidth: '100%', height: '100%' }}
        />
        <div className="p-2">
          <h2>{movie.title || movie.name}</h2>
          <p>{movie.overview}</p>
          <p>{movie.release_date || movie.first_air_date}</p>
          <p>{movie.vote_count}</p>
        </div>
      </div>
    </div>
  );
}