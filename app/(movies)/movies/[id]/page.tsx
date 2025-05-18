import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: Promise<{ id: string; }>;
}

export async function generateMetadata({ params }: IParams) {
  const resolvedParams = await params;
  const movie = await getMovie(resolvedParams.id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params }: IParams) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}