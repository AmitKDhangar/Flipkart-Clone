import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalstorage";
export const useBuyNow = () => {
  const [, setValue] = useLocalStorage("buyitem");
  const navigate = useNavigate();
  const buyNow = (product) => {
    setValue(product);
    navigate("/buynow");
  };
  return { buyNow };
};
