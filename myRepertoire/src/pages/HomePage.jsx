import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import pizza from "../assets/pizza.png";
import sidedish from "../assets/sidedish.png";
import beverage from "../assets/beverage.png";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="absolute top-4 right-0 m-2">
        <Link to="/cart">
          <FaCartArrowDown size={25} className="text-gray-600" />
        </Link>
      </div>

      <div className="flex flex-col items-center mb-8">
        <h1 className="px-4 py-2 font-semibold">PIZZA</h1>
        <div className="border border-transparent w-80 h-40 rounded-xl overflow-hidden ">
          <Link to="/pizza">
            <img
              src={pizza}
              alt="pizza"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center mb-8">
        <h1 className="px-4 py-2 font-semibold">SIDE-DISH</h1>
        <div className="border border-transparent w-80 h-40 rounded-xl overflow-hidden">
          <Link to="/sideDish">
            <img
              src={sidedish}
              alt="sideDish"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="px-4 py-2 font-semibold">BEVERAGE</h1>
        <div className="border border-transparent w-80 h-40 rounded-xl overflow-hidden">
          <Link to="/beverage">
            <img
              src={beverage}
              alt="beverage"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
