import React from "react";
import { MdDownload } from "react-icons/md";
import CustomButton from "../Button";
const Table = ({ allUsers }) => {
  return (
    <div className="relative overflow-x-auto ">
      {allUsers?.length === 0 ? (
        <h2 className="text-red-600 text-2xl text-center font-bold">
          No User Found
        </h2>
      ) : (
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
              <th
                scope="col"
                className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4"
              ></th>
            </tr>
          </thead>
          <tbody className="">
            {allUsers?.map((user, index) => {
              return (
                <tr className="bg-white text-black border-b" key={index}>
                  <td className="px-6 py-4 font-medium whitespace-nowrap bg-white text-black">
                    # {index + 1}
                  </td>
                  <td
                    className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 ${
                      !user?.name && "text-[20px] text-start"
                    }`}
                  >
                    {user?.name ? user?.name : "-"}
                  </td>

                  <td
                    className={`px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 ${
                      !user?.phone && "text-start text-[20px]"
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
                    <CustomButton
                      label="Assign"
                      paddingY="py-1"
                      paddingX="px-2"
                    />
                  </td>
                  <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 capitalize">
                    <CustomButton
                      label="Accept"
                      paddingY="py-1"
                      paddingX="px-2"
                    />
                  </td>
                  <td className="px-2 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 capitalize ">
                    <MdDownload
                      size={26}
                      className="text-[#CEA204] bg-[#f5eccd] rounded-full p-1 cursor-pointer"
                    />
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
