import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(g.image_background)}
              boxSize="32px"
              borderRadius="8px"
            />
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
