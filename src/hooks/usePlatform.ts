import usePlatforms from "./usePlatforms"

const usePlatform = (platformId?: number ) => {
    const {data} = usePlatforms()
    return data.results?.find(p => p.id == platformId)
}

export default usePlatform;
