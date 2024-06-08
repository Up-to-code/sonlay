import UserImage, { UserName } from "../common/USersComponts";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function UserHeader() {
  return (
    <div className=" mb-20 w-full bg-black h-52 mt-5 rounded-md relative flex justify-center items-center">
      <div className="absolute bottom-[-60px] flex flex-col gap-2 items-center ">
        <Avatar className="bg-white size-20  border-black border-2">
          <UserImage />
          
        </Avatar>
        <UserName />
      </div>
    </div>
  );
}

export default UserHeader;
