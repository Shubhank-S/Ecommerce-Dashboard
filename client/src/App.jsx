import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Header from "./components/Header/Header";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
