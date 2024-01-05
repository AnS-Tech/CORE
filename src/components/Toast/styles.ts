import { colors } from "src/styles/tokens";
import styled from "styled-components";

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${colors.vivendaColors.c7};
  color: ${colors.grayScale100};
  padding: 10px 20px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;
