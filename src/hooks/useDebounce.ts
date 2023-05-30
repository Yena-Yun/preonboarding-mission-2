import { getSearchData } from 'api/searchAPI';
import { useEffect, useState } from 'react';

type Debounce = {
  inputText: string;
  observerRef: React.RefObject<HTMLDivElement>;
};

const useDebounce = ({ inputText, observerRef }: Debounce) => {
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedResult, setDebouncedResult] = useState<string[]>([]);
  const [page, setPage] = useState(1);

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
      if (inputText.length > 1) {
        setIsLoading(true);

        const result = await getSearchData({ inputText, page });

        setIsLoading(false);
        setDebouncedResult(result.result);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputText, page]);

  return { debouncedResult, isLoading };
};

export default useDebounce;
