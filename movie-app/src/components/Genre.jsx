const Genre = ({ genreList, setSelectedGenre }) => {
  return (
    <select
      className="px-4 py-2 rounded-lg bg-gray-800 bg-opacity-80 text-white border border-gray-600 shadow-md backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
      onChange={(e) => setSelectedGenre(e.target.value)}
    >
      <option value="">All Genres</option>
      {genreList.map((genre) => (
        <option value={genre.id} key={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default Genre;
