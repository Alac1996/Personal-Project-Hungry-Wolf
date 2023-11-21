// import slipPic from "../assets/slipPic.jpeg";
import qr from "../assets/qr.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../config/axios";

export default function PaymentMethodPage() {
  const navigate = useNavigate();

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showQRImage, setShowQRImage] = useState(false);

  const handlePaymentMethod = (value) => {
    setSelectedPayment(value);
    if (value === "QR") {
      setShowQRImage(true);
    } else {
      setShowQRImage(false);
    }
  };

  const handlePlaceOrder = async () => {
    if (selectedPayment === "COD") {
      try {
        const createOrderResponse = await axios.post("/order/createOrder");
        const createPaymentResponse = await axios.post(
          "/payment/createPayment",
          {
            type: "COD",
            orderId: createOrderResponse.data.order.id,
          }
        );
        if (createPaymentResponse.status === 201) {
          const payment = createPaymentResponse.data;
          console.log("payment Created", payment);
          navigate("/paid");
        }
      } catch (error) {
        console.log("Error create Order or Payment", error);
      }
    } else if (selectedPayment === "QR") {
      navigate("/paid");
    }
  };
  return (
    <div className="mt-3 flex flex-col gap-8 flex-1">
      <div className="border w-2/5 bg-black">
        <h1 className="mx-auto w-fit text-lg text-white">PAYMENT</h1>
      </div>
      <div className="flex-[7] flex flex-col items-center justify-center gap-2 border bg-white rounded-xl">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 ">
            <input
              type="radio"
              id="CODRadio"
              name="payment"
              value="COD"
              checked={selectedPayment === "COD"}
              onChange={() => handlePaymentMethod("COD")}
            />
            <label htmlFor="CODRadio" className="text-xl font-semibold">
              CASH ON DELIVERY
            </label>
          </div>
          <div className="flex items-center gap-2 ">
            <input
              type="radio"
              id="QRRadio"
              name="payment"
              value="QR"
              checked={selectedPayment === "QR"}
              onChange={() => handlePaymentMethod("QR")}
            />
            <label htmlFor="QRRadio" className="text-xl font-semibold">
              QR PAYMENT
            </label>
          </div>
        </div>
        {showQRImage && (
          <div className="flex flex-col justify-center items-center mt-4">
            <img src={qr} alt="QR Payment" />
            <p>NAME: HUNGRY WOLF</p>
            <p>ACCOUNT NO: XXX-XXXX-XXX </p>
          </div>
        )}
        <div className="mt-40 mx-auto">
          {showQRImage ? (
            <button className="mt-4 border bg-black text-white text-lg px-4 py-2">
              UPLOAD SLIP
            </button>
          ) : (
            <button
              className="mt-4 border bg-black text-white text-lg px-4 py-2"
              onClick={handlePlaceOrder}
            >
              PLACE ORDER
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
