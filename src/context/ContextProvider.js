import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import useMultipleApi from "../hook/useMultipleApi";

const initialValue = {
  products: [],
  originalProducts: [],
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

  const [contextData, setContextData] = useState(initialValue);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

      // If there is a search term, filter the data
      if (searchTerm) {
        const filteredResults = filterData(newContextData, searchTerm);
        setSearchResults(filteredResults);
      }
    }
  }, [data, loading, error, searchTerm]);

  const filterData = (data, term) => {
    // Implement your custom search logic here
    // For simplicity, this example searches in user names
    return data.users.filter(
      (user) =>
        user &&
        user.name &&
        user.name.toLowerCase().includes(term.toLowerCase())
    );
  };

  const search = (term) => {
    // Update the search term state, which will trigger the useEffect
    setSearchTerm(term);
  };

  return (
    <dataContext.Provider
      value={{ ...contextData, loading, searchResults, search }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useGlobalHook = () => {
  return useContext(dataContext);
};

export default ContextProvider;
