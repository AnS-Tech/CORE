import { Logo } from "src/components/Logo";
import * as S from "./styles";
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { CiSearch } from "react-icons/ci";
import { colors } from "src/styles/tokens";
import { FaRegHeart } from "react-icons/fa6";
import { HamburgerMenu } from "src/components/MenuHamburger";
import Link from "next/link";
import { DrawerCart } from "src/components/DrawerCart";
import { useProductContext } from "src/contexts/ProductContext";
import { useEffect, useState } from "react";
import { getTotalPrice } from "src/utils/getProductContextTotals";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedState } from "src/hooks/useDebounce";
import { useRouter } from "next/navigation";

export const Middle = () => {
  const {
    cart,
    setIsCartOpen,
    setSearchValues: setSearchValueContext,
    searchValues,
  } = useProductContext();
  const [totalPrice, setTotalPrice] = useState<string>("0,00");
  const [searchValue, setSearchValue] = useDebouncedState("", 500);
  const router = useRouter();

  const handleSearch = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/search-products?search_value=${searchValue}`
    );
    const data = await response.json();
    router.push("/");
    setSearchValueContext((prevState) => ({
      ...prevState,
      products: data,
    }));
    return data;
  };

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
    setSearchValueContext((prevState) => ({
      ...prevState,
      value: e.target.value,
    }));
  };

  useQuery(["search", searchValue], handleSearch, {
    enabled: searchValue?.length > 0,
  });

  useEffect(() => {
    setSearchValue(searchValues?.value);
    setTotalPrice(getTotalPrice(cart));
  }, [cart]);

  return (
    <S.Container>
      <S.Body>
        <Logo />
        <S.SearchComponent>
          <CiSearch />
          <Input
            type="search"
            defaultValue={searchValues?.value}
            placeholder="Pesquisar"
            onChange={handleChange}
          />
          <Button size="small">Pesquisar</Button>
        </S.SearchComponent>
        <S.UserServices>
          <Link href={"/favoritos"}>
            <FaRegHeart className="icon" color={colors.vivendaColors.c5} />
          </Link>

          <S.Devider />

          <DrawerCart />

          <S.InfoCart>
            <span
              className="total-cart-price"
              onClick={() => setIsCartOpen(true)}
            >
              {totalPrice}
            </span>
          </S.InfoCart>
        </S.UserServices>
        <HamburgerMenu />
      </S.Body>
    </S.Container>
  );
};
