export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  textColor?: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  loading?: boolean;
  bordered?: boolean;
}

export interface ButtonStyledProps {
  textColor?: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  bordered?: boolean;
}
