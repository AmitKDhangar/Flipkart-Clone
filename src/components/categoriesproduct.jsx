import { useEffect } from "react";
import { FetchCategories } from "../slices/CategorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useProductDetails } from "../hooks/useProductDetails";
import Loading from "../components/loader";
import { useBuyNow } from "../hooks/useBuynow";
import { useLocalStorage } from "../hooks/useLocalstorage";
const CategoriesProduct = () => {
  const [storedValue] = useLocalStorage("category");
  const { data, err, loading } = useSelector((state) => state.category);
  const { getdetails } = useProductDetails(data);
  const { buyNow } = useBuyNow();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCategories(storedValue.id));
  }, [storedValue, dispatch]);
  return (
    <>
      <div className="category-product-wrapper bg-white border border-gray-400 rounded-2xl shadow-md shadow-gray-400 xs:m-1 xs:p-0.5 sm:m-2 sm:p-1 lg:m-1 xl:m-3">
        <h1 className="text-center font-semibold  xs:m-1">
          Explore the {storedValue.name} Category
        </h1>
        <div className="product-container grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 ">
          {err && (
           <div className="err-wrap col-span-full">
             <p className=" error text-center xs:pb-4 flex justify-center items-center flex-col">
              <img
                src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                alt=""
                className="h-10 xs:h-4 sm:h-5 lg:h-8 xl:h-10"
              />
              {err}
            </p>
           </div>
          )}
          {loading && <Loading />}
          {data &&
            data.map((prod) => (
              <div
                className="category-product border-[2px] border-blue-200 rounded-2xl shadow-md shadow-blue-200 mb-1 xs:p-0.5 m-0.5 lg:p-1 lg:m-1"
                key={prod.id}
                onClick={() => getdetails(prod.id)}
              >
                <div className="image-container flex justify-center items-center">
                  <img
                    src={prod.images[0]}
                    alt={prod.slug}
                    className="rounded-xl"
                  />
                </div>
                <p className="category-title font-semibold xs:p-0.5 md:px-1 lg:px-1.5">
                  {prod.title.slice(0, 15)}
                </p>
                <p className="category-price xs:p-0.5 md:px-1.5 lg:px-1.5">
                  <span className="line-through text-gray-400 mr-0.5">
                    ₹{prod.price - 10}
                  </span>
                  ₹{prod.price}
                </p>
                <div className="button-section flex items-center justify-content-between xs:mb-0.5 p-1 xs:ml-6 sm:ml-8 lg:ml-14">
                  <button
                    className="bg-yellow-400 rounded-sm border border-black xs:p-0.5 lg:p-1 rounded-xs mr-2 lg:mr-4"
                    onClick={() => buyNow(prod)}
                  >
                    <i class="ri-shopping-cart-2-line xs:mr-0.5"></i>
                    Buy Now
                  </button>
                  <button
                    className="bg-orange-400 rounded-sm border border-black xs:p-0.5 lg:p-1 rounded-xs"
                    onClick={() => getdetails(prod.id)}
                  >
                    <i class="ri-flashlight-line xs:mr-0.5"></i>Add to cart
                  </button>
                  {/* <p className="text-red-600">{productexits}</p> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesProduct;
