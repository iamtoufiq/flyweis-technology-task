import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { MdDownload } from "react-icons/md";
import { TbPencilMinus } from "react-icons/tb";
const Table = ({ products }) => {
  return (
    <div className="relative overflow-x-auto">
      {products?.length === 0 ? (
        <h2 className="text-red-600 text-2xl text-center font-bold">
          No Product Found
        </h2>
      ) : (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white text-black border-b ">
              <th
                scope="col"
                className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 text-center"
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
                MRP
              </th>
              <th
                scope="col"
                className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
              >
                Stock
              </th>
              <th
                scope="col"
                className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
              >
                Created
              </th>
              <th
                scope="col"
                className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
              >
                Invoice
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.length > 0 &&
              products.map((product, index) => {
                return (
                  <tr
                    className="bg-white text-black border-b"
                    key={product?._id}
                  >
                    <td className="px-6 py-4 font-medium whitespace-nowrap bg-white text-black">
                      #{index + 1}
                    </td>
                    <td
                      className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 `}
                    >
                      {product?.images?.[0]?.img ? (
                        <img
                          src={product?.images?.[0]?.img}
                          alt="ProductImage"
                        />
                      ) : (
                        "-"
                      )}
                    </td>

                    <td
                      className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 ${
                        !product.name && "text-center text-[20px]"
                      }`}
                    >
                      {product?.name ? product.name : "-"}
                    </td>
                    <td
                      className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 ${
                        !product.price && "text-center text-[20px]"
                      }`}
                    >
                      &#x20B9;{product.price ? product.price : "-"}/-
                    </td>
                    <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">
                      {product?.Stock ? product.Stock : 0}
                    </td>
                    <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">
                      {new Date(product?.createdAt)
                        .toISOString()
                        .substring(0, 10)}
                    </td>
                    <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 ">
                      <MdDownload
                        size={26}
                        className="text-[#CEA204] bg-[#f5eccd] rounded-full p-1 cursor-pointer"
                      />
                    </td>
                    <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4  ">
                      <div className="flex gap-1 md:gap-2">
                        <TbPencilMinus
                          size={26}
                          className=" rounded-full p-1 cursor-pointer text-[#047DCE] bg-[#CDE5F5]"
                        />{" "}
                        <IoEyeSharp
                          size={26}
                          className="text-[#CEA204] bg-[#f5eccd] rounded-full p-1 cursor-pointer"
                        />
                        <FaRegTrashAlt
                          size={26}
                          className=" rounded-full p-1 cursor-pointer text-[#E50505] bg-[#FACDCD]"
                        />
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
