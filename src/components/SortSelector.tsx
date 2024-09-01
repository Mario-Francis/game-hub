import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder:string;
};
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrder = sortOrders.find(o=> o.value == sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrder?.label}
      </MenuButton>

      <MenuList>
        {sortOrders.map((o) => (
          <MenuItem key={o.value} value={o.value} onClick={()=> onSelectSortOrder(o.value)}>
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
