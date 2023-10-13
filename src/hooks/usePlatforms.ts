// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
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
    staleTime: ms("24h"),
  });
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
