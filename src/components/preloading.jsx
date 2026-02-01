import { useState } from "react";
import Loading from "./loader";
const Preloading = () => {
 const [loading,setloading]=useState(true);
 return (<>
  <div className="loading-wrapper bg-yellow-400 flex flex-col justify-center items-center h-[100vh]">
   <img src={"https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png"} alt="" className="xs:h-14 md:h-16 xl:h-32"/>
   <Loading/>
   <p>Welcome to Flipkart</p>
   <p>By Amit Dhangar</p>
  </div>
 </>);
}
 
export default Preloading;