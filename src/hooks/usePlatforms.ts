import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";


const apiClient = new APIClient<Platform>("/platforms/lists/parents")
const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    initialData: {results: platforms, count: platforms.length, next: null}
  })
}

export default usePlatforms;
