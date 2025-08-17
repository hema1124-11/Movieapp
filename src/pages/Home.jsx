import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import { api_key } from "../App";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${api_key}`;
    if (search) {
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${api_key}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results || []);
        setLoading(false);
      });
  }, [page, search]);

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-full max-w-xl z-50 px-4">
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Movies..."
          className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-70 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 backdrop-blur-md"
        />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      {!loading && (
        <div className="flex justify-center gap-4 mt-10">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className={`px-6 py-2 rounded-lg font-semibold transition border ${
              page === 1
                ? "bg-gray-700 text-gray-400 cursor-not-allowed border-gray-700"
                : "bg-transparent text-white border-gray-500 hover:bg-gray-800"
            }`}
          >
            Previous
          </button>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition shadow"
          >
            Next
          </button>
        </div>
      )}
      <br />
    </div>
  );
};

export default Home;
