import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}
function GameGrid() {
  const [Game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>('/games')
      .then((response) => {
        setGame(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {Game.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
