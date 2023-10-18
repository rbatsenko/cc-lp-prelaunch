import { Metadata } from "next";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { Form } from "./_components/Form";

const description =
  "Join our exclusive community of climbing mentors and share your knowledge with climbers eager to learn, grow, and become better. Tailor coaching to meet each climber's unique needs and goals. Connect with climbers, schedule video consultations, and receive payments seamlessly on our secure platform.";

export const metadata: Metadata = {
  title: "Join as a Coach - Climbing Craft",
  description,
  keywords: [
    "climbing",
    "coaching",
    "coach",
    "mentorship",
    "mentor",
    "training",
    "climbing craft",
  ],
  authors: {
    name: "Climbing Craft",
  },
  openGraph: {
    title: "Join as a Coach - Climbing Craft",
    description,
  },
};

const Coaches = () => (
  <>
    <Hero />
    <Features />
    <Form />
  </>
);

export default Coaches;
