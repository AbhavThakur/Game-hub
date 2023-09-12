import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface NavBarProps {
  onSearch: (e: string) => void;
}

function NavBar({ onSearch }: NavBarProps) {
  return (
    <HStack padding="10px">
      <Image boxSize="60px" src={logo} />
      <SearchInput onSearch={(e) => onSearch(e)} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
