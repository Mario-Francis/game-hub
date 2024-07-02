import { useEffect, useState } from "react";
import Game from "../types/Game";
import apiClient from "../services/api-client";
import FetchGamesResponse from "../types/FetchGamesResponse";
import { CanceledError } from "axios";

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchGamesResponse>("/games", { signal: controller.signal })
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return
                else setError(err.message)
            });

        return () => {
            controller.abort();
        }
    }, []);

    return { games, error };
}

export default useGames;