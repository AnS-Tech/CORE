type status = "border" | "success" | "warning" | "error";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: status;
  span?: string;
}

export interface InputStyledProps {
  status: status;
}

export interface SpanStyledProps {
  status: status;
}
