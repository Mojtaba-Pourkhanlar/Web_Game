import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router';
interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()
    return (
        <form style={{ width: "100%" }} onSubmit={(e) => {
            e.preventDefault();
            if (ref.current) {
                onSearch(ref.current.value)
                navigate("/")
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder='Search games...' variant="filled" />
            </InputGroup>
        </form>
    )
}

export default SearchInput