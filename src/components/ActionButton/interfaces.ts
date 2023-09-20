type status = "cartIcon" | "wishList" | "quickView";

export interface ActionButtonProps {
  cartContainerColor?: string;
  status?: status;
}

export interface CartContainerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  cartContainerColor?: string;
}
