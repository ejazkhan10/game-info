import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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

  return useInfiniteQuery({
    queryKey: gameQuery ? ["games", gameQuery] : ["games"],
    queryFn: ({pageParam = 1}) => apiClient.getAll({params: {
      genres: gameQuery.genreId,
              platforms: gameQuery.platformId,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
              page: pageParam,
              page_size: gameQuery.pageSize

    }}),

    staleTime: 60*60 * 1000,
    getNextPageParam: (last_page, all_pages) => {
      return last_page.next ? all_pages.length +1 : undefined;
    }
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
