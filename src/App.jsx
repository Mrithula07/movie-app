import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // rename your current App content to Home.jsx
import MovieDetails from "./pages/MovieDetail"; // new page for detailed view

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
};

export default App;
