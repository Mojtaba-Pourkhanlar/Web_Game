import { SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { GameQuery } from "../App"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./GameCardSkeleton"

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery)
    const skeleton = [1, 2, 3, 4, 5, 6, 7]

    if (error) return <Text>{error.message}</Text>
    const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
    return (
        // <Box padding="10px">
        <InfiniteScroll dataLength={fetchedGamesCount} hasMore={!!hasNextPage} next={() => fetchNextPage()} loader={<Spinner />}>
            <SimpleGrid padding="10px" columns={{
                sm: 1, md: 2, lg: 3, xl: 4
            }} spacing={6} >
                {isLoading && skeleton.map((skelet) => <GameCardContainer key={skelet}> <GameCardSkeleton /></GameCardContainer>)}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {
                            page.results.map((game) => (
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game} />
                                </GameCardContainer>
                            ))
                        }
                    </React.Fragment>
                ))}
            </SimpleGrid>
        </InfiniteScroll>
            // {/* {hasNextPage && <Button marginY={5} onClick={() => fetchNextPage()}>{isFetchingNextPage ? "Loading ..." : "Load More"}</Button>} */ }
        // </Box>

    )
}

export default GameGrid