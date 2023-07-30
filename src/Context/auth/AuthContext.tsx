import { createContext } from "react";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  active: boolean;
  admin: boolean;
}

export interface ILoginResponse {
  accessToken: string;
  user: IUser;
}

export interface IRegisterRequest {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IProps {
  auth: boolean;
  toggleAuth: () => void;
  user: IUser | null;
  login: (usernameOrEmail: string, password: string) => Promise<void>;
  register: (register: IRegisterRequest) => void;
}

export const AuthContext = createContext<IProps>({} as IProps);
