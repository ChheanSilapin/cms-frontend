import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../services/authService";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        // Fetch fresh user data from backend
        const userData = await authService.me();
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (username, password) => {
    const data = await authService.login({ username, password });
    localStorage.setItem("token", data.access_token);
    try {
      const userData = await authService.me();
      setUser(userData);
    } catch (error) {
      console.error("Failed to fetch user after login:", error);
      setUser(data.user || { username });
    }
    return data;
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("token");
      setUser(null);
      window.location.href = "/login";
    }
  };

  const hasPermission = (permission) => {
    if (!permission) return true;
    return user?.permissions?.includes(permission) || false;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
}
