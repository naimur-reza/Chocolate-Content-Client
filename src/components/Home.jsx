import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFacebook, FaPen, FaTrash } from "react-icons/fa";
const Home = () => {
  const data = useLoaderData();
  console.log(data);
  const [chocolates, setChocolates] = useState(data);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/chocolates/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = chocolates.filter((chocolate) => chocolate._id != id);
        setChocolates(remaining);
      });
  };

  return (
    <div className="p-5 lg:p-0">
      <Link to={"/addChocolate"}>
        <li className="list-none rounded bg-gray-300 text-white  font-semibold  px-2 py-1 w-fit">
          New Chocolate
        </li>
      </Link>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Chocolate name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Country/REgion
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {chocolates.map((chocolate) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-6 py-4">
                    <img
                      className="w-14 rounded-lg h-13"
                      src={chocolate?.img}
                      alt="chocolates"
                    />
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {chocolate?.name}
                  </th>
                  <td className="px-6 py-4">{chocolate?.category}</td>
                  <td className="px-6 py-4">{chocolate?.country}</td>
                  <td className="px-6 py-4 flex mt-3 gap-3 ">
                    <Link to={`/updateChocolate/${chocolate?._id}`}>
                      <FaPen className="cursor-pointer" />
                    </Link>

                    <FaTrash
                      onClick={() => handleDelete(chocolate?._id)}
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
