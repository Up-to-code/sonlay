"use client";

import { useUserDatat } from "@/lib/Store/userStore";
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

import { Input } from "../ui/input";
import { auth, db, storage } from "@/lib/data/DB";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import image from "next/image";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Edit_Image({ children }: { children: React.ReactNode }) {
  const [url, setUrl] = React.useState("");
  const [image, setImage] = React.useState<File | null>(null);
  const [UrlLocal, setUrlLocal] = React.useState<string>();
  const { setUser, user } = useUserDatat();
  const [userAuth] = useAuthState(auth);
  const HeadlerSave = async () => {
    if (image) {
      const storageRef = ref(
        storage,
        `UserImages/${userAuth?.uid}/${userAuth?.uid}.${
          image.type.split("/")[1]
        }`
      );
      try {
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        setUrl(downloadURL);
        if (userAuth?.uid) {
          const docRef = doc(db, "users", userAuth?.uid);
          try {
            await updateDoc(docRef, {
              UserImage: downloadURL,
            });
           if (user.userImage !== downloadURL) {
              const fileRef = ref(storage, user.userImage);
              try {
                await deleteObject(fileRef);
              } catch (error) {
                console.error("Error deleting file: ", error);
              }
            }
            
            if (setUser) {
              setUser({ ...user, userImage: downloadURL });
            }
 
          } catch (error) {
            console.error("Error uploading image: ", error);
          }
        }
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure? you want edit your profile image
            </AlertDialogTitle>
            <div className="grid gap-4 py-4 justify-center">
              <Avatar className="bg-zinc-300 size-24  border-2 ">
                <AvatarImage
                  sizes="40"
                  className="w-20 h-20 m-auto"
                  src={UrlLocal ? UrlLocal : user?.userImage || "/user.jpeg"}
                />
              </Avatar>
            </div>

            <div className="grid gap-4 py-4">
              <Input
                type="file"
                className="text-white"
                id="file"
                name="file"
                accept="image/*"
                placeholder="Select image"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (!file) return;
                  if (file) {
                    setImage(file);
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                      if (reader.result) {
                        setUrlLocal(reader.result as string);
                      }
                    };
                  }
                }}
              />
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction disabled={!image} onClick={HeadlerSave}>
              Save
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Edit_Image;
