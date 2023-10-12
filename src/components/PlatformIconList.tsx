import { Platform } from '../hooks/usePlatforms'
import { SiNintendo } from "react-icons/si"
import { MdPhoneIphone } from "react-icons/md"
import { BsGlobe } from "react-icons/bs"
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa"
import { IconType } from "react-icons"
import { Icon } from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        android: FaAndroid,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack marginY={1}>
            {platforms?.map((plateform) => <Icon key={plateform.id} as={iconMap[plateform.slug]} color="gray.500" />)}
        </HStack>
    )
}

export default PlatformIconList