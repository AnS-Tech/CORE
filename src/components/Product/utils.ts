import { isEmpty } from "src/utils/isEmpty";

interface StockReturn {
  status: "Sem Estoque" | "Em Estoque";
  value: number;
  withStock: boolean;
}

export const verifyStock = (stock): StockReturn => {
  const withoutStock: StockReturn = {
    status: "Sem Estoque",
    value: 0,
    withStock: false,
  };
  if (isEmpty(stock)) {
    return withoutStock;
  }

  const stockNum = parseInt(stock);

  if (stockNum <= 0) {
    return withoutStock;
  }

  return {
    status: "Em Estoque",
    value: stockNum,
    withStock: true,
  } as StockReturn;
};
