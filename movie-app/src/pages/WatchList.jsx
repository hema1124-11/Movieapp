import { useContext, useState } from "react";
import Genre from "../components/Genre";
import { WatchListContext } from "../context/WatchListContext";
import MovieCard from "../components/MovieCard";

const WatchList = () => {
  const { watchList, genreList } = useContext(WatchListContext);

  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredMovies = watchList
    .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
    .filter((movie) => {
      return (
        !selectedGenre || movie?.genre_ids?.includes(Number(selectedGenre))
      );
    });

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-full max-w-xl z-50 px-4">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search WatchList..."
          className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 backdrop-blur-md"
        />
      </div>

      <div className="mt-24 flex justify-center">
        <Genre genreList={genreList} setSelectedGenre={setSelectedGenre} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 mt-12">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 mt-12 text-lg">
            No movies found.
          </p>
        )}
      </div>
    </div>
  );
};

export default WatchList;
