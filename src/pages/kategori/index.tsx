import { Link } from "react-router-dom";
import CategoryCard from "../../components/Category/CategoryCard";
import kategoriesData from "../../data/dummy/KategoriesData";

export default function KategoriesPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <Link to="/category/create">Create Category</Link>
        <div className="w-full">
          <div className="p-8 border-b border-gray-200 shadow">
            <table className="divide-y divide-gray-300 w-full" id="dataTable">
              <thead className="bg-black">
                <tr className="justify-between">
                  <th className="px-6 py-2 text-xs text-white">Kategori</th>
                  <th className="px-6 py-2 text-xs text-white w-1/12 ">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {kategoriesData.map((item, idx) => {
                  return <CategoryCard key={idx} kategoriData={item} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
