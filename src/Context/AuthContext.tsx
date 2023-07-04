import { createContext, useState } from "react";

type IProps = {
  auth: boolean;
  toggleAuth: () => void;
};
//Função que constroe o Provider e também permite Consumir os Dados Globais
export const AuthContext = createContext<IProps>({} as IProps);

//Componente Provider para passar os valores para os Childrens

function AuthProvider({ children }: { children: JSX.Element }) {
  const [auth, setAuth] = useState(false);

  const toggleAuth = () => {
    setAuth((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ auth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
