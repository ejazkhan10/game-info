import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";





function Layout() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({pageSize:12} as GameQuery);

  return (
    <>
        <NavBar />

      <Box padding={5}>
      <Outlet/>
      </Box>
      </>
  );
}

export default Layout;
