"use client";

import { createContext, useContext, useState } from "react";

interface IAuthContext {
  user: any;
}

const defaultValues: IAuthContext = {
  user: null,
};

export const AuthContext = createContext({ ...defaultValues });

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
