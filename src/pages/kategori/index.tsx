import { Link } from "react-router-dom";
import CategoryCard from "../../components/Category/CategoryCard";
import { useEffect, useState } from "react";
import { KategoriData } from "../../types/api/kategori";

export default function KategoriesPage() {
  const [categoriesData, setCategoriesData] = useState<KategoriData[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("http://localhost:3000/categories"); // Replace with your API URL
        const data = await response.json();
        setCategoriesData(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

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
                {categoriesData.map((item, idx) => {
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
