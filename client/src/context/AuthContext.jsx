import { createContext } from "react";

const AuthContext = createContext();
function AuthProvider({ children }) {
  const auth = localStorage.getItem("users");
  return <AuthContext.Provider value={auth}> {children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
