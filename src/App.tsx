import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import { GameGrid, GenreList, NavBar } from './components';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import { Genre } from './hooks/useGenres';

export interface QueryParams {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [GameQuery, setGameQuery] = useState<QueryParams>({} as QueryParams);
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
            Selected={GameQuery.genre}
            onSelected={(genre) => setGameQuery({ ...GameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={GameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...GameQuery, platform })
          }
        />
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
