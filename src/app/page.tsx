import FAQ from "@/layout/home/FAQ";
import Hero from "@/layout/home/Hero"
import Sugestions from "@/layout/home/Sugestions";

export default function Home() {
  return (
    <main className="min-h-screen max-h-fit grid max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
      <Hero />
      <Sugestions />
      <FAQ />
    </main>
  );
}