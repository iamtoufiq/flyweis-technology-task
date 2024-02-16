import { FaRegTrashAlt } from "react-icons/fa";
import { TbPencilMinus } from "react-icons/tb";

const Table = ({ categories }) => {
  return (
    <div className="relative overflow-x-auto example">
      {categories?.length === 0 ? (
        <h2 className="text-red-600 text-2xl text-center font-bold">
          No User Found
        </h2>
      ) : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white text-black border-b border-t">
              <th
                scope="col"
                className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 text-start"
              >
                S.no
              </th>
              <th
                scope="col"
                className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
              >
                Parent Category
              </th>
              <th
                scope="col"
                className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
              ></th>
            </tr>
          </thead>
          <tbody className="">
            {categories?.map((category, index) => {
              return (
                <tr className="bg-white text-black border-b" key={index}>
                  <td className="px-6 py-4 font-medium whitespace-nowrap bg-white text-black">
                    #{index + 1}
                  </td>
                  <td
                    className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 w-32 h-32`}
                  >
                    <img src={category.image} alt="" />
                  </td>
                  <td className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 `}>
                    {category?.subCategory ? category?.subCategory : "-"}
                  </td>
                  <td
                    className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 ${
                      !category?.parentCategory?.name &&
                      "text-center text-[20px]"
                    }`}
                  >
                    {category?.parentCategory
                      ? category?.parentCategory?.name
                      : "-"}
                  </td>
                  <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 ">
                    <div className="flex items-center gap-2 md:gap-3">
                      <span className="border p-[6px] rounded-full text-[#E50505] bg-[#FACDCD]">
                        <FaRegTrashAlt size={20} />
                      </span>

                      <span className="border p-[6px] rounded-full text-[#047DCE] bg-[#CDE5F5]">
                        <TbPencilMinus size={20} />
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
