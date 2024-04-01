import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import {initLightboxJS} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

const Gallery = lazy(() => import("./pages/Gallery"));

function App() {
  useEffect(() => {
    initLightboxJS("Insert your License Key here", "Insert plan type here");
  }, []);
  return (
    <Suspense fallback={<>Loading...</>} className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
