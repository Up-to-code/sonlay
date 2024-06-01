"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../data/DB";
import { usePathname, useRouter } from "next/navigation";

function Meduilwere() {
  const path = usePathname();
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  if (path == "/") {
  } else if (loading) {
  } else {
    if (user != null) {
      if ((path == "/sign-up" || path == "/sign-in") && user != null) {
        router.push("/user");
      }
    } else {
      if (path == "/sign-up") return <></>;
      else router.replace("/sign-in");
    }
  }

  return <></>;
}

export default Meduilwere;
