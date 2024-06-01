import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { auth, db } from "../data/DB";

interface User {
  name: string;
  userType: "user" | "admin";
  Fiverit: object;
  userImage: string;
}

interface UserStore {
  user: User;
  getUser: () => Promise<void>;
}

export const useUserDatat = create<UserStore>()((set) => ({
  user: {
    name: "userName",
    userType: "user",
    Fiverit: {},
    userImage: "",
  },
  getUser: async () => {
    if (auth.currentUser?.uid) {
      const docRef = doc(db, "users", auth.currentUser?.uid);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (data) {
        set((state) => {
          if (state.user.name != "userName") {
            const user = state.user;
            return {
              user: {
                name: user.name,
                Fiverit: user.Fiverit,
                userType: user.userType,
                userImage: user.userImage,
              },
            };
          }

          return {
            user: {
              name: data.name as string | "",
              Fiverit: data.Fiverit as object | {},
              userType: data.userType == "admin" ? "admin" : "user",
              userImage: data.UserImage as string | "",
            },
          };
        });
      }
    }
  },
}));
