import { useState, useEffect } from "react";
import { getCategories } from "../services/getProducts";
import Loading from "./loader";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalstorage";
const ExploreCategories = () => {
  const [categoryitem, setcategoryitem] = useState();
  const [error, seterror] = useState();
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const [, setValue] = useLocalStorage("category", {});
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        let category = await getCategories();
        setcategoryitem(category.data.splice(0, 5));
      } catch (err) {
        seterror("Something went wrong");
      } finally {
        setloading(false);
      }
    };
    fetchCategory();
  }, []);
  const getCategoriesProduct = (id,name) => {
    setValue({id,name});
    navigate("/categories/products/");
  };
  return (
    <> 
      <h1 className="text-center m-2 font-semibold xs:text-sm md:text-md lg:text-2xl">Explore Categories</h1>
      <section className="category-section grid xs:grid-cols-3 lg:grid-cols-4 bg-white xs:rounded-3xl shadow-md shadow-gray-400 border border-gray-400 p-2 m-1 md:m-1.5 lg:m-3" id="category">
        {loading && <div className="flex items-center">{<Loading />}</div>}
        {error && (
          <p className="error py-3 flex justify-center items-center flex-col">
            <img
              src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
              alt=""
              className="xs:h-4 sm:h-5 lg:h-8 xl:h-10"
            />
            {error}
          </p>
        )}
        {categoryitem &&
          categoryitem.map((categorytype) => (
            <div
              className="explore-categories-wrapper py-3 xs:px-3 sm:px-3.5 md:px-6 lg:px-8 xl:px-14"
              key={categoryitem.id}
            >
              <div
                className="explore-categories flex flex-col items-center"
                key={categorytype.id}
                onClick={() => getCategoriesProduct(categorytype.id,categorytype.name)}
              >
                <img
                  src={categorytype.image}
                  alt={categoryitem.slug}
                  className="cursor-pointer transition-all hover:shadow-gray-200 rounded-3xl hover:scale-105"
                />
                <p className="mt-2 font-semibold text-sm">{categorytype.name}</p>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default ExploreCategories;
