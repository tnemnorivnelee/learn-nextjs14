export const metadata = {
  title: 'Home',
};

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log('im fecthing');
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      <h1>HELLO</h1>
      {JSON.stringify(movies)}
    </div>
  );
}
