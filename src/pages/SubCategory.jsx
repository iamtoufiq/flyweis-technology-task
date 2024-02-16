import { useGlobalHook } from "../context/ContextProvider";
import Header from "../components/mainCategory/Header";
import Loader from "../components/Loader";
import Table from "../components/subCategory/Table";

const SubCategory = () => {
  const { loading, subCategories } = useGlobalHook();
  if (loading) {
    return <Loader />;
  }
  return (
    <div className=" mx:1 md:mx-3 bg-white shadow-md pt-4 py-6 px-4 flex flex-col gap-3 h-screen">
      <Header title="All Sub-Category's" buttonText="Add Sub-Category" />
      <Table categories={subCategories} />
    </div>
  );
};

export default SubCategory;
