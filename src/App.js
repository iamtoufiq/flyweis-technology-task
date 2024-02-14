import React from "react";
// import useApi from "./hook/useApi";
import Dashboard from "./components/Dashboard";

const App = () => {
  // data:productData, productLoading, productError
  // const {
  //   data: productData,
  //   loading: productLoading,
  //   error: productError,
  // } = useApi("api/v1/product/admin/products");
  // const {
  //   data: categoryData,
  //   loading: categoryLoading,
  //   error: categoryError,
  // } = useApi("api/v1/catg");
  // const {
  //   data: userData,
  //   loading: userLoading,
  //   error: userError,
  // } = useApi("api/v1/user/all");
  // const {
  //   data: subCatData,
  //   loading: subCatLoading,
  //   error: subCatError,
  // } = useApi("api/v1/catg/subcategory/get");

  // console.log("subCatData", subCatData);
  // console.log("subCatLoading", subCatLoading);
  // console.log("subCatError", subCatError);
  // eslint-disable-next-line react/jsx-no-undef
  return (
    <div className="font-inter">
      <Dashboard />
    </div>
  );
};

export default App;
