import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games")
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}


const useGames = (gameQuery: GameQuery) => {

  return useQuery({
    queryKey: gameQuery ? ["games", gameQuery] : ["games"],
    queryFn: () => apiClient.getAll({params: {
      genres: gameQuery.genre?.id,
              platforms: gameQuery.platform?.id,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText
    }}),

    staleTime: 60*60 * 1000,
  })
}

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText
//       },
//     },
//     [gameQuery]
//   );

export default useGames;
