
import React from "react";
import { AlertDialogHeader, AlertDialogFooter, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { auth } from "@/lib/data/DB";

function Logot() {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className=" bg-red-600 text-white font-bold py-2 px-4 rounded">Log Out</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action Log Out your account
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className=" bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => auth.signOut()}>
              Log Out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Logot;
