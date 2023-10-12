import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'

interface Props {
    onSelecPlatform: (platform: Platform) => void;
    selectedPlatformId?: number
}

const PlatformSelector = ({ onSelecPlatform, selectedPlatformId }: Props) => {
    const { data, error, isLoading } = usePlatforms()
    const selectorPlatforms = data?.results.find((p) => p.id === selectedPlatformId)
    if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectorPlatforms?.name || "Platform"}</MenuButton>
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