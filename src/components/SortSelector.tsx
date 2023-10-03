import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Data addes" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release data" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Averade rating" },
    ]
    const contactSortOrder = sortOrders.find((order) => order.value === sortOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {contactSortOrder?.label || "Relevance"}</MenuButton>
            <MenuList>
                {
                    sortOrders.map((order) =>
                        <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>
                    )
                }
            </MenuList>
        </Menu>
    )
}

export default SortSelector