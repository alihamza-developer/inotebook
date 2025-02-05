import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import NoteState from "./context/notes/NoteState.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Login from './components/Login.js';
import Register from './components/Register.js';
import Alert from './components/Alert.js';
import { useState } from "react";




function App() {

  const [alert, setAlertData] = useState(null),
    setAlert = (message, type) => {
      setAlertData({
        message,
        type
      });

      setTimeout(() => {
        setAlertData(null);
      }, 1000);
    }


  return (
    <>

      <NoteState>

        <Router>
          <Navbar />

          {alert && <Alert type={alert.type} message={alert.message} />}

          <div className="container mt-3">
            <Routes>
              <Route exact path="/" element={<Home setAlert={setAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login setAlert={setAlert} />} />
              <Route exact path="/register" element={<Register setAlert={setAlert} />} />
            </Routes>
          </div>
        </Router>

      </NoteState>
    </>
  );
}

export default App;
