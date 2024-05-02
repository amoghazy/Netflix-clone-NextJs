"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import LayOut from "@/components/LayOut";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handelSignIn = async () => {
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };
  const handelSignInGit = async () => {
    signIn("github", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <LayOut
      showSearch={false}
      clsx="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/8b02bc99-bf25-4b2e-ac77-0a5e07a0abd3/EG-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg')]"
    >
      <div className="bg-black bg-opacity-65 max-w-[450px] mx-auto p-16 ">
        <h1 className="text-3xl mb-6 font-bold">Sign In</h1>
        <div className="mb-6">
          <Input
            id="email"
            lable="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <Input
            id="password"
            lable="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <div className="mb-4">
          <Button onClick={handelSignIn} lable="Sign In" />
          <hr className="mb-4 mt-4" />
          <button
            type="button"
            onClick={handelSignInGit}
            className="text-white w-full text-center bg-[#24292F] hover:bg-[#24295F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 justify-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd"
              />
            </svg>
            Sign in with Github
          </button>
        </div>
        <div>
          <span className="opacity-60"> New to Netflix? </span>{" "}
          <span
            onClick={() => {
              router.push("/auth/signup");
            }}
            className="cursor-pointer"
          >
            Sign up now.
          </span>
        </div>
      </div>
    </LayOut>
  );
}