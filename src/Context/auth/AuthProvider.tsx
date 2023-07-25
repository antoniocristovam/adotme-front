import { useState } from "react";
import { AuthContext, ILoginResponse, IUser } from "./AuthContext.tsx";
import http from "../../http";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();

  const toggleAuth = () => {
    setAuth((prev) => !prev);
  };

  const login = async (usernameOrEmail: string, password: string) => {
    http
      .post("/api/v1/auth/login", { usernameOrEmail, password })
      .then(({ data }: { data: ILoginResponse }) => {
        setUser(data.user);
        navigate("/dashboard");
      });
  };

  const register = async () => {
    Promise.resolve();
  };

  return (
    <AuthContext.Provider value={{ auth, toggleAuth, register, login, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
