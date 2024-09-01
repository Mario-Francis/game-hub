import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import Genre from "../types/Genre";

type Props = {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
};
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
    <Heading fontSize="2xl" marginBottom="3">Genres</Heading>
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
            objectFit="cover"
              src={getCroppedImageUrl(g.image_background)}
              boxSize="32px"
              borderRadius="8px"
            />
            <Button
            whiteSpace="normal"
            textAlign="left"
              onClick={() => onSelectGenre(g)}
              fontSize="lg"
              variant="link"
              fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
