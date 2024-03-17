import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGamesCount = data?.pages.reduce((a, b) => a + b.results.length, 0) || 0;

  if (error) return <Text>{error}</Text>;

  return (
    <>


  <InfiniteScroll
  dataLength={fetchedGamesCount}
  next={() => fetchNextPage()}
  hasMore={!!hasNextPage}
  loader={<Spinner/>}
  >
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

      {data?.pages.map((page) => (
        page.results.map((game) =>  (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
        )
      )))}
    </SimpleGrid>
      </InfiniteScroll>

    {/* <Button className="btn-primary" onClick={() => fetchNextPage()}>

      {isFetchingNextPage ? "Loading" : "Load More"}

      </Button> */}
    </>
  );
};

export default GameGrid;
