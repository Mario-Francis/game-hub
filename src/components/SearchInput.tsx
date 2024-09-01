import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}:Props) => {
  const input = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        onSearch(input.current?.value!);
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={input}
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
