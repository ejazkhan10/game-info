import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform"
import usePlatforms from "../hooks/usePlatforms"
import useGameQuery from "../store";



const PlatformSelector = () => {
  const { data, error } = usePlatforms()
  const platformId = useGameQuery(s => s.gameQuery.platformId)
  const selectPlatformId = useGameQuery(s => s.setPlatformId)
  const selectedPlatform = usePlatform(platformId)
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results?.map(platform => <MenuItem onClick={() => selectPlatformId(platform.id)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
