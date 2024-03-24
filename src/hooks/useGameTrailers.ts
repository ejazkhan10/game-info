import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import GameTrailer from "../entities/GameTrailer";


interface GameTrailerQuery {
  gameId: number;
}

const useGameTrailers = (query: GameTrailerQuery) => {
    const apiClient = new APIClient<GameTrailer>(`games/${query.gameId}/movies`)

  return useQuery({
    queryKey: ["gameTrailers", query],
    queryFn: () => apiClient.getAll(),

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

export default useGameTrailers;
