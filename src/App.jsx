import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex items-center justify-between bg-white p-4 border-b border-b-[#e6ebf4] sm:px-8">
        <Link to="/">
          <img className="w-28 object-contain" src={logo} alt="Dalle logo" />
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>

      <main className="w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] px-4 py-8 sm:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
