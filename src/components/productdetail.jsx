import { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../slices/CartSlice";
import { Link, useNavigate } from "react-router-dom";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const [productdetail, setproductdetail] = useState();
  const [curproductimg, setcurproductimg] = useState(0);
  const [storedValue] = useLocalStorage("product");
  const [, setValue] = useLocalStorage("buyitem");
  const [ItemsID,setItemsID ] = useLocalStorage("items");
  const [quantity, setquantity] = useState(1);
  const [productexits, setproductexists] = useState();
  const navigate = useNavigate();
  const data = useSelector((state) => state.cart);
  useEffect(() => {
    setproductdetail(storedValue);
  }, [storedValue]);

  const productdetailwithquantity = {
    ...productdetail,
    quantity: quantity,
  }; 

  const addtoCart = () => {
    if (data.find((item) => item.id === productdetail.id)) {
      setproductexists("Product is already in the cart");
    } else {
      dispatch(addProduct(productdetailwithquantity));
    }
  };

  const wish=useRef();
  const addwish=useRef(); 

  const wishlist = () => {
  wish.current.classList.add("hidden");
  addwish.current.classList.toggle("hidden");
}
  const BuyNow = (productdetail) => {
    setValue(productdetail);
    navigate("/buynow");
  };
  
  // change in the quantity  after the item get changed;
  useEffect(()=>{
  },[ItemsID,productdetail])
  return (
    <>
      {productdetail && (
        <div className="productdetail-wrapper flex bg-white xs:m-1.5 xs:mb-2 p-0.5 md:p-1 lg:m-2 lg:p-1.5 rounded-lg shadow-lg shadow-blue-300 border-2 border-blue-300">
          <div className="product-images flex flex-col xs:w-1/6">
            {productdetail.images.map((img, idx) => (
              <img
                src={img}
                className="xs:m-0.5 p-0.5 border-2 border-red-100 xs:rounded-lg lg:rounded-2xl overflow-hidden cursor-pointer "
                onClick={() => setcurproductimg(idx)}
              ></img>
            ))}
          </div>
          <div className="product-image xs:w-1/2">
            <img
              src={productdetail.images[curproductimg]}
              alt=""
              className="xs:m-0.5 p-0.5 border-2 border-red-100 rounded-3xl cursor-pointer"
            />
          </div>
          <div className="product-details xs:w-1/2 xs:p-0.5 m-0.5 sm:m-0.5 sm:p-1 md:p-1.5 lg:m-1">
           <div className="flex justify-between">
             <p className="flex justify-between product-details-title font-semibold">
              {productdetail.title}
            </p>
             <i className="ri-heart-3-line product-details-title" onClick={()=> wishlist()} ref={wish}></i>
             <i class="ri-heart-3-fill hidden product-details-title" ref={addwish}></i>
           </div>
            <p className="product-details-category text-blue-500 xs:mb-0.5">
              {productdetail.category.name}
            </p>
            <p className="flex product-detail-price  xs:mb-0.5">
              <p className="text-yellow-500 xs:mr-2">Price :</p>
              <p className="line-through text-gray-400 xs:pr-2">
                ₹{productdetail.price + 15}
              </p>
              ₹{productdetail.price}
            </p>
            <p className="product-detail-rating flex items-center xs:mb-0.5">
              <p className="xs:mr-1">Rating :</p>
              <div className="stars  bg-green-500 flex border border-black rounded-md xs:p-0.5">
                <p className="text-white xs:mr-0.5">4.5</p>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-line"></i>
              </div>
            </p>
            <div className="select-quantity flex items-center  xs:mb-0.5">
              <p className="mr-1">Quantity :</p>
              <i
                className="ri-subtract-line  text-blue-400 xs:mr-0.5 lg:mr-1"
                disabled={quantity >= 1}
                onClick={() => setquantity(quantity => Math.max(1, quantity - 1))}
              ></i>
              {quantity}
              <i
                className="ri-add-line text-blue-400 xs:ml-0.5 lg:mr-1"
                onClick={() => setquantity(quantity + 1)}
              ></i>
            </div>
            <div className="button-section xs:mb-0.5 p-1">
              <button
                className="bg-yellow-400 rounded-md border border-black xs:p-0.5 lg:p-1 rounded-xs mr-2 lg:mr-4"
                onClick={() => {
                  BuyNow(productdetail);
                }}
              >
                <i class="ri-shopping-cart-2-line xs:mr-0.5"></i>
                Buy Now
              </button>
              <button
                className="bg-orange-400 rounded-md border border-black xs:p-0.5 lg:p-1 rounded-xs"
                onClick={addtoCart}
              >
                <i class="ri-flashlight-line xs:mr-0.5"></i>Add to cart
              </button>
              <p className="text-red-600">{productexits}</p>
            </div>
            <p className="product-detail-description text-gray-500">
              <i className="ri-ball-pen-line text-red-400"></i> Description
            </p>
            <p className="product-detail-description text-gray-700 xs:p-0.5">
              {productdetail.description}
            </p>
          </div>
        </div>
      )}
      {/* <div className="similar-products-container bg-white xs:m-0.5 lg:m-2 rounded-lg  shadow-lg shadow-red-300 border-2 border-red-300">
        <p>Similar Products</p>
      </div> */}
    </>
  );
};

export default ProductDetails;
