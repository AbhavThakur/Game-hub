import { Image, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

function GameGrid() {
  const { Game, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {Game.map((game) => (
          <li key={game.id}>
            <Image src={game.background_image} boxSize="200px" />
            {game.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
