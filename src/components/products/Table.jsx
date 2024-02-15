import React from "react";

const Table = () => {
  return (
    <div className="relative overflow-x-auto">
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
          <tr className="bg-white text-black border-b">
            <td className="px-6 py-4 font-medium whitespace-nowrap bg-white text-black">
              #
            </td>
            <td className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 `}>
              safd
            </td>

            <td className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 `}>
              asdf
            </td>
            <td className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 `}>
              asfda
            </td>
            <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">
              Prepaid
            </td>
            <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">adfa</td>
            <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 font-bold text-green-500">
              Active
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
