import axios from 'axios';
import { SearchData } from 'types/searchType';

export const fn = {
  getSearchData: async ({
    inputText,
    page,
    limit,
  }: {
    inputText: string;
    page: number;
    limit: number;
  }) => {
    return new Promise((resolve, reject) => {
      const result: Promise<SearchData> = axios.get(
        `${process.env.REACT_APP_API_URL}/search?q=${inputText}&page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );

      resolve(result);
    });
  },
};
