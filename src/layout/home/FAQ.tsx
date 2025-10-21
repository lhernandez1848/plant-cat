import Accordion from "@/components/Accordion";
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
  questions.length = 8;

  return (
    <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
      <h3 className="text-4xl mb-6 ">FAQs</h3>
       <Suspense fallback={<div>Loading FAQ...</div>}>
        <div>
          {questions.map((q) => (
            <Accordion key={q.id} question={q.question} answer={q.answer} />
          ))}
        </div>       
      </Suspense>
    </section>
  )
}