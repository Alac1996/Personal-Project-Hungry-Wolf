export default function RegisterInput({
  placeholder,
  name,
  value,
  onChange,
  hasError,
  type = "text",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`block w-full border rounded-full outline-none shadow px-3 py-1.5 text-sm focus:ring 
        ${
          hasError
            ? "border-red-500 focus:ring-red-300"
            : " focus:ring-blue-300 focus:border-blue-500 border-gray-300"
        }
       `}
    />
  );
}
