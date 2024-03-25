import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  description_raw: String;
  metacritic: number;
  rating_top: number;
  slug: string;
  genres: Genre[];
  publishers: Publisher[]

}
