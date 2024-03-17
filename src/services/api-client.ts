import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "941ae3f8b0bb43d589db870343179c43",
  },
});


export interface FetchResponse<T> {
  count: number;
  results: T[];
}
