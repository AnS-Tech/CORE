"use client";

import { useEffect } from "react";
import ProtectedRoute from "src/components/ProtectedRoutes";
import { useAuthContext } from "src/contexts/AuthContext";
import { useAuth } from "src/hooks/useAuth";

export default function Page() {
  const { user } = useAuthContext();
  const { signOut } = useAuth();
  const userName = user?.displayName ?? user?.email ?? "User";

  return (
    <ProtectedRoute>
      <div>
        <h1>Olá, {userName}!</h1>

        <button
          onClick={signOut}
          style={{
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "red",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          SAIR
        </button>
      </div>
    </ProtectedRoute>
  );
}
