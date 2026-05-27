"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import AuthImage from "@/assets/auth2.jpg";

import {
  Button,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  TextField,
} from "@heroui/react";

import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { data: authData, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "An error occurred during registration.");
    } else if (authData) {
      toast.success("Login successful! You are now logged in.");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="md:min-h-screen grid lg:grid-cols-2 bg-white">
      <Toaster />
      {/* LEFT SIDE */}
      <div className="relative hidden lg:block">
        <Image src={AuthImage} alt="auth-image" fill className="object-cover" />

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute top-14 left-16 max-w-xl">
          {/* <h1 className="text-white text-6xl font-bold leading-tight">
            To keep connected with largest shop in the world.
          </h1> */}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-6 py-35 md:py-0 lg:px-20">
        <div className="w-full max-w-xl">
          {/* <h2 className="text-3xl font-bold mb-20">Oxyy</h2> */}

          <div className="mb-10">
            <h1 className="text-3xl md:text-6xl font-bold text-black">Login</h1>
          </div>

          <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* NAME */}
            {/* <TextField 
            isRequired>
              <Label className="mb-2 text-base font-medium">Full Name</Label>

              <InputGroup>
                <Input
                  placeholder="Full Name"
                  {...register("name")}
                  className="h-14 rounded-md border border-gray-200 bg-gray-100 px-4"
                />

                <InputGroup.Suffix className="pr-4 text-gray-500"> */}
            {/* <User size={20} /> */}
            {/* </InputGroup.Suffix>
              </InputGroup>
            </TextField> */}

            {/* EMAIL */}
            <TextField
              className=""
              isRequired
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email";
                }

                return null;
              }}
            >
              <Label className="mb-2 text-base font-medium">
                Email Address
              </Label>

              <InputGroup>
                <Input
                  placeholder="Your Email"
                  {...register("email")}
                  className="h-14 w-full rounded-md shadow-md px-4"
                />

                {/* <InputGroup.Suffix className="pr-4 text-gray-500"></InputGroup.Suffix> */}
              </InputGroup>
            </TextField>

            {/* PASSWORD */}
            <TextField isRequired className="">
              <Label>Password</Label>
              <InputGroup className="flex justify-between">
                <Input
                  className="w-full h-14 rounded-md px-4 pr-0"
                  type={isVisible ? "text" : "password"}
                  {...register("password")}
                  placeholder="Your Password"
                />
                {/* <InputGroup.Suffix className="h-14 rounded-md px-4 pr-0"> */}
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
                {/* </InputGroup.Suffix> */}
              </InputGroup>
            </TextField>

            {/* BUTTON */}
            <Button
              type="submit"
              className="w-full h-14 rounded-md bg-[#1B2128] text-white text-xl font-semibold hover:bg-black"
            >
              {" "}
              SignIn{" "}
            </Button>

            {/* SEPARATOR */}
            <div className="flex items-center gap-4 py-2">
              <Separator className="flex-1" />

              <span className="text-sm text-gray-500 whitespace-nowrap">
                Or Continue With
              </span>

              <Separator className="flex-1" />
            </div>

            {/* GOOGLE */}
            <Button
              variant="bordered"
              className="w-full h-14 border border-gray-300 text- font-medium"
              onPress={handleGoogleSignIn}
            >
              <FcGoogle className="text-2xl" />
              Continue with Google
            </Button>

            {/* FOOTER */}
            <div className="w-full text-center text-sm pt-2">
              <Link href="/signin" className="text-blue-600 hover:underline">
                Sign In
              </Link>
              Not a member?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign Up now
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
