import { useEffect } from "react";
import Loading from "./loader";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../slices/ProductsSlice";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { useProductDetails } from "../hooks/useProductDetails";
const PopularDeals = () => {
  const [, setValue] = useLocalStorage("product", {});
  const dispatch = useDispatch();
  const { data, loading, err } = useSelector((state) => state.product);
  const { getdetails } = useProductDetails(data);
  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="popular-deals bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
          <h1 className="text-start font-semibold border-b-2 xs:py-1 mb-1 px-1 mx-1">
            For You
          </h1>
        <div className="products-container p-1 grid xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6">
          {loading && <Loading />}
          {err && (
            <p className="error xs:pb-4 flex justify-center items-center flex-col">
              <img
                src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                alt=""
                className="h-10 xs:h-4 sm:h-5 lg:h-8 xl:h-10"
              />
              {err}
            </p>
          )}
          {data &&
            data.map((prod) => (
              <div
                className="product border-[2px] border-blue-200 rounded-lg flex justify-center items-center flex-col shadow-md shadow-blue-200 xs:px-0.5 py-1 m-1 mb-2"
                key={prod.id}
                onClick={() => getdetails(prod.id)}
              >
                <img
                  src={prod.images[0]}
                  alt={prod.slug}
                  className="rounded-md cursor-pointer"
                />
                <p className="product-title p-0.5">
                  {prod.title.slice(0, 18) + ".."}
                </p>
                <p className="product-price text-black font-semibold">
                  Under ₹{prod.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PopularDeals;
