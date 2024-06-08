/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useUserDatat } from "@/lib/Store/userStore";
import { auth } from "@/lib/data/DB";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";

export function UserName() {
  const [User, lodeing, error] = useAuthState(auth);
  const { getUser, user } = useUserDatat();
  useEffect(() => {
    const Call = async () => {
      await getUser();
    };
    Call();
  }, [User]);
  return <p>{user.name}</p>;
}

interface ImageProps {
  ClassName? : string 
  size? : number
}
export default function UserImage({ClassName , size }: ImageProps) {
  const { user } = useUserDatat();
  return (
    <div className={" flex justify-center items-center relative overflow-hidden w-20 h-20  bg-zinc-200 border border-zinc-700 rounded-full " + ClassName}>
      <Image
        className="scale-125"
        src={user.userImage || "/user.jpeg"}
        width={size || 150}
        height={size || 150}
        alt=""
      ></Image>
    </div>
  );
}
