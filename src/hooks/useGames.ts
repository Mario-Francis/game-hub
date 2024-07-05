import Game from "../types/Game";
import Genre from "../types/Genre";
import Platform from "../types/Platform";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
    return useData<Game>("/games", { params: { genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id } }, [selectedGenre?.id, selectedPlatform?.id]);
}

export default useGames;