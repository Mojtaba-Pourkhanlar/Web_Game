import { useState } from 'react'
import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import GenreList from '../components/GenreList'
import GameHeading from '../components/GameHeading'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GameGrid from '../components/GameGrid'
export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
}
const HomePage = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
    return (
        <Grid templateAreas={{
            base: `"main"`,
            lg: `"aside main"`
        }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr"
            }}
        >
            <Show above='lg'>
                <GridItem area="aside" paddingX={5}><GenreList selectedGenreId={gameQuery.genreId} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })} /></GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery} />
                    <Flex marginBottom={5}>
                        <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelecPlatform={(platform) => setGameQuery({ ...gameQuery, platformId: platform.id })} />
                        <Box marginX={3} />
                        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
                    </Flex>
                </Box>
                <GameGrid gameQuery={gameQuery} /></GridItem>
        </Grid>
    )
}

export default HomePage