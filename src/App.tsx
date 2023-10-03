import React, { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenre'

const App = () => {
  const [seletedGenre, setSeletedGenre] = useState<Genre | null>(null)
  console.log('seletedGenre', seletedGenre)
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }}
    >
      <GridItem area="nav" ><Navbar /></GridItem>
      <Show above='lg'>
        <GridItem area="aside" paddingX={5}><GenreList selectedGenre={seletedGenre} onSelectGenre={(genre) => setSeletedGenre(genre)} /></GridItem>
      </Show>
      <GridItem area="main"><GameGrid selectGenre={seletedGenre} /></GridItem>
    </Grid>
  )
}

export default App