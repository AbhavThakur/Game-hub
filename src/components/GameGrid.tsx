import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

function GameGrid() {
  const { Game, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={'10px'}
      >
        {isLoading &&
          skeleton.map((_, index) => <GameCardSkeleton key={index} />)}
        {Game.map((game) => (
          <GameCard Game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
