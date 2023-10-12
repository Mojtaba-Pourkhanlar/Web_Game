import useGenre from "./useGenre";

const useGenree = (id?: number) => {
  const { data: genres } = useGenre();
  return genres?.results.find((g) => g.id === id);
};

export default useGenree;
