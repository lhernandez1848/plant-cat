'use client'

import { capitalizeEachWord } from "@/lib/utilities";
import { useState } from "react";

type PlantProps = {
  id: number;
  common_name: string;
  scientific_name?: string[];
  image_url?: string;
}

export default function Card(plant : PlantProps) {
  const scientificName = plant.scientific_name && plant.scientific_name.length > 0 ? plant.scientific_name.join(', ') : null;
  const [imgSrc, setImgSrc] = useState(plant.image_url ? plant.image_url : '/assets/default-image.png');

  return (
    <a href={`/details/${plant.id}`} className="w-full h-full flex flex-col transition-transform duration-300 hover:scale-105">
      <img className="rounded-t-lg mb-2 w-full h-40 object-cover" src={imgSrc} alt={plant.common_name} onError={() => setImgSrc('/assets/default-image.png')} />
      <h5 className="text-lg md:text-xl lg:text-2xl title-font text-gray-800 break-all">{capitalizeEachWord(plant.common_name)}</h5>
      {scientificName && <p className="font-normal text-gray-700">{scientificName}</p>}
    </a>
  )
}