import CartItem from "../features/product/CartItem";
import { useCart } from "../hooks/use-cart";

export default function OrderPage() {
  const { cartItem } = useCart();

  const total = cartItem.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="mt-3 flex flex-col gap-8 flex-1">
      <div className="border w-2/5 bg-black">
        <h1 className="mx-auto w-fit text-lg text-white">ORDER</h1>
      </div>
      <div className="border bg-white rounded-xl flex flex-col px-6">
        <h1 className="w-fit text-lg font-extrabold text-black flex-1">
          NAME:
        </h1>
        <h1 className="w-fit text-lg font-extrabold text-black flex-1">
          PHONE:
        </h1>
        <h1 className="w-fit text-lg font-extrabold text-black flex-1">
          ADDRESS:
        </h1>
      </div>
      <div className="border bg-white rounded-xl flex flex-col px-6">
        <h1 className="w-fit text-lg font-extrabold text-black flex-1">
          ORDER SUMMARY
        </h1>
        <div className="flex flex-col gap-2 shadow-lg">
          {cartItem.map((el) => (
            <CartItem key={el.productId} cartDetail={el} isShowButton={false} />
          ))}
        </div>
      </div>
      {cartItem.length > 0 ? (
        <>
          <div className="border-t mt-4 pt-2 flex justify-between items-center bg-black ring-2 ring-white">
            <div className="text-lg font-extrabold text-white">Total</div>
            <div className="text-white text-lg px-4 py-2">{total}</div>
          </div>
          <button className="mt-4 border bg-black text-white text-lg px-4 py-2">
            PROCEED TO PAYMENT
          </button>
        </>
      ) : null}
    </div>
  );
}
