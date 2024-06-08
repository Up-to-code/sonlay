"use client";
import { Pencil } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";

function Edit_Name() {
  const [Name, setName] = useState("");
 const HeadlerSave = async () => {



 }
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
  
          <Pencil className="cursor-pointer" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure? you want edit your name
            </AlertDialogTitle>
            <div className="grid gap-4 py-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" onChange={(e) => setName(e.target.value)} />
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction >Save</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Edit_Name;
function setProfile(arg0: (prevProfile: any) => any) {
  throw new Error("Function not implemented.");
}

