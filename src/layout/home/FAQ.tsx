import Accordion from "@/components/Accordion";

type Question = {
  id: string | number;
  question: string;
  answer: string;
};

export default async function FAQ() {
  const data = await fetch(`${process.env.API_BASE_URL}/api/article-faq-list?key=${process.env.API_KEY}&page=1`);
  const response = await data.json();
  const questions = response.data as Question[];
  questions.length = 8; // Limit to 8 questions

  return (
    <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
      <h3 className="text-4xl mb-6 ">FAQs</h3>
      <div>
        {questions.map((q) => (
          <Accordion key={q.id} id={q.id} question={q.question} answer={q.answer} />
        ))}
      </div>
    </section>
  )
}