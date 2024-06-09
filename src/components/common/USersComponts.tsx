/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useUserDatat } from "@/lib/Store/userStore";
import { auth } from "@/lib/data/DB";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { AvatarImage } from "../ui/avatar";

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
  ClassName?: string;
}
export default function UserImage({ ClassName }: ImageProps) {
  const { user } = useUserDatat();
  return (
    <AvatarImage src={user.userImage || "/user.jpeg"} className={ClassName} />
  );
}
