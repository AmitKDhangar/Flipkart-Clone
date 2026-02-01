import { useSelector } from "react-redux";
import { NavLink, useNavigate, Link } from "react-router-dom";
const Account = ({ storedValue, setValue }) => {
  const navigate = useNavigate();
  const logoutdetails = null;
  const orders = useSelector((state) => state.orders);
  const logout = () => {
    setValue(logoutdetails);
  };
  return (
    <>
      <div className="account-wrapper flex justify-center bg-white rounded-2xl shadow-md shadow-gray-400 border border-blue-200 xs:m-1 xs:p-2.5 md:m-2 lg:m-3 lg:p-2.5">
        <div className="account-details flex flex-col items-center border rounded-3xl border-red-300 shadow-md shadow-red-300">
          <div>
            <img
              src="https://img.freepik.com/free-vector/man-profile-account-picture_24908-81754.jpg"
              alt=""
              className="xs:h-24 rounded-full mb-1 md:h-12 lg:h-28"
            />
          </div>
          <div className="xs:py-3 p-3 mb-2 md:py-5 md:p-5">
            <p className="xs:py-1 font-semibold">
              Username : {storedValue?.username?.toUpperCase()}
            </p>
            <p className="xs:py-1 font-semibold">
              Password : {storedValue.password}
            </p>
            <p className="xs:py-1  font-semibold">
              Address : {"Flipkart Software Private Limited"}
            </p>
            <div className="orders-count flex items-center  justify-between">
              <p className="xs:py-1  font-semibold">Orders : {orders.length}</p>
              <NavLink to={"/orders"}>
                <i class="ri-share-box-line text-blue-400 "></i>
              </NavLink>
            </div>
          </div>
          <div className="xs:mb-3">
            <button onClick={logout} className="bg-red-400 rounded-md border border-black xs:p-1">
              <i class="ri-door-open-line"></i> Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
