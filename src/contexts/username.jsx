import { createContext, useContext, useState } from "react";
export const LoginContext = createContext();
export const LoginContextProvider = ({ children }) => {
  const usercredentials = {
    username: "",
    password: "",
    auth: false,
  };
  const [islogged, setlogged] = useState(usercredentials);
  return (
    <LoginContext.Provider value={{ islogged, setlogged }}>
      {children}
    </LoginContext.Provider>
  );
};
