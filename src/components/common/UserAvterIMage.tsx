
import { Camera } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  ImagePath: string;
}
function UserAvterImage({ ImagePath }: Props) {
  return (
    <div className="flex justify-center items-center relative overflow-hidden w-20 h-20  bg-zinc-200 border border-zinc-700 rounded-full ">
      <Image className="" src={ImagePath} width={150} height={150} alt=""></Image>
      <div className="absolute bottom-0 right-0 w-full h-full bg-white hover:opacity-100 opacity-0 flex justify-center items-center">
        <Camera size={40} />
      </div>
   
    </div>
  );
}

export default UserAvterImage;
