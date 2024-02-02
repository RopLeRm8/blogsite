import { createContext, useContext } from "react";

export interface IUser {
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const AuthContext = createContext<{ user: IUser | undefined }>({
  user: undefined,
});

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("FATAL ERROR! Failed to retrieve user info!");
  }
  return context;
};

export default AuthContext;
