import { Box } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"


const ErrorPage = () => {

    const error = useRouteError()
    return (
        <>
        <NavBar/>
        <Box padding={4}>
        <h1> Whoops!!</h1>
        <p>

            {isRouteErrorResponse(error) ? "Page does not exist": "Unexpected error occurred"}

        </p>
        </Box>

        </>
    )
}


export default ErrorPage
