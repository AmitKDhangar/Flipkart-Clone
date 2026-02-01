import axios from "axios";
// Axios Instance
const storeAPI = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

// to get products
export const getProduct = () => {
  return storeAPI.get("/products");
};
//to get product by id
export const getProductbyId = (id) => {
  return storeAPI.get(`products/${id}`);
};
// to get categories
export const getCategories = () => {
  return storeAPI.get("/categories");
};
// to get product by Category
export const getProductbyCategories = (id) => {
  return storeAPI.get(`/categories/${id}/products`);
};
// to get Product Detail
export const getProductDetail = () => {
  return storeAPI.get("/products/category/jewelery");
};
