import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../contexts/username";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalstorage";
const Login = () => {
  const navigate = useNavigate();
  const { setlogged } = useContext(LoginContext);
  const user = {
    username: "",
    password: "",
  };
  const [formdata, setformdata] = useState(user);
  const [error, seterror] = useState();
  const [, setValue] = useLocalStorage("user", {});
  const Errorhandling = () => {
    const err = {};
    if (!formdata?.username.trim()) {
      err.name = "Enter your username First";
    } else if (!formdata?.password) {
      err.password = "Enter your password First";
    }
    seterror(err);
  };
  const Handlesubmit = (e) => {
    e.preventDefault();
    Errorhandling();
    if (formdata.password) {
      setlogged(formdata, (formdata.auth = true));
      setValue(formdata);
      navigate("/");
    }
  };

  const Handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="signup-wrapper flex justify-center items-center rounded-2xl shadow-lg shadow-blue-500 border-2 border-blue-500  bg-white xs:m-1 xs:p-2 md:m-2 lg:m-3">
        <div className="login md:flex ">
          <div className="left-side-form bg-blue-500 border-2 border-blue-300 flex flex-col items-start rounded-xl xs:p-2 mr-0.5 m-0.5">
            <h1 className="text-white text-left">Login</h1>
            <p className="text-gray-200 xs:py-1">
              Get access to your Orders, Wishlist and Recommendations
            </p>
            <div className="logo-img-container">
              <img
                src="https://static.vecteezy.com/system/resources/previews/049/401/761/non_2x/flipkart-icon-transparent-background-free-png.png"
                alt=""
                className="xs:h-16 sm:h-28 md:h-34 lg:h-52"
              />
            </div>
          </div>
          <form action="" className="">
            <div className="right-side-form xs:p-3 rounded-lg border-2 border-blue-500 bg-blue-50 flex flex-col h-[100%]">
              <label htmlFor="">Enter Username</label>
              <input
                type="text"
                name="username"
                className=" outline-none border-b-2 xs:rounded-sm md:rounded-md xs:h-3 p-1 my-0.5 sm:h-4 md:h-8"
                value={formdata.username}
                onChange={Handlechange}
                placeholder="Enter Your Username"
              />
              {error && <p className="form-error">{error.name}</p>}
              <label htmlFor="">Enter Password</label>
              <input
                type="password"
                name="password"
                className="outline-none border-b-2 xs:rounded-sm md:rounded-md xs:h-3 p-1 my-0.5 sm:h-4 md:h-8"
                value={formdata.password}
                onChange={Handlechange}
                placeholder="Enter Password"
              />
              {error && <p className="form-error">{error.password}</p>}
              <p className="caution xs:mt-0.5">
                By continuing, you agree to Flipkart's{" "}
                <a href="" className="text-blue-500">
                  Terms
                </a>{" "}
                of Use and{" "}
                <a href="" className="text-blue-500">
                  Privacy Policy
                </a>
              </p>
              <div
                className="continuebtn bg-orange-500 uppercase text-center mb-2 rounded-sm xs:mt-1 p-1"
                onClick={Handlesubmit}
              >
                <p className="cursor-pointer">Login</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
