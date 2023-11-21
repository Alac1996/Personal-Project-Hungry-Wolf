import { FaCartArrowDown } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../hooks/use-cart";

export default function ProductPage() {
  const [eachProduct, setEachProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedCrust, setSelectedCrust] = useState(null);
  const { productId } = useParams();

  const navigate = useNavigate();

  const { updateCart } = useCart();
  const [amount, setAmount] = useState(1);

  // [ { name: echproduct.name, quantity: amount, size: sel  } ]

  useEffect(() => {
    axios
      .get(`/product/${productId}`)
      .then((res) => {
        setEachProduct(res.data.productInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleSizeChange = (value) => {
    setSelectedSize(value);
  };

  const handleCrustChange = (value) => {
    setSelectedCrust(value);
  };

  const handleUpdateCart = () => {
    const updatedCartItem = {
      product_Name: eachProduct.product_Name,
      quantity: amount,
      size: selectedSize,
      crust: selectedCrust,
    };
    updateCart(updatedCartItem);
    console.log("this is updatedCartItem", updatedCartItem);

    navigate("/");
  };

  return (
    <div className="mt-3 flex flex-col gap-8 flex-1">
      <div className="flex justify-between">
        <div className="border w-2/5 bg-black">
          <h1 className="mx-auto w-fit text-lg text-white">
            {eachProduct.product_Name}
          </h1>
        </div>
        <Link to="/cart" className="mr-2 border border-spacing-2 bg-white">
          <FaCartArrowDown size={30} className="text-black" />
        </Link>
      </div>
      {eachProduct.category === "pizza" ? (
        <div className="border bg-white rounded-xl h-full">
          <div className="mx-auto w-fit">
            <img
              src={eachProduct.image}
              alt="pepperoni"
              width="300"
              height="200"
            />
          </div>
          <div className="flex items-center gap-8 mx-auto w-fit">
            <FaCircleMinus
              className="text-4xl text-black"
              onClick={handleDecrement}
            />
            <h1 className="text-4xl font-extrabold">{amount}</h1>
            <FaCirclePlus
              className="text-4xl text-black"
              onClick={handleIncrement}
            />
          </div>
          <div className="flex flex-col w-full justify-center">
            <div className="flex mt-8 ">
              <div className="flex-[4] flex justify-center items-start">
                <h1 className="text-3xl font-bold">size</h1>
              </div>
              <div className="flex-[7] flex flex-col items-start justify-start gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="mediumRadio"
                    name="size"
                    value="Medium"
                    checked={selectedSize === "Medium"}
                    onChange={() => handleSizeChange("Medium")}
                  />
                  <label
                    htmlFor="mediumRadio"
                    className="text-xl font-semibold"
                  >
                    Medium &nbsp; (399 ฿)
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="largeRadio"
                    name="size"
                    value="Large"
                    checked={selectedSize === "Large"}
                    onChange={() => handleSizeChange("Large")}
                  />
                  <label htmlFor="largeRadio" className="text-xl font-semibold">
                    Large &nbsp; (499 ฿)
                  </label>
                </div>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="flex-[4] flex justify-center items-start">
                <h1 className="text-3xl font-bold">crust</h1>
              </div>
              <div className="flex-[7] flex flex-col items-start justify-start gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="thickRadio"
                    name="crust"
                    value="Thick_soft"
                    checked={selectedCrust === "Thick_soft"}
                    onChange={() => handleCrustChange("Thick_soft")}
                  />
                  <label htmlFor="thickRadio" className="text-xl font-semibold">
                    Thick Soft
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="thinRadio"
                    name="crust"
                    value="Thin_crispy"
                    checked={selectedCrust === "Thin_crispy"}
                    onChange={() => handleCrustChange("Thin_crispy")}
                  />
                  <label htmlFor="thinRadio" className="text-xl font-semibold">
                    Thin Crispy
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button
                className="border w-fit bg-black text-lg py-2 px-4 text-white"
                onClick={handleUpdateCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="border bg-white rounded-xl h-full">
          <div className="mx-auto w-fit mt-8">
            <img
              src={eachProduct.image}
              alt="pepperoni"
              className="w-48 h-56 object-contain"
            />
          </div>
          <div className="flex items-center gap-8 mx-auto w-fit mt-4">
            <FaCircleMinus
              className="text-4xl text-black"
              onClick={handleDecrement}
            />
            <h1 className="text-4xl font-extrabold">{amount}</h1>
            <FaCirclePlus
              className="text-4xl text-black"
              onClick={handleIncrement}
            />
          </div>
          <div className="flex flex-col items-center gap-8 mx-auto w-fit mt-12">
            <h1 className="text-xl font-normal text-center">
              {eachProduct.description}
            </h1>
            <h1 className="text-3xl font-semibold">
              Price: &nbsp; {eachProduct.price} ฿
            </h1>
          </div>
          <div className="flex justify-center mt-16">
            <button
              className="border w-fit bg-black text-lg py-2 px-4 text-white"
              onClick={handleUpdateCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
