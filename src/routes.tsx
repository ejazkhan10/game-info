import { createBrowserRouter } from "react-router-dom";
import App from "./pages/Layout";
import GameDetail from "./pages/GameDetail";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([

    {path: "/", element: <App/>, errorElement: <ErrorPage/>, children: [
        {path: "", element: <HomePage/>},
        {path: "games/:id",element: <GameDetail/>}
    ]}

])


export default router;
