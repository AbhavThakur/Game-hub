import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={10}
        placeholder="Search games.."
        variant={'filled'}
      />
    </InputGroup>
  );
}

export default SearchInput;
