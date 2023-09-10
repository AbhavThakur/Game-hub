import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import { GameGrid, GenreList, NavBar } from './components';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import { Genre } from './hooks/useGenres';

function App() {
  const [onSelectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [onSelectPlatform, setSelectPlatform] = useState<Platform | null>(null);
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
            onSelected={(genre) => setSelectedGenre(genre)}
            Selected={onSelectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={onSelectPlatform}
          onSelectPlatform={(platform) => setSelectPlatform(platform)}
        />
        <GameGrid
          selectedGenre={onSelectedGenre}
          selectedPlatform={onSelectPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
