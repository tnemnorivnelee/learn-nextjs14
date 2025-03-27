import Link from 'next/link';

export const metadata = {
  title: 'Home',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log('im fecthing');
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
