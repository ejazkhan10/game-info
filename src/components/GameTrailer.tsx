import { Spinner } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers"

interface Props {
    gameId: number
}

const GameTrailer = ({gameId}: Props) => {

    const {data, error, isLoading} = useGameTrailers({gameId})
    const first = data?.results?.[0]
    if(error) return null
    if(isLoading) return <Spinner/>
    return first ? (
        <video src={first?.data["480"]}
        poster={first?.preview}
        controls
        />


    ): null;
}


export default GameTrailer
