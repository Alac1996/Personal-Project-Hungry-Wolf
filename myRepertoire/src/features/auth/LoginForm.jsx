import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import LoginInput from "./LoginInput";

export default function LoginForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="flex justify-center bg-opacity-30 bg-white w-full p-2 ">
      <form className="grid gap-8 w-4/5" onSubmit={handleSubmitForm}>
        <div className="gap-55 grid grid-cols-2">
          <h1 className="text-gray-900 font-inter text-3xl font-semibold">
            LOGIN
          </h1>
        </div>
        <div className="grid gap-1">
          <div>
            <p className="text-sm font-inter">Username</p>
          </div>
          <div>
            <LoginInput
              placeholder="Enter Username"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
          </div>
        </div>
        <div className="grid gap-1">
          <div>
            <p className="text-sm font-inter">Password</p>
          </div>
          <div>
            <LoginInput
              placeholder="Enter Password"
              type="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
        </div>
        <div className="max-auto col-span-full">
          <button className=" bg-black block w-full border p-2 text-white font-button text-15 font-bold leading-110 tracking-wider uppercase">
            LOGIN
          </button>
        </div>
        <div>
          <div>
            <p className="text-gray-500 font-inter text-base font-medium leading-normal">
              Does not have an account?
              <Link
                to="/register"
                className="text-black font-inter text-base font-medium underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
