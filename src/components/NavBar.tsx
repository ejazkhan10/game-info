import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import useGameQuery from '../store';
import { Link } from 'react-router-dom';



const NavBar = () => {

  const  setSearch = useGameQuery(s=> s.setSearchText)
  return (
    <HStack padding='10px'>
          <Link to={"/"}>

      <Image src={logo} boxSize='60px'/>

          </Link>
      <SearchInput onSearch={setSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
