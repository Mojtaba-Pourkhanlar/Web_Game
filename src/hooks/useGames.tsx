import useData from './useData';
import { Genre } from './useGenre';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}


const useGames = (selectGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>("/games", { params: { genres: selectGenre?.id, platforms: selectedPlatform?.id } }, [selectGenre?.id, selectedPlatform?.id]);

export default useGames