import FAQ from "@/layout/home/FAQ";
import Hero from "@/layout/home/Hero"
import Sugestions from "@/layout/home/Sugestions";

export default function Home() {
  return (
    <main className="min-h-full grow grid max-w-screen px-4 py-10 md:px-40 lg:gap-8 xl:gap-0 lg:py-16">
      <Hero />
      <Sugestions />
      <FAQ />
    </main>
  );
}