type PlantProps = {
  id: number;
  common_name: string;
  scientific_name: [string];
  other_name: [string];
  family: string;
  genus: string;
  image_url?: string;
}

export default function Card(plant : PlantProps) {
  const scientificName = plant.scientific_name.length > 0 ? plant.scientific_name.join(', ') : 'N/A';
  const otherName = plant.other_name.length > 0 ? plant.other_name.join(', ') : 'N/A';
  const family = plant.family && plant.family.length > 0 ? plant.family : 'N/A';
  const genus = plant.genus && plant.genus.length > 0 ? plant.genus : 'N/A';

  return (
    <div className="max-w-max h-full bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col">
      <img className="rounded-t-lg" src={plant.image_url ? plant.image_url : '/assets/default-image.jpg'} alt={plant.common_name} />
      <div className="p-5 h-full flex flex-col justify-between">
        <div className="mb-3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-700">{plant.common_name}</h5>
          <p className="font-normal text-gray-700"><span className="font-semibold">Scientific name: </span>{scientificName}</p>
          <p className="font-normal text-gray-700"><span className="font-semibold">Other name: </span>{otherName}</p>
          <p className="font-normal text-gray-700"><span className="font-semibold">Family: </span>{family}</p>
          <p className="font-normal text-gray-700"><span className="font-semibold">Genus: </span>{genus}</p>
        </div>        
        <a href={`/details/${plant.id}`} className="inline-flex font-medium items-center text-teal-600 hover:text-teal-800">
        Learn more 
        </a>
      </div>
    </div>
  )
}