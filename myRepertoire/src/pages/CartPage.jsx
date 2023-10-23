import CartItem from "../features/product/CartItem";

import { useCart } from "../hooks/use-cart";

export default function CartPage() {
  const { cartItem } = useCart();

  const total = cartItem.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="mt-3 flex flex-col gap-8 flex-1">
      <div className="border w-2/5 bg-black">
        <h1 className="mx-auto w-fit text-lg text-white">CART</h1>
      </div>
      {cartItem.map((el) => (
        <CartItem key={el.productId} cartDetail={el} />
      ))}
      {cartItem.length > 0 ? (
        <>
          <div className="border-t mt-4 pt-2 flex justify-between items-center bg-black ring-2 ring-white">
            <div className="text-lg font-extrabold text-white">Total</div>
            <div className="text-white text-lg px-4 py-2">{total}</div>
          </div>
          <button className="mt-4 border bg-black text-white text-lg px-4 py-2">
            Order
          </button>
        </>
      ) : null}
    </div>
  );
}
