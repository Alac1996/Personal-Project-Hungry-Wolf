import { Link } from "react-router-dom";
import {
  FaHouseChimney,
  FaClipboardList,
  FaWallet,
  FaIdCard,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="p-5 sticky bottom-0 text-center rounded-b-3xl bg-white flex w-full justify-between gap-2">
      <div>
        <Link to="/" className="inline-flex flex-col items-center gap-1">
          <FaHouseChimney className="w-7 h-6 text-gray-600" />
          <span className="text-xs">HOME</span>
        </Link>
      </div>
      <div>
        <Link to="order" className="inline-flex flex-col items-center gap-1">
          <FaClipboardList className="w-7 h-6 text-gray-600" />
          <span className="text-xs">ORDER</span>
        </Link>
      </div>
      <div>
        <Link to="payment" className="inline-flex flex-col items-center gap-1">
          <FaWallet className="w-7 h-6 text-gray-600" />
          <span className="text-xs">PAYMENT</span>
        </Link>
      </div>
      <div>
        <Link to="account" className="inline-flex flex-col items-center gap-1">
          <FaIdCard className="w-7 h-6 text-gray-600" />
          <span className="text-xs">ACCOUNT</span>
        </Link>
      </div>
    </footer>
  );
}
