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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/data/DB";
import { doc, updateDoc } from "firebase/firestore";
import { useUserDatat } from "@/lib/Store/userStore";

function Edit_Name() {
  const [User, loading, error] = useAuthState(auth);
  const [Name, setName] = useState("");
  const { setUser, user } = useUserDatat();
  const HeadlerSave = async () => {
    if (User?.uid) {
      const docRef = doc(db, "users", User?.uid);
      try {
        await updateDoc(docRef, {
          name: Name,
        });

        if (setUser) {
          setUser({
            ...user,
            name: Name,
          });
        }

        console.log(`Document ${User?.uid} updated successfully`);
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };

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
              <Input
                id="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
               placeholder="Name"
              />
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={HeadlerSave}>Save</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Edit_Name;
