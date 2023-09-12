import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import {
  GameGrid,
  GenreList,
  NavBar,
  PlatformSelector,
  SortSelector,
} from './components';

import GameHeading from './components/GameHeading';
import { Platform } from './hooks/useGames';
import { Genre } from './hooks/useGenres';

export interface QueryParams {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  search: string;
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
        <NavBar
          onSearch={(search) => {
            setGameQuery({ ...GameQuery, search });
          }}
        />
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
        <Box paddingLeft={2}>
          <GameHeading gameQuery={GameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={GameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...GameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={GameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...GameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
