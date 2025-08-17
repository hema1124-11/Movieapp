import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import { WatchListProvider } from "./context/WatchListContext";

export const api_key = "676612bb00a0e3cbd7c65ff9c8c6ef92";

function App() {
  return (
    <WatchListProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </WatchListProvider>
  );
}

export default App;
