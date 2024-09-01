import { GameQuery } from "../types/GameQuery";
import { Heading } from "@chakra-ui/react";

type Props = {
  query: GameQuery;
};

const GameHeading = ({ query }: Props) => {
  const heading = `${query.platform?.name ?? ""} ${
    query.genre?.name ?? ""
  } Games`;
  return <Heading as="h1" marginY={5} fontSize="5xl">{heading}</Heading>;
};

export default GameHeading;
