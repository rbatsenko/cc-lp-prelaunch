"use client";

import { SignUpFormData } from "@/lib/form";
import { Geo } from "@vercel/edge";
import Link from "next/link";
import Script from "next/script";
import { FormEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ReCaptchaScript = () => (
  <Script
    src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA}`}
  />
);

const signUp = (captcha: string, formData: FormData, metadata?: Geo) => {
  const loadingToastId = toast.loading("Signing up...");

  fetch("/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      captcha,
      ...Object.fromEntries(formData),
      metadata,
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Something went wrong.");

      toast.success("Thank you for signing up! We'll be in touch soon.");
    })
    .catch(() => {
      toast.error("Something went wrong. Please try again.");
    })
    .finally(() => {
      toast.dismiss(loadingToastId);
    });
};

export const SignUpForm = () => {
  const [metadata, setMetadata] = useState<
    SignUpFormData["metadata"] | undefined
  >(undefined);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    grecaptcha.ready(() => {
      grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA!, { action: "submit" })
        .then((token) => signUp(token, formData, metadata));
    });
  };

  useEffect(() => {
    fetch("/api/metadata")
      .then((res) => res.json())
      .then((data) => {
        setMetadata(data);
      });
  }, []);

  return (
    <>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
          <div>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                placeholder="First name"
                required
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                placeholder="Last name"
                required
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Email"
                required
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Sign Up
          </button>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-300 text-right">
          We care about your data. Read our{" "}
          <Link
            href="/privacy-policy"
            target="_blank"
            className="font-semibold text-white"
          >
            privacy policy
          </Link>
          .
        </p>
      </form>
      <ReCaptchaScript />
      <Toaster />
    </>
  );
};
