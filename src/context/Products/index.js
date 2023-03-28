import { createContext, useState } from "react";
import useApi from "../../hooks/useApi";
import { baseUrl } from "../../utils/constants";
export const ProductContext = createContext();
const Products = ({ children }) => {
  const { data, isLoading, isError } = useApi(baseUrl);
  return (
    <ProductContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Products;
