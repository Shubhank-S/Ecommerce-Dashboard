import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import Register from "./pages/Register/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProtectedRoutes from "./auth/ProtectedRoutes";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
