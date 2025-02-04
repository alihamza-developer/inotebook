import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";

function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />

        </Routes>



      </Router>
    </>
  );
}

export default App;
