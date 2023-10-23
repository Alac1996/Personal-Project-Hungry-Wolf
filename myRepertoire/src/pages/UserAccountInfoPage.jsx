import { useAuth } from "../hooks/use-auth";

export default function UserAccountInfoPage() {
  const { logout, authUser } = useAuth();
  console.log(authUser);
  return (
    <div className="flex flex-cols justify-center">
      {authUser && (
        <button
          className="absolute bottom-[150px] bg-transparent ring ring-white text-white font-bold py-2 px-4 rounded-full"
          onClick={logout}
        >
          Log Out
        </button>
      )}
    </div>
  );
}
