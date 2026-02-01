import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../slices/OrderSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Orders = () => {
  const [timestamp,settimestamp]=useState();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const removeorder = (idx) => {
    dispatch(removeOrder(idx));
  };
  useEffect(()=>{
   const readable = new Date().toLocaleString();
   settimestamp(readable);
  },[orders])
  return (
    <>
      {orders.length >= 1 ? (
        <div className="orders-wrapper bg-white xs:m-1.5 rounded-xl shadow-md shadow-neutral-700 p-2">
          <h1 className="text-center">Orders</h1>
          <div className="orders-list xs:p-0">
            {orders.map((item, idx) => (
              <div className="ordered-item bg-red-200 border border-red-200 shadow-md shadow-red-400 xs:rounded-2xl flex xs:flex-col justify-start xs:items-start  xs:p-.5 m-1.5 lg:p-1.5 md:flex-row lg:items-center">
                <div className="image-container xs:p-1">
                  <img
                    src={item.images[0]}
                    alt=""
                    className="rounded-2xl border border-white shadow-sm shadow-white xs:h-[100%] lg:h-24"
                  />
                </div>
                <div className="xs:p-1.5 w-full lg:w-full lg:flex lg:justify-between">
                  <p className="xs:flex justify-between items-center lg:inline-block">
                    <p>Product Name </p>
                    {item.title.slice(0, 15)}
                  </p>
                  <p className="xs:flex justify-between items-center lg:inline-block">
                    <p>Price</p> ₹{item.price}
                  </p>
                  <p className="xs:flex justify-between items-center lg:inline-block">
                    <p>Quantity</p>
                    {`(${item.quantity}) items`}
                  </p>
                  <div className="xs:flex justify-between items-center lg:inline-block">
                    <p>Platform Fee</p>
                    <p>₹{7}</p>
                  </div>

                  <p className="xs:flex justify-between items-center lg:inline-block">
                    <p>Discount</p> ₹{item.quantity * 10}
                  </p>
                  <p className="xs:flex justify-between items-center lg:inline-block">
                    <p>Status</p>{" "}
                    <span className="bg-green-400 rounded-sm xs:p-0.5">
                      Confirmed
                    </span>{" "}
                  </p>
                  <p className="xs:flex justify-between items-center lg:inline-block">
                    <p>Total Amount </p>₹
                    {item.price * item.quantity + 7 - item.quantity * 10}
                  </p>
                  <p className="xs:flex justify-between items-center lg:inline-block">
                    <p>Timestamp</p>
                    {timestamp}
                  </p>
                  <div className="orders-btn">
                    <button
                      className="bg-red-400 xs:p-0.5 rounded-sm hover:bg-red-500"
                      onClick={() => removeorder(idx)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="total-orders">
            <p>Total Orders:{orders.length}</p>
          </div>
        </div>
      ) : (
        <div className="img-wrapper flex flex-col justify-center items-center bg-white rounded-lg border-yellow-500 border shadow-md shadow-yellow-400 xs:m-1 sm:m-1.5 md:m-2 lg:m-3  xs:mb-1">
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
  );
};

export default Orders;
