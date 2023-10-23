import { FaAngleLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <div className="sticky top-0">
      {isHomePage ? null : (
        <FaAngleLeft
          size={24}
          className="absolute top-[22px]"
          onClick={handleClickBack}
        />
      )}
      <div className="flex flex-cols space-x-5 px-28 py-6 bg-white ">
        <h1>H U N G R Y </h1>
        <h1>W O L F</h1>
      </div>
      <hr className="border-2 border-gray-300" />
    </div>
  );
}
