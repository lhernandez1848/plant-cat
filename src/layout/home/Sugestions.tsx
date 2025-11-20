import { SUGGESTIONS } from "@/lib/data";
import Link from "next/link";

export default function Sugestions() {
  return (
    <section className="grid max-w-screen px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
      <h3 className="text-4xl text-gray-900 mb-10">Your plant journey starts here</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {SUGGESTIONS.map((link, i) => (
          <Link 
            key={i} 
            href={{ pathname: `/type/${link.slug}`, query: { type: link.type, title: link.title } }} 
            className="cursor-pointer text-gray-900 hover:text-gray-600">
            <img src={link.imgSrc} alt={link.alt} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h4 className="font-medium text-xl mb-2">{link.title}</h4>
            <p className="">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}