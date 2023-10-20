import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import { GameQuery } from "../pages/HomePage";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("games");

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient
                .getAll({
                    params: {
                        genres: gameQuery.genreId,
                        parent_platforms: gameQuery.platformId,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                        page: pageParam
                    }
                }),
        getNextPageParam: (lastPage, allPage) => {
            return lastPage.next ? allPage.length + 1 : undefined;
        },
        staleTime: ms("24h")

    });

export default useGames