import { getCareTips } from "@/lib/api";
import { capitalizeFirstLetter } from "@/lib/utilities";

export default async function CareGuide({ id }: { id: number  }) {
  const care = await getCareTips(id);

  return (
    <div>
      <h2 className="text-2xl mb-4 text-gray-900">Care Guide</h2>
      {care[0].section.map((item: any) => (
        <div key={item.id} className="mb-6 text-gray-700">
          <h3 className="text-2xl mb-2">{capitalizeFirstLetter(item.type)}</h3>  
          <p className="text-[1.05rem]">{item.description}</p>
        </div>
      ))}
    </div>
  );
}