import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { LoginContextProvider } from "../contexts/username";
import {ProductContextProvider} from '../contexts/productdetails';
import Preloading from "../components/preloading";
import { useState } from "react";
function App() {
  const [preloading,setpreloading]=useState(true);
  setTimeout(() => {
   setpreloading(false);
  },1000);
  return (
    <>
      {preloading ? (
        <Preloading />
      ) : (
        <LoginContextProvider>
          <ProductContextProvider>
            <NavBar />
            <Outlet />
            <Footer />
          </ProductContextProvider>
        </LoginContextProvider>
      )}
    </>
  );
}

export default App;
