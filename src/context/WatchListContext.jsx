import { createContext, useEffect, useState } from "react";
import { api_key } from "../App";

// eslint-disable-next-line react-refresh/only-export-components
export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setGenreList(data.genres || []));
  }, []);

  const toggleWatchList = (movie) => {
    const index = watchList.findIndex((m) => m.id === movie.id);

    if (index === -1) {
      setWatchList([...watchList, movie]);
    } else {
      setWatchList([
        ...watchList.slice(0, index),
        ...watchList.slice(index + 1),
      ]);
    }
  };
  console.log("watchlist", watchList);
  return (
    <WatchListContext.Provider
      value={{ watchList, toggleWatchList, genreList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
