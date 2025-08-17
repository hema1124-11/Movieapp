import { useContext } from "react";
import { Link } from "react-router-dom";
import { WatchListContext } from "../context/WatchListContext";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const { watchList } = useContext(WatchListContext);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-3xl font-extrabold text-white">
          Movie<span className="text-red-600">-App</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/watchList"
            className="relative flex items-center gap-2 text-white hover:text-red-500 transition duration-300"
          >
            <FaHeart className="text-red-500" />
            <span className="text-lg">WatchList</span>

            {watchList.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-lg">
                {watchList.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
