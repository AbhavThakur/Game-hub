import { useGenres } from '../hooks';

function GenreList() {
  const { Genre } = useGenres();
  return (
    <ul>
      {Genre.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
