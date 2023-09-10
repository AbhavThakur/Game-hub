import { useGenres } from '../hooks';

function GenreList() {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
