"use client";

import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebaseApp from "src/libs/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import { LoadingPage } from "src/components/LoadingPage";
import { useRouter } from "next/navigation";

const auth = getAuth(firebaseApp);

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
