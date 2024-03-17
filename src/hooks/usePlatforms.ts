import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";


const apiClient = new APIClient<Platform>("/platforms/lists/parents")
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    initialData: {results: platforms, count: platforms.length, next: null}
  })
}

export default usePlatforms;
