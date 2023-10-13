import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenre from "../hooks/useGenre"
import usePlatforms from "../hooks/usePlatforms"
import usePlatform from "../hooks/usePlatform"
import useGenree from "../hooks/useGenree"
interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
    const platform = usePlatform(gameQuery.platformId)
    const genre = useGenree(gameQuery.genreId)

    const textHeading = `${platform?.name || ""} ${genre?.name || ""} Games`
    return (
        <Heading as="h1" marginY={5} fontSize="5xl">{textHeading}</Heading>
    )
}

export default GameHeading