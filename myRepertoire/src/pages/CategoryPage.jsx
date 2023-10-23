import { useEffect, useState } from "react";
import axios from "../config/axios";
import { Link, useLocation } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import ProductItem from "../features/product/ProductItem";

export default function CategoryPage() {
  const [allProduct, setAllProduct] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`/product/?category=${location.pathname.slice(1)}`)
      .then((res) => {
        setAllProduct(res.data.catProduct);
      })
      .catch((error) => console.log(error));
  }, [location]);

  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <div className="border w-2/5 bg-black">
          <h1 className="mx-auto w-fit text-lg text-white">
            {allProduct.length > 0 ? allProduct[0].category.toUpperCase() : ""}
          </h1>
        </div>
        <Link to="/cart" className="mr-2 border border-spacing-2 bg-white">
          <FaCartArrowDown size={30} className="text-black" />
        </Link>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2 w-fit mx-auto gap-y-4">
        {allProduct.map((el) => (
          <ProductItem key={el.product_Name} productDetail={el} />
        ))}
      </div>
    </div>
  );
}
