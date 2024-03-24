import { useLocation, useParams, useSearchParams } from "react-router-dom"

const GameDetail = () => {

    const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  console.log(searchParams.toString(), searchParams.get("id"))

  console.log(params)

  const location = useLocation()

  console.log(location)

    return (
        <p>Game - {params.id}</p>
    )
}


export default GameDetail
