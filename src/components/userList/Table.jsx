import React from "react";
import CustomButton from "../Button";

const Table = ({ allUsers }) => {
  console.log("allUsers", allUsers);
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white text-black border-b border-t">
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
              Name
            </th>
            <th
              scope="col"
              className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
            >
              Phone Number
            </th>
            <th
              scope="col"
              className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
            >
              Payment mode
            </th>
            <th
              scope="col"
              className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
            >
              Created At
            </th>
            <th
              scope="col"
              className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
            >
              Delivery Boy
            </th>
            <th
              scope="col"
              className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
            >
              Add Change Request
            </th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user, index) => {
            return (
              <tr className="bg-white text-black border-b" key={index}>
                <td className="px-6 py-4 font-medium whitespace-nowrap bg-white text-black">
                  # {index + 1}
                </td>
                <td
                  className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 ${
                    !user?.name && "text-center text-[20px]"
                  }`}
                >
                  {user?.name ? user?.name : "-"}
                </td>

                <td
                  className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 ${
                    !user?.phone && "text-center text-[20px]"
                  }`}
                >
                  {user?.phone ? user?.phone : "-"}
                </td>
                <td className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 `}>
                  {user?.email ? user?.email : "imtoufiq@gmail.com"}
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">
                  Prepaid
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">
                  {new Date(user.createdAt).toISOString().substring(0, 10)}
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 font-bold text-green-500">
                  Active
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4">
                  Suraj
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 capitalize">
                  <CustomButton label="Accept" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
