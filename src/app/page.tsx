"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const name = localStorage.getItem("user");
    const email = localStorage.getItem("email");
    setUserName(email || name);
  }, []);

  return <h1>Olá, {userName}</h1>;
}
