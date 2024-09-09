import { useQuery } from "@tanstack/react-query";
import Platform from "../types/Platform";
import apiClient from "../services/api-client";
import FetchResponse from "../types/FetchResponse";
import platforms from "../data/platforms";

const usePlatforms = () => {
    return useQuery<Platform[], Error>({
        queryKey: ['platforms'],
        queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
            .then((res) => res.data.results),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: platforms
    });
}

export default usePlatforms;