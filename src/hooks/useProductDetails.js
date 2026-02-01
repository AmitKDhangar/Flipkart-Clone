import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalstorage";
export const useProductDetails = (data) => {
  const [, setValue] = useLocalStorage("product", {});
  const navigate = useNavigate();
  const getdetails = (id) => {
    if (data) {
      let product = data.find((prod) => prod.id === id);
      setValue(product);
      navigate("/productdetail");
    } else {
      console.log("something went wrong");
    }
  };

  return { getdetails };
};
