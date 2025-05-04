import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`Fetching movie : ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Error fetching videos");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
