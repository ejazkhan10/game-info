import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import useGameQuery from "../store"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"


const HomePage = () => {
    const {gameQuery} = useGameQuery()

    return (
      <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
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
      </Grid>
    )
}


export default HomePage
