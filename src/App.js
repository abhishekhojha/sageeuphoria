import './App.css';
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
