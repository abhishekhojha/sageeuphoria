import {  useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimeBtn from "./components/AnimeBtn";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <AnimeBtn />
        <Footer />
      </BrowserRouter>
  );
}

export default App;