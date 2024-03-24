import { Box, Flex, GridItem, Show } from "@chakra-ui/react"
import useGameQuery from "../store"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"


const HomePage = () => {
    const {gameQuery} = useGameQuery()

    return (
        <>
        <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList  />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector  />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
      </>
    )
}


export default HomePage
