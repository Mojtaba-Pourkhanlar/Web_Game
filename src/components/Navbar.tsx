import { HStack, Image } from '@chakra-ui/react'
import Logo from "../assets/logo.webp"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom';
interface Props {
    onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack padding="10px">
            <Link to="/">
                <Image src={Logo} boxSize="60px" objectFit="cover" />
            </Link>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar