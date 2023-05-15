import { getSearchData } from 'api/searchAPI';
import { useEffect, useState } from 'react';
import { SearchData } from 'types/searchType';

const useDebounce = (keyword: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<SearchData>();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (keyword) {
        const result = await getSearchData({ keyword });

        setDebouncedValue(result);
      }
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword, delay]);

  return debouncedValue;
};

export default useDebounce;
