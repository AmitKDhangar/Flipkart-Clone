import { useNavigate } from "react-router-dom";

const ExploreButton = () => {
  const navigate = useNavigate();
  return (
    <div className="explore-btn flex justify-center items-center w-full">
      <button
        className="explore-btn bg-yellow-400 rounded-md border xs:p-1 border-black lg:p-1 m-1"
        onClick={()=> navigate('/explorecategories')}
      >
        <i className="ri-arrow-up-double-line"></i>
       Explore more
        <i className="ri-arrow-up-double-line"></i>
      </button>
    </div>
  );
};

export default ExploreButton;
