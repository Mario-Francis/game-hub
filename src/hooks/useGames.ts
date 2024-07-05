import Game from "../types/Game";
import useData from "./useData";

const useGames = () => {
    return useData<Game>("/games");
}

export default useGames;