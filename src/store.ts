import {create} from "zustand"

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }


interface GameQueryStore {
    gameQuery: GameQuery;
    setGenreId: (genreId: number) => void;
    setSearchText: (text: string) => void;
    setSortOrder: (sortOrder: string) => void;
    setPlatformId: (platformId: number) => void;
  }


const useGameQuery = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText : (search) => set(store => ({gameQuery: {searchText: search}})),
    setPlatformId: (platformId) => set(store => ({gameQuery: {...store.gameQuery, platformId: platformId}})),
    setGenreId: (genreId) => set(store => ({gameQuery: {...store.gameQuery, genreId: genreId}})),
    setSortOrder: (sortOrder) => set(store => ({gameQuery: {...store.gameQuery, sortOrder: sortOrder}})),

}))

export default useGameQuery


