import apiRequest from 'api/index';

type SearchParam = {
  keyword: string;
  page?: number;
  limit?: number;
};

const RESOURCE = '/search';

const getSearchData = async ({
  keyword,
  page = 1,
  limit = 10,
}: SearchParam) => {
  try {
    const response = await apiRequest.get(
      `${RESOURCE}?q=${keyword}&page=${page}&limit=${limit}`
    );

    return response;
  } catch (err) {
    console.log(err);
    throw new Error('검색 결과 가져오기 실패');
  }
};

export { getSearchData };
