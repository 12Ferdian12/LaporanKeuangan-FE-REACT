import { KategoriData } from "../../types/api/kategori";

import Button from "../Helpers/Button";

import { Link } from "react-router-dom";

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
      <td className="">
        <Link to={"#"}>
          <Button buttonType="primary">Show</Button>
        </Link>
      </td>
    </tr>
  );
}

export default CategoryCard;
