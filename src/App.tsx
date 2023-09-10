import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import { GameGrid, GenreList, NavBar } from './components';
import PlatformSelector from './components/PlatformSelector';
import { Genre } from './hooks/useGenres';

function App() {
  const [onSelected, setSelected] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelected={(genre) => setSelected(genre)}
            Selected={onSelected}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector />
        <GameGrid selectedGenre={onSelected} />
      </GridItem>
    </Grid>
  );
}

export default App;
