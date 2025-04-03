import { Suspense } from 'react'; //
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      {/* Suspense 는 React 18 부터 도입된 기능으로, 비동기 컴포넌트를 렌더링할 때 로딩 상태를 처리하는데 사용됩니다.
      MovieInfo와 MovieVideos 컴포넌트가 비동기적으로 데이터를 가져오는 동안 로딩 상태를 표시합니다. */}
      <Suspense fallback={<h2>Loading movie info</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie videos</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
