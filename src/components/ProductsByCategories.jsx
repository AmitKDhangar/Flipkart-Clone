import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FetchCategories } from "../slices/CategorySlice";
import Loading from "./loader";
import { useEffect } from "react";
import {useProductDetails} from '../hooks/useProductDetails';

const ProductsByCategories = () => {
  const dispatchAction = useDispatch();
  const { data, loading, err } = useSelector((state) => state.category);
  const { getdetails } = useProductDetails(data);
  const filterData = data.filter((item) => item.id >= 11);
  useEffect(() => {
    dispatchAction(FetchCategories(24));
  }, [dispatchAction]);
  return (
    <>
      <div className="product-categories-wrapper bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
        <h1 className="text-start font-semibold border-b-2 xs:py-1 mb-1 px-1 mx-1">
          {filterData[0]?.category?.name}
        </h1>
        <div className="error-wrapper flex justify-content-center items-center">
          <div className="error-block w-full flex justify-content-center items-center">
            {loading && <Loading />}
            {err && <p>{err}</p>}
          </div>
        </div>
        <div className="product-block p-1 grid xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6">
          {filterData &&
            filterData.map((prod) => (
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

export default ProductsByCategories;
