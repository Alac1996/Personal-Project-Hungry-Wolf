import RegisterContent from "../features/auth/RegisterContent";
import RegisterForm from "../features/auth/RegisterForm";

export default function Register() {
  return (
    <div>
      <RegisterContent />
      <div className="mt-[25%] p-4 flex justify-center items-center">
        <RegisterForm />
      </div>
    </div>
  );
}
