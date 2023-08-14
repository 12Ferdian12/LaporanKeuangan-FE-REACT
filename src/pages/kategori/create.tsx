import { ToastContainer, toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { createCategory } from "../../api/category";
import { useNavigate } from "react-router-dom";

type Inputs = {
  CategoryName: string;
};

function CreateKategori() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmitCategory: SubmitHandler<Inputs> = (data) => {
    createCategory({ kategoriName: data.CategoryName })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Data kategori berhasil ditambahkan!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          navigate("/category/");
        }
      })
      .catch(() => {
        toast.error("Data kategori gagal ditambahkan!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="border-b border-gray-900/10 pb-12">
        <div className="text-xl font-semibold  text-gray-900">
          Create Kategori
        </div>
        <form onSubmit={handleSubmit(onSubmitCategory)}>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Category Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    id="CategoryName"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    {...register("CategoryName", {
                      required: true,
                      minLength: 7,
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          {errors.CategoryName && (
            <div className={"text-red-700"}>This field is required</div>
          )}

          <button className="bg-amber-200 p-1 rounded mt-2" type="submit">
            Tambah
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default CreateKategori;
