import useGenres from "./useGenres"

const useGenre = (genreId?: number) => {
    const {data} = useGenres()
    return data.results?.find(g => g.id == genreId)
}

export default useGenre;
