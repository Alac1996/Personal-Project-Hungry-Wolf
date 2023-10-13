import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";

export default function Login() {
  return (
    <div>
      <LoginContent />
      <div className="mt-[50%] p-4 flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
}
