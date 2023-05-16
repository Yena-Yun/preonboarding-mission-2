import React, { useState, useEffect, useRef } from 'react';
import useDebounce from 'hooks/useDebounce';
import { FaSearch, FaSpinner, FaEllipsisH } from 'react-icons/fa';

export const InputSearch = () => {
  const [inputText, setInputText] = useState('');
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [clicked, setClicked] = useState(false);

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

  const showClickedBorder = () => {
    setClicked(true);
  };

  const removeClickedBorder = () => {
    setClicked(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!isLoading && searchResult.length > 0) {
      removeClickedBorder();
    }
  }, [isLoading, searchResult.length]);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`input-container ${clicked && 'clicked'}`}
      >
        <FaSearch className='icon-search' />
        <input
          className='input-text'
          placeholder='Search...'
          value={inputText}
          onChange={handleChange}
          disabled={isLoading}
          onFocus={showClickedBorder}
          onBlur={removeClickedBorder}
        />
      </form>
      {searchResult && (
        <div className='search-container'>
          <ul className='search-list'>
            {searchResult?.map((resultItem, id) => (
              <li
                key={id}
                id={id.toString()}
                className='search-item'
                onClick={(e) => handleOnSelectItem(e, id)}
              >
                {resultItem}
              </li>
            ))}
            <div ref={observerRef}></div>
          </ul>
          <div className='spinner-container'>
            {!isLoading ? (
              <FaEllipsisH className='icon-ellipsis' />
            ) : (
              <FaSpinner className='icon-spinner' />
            )}
          </div>
        </div>
      )}
    </>
  );
};
