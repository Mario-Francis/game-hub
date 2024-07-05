import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import Genre from "../types/Genre";
import FetchGenresResponse from "../types/FetchGenresResponse";

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        apiClient
            .get<FetchGenresResponse>("/genres", { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                else setError(err.message)
                setIsLoading(false);
            });

        return () => {
            controller.abort();
        }
    }, []);

    return { genres, error, isLoading };
}

export default useGenres;