import useGames from "../hooks/useGames"
import { SimpleGrid, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"



const GameGrid = () => {
    const { games, error, loading } = useGames()
    const skeleton = [1, 2, 3, 4, 5, 6, 7]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{
                sm: 1, md: 2, lg: 3, xl: 5
            }} spacing={10} padding="10px">

                {loading && skeleton.map((skelet) => <GameCardSkeleton key={skelet} />)}
                {
                    games?.map((game) =>
                        <GameCard key={game.id} game={game} />
                    )
                }
            </SimpleGrid>
        </>
    )
}

export default GameGrid