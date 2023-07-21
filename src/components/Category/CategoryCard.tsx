import { KategoriData } from "../../types/api/kategori";

interface CategoryCardProps {
  kategoriData: KategoriData; // Replace 'KategoriData' with the actual type of your data
}

function CategoryCard(props: CategoryCardProps) {
  return (
    <tr>
      <td>
        <div className=" w-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className=" flex justify-between pr-[20px]">
            <h5 className="text-white px-5 font-bold">
              Id: {props.kategoriData.id}
            </h5>
            <p className="mb-3 px-5 font-normal text-gray-700 dark:text-gray-400">
              created: {props.kategoriData.createdAt}
            </p>
          </div>
          <h5 className="mb-2 px-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.kategoriData.kategoriName}
          </h5>
        </div>
      </td>
      <td className="border-4 border-red-900">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read
        </a>{" "}
      </td>
    </tr>
  );
}

export default CategoryCard;
