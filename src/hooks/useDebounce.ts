import { getSearchData } from 'api/searchAPI';
import { useEffect, useState } from 'react';
import { SearchData } from 'types/searchType';

const useDebounce = (keyword: string, delay: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedResult, setDebouncedResult] = useState<SearchData>();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (keyword) {
        setIsLoading(true);
        const result = await getSearchData({ keyword });

        setIsLoading(false);
        setDebouncedResult(result);
      }
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword, delay]);

  return { debouncedResult, isLoading };
};

export default useDebounce;
