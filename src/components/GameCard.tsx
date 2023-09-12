import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

interface Props {
  Game: Game;
}

function GameCard({ Game }: Props) {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={getCroppedImageUrl(Game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIconList
            Platform={Game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={Game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{Game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
