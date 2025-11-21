import Accordion from "@/components/Accordion";
import Loading from "@/components/Loading";
import { getFAQs } from "@/lib/api";
import { Suspense } from "react";

type Question = {
  id: string | number;
  question: string;
  answer: string;
};

export default async function FAQ() {
  const response = await getFAQs();
  const questions = response as Question[];
  questions.length = 6;

  return (
    <section className="grid w-full px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
      <h3 className="text-4xl text-gray-900 mb-2">Grow with confidence, every day</h3>
      <p className="text-gray-500 mb-10">Wondering how to help your plants thrive? Explore our most common questions.</p>
       <Suspense fallback={<Loading />}>
        <div className="w-full">
          {questions.map((q) => (
            <Accordion key={q.id} question={q.question} answer={q.answer} />
          ))}
        </div>       
      </Suspense>
    </section>
  )
}