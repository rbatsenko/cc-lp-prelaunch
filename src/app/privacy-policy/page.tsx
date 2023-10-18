import { Metadata } from "next";

const title = "Privacy Policy - Climbing Craft";
const description =
  "At Climbing Craft, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and store your personal information as part of our climbing coaching platform.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "climbing",
    "coaching",
    "coach",
    "mentorship",
    "mentor",
    "training",
    "climbing craft",
    "privacy policy",
  ],
  openGraph: {
    title,
    description,
  },
};

const PrivacyPolicy = () => (
  <div className="bg-white px-6 py-32 lg:px-8">
    <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Privacy policy
      </h1>
      <div className="mt-6 max-w-2xl">
        <p>
          At Climbing Craft, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and store your personal
          information as part of our climbing coaching platform.
        </p>
        <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
          Information Collection
        </h2>
        <p className="mt-4">
          When you visit our landing page, we collect your email, first name,
          and last name to enhance your experience on our platform. We ensure
          that this information is securely stored and only accessed by
          authorized individuals.
        </p>
        <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
          Information Usage
        </h2>
        <p className="mt-4">
          The information we collect is solely used for the purpose of providing
          you with services on our climbing coaching platform. We will not share
          your personal information with any third parties without your consent.
        </p>
        <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
          Information Storage
        </h2>
        <p className="mt-4">
          We store your personal information securely using industry-standard
          security measures. We take all reasonable steps to protect your
          information from unauthorized access, use, or disclosure.
        </p>
        <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
          Updates to Privacy Policy
        </h2>
        <p className="mt-4">
          This Privacy Policy may be updated from time to time. We will notify
          you of any significant changes by sending an email to the address
          provided or by posting a notice on our website.
        </p>
        <p className="mt-4">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at{" "}
          <a
            href="mailto:contact@climbingcraft.com"
            className="font-semibold text-indigo-600"
          >
            contact@climbingcraft.com
          </a>
          .
        </p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
