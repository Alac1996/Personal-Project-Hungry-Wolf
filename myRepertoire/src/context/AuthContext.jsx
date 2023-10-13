import { createContext, useState } from "react";
import axios from "axios";
import { addAccessToken } from "../utils/local-Storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const register = async (registerData) => {
    const res = await axios.post("/auth/register", registerData);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const login = async (loginData) => {
    const res = await axios.post("/auth/login", loginData);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };
  return (
    <AuthContext.Provider value={{ register, authUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}
