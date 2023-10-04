type size = "small" | "medium" | "large";
export interface CartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  cartContainerColor?: string;
  children?: React.ReactNode;
  size?: size;
}
