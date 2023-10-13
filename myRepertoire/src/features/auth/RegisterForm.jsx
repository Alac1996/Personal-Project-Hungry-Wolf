import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import RegisterInput from "./RegisterInput";
import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string().trim().required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
  email: Joi.string().email({ tlds: false }).required(),
  phone_No: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  Address: Joi.string().required(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  console.dir(error);
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone_No: "",
    address: "",
  });

  //   const [error, setError] = useState({});

  const { register } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    register(input).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="flex justify-center bg-opacity-30 bg-white w-full p-2">
      <form onSubmit={handleSubmitRegister} className="grid gap-5 w-4/5">
        <div className="gap-55 grid grid-cols-2">
          <h1 className="text-gray-900 font-inter text-3xl font-semibold">
            REGISTER
          </h1>
        </div>
        <div className="grid gap-1">
          <div>
            <p className="text-sm font-inter">Username</p>
          </div>
          <div>
            <RegisterInput
              name="username"
              placeholder="Enter Username"
              onChange={handleChangeInput}
              value={input.username}
            />
          </div>
        </div>

        <div className="grid gap-1">
          <div>
            <p className="text-sm font-inter">Password</p>
          </div>
          <div>
            <RegisterInput
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={handleChangeInput}
              value={input.password}
            />
          </div>
        </div>

        <div className="grid gap-1">
          <div>
            <p className="text-sm font-inter">Confirm Password</p>
          </div>
          <div>
            <RegisterInput
              name="confirmPassword"
              type="password"
              placeholder="confirmPassword"
              value={input.confirmPassword}
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className="grid gap-1">
          <div>
            <p className="text-sm font-inter">Email</p>
          </div>
          <div>
            <RegisterInput
              name="email"
              placeholder="Enter Email"
              value={input.email}
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className="grid gap-1">
          <div>
            <p className="text-sm font-inter">Phone Number</p>
          </div>
          <div>
            <RegisterInput
              name="phone_No"
              placeholder="Enter Phone Number"
              value={input.phone_No}
              onChange={handleChangeInput}
            />
          </div>
        </div>

        <div className="grid gap-1">
          <div>
            <p className="text-sm font-inter">Address</p>
          </div>
          <div>
            <RegisterInput
              name="address"
              placeholder="Enter Address"
              value={input.address}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="max-auto col-span-full">
          <button className=" bg-black block w-full border p-2 text-white font-button text-15 font-bold leading-110 tracking-wider uppercase">
            Register
          </button>
        </div>
        <div>
          <p className="text-gray-500 font-inter text-base font-medium leading-normal">
            Already have an account?
            <Link
              to="/login"
              className="text-black font-inter text-base font-medium underline"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
