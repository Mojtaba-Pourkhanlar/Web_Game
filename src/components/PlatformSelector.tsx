import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface Props {
    onSelecPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelecPlatform, selectedPlatform }: Props) => {
    const { data, error, isLoading } = usePlatforms()
    if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || "Platform"}</MenuButton>
            <MenuList>
                {
                    isLoading ? <Spinner /> :
                        data?.results.map((platform) =>
                            <MenuItem onClick={() => onSelecPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
                        )
                }
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector