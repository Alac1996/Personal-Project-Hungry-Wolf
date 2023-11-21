import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-Storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (getAccessToken()) {
      axios.get("/auth/me").then((res) => {
        setAuthUser(res.data.user);
      });
    }
  }, []);

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

  const updateUser = async (userId, updatedUserInfo) => {
    console.log(updatedUserInfo);
    try {
      const response = await axios.put(
        `/auth/editUser/${userId}`,
        updatedUserInfo
      );
      setAuthUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ register, authUser, login, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
