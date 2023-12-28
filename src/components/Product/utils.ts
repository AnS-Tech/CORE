import { isEmpty } from "src/utils/isEmpty";

export const verifyStock = (stock) => {
  const withoutStock = {
    status: "SemEstoque",
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
    status: "EmEstoque",
    value: stockNum,
    withStock: true,
  };
};
