import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoPlay({ id }) {
  useMovieTrailer(id);

  const trailerVideo = useSelector((store) => {
    return store?.trailer?.trailerVideo;
  });

  if (trailerVideo === null) {
    return <h1>Shimmer ui</h1>;
  }

  console.log(trailerVideo);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo[0].key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoPlay;
