import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameCard, GameCardContainer, GameCardSkeleton } from '.';
import useGames from '../hooks/useGames';

function GameGrid() {
  const { data, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding={'10px'}
      >
        {isLoading &&
          skeleton.map((_, index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton key={index} />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard Game={game} key={game.id} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
