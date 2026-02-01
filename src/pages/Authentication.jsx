import Account from "../pages/Account";
import Login from "./Login";
import { useLocalStorage } from "../hooks/useLocalstorage";
const Authenication = () => {
  const [storedValue, setValue] = useLocalStorage("user", {});
  return (
    <>
      <div className="Authentication-wrapper">
        {storedValue ? (
          <Account storedValue={storedValue} setValue={setValue} />
        ) : (
          <Login />
        )}
      </div>
    </>
  );
};

export default Authenication;
