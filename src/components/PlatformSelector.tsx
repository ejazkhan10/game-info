import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform"
import usePlatforms from "../hooks/usePlatforms"
import useGameQuery from "../store";



const PlatformSelector = () => {
  const { data, error } = usePlatforms()
  const {gameQuery, setPlatformId} = useGameQuery()
  const selectedPlatform = usePlatform(gameQuery.platformId)
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results?.map(platform => <MenuItem onClick={() => setPlatformId(platform.id)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
