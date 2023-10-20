import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from "../entities/Platform";
import usePlatform from '../hooks/usePlatform';

interface Props {
    onSelecPlatform: (platform: Platform) => void;
    selectedPlatformId?: number
}

const PlatformSelector = ({ onSelecPlatform, selectedPlatformId }: Props) => {
    const { data, error, isLoading } = usePlatforms()
    const platform = usePlatform(selectedPlatformId)

    if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{platform?.name || "Platform"}</MenuButton>
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