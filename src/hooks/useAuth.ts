"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { api } from "src/libs/api";

interface Credentials {
  email: string;
  password: string;
}

export const useAuth = () => {
  const router = useRouter();
  const signIn = useCallback(async (credentials: Credentials) => {
    const { email, password } = credentials;

    return await api
      .post("public/auth/login", {
        email,
        password,
      })
      .then((res) => {
        const { data } = res;

        localStorage.setItem(
          "token",
          data.res.user.stsTokenManager.accessToken
        );
        localStorage.setItem("name", data.res.user.providerData[0].displayName);
        localStorage.setItem("email", data.res.user.providerData[0].email);
        router.push("/");
        return res;
      })
      .catch((err) => {
        alert(err);
        return err;
      });
  }, []);

  const signUp = useCallback(async (credentials: Credentials) => {
    const { email, password } = credentials;

    return await api
      .post("public/auth/signin", {
        email,
        password,
      })
      .then((res) => {
        const { data } = res;
        const { user } = data;

        localStorage.setItem("token", user.stsTokenManager.accessToken);
        router.push("/");
        return res;
      })
      .catch((err) => {
        alert(err);
        return err;
      });
  }, []);

  return {
    signIn,
    signUp,
  };
};
