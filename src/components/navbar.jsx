import { NavLink, useLocation } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../slices/ProductsSlice";
import { useProductDetails } from "../hooks/useProductDetails";
const NavBar = () => {
  const [storedValue] = useLocalStorage("user");
  const [search, setsearch] = useState("");
  const [filterlist, setfilteredlist] = useState();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);
  const cartitem = useSelector((state) => state.cart);
  const { getdetails } = useProductDetails(data);
  const path = useLocation();
  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);

  const searching = () => {
    let filterlist =
      data &&
      data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );

    setfilteredlist(filterlist.slice(0,5));
  };

  useEffect(() => {
    if (path.pathname === "/") {
      searching();
    }
  },[search]);
  return (
    <>
      <header className="navbar flex justify-between items-center xs:px-1 xs:py-2 sticky top-0 border-2 bg-white rounded-b-2xl z-10">
       <div className="logo-wrapper flex justify-content-center items-center">
         <i class="ri-menu-2-fill md:hidden ml-2"></i>
        <div className="logo-container xs:w-24 sm:w-32 md:w-[100px] lg:w-36 xl:w-44">
          <NavLink to={"/"}>
            <img
              src={
                "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              }
              alt="Logo"
              className="xs:h-5 md:h-8 lg:w-36 xl:w-44 cursor-pointer"
            />
          </NavLink>
        </div>
       </div>
        <div className="search-bar-wrapper flex  bg-blue-100 rounded-md cursor-pointer p-1 items-center xs:hidden md:flex md:p-0.5 xs:flex-1 ml-1 lg:ml-0 lg:p-1">
          <i className="ri-search-line xs:h-5 md:px-1"></i>
          <div className="input-section flex-1">
            <input
              type="text"
              placeholder="Search for Products,Brands and More"
              className="border-none bg-transparent outline-none xs:h-6 w-full xs:px-1.5"
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
          {search && (
            <i class="ri-arrow-right-line xs:pr-1" onClick={searching}></i>
          )}
        </div>
        <div className="utilities-section flex items-center lg:w-50 xl:w-[395px]">
          <i class="ri-mobile-download-line md:hidden md:mx-3"></i>
          <div className="signup-wrapper xs:ml-1.5 mr-0.5 sm:ml-2.5 sm:mr-1 lg:ml-3">
            <NavLink to="login">
              <div className="signup-section flex items-center border-2 rounded-md border-transparent hover:border-blue-200">
                <i class="ri-user-line cursor-pointer xl:mr-2 "></i>
                <p className="xs:ml-0.5 xl:mr-2.5">
                  {storedValue && storedValue
                    ? storedValue?.username?.slice(0, 5)
                    : "Login"}
                </p>
                <i className="ri-arrow-down-s-line cursor-pointer xs:hidden lg:inline hover:rotate-180 duration-100"></i>
              </div>
            </NavLink>
          </div>
          <div className="utilities flex items-center justify-center xs:ml-1 sm:ml-2 lg:ml-3.5">
            <NavLink to={"cart"}>
              <div className="cart cursor-pointer flex items-center xs:mr-0.5">
                <div className="cart-icon flex">
                  <i class="ri-shopping-cart-line"></i>
                  {cartitem.length != 0 && (
                    <span
                      className={
                        "flex  justify-center items-center xs:h-1.5 w-1.5 md:h-2 md:w-2 lg:h-2.5 lg:w-2.5 bg-orange-300 rounded-full xs:text-xs"
                      }
                    >
                      {cartitem && cartitem.length}
                    </span>
                  )}
                </div>
                <p className="xs:ml-0.5 lg:ml-1.5">Cart</p>
              </div>
            </NavLink>
            <NavLink to={"becomeaseller"}>
              <div className="become-seller flex items-center justify-center xs:ml-1.5 sm:ml-2 lg:ml-4 ">
                <i class="ri-store-2-line cursor-pointer mr-0.5"></i>
                <p className="xs:hidden xl:inline flex justify-center items-center mr-1 ml-1">
                  Become a Seller
                </p>
              </div>
            </NavLink>
          </div>
          <div className="menu xs:ml-1 md:ml-0 lg:ml-2 xl:ml-2 cursor-pointer">
            <img
              src={
                "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
              }
              alt="menu"
              className=""
            />
          </div>
        </div>
      </header>
      {path.pathname === "/" && (
        <div className="search-results bg-white flex flex-col items-center xs:m-1 xs:hidden sm:m-1 md:block lg:m-1 xl:m-1">
          {search &&
            filterlist &&
            filterlist.map((product) => (
              <div className="product-wrapper md:ml-36 lg:ml-44">
                <div
                  className="product inline-block border border-blue-100 rounded-lg cursor-pointer shadow-md shadow-blue-200 xs:m-1"
                  onClick={() => getdetails(product.id)}
                >
                  <div className="product-img inline-block">
                    <img
                      src={product.images[0]}
                      alt={product.slug}
                      className=" inline-block xs:h-7 m-1 rounded-md"
                    />
                  </div>
                  <div className="product-title inline-block xs:m-1">
                    <p>{product.title}</p>
                  </div>
                  <div className="product-price inline-block xs:m-1">
                    <img
                      src={
                        "https://cdn3d.iconscout.com/3d/premium/thumb/rupee-coin-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bitcoin-logo-cryptocurrency-crypto-coim-currency-symbol-pack-business-ethics-laws-icons-7017958.png"
                      }
                      alt=""
                      className=" inline-block xs:h-4 mr-1"
                    />
                    <p className="inline-block">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
