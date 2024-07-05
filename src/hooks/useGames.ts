import Game from "../types/Game";
import Genre from "../types/Genre";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) => {
    return useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);
}

export default useGames;