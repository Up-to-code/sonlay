"use client";
import Logot from "@/components/Auth/Logot";
import UserAvterImage from "@/components/common/UserAvterIMage";
import { useUserDatat } from "@/lib/Store/userStore";
import { auth } from "@/lib/data/DB";
import { Pencil } from "lucide-react";
import { useAuthState } from "react-firebase-hooks/auth";

const ProfilePage = () => {
  const [User, loading, error] = useAuthState(auth);
  const { user } = useUserDatat();
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-100">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex flex-col items-center">
            <UserAvterImage ImagePath={user.userImage || "/user.jpeg"} />
            <h1 className="mt-4 text-2xl font-semibold text-gray-900 flex gap-3" >
              {user.name}
              <Pencil className="cus" />
            </h1>
            {/* <p className="mt-2 text-gray-600">Software Engineer</p> */}
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-medium text-gray-800">About Me</h2>
            <p className="mt-2 text-gray-600">Email: {User?.email}</p>
            <p className="mt-2 text-gray-600">
              Last Sign In: {User?.metadata.lastSignInTime}
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-medium text-gray-800 my-5">Log Out</h2>
            <Logot />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
