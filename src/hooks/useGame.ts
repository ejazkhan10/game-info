import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import Game from "../entities/Game";


export interface SingleGameQuery {
    slug: String
}

const useGame = (query: SingleGameQuery) => {
    const apiClient = new APIClient<Game>(`/games/${query.slug}`)

  return useQuery({
    queryKey: ["game", query],
    queryFn: () => apiClient.get(),

    staleTime: ms('24h'),

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

export default useGame;
