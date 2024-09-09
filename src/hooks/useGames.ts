import { useQuery } from "@tanstack/react-query";
import Game from "../types/Game";
import { GameQuery } from "../types/GameQuery";
import apiClient from "../services/api-client";
import FetchResponse from "../types/FetchResponse";

const useGames = (gameQuery: GameQuery | null) => {
    return useQuery<Game[], Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.get<FetchResponse<Game>>('/games', {
            params: {
                genres: gameQuery?.genre?.id,
                parent_platforms: gameQuery?.platform?.id,
                ordering: gameQuery?.sortOrder,
                search: gameQuery?.searchText
            }
        })
            .then((res) => res.data.results),
        staleTime: 15 * 1000
    })
}

export default useGames;