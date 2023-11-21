import check from "../assets/check.png";
export default function PaymentCompletePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={check} alt="paymentComplete" />
      <h1>PAYMENT COMPLETE</h1>
    </div>
  );
}
