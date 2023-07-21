import { useEffect } from "react";
import { LoadingPage } from "../LoadingPage";
import { useRouter } from "next/navigation";
import { useAuthContext } from "src/contexts/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);

  return !!user ? children : <LoadingPage />;
};

export default ProtectedRoute;
