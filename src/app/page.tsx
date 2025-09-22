import FAQ from "@/layout/home/FAQ";
import Hero from "@/layout/home/Hero"

export default function Home() {
  return (
    <div className="max-w-full px-4 py-6 sm:px-6 lg:px-8">
      <Hero />
      <FAQ />
    </div>
  );
}