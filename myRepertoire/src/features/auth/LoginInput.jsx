export default function LoginInput({
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <input
      className="block w-full rounded-full px-4 py-2 outline-none border shadow border-gray-300 focus:ring-1 focus:ring-blue-300 focus:border-blue-500"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
