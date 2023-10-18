import { Metadata } from "next";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { Form } from "./_components/Form";
import { Footer } from "./_components/Footer";

export const metadata: Metadata = {
  title: "Join as a Coach - Climbing Craft",
  description:
    "Are you a passionate climbing coach, an accomplished athlete, or an expert route setter ready to make a real impact in the world of climbing? Join our exclusive community of climbing mentors and share your knowledge with climbers eager to learn, grow, and become better.",
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
