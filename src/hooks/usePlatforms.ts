import Platform from "../types/Platform";
import useData from "./useData";

const usePlatforms = () => {
    return useData<Platform>("/platforms/lists/parents");
}

export default usePlatforms;