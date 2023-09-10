import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { useGenres } from '../hooks';
import { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelected: (genre: Genre) => void;
}

function GenreList({ onSelected }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'7px'}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={'32px'}
              borderRadius={8}
            />
            <Button
              variant={'link'}
              fontSize={'lg'}
              onClick={() => {
                onSelected(genre);
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
