import useGames, { Platform } from "../hooks/useGames"
import { SimpleGrid, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { Genre } from "../hooks/useGenre"
import { GameQuery } from "../App"



interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, loading } = useGames(gameQuery)
    const skeleton = [1, 2, 3, 4, 5, 6, 7]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 5
            }} spacing={3} padding="10px">

                {loading && skeleton.map((skelet) => <GameCardContainer key={skelet}> <GameCardSkeleton /></GameCardContainer>)}

                {
                    data?.map((game) =>
                        <GameCardContainer key={game.id}>
                            <GameCard game={game} />
                        </GameCardContainer>
                    )
                }
            </SimpleGrid>
        </>
    )
}

export default GameGrid