import { useEffect, useState } from "react";
import { ToastContainer } from "./styles";
import { ToastProps } from "./interfaces";

export const Toast: React.FC<ToastProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ToastContainer style={{ opacity: isVisible ? 1 : 0 }}>
      {message}
    </ToastContainer>
  );
};
