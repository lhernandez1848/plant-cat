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
  questions.length = 6;

  return (
    <section className="grid max-w-screen px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
      <h3 className="text-4xl text-gray-900 mb-2">Grow with confidence, every day</h3>
      <p className="text-gray-500 mb-10">Wondering how to help your plants thrive? Explore our most common questions.</p>
       <Suspense fallback={<div>Loading FAQ...</div>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10">
          {questions.map((q) => (
            <div  key={q.id} className="py-4 px-6 border-s border-gray-400">
              <h4 className="font-medium text-xl mb-2">{q.question}</h4>
              <p className="text-gray-600 mb-4">{q.answer}</p>
            </div>
          ))}
        </div>       
      </Suspense>
    </section>
  )
}