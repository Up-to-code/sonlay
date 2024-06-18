import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Image from "next/image";
import UserImage, { UserName } from "./USersComponts";
import Link from "next/link";

function NavBare() {
  return (
    <>
      <div className="h-12"></div>
      <nav className="m-auto h-14 w-full max-w-5xl px-2 md:px-4 lg:px-6 flex items-center justify-between fixed top-0 mr-auto bg-white z-10">
        <Link href="/home">
          <Image
            src="/logo.png"
            width={"110"}
            height={"50"}
            alt="logo"
            loading="lazy"
          />
        </Link>
        <div className="flex items-center gap-4">
          <UserName />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="bg-white size-9  border-2 ">
                <UserImage ClassName="  " />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/user">Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/user/settings">Settings</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
}

export default NavBare;
