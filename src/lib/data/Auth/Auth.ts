
import {
  createUserWithEmailAndPassword,

  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../DB";



export async function signUp(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signIn(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
