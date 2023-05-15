import axios from 'axios';
import { SearchData } from 'types/searchType';

interface ApiRequest {
  get: (url: string) => Promise<SearchData>;
}

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data.data);

const apiRequest: ApiRequest = {
  get: async (url: string) => baseInstance.get(url),
};

export default apiRequest;
