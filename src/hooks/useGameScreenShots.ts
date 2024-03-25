import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import GameTrailer from "../entities/GameTrailer";
import GameScreenShot from "../entities/GameScreenShot";


interface GameScreenShotsQuery {
  gameId: number;
}

const useGameScreenShots = (query: GameScreenShotsQuery) => {
    const apiClient = new APIClient<GameScreenShot>(`games/${query.gameId}/screenshots`)

  return useQuery({
    queryKey: ["gameScreenShot", query],
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

export default useGameScreenShots;
