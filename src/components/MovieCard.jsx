import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WatchListContext } from "../context/WatchListContext";

const MovieCard = ({ movie }) => {
  const { toggleWatchList, watchList } = useContext(WatchListContext);
  const inWatchList = watchList.some((m) => m.id === movie.id);

  return (
    <div className="relative group rounded-xl overflow-hidden shadow-lg bg-gray-900 transition-transform duration-300 hover:scale-[1.01] min-w-[180px] max-w-xs w-full mx-auto">
      <img
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
        alt={movie.title}
        className="w-full aspect-[2/3] object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition duration-300 p-4 flex flex-col justify-end">
        <h3 className="text-base font-semibold text-white mb-1 leading-tight truncate">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-300 mb-2">
          {movie.release_date || "Unknown"}
        </p>

        <button
          onClick={() => toggleWatchList(movie)}
          title={inWatchList ? "Remove from WatchList" : "Add to WatchList"}
          className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium bg-red-600 hover:bg-red-700 text-white rounded-full transition active:scale-95 w-max"
        >
          {inWatchList ? (
            <>
              <FaHeart className="text-sm" /> In WatchList
            </>
          ) : (
            <>
              <FaRegHeart className="text-sm" /> Add to WatchList
            </>
          )}
        </button>
      </div>

      <button
        onClick={() => toggleWatchList(movie)}
        className="absolute top-2 right-2 bg-black bg-opacity-60 text-red-500 p-2 rounded-full text-lg shadow-md active:scale-95"
        title={inWatchList ? "Remove from WatchList" : "Add to WatchList"}
      >
        {inWatchList ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default MovieCard;
