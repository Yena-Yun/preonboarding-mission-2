import apiRequest from 'api/index';

type SearchParam = {
  inputText: string;
  page?: number;
  limit?: number;
};

const RESOURCE = '/search';

const getSearchData = async ({ inputText, page, limit = 10 }: SearchParam) => {
  try {
    const response = await apiRequest.get(
      `${RESOURCE}?q=${inputText}&page=${page}&limit=${limit}`
    );

    return response;
  } catch (err) {
    console.log(err);
    throw new Error('검색 결과 가져오기 실패');
  }
};

export { getSearchData };
