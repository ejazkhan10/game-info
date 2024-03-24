import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  description_raw: String;
  metacritic: number;
  rating_top: number;
  slug: string;

}
