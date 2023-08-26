import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/about" />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
