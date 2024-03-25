import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import useGameQuery from '../store';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';



const NavBar = () => {


  const  setSearch = useGameQuery(s=> s.setSearchText)
  const navigate = useNavigate()
  const searchInput = useCallback((text:string) => {
    setSearch(text)
    navigate("/")
  }, [setSearch])
  return (
    <HStack padding='10px'>
          <Link to={"/"}>

      <Image src={logo} boxSize='60px'/>

          </Link>
      <SearchInput onSearch={searchInput} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
