import React, { createContext, useState } from "react";

export const AuthContext = createContext();

interface IProps {
  children: any;
}

function AuthProvider({ children }: IProps) {
  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
