import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    // document.getElementById("display").style.display = "block";
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f2327";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils | Home | Dark Mode"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils | Home | Light Mode"
    }
  }

  return (
    <>
      {/* // <Navbar title="TextUtils" about="About" />
    // <Navbar /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggle} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
        <Route exact path="/" element={<TextArea heading="Enter Text" showAlert={showAlert} mode={mode} />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;
