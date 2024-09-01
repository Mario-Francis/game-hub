import Game from "../types/Game";
import { GameQuery } from "../types/GameQuery";
import useData from "./useData";

const useGames = (gameQuery: GameQuery | null) => {
    return useData<Game>("/games", {
        params: {
            genres: gameQuery?.genre?.id,
            parent_platforms: gameQuery?.platform?.id,
            ordering: gameQuery?.sortOrder,
            search: gameQuery?.searchText
        }
    }, [gameQuery]);
}

export default useGames;