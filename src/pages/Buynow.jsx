import { Link, NavLink } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { useState } from "react";
import { addOrder } from "../slices/OrderSlice";
import { useDispatch } from "react-redux";
const BuyNow = () => {
  const [storedValue] = useLocalStorage("buyitem");
  const [quantity, setquantity] = useState(1);
  const [placedorder, setplacedorder] = useState(false);
  const dispatch = useDispatch();
  const orderwithquantity = {
    ...storedValue,
    quantity: quantity,
  };
  const placeOrder = () => {
    dispatch(addOrder(orderwithquantity));
    setplacedorder(true);
  };
  return (
    <>
      <div
        className="back-btn flex justify-start w-full p-1 "
      >
        <Link to={-1}>
          <i class="ri-arrow-left-line bg-blue-300 shadow-md shadow-blue-400 border border-blue-400 xs:p-0.5 m-1 rounded-full hover:bg-blue-400"></i>
        </Link>
      </div>
      <div className="product-wrapper bg-white border border-red-400 rounded-2xl shadow-md shadow-red-600 xs:m-1 xs:p-1 sm:m-2 sm:p-1 lg:m-1 xl:m-3">
        {placedorder ? (
          <>
            <div className="order-placed flex justify-center items-center flex-col">
              <div className="image-container">
                <img
                  src={"https://education.uoc.ac.in/images/ezgif.com-crop.gif"}
                  alt=""
                  className="xs:h-16 md:h-20 lg:h-36"
                />
              </div>
              <div className="order-success flex justify-center items-center">
                <p className="mr-1">Order placed successfully</p>
                <NavLink to={"/orders"}>
                  <i className="ri-external-link-line text-blue-400"></i>
                </NavLink>
              </div>
            </div>
          </>
        ) : (
          <>
            {storedValue ? (
              <div className="product xs:p-0.5 md:p-1">
                <div className="grid xs:grid-cols-3 gap-2">
                  <img
                    src={storedValue.images[0]}
                    alt=""
                    className="xs:h-[100%] rounded-2xl border-orange-400 shadow-md shadow-orange-400 p-1"
                  />
                  <img
                    src={storedValue.images[1]}
                    alt=""
                    className="xs:h-[100%]   rounded-2xl border-orange-400 shadow-md shadow-orange-400 p-1"
                  />
                  <img
                    src={storedValue.images[2]}
                    alt=""
                    className="xs:h-[100%] lg:h-[100%]  xl:inline-block rounded-2xl border-orange-400 shadow-md shadow-orange-400 p-1"
                  />
                </div>
                <div className="xs:p-1.5 mt-0.5">
                  <p className="buy-details-title font-semibold">
                   {storedValue.title}
                  </p>
                  <p className="buy-details-category text-blue-600">
                   {storedValue.category.name}
                  </p>
                  <p className="buy-price">
                    <span className="line-through text-gray-500 xs:mr-1">
                      ₹{storedValue.price + 10}
                    </span>
                    ₹{storedValue.price}
                  </p>
                  <div className="select-quantity flex items-center  xs:mb-0.5">
                    <p className="mr-1">Quantity :</p>
                    <i
                      className="ri-subtract-line  text-blue-400 xs:mr-0.5 lg:mr-1"
                      onClick={() => setquantity(quantity - 1)}
                    ></i>
                    {quantity}
                    <i
                      className="ri-add-line text-blue-400 xs:ml-0.5 lg:mr-1"
                      onClick={() => setquantity(quantity + 1)}
                    ></i>
                  </div>
                  <p className="buy-detail-description text-gray-600">
                    <i className="ri-ball-pen-line text-red-400"></i>{" "}
                    Description
                  </p>
                  <p className="buy-detail-description text-gray-600">
                    {storedValue.description}
                  </p>
                  <div className="placeorder-button-section flex justify-center items-center xs:mt-1 xs:p-1">
                    <button
                      className="bg-orange-400 text-white xs:p-0.5 border border-black rounded-sm lg:p-1.5"
                      onClick={() => placeOrder()}
                    >
                      Place order
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="img-wrapper flex flex-col justify-center items-center xs:mb-1">
                <img
                  src={
                    "https://assets-v2.lottiefiles.com/a/066a1332-1185-11ee-b501-ab2f64ed7108/QscexXNKQP.gif"
                  }
                  className="xs:h-[150px] md:h-[250px]"
                ></img>
                <p className=" text-red-500 xs:mb-0.5 md:mb-1 lg:mb-1.5">
                  No Product is Found
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default BuyNow;
