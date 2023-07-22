"use client";

import { useEffect } from "react";
import { Button } from "src/components/Button";
import { Heading } from "src/components/Heading";
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
        <Heading>Olá, {userName}!</Heading>

        <Button onClick={signOut}>SAIR</Button>
      </div>
    </ProtectedRoute>
  );
}
