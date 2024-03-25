import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameScreenShots from "../hooks/useGameScreenShots";

interface Props {
    gameId: number
}

const GameScreenShots = ({gameId}: Props) => {

    const {data, error, isLoading} = useGameScreenShots({gameId})

    if(error) return null
    if(isLoading) return <Spinner/>
    return  (

        <SimpleGrid columns = {{base: 1, md:2}} spacing={2}>

        <>
        {data?.results.map(image => (<Image key={image.id} src={image.image}  />))}
        </>


        </SimpleGrid>

    )


}


export default GameScreenShots
