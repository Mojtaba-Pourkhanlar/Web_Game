// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>("genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24Hour clock
    // initialData: { count: genres.length, results: genres, next: null },
  });
// const useGenre = () => useData<Genre>("/genres");

export default useGenre;
