import { useQuery } from "@tanstack/react-query";
import Genre from "../types/Genre";
import apiClient from "../services/api-client";
import FetchResponse from "../types/FetchResponse";
import genres from "../data/genres";

const useGenres = ()=> useQuery<Genre[], Error>({
    queryKey: ['genres'],
    queryFn:()=> apiClient.get<FetchResponse<Genre>>('/genres')
    .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres
});

export default useGenres;