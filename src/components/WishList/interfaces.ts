export interface WishListContainerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  wishSelected?: boolean;
}
