import { createBrowserRouter } from "react-router-dom";
import App from "../utilities/App.jsx";
import Layout from "../components/layout.jsx";
import Authentication from "../pages/Authentication.jsx";
import Cart from "../pages/cart.jsx";
import BecomeSeller from "../pages/becomeseller.jsx";
import ProductDetails from "../components/productdetail.jsx";
import Error from "../pages/ErrorPage.jsx";
import CategoriesProduct from "../components/categoriesproduct.jsx";
import BuyNow from "../pages/Buynow.jsx";
import Orders from "../pages/orders.jsx";
import ExploreCategories from "../components/explorecategories.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Layout,
      },
      {
        path: "login",
        Component: Authentication,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "becomeaseller",
        Component: BecomeSeller,
      },
      {
        path: "productdetail/:id?",
        Component: ProductDetails,
      },
      {
        path: "categories/products/:id?",
        Component: CategoriesProduct,
      },
      {
        path: "buynow",
        Component: BuyNow,
      },
      {
        path: "orders",
        Component: Orders,
      },
      {
        path: "explorecategories",
        Component: ExploreCategories,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
