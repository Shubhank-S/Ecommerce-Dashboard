import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoutes() {
  //   const auth = localStorage.getItem("users");
  const { auth } = useContext(AuthContext);

  return auth ? <Outlet /> : <Navigate to="/register" />;
}

export default ProtectedRoutes;
