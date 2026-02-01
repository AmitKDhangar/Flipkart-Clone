import { useLocation } from "react-router-dom";
const Error = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className="error-wrapper flex justify-center items-center flex-col  bg-white shadow-md  rounded-md xs:m-1 lg:m-1 xl:m-3">
        <img
          src={
            "https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif"
          }
          alt=""
          className="xs:h-18"
        />
        <p className="error-page">
          Path doesn't EXISTS: {`" ${location.pathname}"`}
        </p>
      </div>
    </>
  );
};

export default Error;
