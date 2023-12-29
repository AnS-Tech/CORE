import { BsFillHouseFill } from "react-icons/bs";
import { FaPeopleLine } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { colors } from "src/styles/tokens";

export const menuOptions = [
  {
    label: "Inicio",
    path: "/",
    icon: <BsFillHouseFill color={colors.vivendaColors.c7} />,
  },
  {
    label: "Sobre nós",
    path: "/sobre",
    icon: <FaPeopleLine color={colors.vivendaColors.c2} />,
  },
  {
    label: "Favoritos",
    path: "/favoritos",
    icon: <FaHeart color={colors.vivendaColors.c5} />,
  },
  {
    label: "Carrinho",
    path: "/carrinho",
    icon: <BsCartFill color={colors.vivendaColors.c3} />,
  },
];
