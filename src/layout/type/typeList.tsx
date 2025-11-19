"use client"

import Card from "@/components/Card";
import Loading from "@/components/Loading";
import { getPlantTypesByQuery } from "@/lib/api";
import { filterClassNames } from "@/lib/utilities";
import { use, useState } from "react";

interface MyObject {
  id: number;
  common_name: string;
}

interface AppState {
  data: MyObject[];
  current_page: number;
}

export default function TypeList({ promiseType, params }: { promiseType: Promise<any>; params: string }) {
  const promise = use(promiseType);
  const [species, setSpecies] = useState<AppState>({ data: promise.data, current_page: promise.current_page });
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleClick = async () => {
    setLoading(true);
    const response = await getPlantTypesByQuery(params, species.current_page + 1);
    
    if (response && response.current_page < response.last_page) {
      setSpecies(prevState => ({ ...prevState, data: [...prevState.data, ...response.data], current_page: response.current_page }));
    } else {
      setHasMore(false);
    }
    setLoading(false);
  }

  return <div className="flex flex-col items-center">
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mt-8">
      {species.data.map((item: any, index: number) => (
        <Card key={index} id={item.id} common_name={item.common_name} image_url={item.default_image?.medium_url} />
      ))}      
    </div>
    {hasMore && (
      <button  onClick={handleClick} disabled={loading} type="button" className={filterClassNames(loading ? "text-fg-disabled bg-disabled border border-default-medium shadow-xs focus:outline-none" : "text-teal-800 bg-transparent hover:text-teal-500 border border-teal-800 hover:border-teal-500 focus:ring-4 focus:ring-gray-100 cursor-pointer", "w-fit mt-6 inline-flex items-center justify-center px-8 py-3 text-base font-medium text-center rounded-lg")}>
        { loading 
          ? 
            <Loading text="Loading" color="#5e928f" />
          : 'Load More'
        }
      </button>
    )}
  </div>
}