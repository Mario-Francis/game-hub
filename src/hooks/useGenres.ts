import Genre from "../types/Genre";
import useData from "./useData";

const useGenres = () => {
    return useData<Genre>("/genres");
}

export default useGenres;