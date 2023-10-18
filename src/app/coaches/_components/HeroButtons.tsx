"use client";

import Link from "next/link";

export const HeroButtons = () => {
  const handleClickSignUp = () => {
    console.info("Sign Up button clicked");
  };

  const handleClickLearnMore = () => {
    console.info("Learn More button clicked");
  };

  return (
    <>
      <Link
        href="#signup"
        onClick={handleClickSignUp}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Join as a Coach
      </Link>
      <Link
        href="#features"
        onClick={handleClickLearnMore}
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Learn more <span aria-hidden="true">→</span>
      </Link>
    </>
  );
};
