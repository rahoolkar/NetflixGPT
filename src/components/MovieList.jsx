import MovieCard from "./MovieCard";

function MovieList({ title, data }) {
  if (data === null) {
    return;
  }
  return (
    <div>
      <h1 className="text-3xl ml-2 font-bold text-white">{title}</h1>
      <div className="mt-4 overflow-x-auto whitespace-nowrap">
        {data.map((movie) => {
          return <MovieCard key={movie.id} movieData={movie}></MovieCard>;
        })}
      </div>
    </div>
  );
}

export default MovieList;
