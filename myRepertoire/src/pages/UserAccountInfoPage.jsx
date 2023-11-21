import { FaEdit, FaSave, FaTimes } from "react-icons/fa";

import { useAuth } from "../hooks/use-auth";
import { useState } from "react";

export default function UserAccountInfoPage() {
  const { logout, authUser, updateUser } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...authUser });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await updateUser(authUser.id, {
        phone_No: editedUser.phone_No,
        address: editedUser.address,
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleCancelClick = () => {
    setEditedUser({ ...authUser });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="border bg-white rounded-xl flex flex-col px-6">
        <div className="flex justify-between items-center">
          <h1 className="w-fit text-lg font-extrabold text-black flex-1">
            NAME: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </h1>
          <h1>{authUser.username}</h1>
        </div>
        <div className="flex justify-between items-center gap-4">
          <h1 className="w-fit text-lg font-extrabold text-black flex-1">
            PHONE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </h1>
          <h1>
            {isEditing ? (
              <input
                type="text"
                value={editedUser.phone_No}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, phone_No: e.target.value })
                }
                autoFocus
              />
            ) : (
              editedUser.phone_No
            )}
          </h1>
          {isEditing ? (
            <div className="flex gap-1">
              <FaSave onClick={handleSaveClick} />
              <FaTimes onClick={handleCancelClick} />
            </div>
          ) : (
            <FaEdit onClick={handleEditClick} />
          )}
        </div>

        <div className="flex justify-between items-center gap-4">
          <h1 className="w-fit text-lg font-extrabold text-black flex-1">
            ADDRESS: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </h1>
          <h1>
            {isEditing ? (
              <input
                type="text"
                value={editedUser.address}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, address: e.target.value })
                }
                autoFocus
              />
            ) : (
              editedUser.address
            )}
          </h1>
          {isEditing ? (
            <div className="flex gap-1">
              <FaSave onClick={handleSaveClick} />
              <FaTimes onClick={handleCancelClick} />
            </div>
          ) : (
            <FaEdit onClick={handleEditClick} />
          )}
        </div>
      </div>
      <hr className="border-1 border-white w-full shadow-2xl" />
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
    </div>
  );
}
