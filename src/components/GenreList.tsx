import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const {data: genres } = useGenres();

  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} paddingY='5px'>
            <HStack>
                <Image src={getCroppedImageUrl(g.image_background)} boxSize='32px' borderRadius='8px' />
                <Text fontSize='lg'>{g.name}</Text>
            </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
