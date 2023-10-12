// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("platforms/lists/parents");


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24Hour clock
  });
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
