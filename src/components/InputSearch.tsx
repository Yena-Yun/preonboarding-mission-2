import React, { useState, useEffect, useRef } from 'react';
import useDebounce from 'hooks/useDebounce';
import { FaSearch, FaSpinner, FaEllipsisH } from 'react-icons/fa';

export const InputSearch = () => {
  const [inputText, setInputText] = useState('');
  const [searchResult, setSearchResult] = useState<string[]>([]);

  const observerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

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

  const { debouncedResult, isLoading } = useDebounce({
    inputText,
    delay: 500,
    page,
  });

  useEffect(() => {
    if (debouncedResult) {
      setSearchResult((prev) => [...prev, ...debouncedResult]);
    }
  }, [debouncedResult]);

  const handleOnSelectItem = (
    e: React.MouseEvent<HTMLLIElement>,
    id: number
  ) => {
    if (e.currentTarget.id === id.toString()) {
      if (e.currentTarget.textContent) {
        setInputText(e.currentTarget.textContent);
      }
    }
  };

  return (
    <>
      <div className='form-container'>
        <FaSearch className='btn-search' />
        <input
          className='input-text'
          placeholder='Search...'
          value={inputText}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
      {searchResult && (
        <div className='search-container'>
          <ul className='search-list'>
            {searchResult?.map((resultItem, id) => (
              <li
                key={id}
                id={id.toString()}
                className='item'
                onClick={(e) => handleOnSelectItem(e, id)}
              >
                {resultItem}
              </li>
            ))}
            <div ref={observerRef}></div>
          </ul>
          <div className='spinner-container'>
            {!isLoading ? (
              <button className='input-submit' type='submit'>
                <FaEllipsisH className='ellipsis' />
              </button>
            ) : (
              <FaSpinner className='spinner' />
            )}
          </div>
        </div>
      )}
    </>
  );
};
