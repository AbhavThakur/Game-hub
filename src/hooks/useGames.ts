import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [
    {
      platform: Platform;
    }
  ];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [Game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGameResponse>('/games', {
        signal: controller.signal,
      })
      .then((response) => {
        {
          setGame(response.data.results);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          return;
        }
        setError(error.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { Game, error, isLoading };
};

export default useGames;
