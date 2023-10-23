import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { useCart } from "../../hooks/use-cart";

export default function CartItem({ cartDetail, isShowButton }) {
  const { updateCart, removeCartItem } = useCart();
  console.log("This is cartDetail,", cartDetail);

  const handleIncrement = () => {
    const newAmount = cartDetail.quantity + 1;
    updateCart({ ...cartDetail, quantity: newAmount });
  };

  const handleDecrement = () => {
    if (cartDetail.quantity > 1) {
      const newAmount = cartDetail.quantity - 1;
      console.log("New Amount:", newAmount);
      updateCart({ ...cartDetail, quantity: newAmount });
    } else {
      const { product_Name, size, crust } = cartDetail;
      removeCartItem(product_Name, crust, size);
    }
  };

  return (
    <div className="border bg-white rounded-xl flex flex-col px-6">
      <div className="flex items-center">
        {cartDetail.crust === "null" ? (
          <h1 className="w-fit text-lg font-extrabold text-black flex-1">
            {`${cartDetail.product_Name}`}
          </h1>
        ) : (
          <h1 className="w-fit text-lg font-extrabold text-black flex-1">
            {`PIZZA ${cartDetail.product_Name}`}
          </h1>
        )}
        <div className="flex items-center gap-4">
          {isShowButton !== false && (
            <FaCircleMinus
              className="text-lg text-black"
              onClick={handleDecrement}
            />
          )}
          <h1 className="text-lg font-extrabold">{cartDetail.quantity}</h1>
          {isShowButton !== false && (
            <FaCirclePlus
              className="text-lg text-black"
              onClick={handleIncrement}
            />
          )}
        </div>
      </div>
      {cartDetail.crust === "null" ? (
        <div className="flex flex-col">
          <p className="text-sm">({cartDetail.price} ฿)</p>
        </div>
      ) : (
        <div className="flex flex-col">
          <p className="text-sm">
            {cartDetail.size} &nbsp; ({cartDetail.price} ฿)
          </p>
          <p className="text-sm">{cartDetail.crust}</p>
        </div>
      )}
    </div>
  );
}
