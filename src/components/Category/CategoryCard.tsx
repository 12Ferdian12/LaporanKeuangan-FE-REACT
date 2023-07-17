function CategoryCard() {
  return (
    <tr>
      <td>
        <div className=" w-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className=" flex justify-between pr-[20px]">
            <h5 className="text-white px-5 font-bold">Id: 1</h5>
            <p className="mb-3 px-5 font-normal text-gray-700 dark:text-gray-400">
              created: 17-07-2023
            </p>
          </div>
          <h5 className="mb-2 px-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Category
          </h5>
        </div>
      </td>
      <td className="border-4 border-red-900">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>{" "}
        </a>{" "}
      </td>
    </tr>
  );
}

export default CategoryCard;