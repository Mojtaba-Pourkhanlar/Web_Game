import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenre from "../hooks/useGenre"
import usePlatforms from "../hooks/usePlatforms"
interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
    const { data: genres } = useGenre();
    const genre = genres?.results.find(g => g.id === gameQuery.genreId)

    const { data: platforms } = usePlatforms()
    const selectorPlatforms = platforms?.results.find((p) => p.id === gameQuery.platformId)

    const textHeading = `${selectorPlatforms?.name || ""} ${genre?.name || ""} Games`
    return (
        <Heading as="h1" marginY={5} fontSize="5xl">{textHeading}</Heading>
    )
}

export default GameHeading