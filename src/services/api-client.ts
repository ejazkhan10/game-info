import axios, { AxiosRequestConfig } from "axios";

const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "941ae3f8b0bb43d589db870343179c43",
  },
});


export interface FetchResponse<T> {
  count: number;
  results: T[];
}




class APIClient<T> {
  endpoint: string;
  params?: Object


  constructor(endpoint: string, params = {}) {
    this.endpoint = endpoint;
    this.params = params
  }

  getAll =(config?: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
  }
}


export default APIClient;
