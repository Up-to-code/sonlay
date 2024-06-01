"user client";
import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./data/DB";

export const CreateUserdoc = async (user: User) => {
  await setDoc(doc(db, "users", user.uid), {
    name: user.displayName || "UserName",
    CreateedIn: new Date(),
    userType: "user",
    Fiverit: {},
    UserImage: user.photoURL || "",
  });
};
export const ChickUserAndCreate = async (user: User) => {
  const docRef = doc(db, "users", user.uid);
  try {
    const doc = await getDoc(docRef);
    // console.log("Cached document data:", doc.data());
    if (doc.data() == undefined) {
      CreateUserdoc(user);
    }
  } catch (e) {
    // console.log("Error getting cached document:", e);
  }
};
