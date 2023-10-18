import logo from "../../climbing-craft-logo.png";
import Image from "next/image";

const features = [
  {
    name: "Empower Climbers",
    description:
      "Guide climbers of all levels, inspiring and empowering them on their journey.",
    emoji: "💪",
  },
  {
    name: "Personalized Coaching",
    description:
      "Tailor coaching to meet each climber's unique needs and goals. Add your own services, prices, and create personalized training plans for success.",
    emoji: "🎯",
  },
  {
    name: "Diverse Expertise",
    description:
      "We welcome coaches, athletes, route setters, and climbers who consider themselves experts in specific areas. Offer your valuable insights, skills, and guidance for our community.",
    emoji: "🌍",
  },
  {
    name: "Secure Platform",
    description:
      "Connect with climbers, schedule video consultations, as well as in-person sessions, and receive payments seamlessly on our secure and user-friendly platform.",
    emoji: "🔒",
  },
  {
    name: "Support Your Passion",
    description:
      "Working with Climbing Craft can be a part-time job that allows you to support your climbing endeavors while sharing your expertise with others.",
    emoji: "💸",
  },
  {
    name: "Community Engagement",
    description:
      "Join an active and supportive community of climbing mentors, where you can share experiences, exchange insights, connect with fellow coaches, and learn from each other.",
    emoji: "🤝",
  },
];
export const Features = () => (
  <div className="bg-white py-16" id="features">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <Image
          className="h-16 w-16 inline-block"
          src={logo}
          alt="Climbing Craft"
        />
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Climbing Craft
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Climbing Craft is a comprehensive platform designed to connect
          climbing experts with climbers of all levels, from beginners to
          advanced enthusiasts. It aims to enhance the learning and training
          experience for climbers by providing them with personalized coaching,
          analysis, and guidance.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                  <span className="text-3xl">{feature.emoji}</span>
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);
