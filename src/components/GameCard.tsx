import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';

interface Props {
  Game: Game;
}

function GameCard({ Game }: Props) {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={Game.background_image} />
      <CardBody>
        <Heading fontSize={'2xl'}>{Game.name}</Heading>
        <PlatformIconList
          Platform={Game.parent_platforms.map((platform) => platform.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
