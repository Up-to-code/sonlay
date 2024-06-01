/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import { useState } from "react";
import { signIn, signUp } from "@/lib/data/Auth/Auth";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { LucideFileWarning } from "lucide-react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/lib/data/DB";
import { ChickUserAndCreate, CreateUserdoc } from "@/lib/CreateUser";
export default function LoginForm({ type }: { type: "Sign-in" | "Sign-up" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState<boolean>(false);
  const [SignInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (type == "Sign-up") {
      const { result, error } = await signUp(email, password);
      if (result?.user != undefined) {
        CreateUserdoc(result.user);
      }
      if (error) {
        setError(true);
        return error
      }
    }
    if (type == "Sign-in") {
      const { result, error } = await signIn(email, password);
      if (error) {
        setError(true);

        return 
      }
    }
  };
  const SigninWithGoogle = async () => {
    const res = await SignInWithGoogle();

    if (res?.user != undefined) {
      ChickUserAndCreate(res.user);
    }
    if (error) {
      setError(true);
    }
  };

  return (
    <div className=" min-h-screen h-lvh flex flex-col justify-center items-center">
      {Error && (
        <Alert className=" min-w-max max-w-sm my-5 ">
          <AlertTitle className="flex gap-5 items-center">
            <LucideFileWarning color="red" /> Error
          </AlertTitle>
          <AlertDescription>Error with {type}</AlertDescription>
        </Alert>
      )}
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{type}</CardTitle>
          <CardDescription>
            Enter your email below to {type} to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleForm}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                {type}
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => SigninWithGoogle()}
                disabled={loading}
              >
                {type} with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              {type == "Sign-in"
                ? " Don&apos;t have an account"
                : " I have have an account?"}
              ?
              <Link
                href={type == "Sign-in" ? "/sign-up" : "/sign-in"}
                className="underline"
              >
                {type == "Sign-in" ? "Sign-up" : "Sign-in"}
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
