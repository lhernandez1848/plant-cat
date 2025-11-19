import { getCareTips } from "@/lib/api";
import { capitalizeEachWord, capitalizeFirstLetter } from "@/lib/utilities";

export default async function CareGuide({ id, name }: { id: number ; name: string }) {
  const care = await getCareTips(id);

  return (
    <div>
      <h2 className="text-4xl mb-8 text-gray-900">{capitalizeEachWord(name)} Care</h2>
      {care[0].section.map((item: any) => (
        <div key={item.id} className="mb-6">
          <h3 className="text-3xl mb-3 text-gray-800">{capitalizeFirstLetter(item.type)}</h3>  
          <p className="text-[1.1rem] tracking-[.02em] text-gray-800">{item.description}</p>
        </div>
      ))}
    </div>
  );
}