import { Link } from "react-router-dom";

export default function ProductItem({ productDetail }) {
  return (
    <div>
      <Link to={`/product/${productDetail.id}`}>
        <div className="border rounded-2xl bg-white w-[181px] h-[226px] overflow-hidden">
          <img
            src={productDetail.image}
            alt={productDetail?.product_Name}
            className="w-full aspect-square object-contain"
          />
          <div className="flex justify-center border bg-black w-full px-[30px] py-2">
            <span className="text-white">{productDetail?.product_Name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
