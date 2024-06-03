import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use path="/" instead of element="/" */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
