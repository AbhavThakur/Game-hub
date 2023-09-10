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
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [Game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>('/games', {
        signal: controller.signal,
      })
      .then((response) => {
        setGame(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          return;
        }
        setError(error.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { Game, error };
};

export default useGames;
