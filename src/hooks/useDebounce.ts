import { getSearchData } from 'api/searchAPI';
import { useEffect, useState } from 'react';

type Debounce = {
  inputText: string;
  delay: number;
  page: number;
};

const useDebounce = ({ inputText, delay, page }: Debounce) => {
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedResult, setDebouncedResult] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (inputText) {
        setIsLoading(true);

        const result = await getSearchData({ inputText, page });

        setIsLoading(false);
        setDebouncedResult(result.result);
      }
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputText, delay, page]);

  return { debouncedResult, isLoading };
};

export default useDebounce;
