import { createContext } from "react";

const AuthContext = createContext();
function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={"Shubhank"}> {children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
