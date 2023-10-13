// this useGenres component

import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("genres");
const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    // initialData: { count: genres.length, results: genres, next: null },
  });
// const useGenre = () => useData<Genre>("/genres");

export default useGenre;
