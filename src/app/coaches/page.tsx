import { Metadata } from "next";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { Form } from "./_components/Form";
import { Footer } from "./_components/Footer";

export const metadata: Metadata = {
  title: "Join as a Coach - Climbing Craft",
  description:
    "Join Climbing Craft as a Coach and start building your profile today!",
};

const Coaches = () => (
  <>
    <Hero />
    <Features />
    <Form />
    <Footer />
  </>
);

export default Coaches;
