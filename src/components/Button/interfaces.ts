type size = "small" | "medium" | "large";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  textColor?: string;
  backgroundColor?: string;
  size?: size;
  loading?: boolean;
  bordered?: boolean;
}

export interface ButtonStyledProps {
  textColor: string;
  backgroundColor: string;
  size: size;
  bordered: boolean;
}
