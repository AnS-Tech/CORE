import { ReactNode } from "react";

export interface TooltipProps {
  text: string;
  children: ReactNode;
  delay?: number; // Adicionando uma propriedade opcional para o atraso
}

export interface TooltipContentProps {
  isVisible: boolean;
}
