import qr from "../assets/qr.png";

export default function QRPage() {
  return (
    <div className="flex-[7] flex flex-col items-center justify-center gap-2 border bg-white rounded-xl">
      <img src={qr} alt="QRPayment" />
      <div className="mt-40">
        <button className="mt-4 border bg-black text-white text-lg px-4 py-2">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}
