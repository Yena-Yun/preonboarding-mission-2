import { getSearchData } from 'api/searchAPI';
import { useEffect, useState } from 'react';

type Debounce = {
  inputText: string;
  delay: number;
  // page: number;
  observerRef: React.RefObject<HTMLDivElement>;
};

const useDebounce = ({ inputText, delay, observerRef }: Debounce) => {
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedResult, setDebouncedResult] = useState<string[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);
  }, [observerRef]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (inputText) {
        setIsLoading(true);

        const result = await getSearchData({ inputText, page });
        console.log(result);

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
