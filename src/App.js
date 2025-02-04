import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import NoteState from "./context/notes/NoteState.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";

function App() {
  return (
    <>

      <NoteState>

        <Router>
          <Navbar />

          <div className="container mt-3">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>

      </NoteState>
    </>
  );
}

export default App;
