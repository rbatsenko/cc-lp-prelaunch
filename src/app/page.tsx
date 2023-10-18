import { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const Home = () => (
  <main className="flex min-h-screen justify-center items-center p-4">
    <h1 className="text-2xl font-bold text-center sm:text-3xl">
      Climbing Craft
    </h1>
  </main>
);

export default Home;
