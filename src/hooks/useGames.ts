import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { GameQuery } from "../store";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games")
const useGames = (gameQuery: GameQuery) => {

  return useInfiniteQuery({
    queryKey: gameQuery ? ["games", gameQuery] : ["games"],
    queryFn: ({pageParam = 1}) => apiClient.getAll({params: {
      genres: gameQuery.genreId,
              platforms: gameQuery.platformId,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchText,
              page: pageParam,
              page_size: 10

    }}),

    staleTime: ms('24h'),
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
