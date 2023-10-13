import { useQuery } from "@tanstack/react-query";
import React from "react";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["gamse", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
