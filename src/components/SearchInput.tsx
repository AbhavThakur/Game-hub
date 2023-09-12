import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchInputProps {
  onSearch: (e: string) => void;
}
function SearchInput({ onSearch }: SearchInputProps) {
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={10}
          placeholder="Search games.."
          variant={'filled'}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
