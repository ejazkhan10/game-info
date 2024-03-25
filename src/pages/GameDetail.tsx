import { Button, Heading, Spinner, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useLocation, useParams, useSearchParams } from "react-router-dom"
import GameAttributes from "../components/GameAttributes"
import GameScreenShots from "../components/GameScreenShots"
import GameTrailer from "../components/GameTrailer"
import useGame from "../hooks/useGame"
import useGameTrailers from "../hooks/useGameTrailers"

const GameDetail = () => {

  const [text_expanded, set_text_expanded] = useState(false)

    const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  console.log(searchParams.toString(), searchParams.get("id"))

  console.log(params)

  const location = useLocation()

  console.log(location)

  const {data, error, isLoading} = useGame({slug: params.slug!})

  if (error) return null;

  if (isLoading) return <Spinner/>

    return (
      <>
        <Heading>
        {data?.name}
        </Heading>
        <Text>{text_expanded ? data?.description_raw : data?.description_raw.substring(0, 100) + "..."}</Text>
        <Button onClick={() => set_text_expanded(!text_expanded)}> {text_expanded ? "Show Less": "Show More"}</Button>


        <GameAttributes game={data}/>

        <GameTrailer gameId={data?.id}/>
        <GameScreenShots gameId={data?.id}/>
        </>
    )
}


export default GameDetail
