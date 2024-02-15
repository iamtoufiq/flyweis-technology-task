import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import useMultipleApi from "../hook/useMultipleApi";

const initlilValue = {
  products: [],
  categories: [],
  subCategories: [],
  users: [],
  unconfirmedOrders: [],
};

const dataContext = createContext();

const ContextProvider = ({ children }) => {
  const endpoints = useMemo(
    () => [
      "api/v1/product/admin/products",
      "api/v1/catg",
      "api/v1/catg/subcategory/get",
      "api/v1/user/all",
      "api/v1/order/all/user/orders",
    ],
    []
  );

  const { data, loading, error } = useMultipleApi(endpoints);

  const [contextData, setContextData] = useState(initlilValue);

  useEffect(() => {
    if (!loading && !error) {
      const newContextData = {
        products: data[0]?.value?.products || [],
        categories: data[1]?.value?.categories || [],
        subCategories: data[2]?.value || [],
        users: data[3]?.value?.users || [],
        unconfirmedOrders: data[4]?.value?.unconfirmedOrders || [],
      };
      setContextData(newContextData);
    }
  }, [data, loading, error]);

  return (
    <dataContext.Provider value={{ ...contextData, loading }}>
      {children}
    </dataContext.Provider>
  );
};

export const useGlobalHook = () => {
  return useContext(dataContext);
};

export default ContextProvider;
