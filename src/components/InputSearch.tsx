import React, { useState, useEffect, useRef } from 'react';
import useDebounce from 'hooks/useDebounce';
import { FaSearch, FaSpinner, FaEllipsisH } from 'react-icons/fa';

export const InputSearch = () => {
  const [inputText, setInputText] = useState('');
  const [coloredInputText, setColoredInputText] = useState('');
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [clickedItemIndex, setClickedItemIndex] = useState('');

  const observerRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setColoredInputText(e.target.value);
  };

  const { debouncedResult, isLoading } = useDebounce({
    inputText,
    delay: 500,
    observerRef,
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
    const stringId = id.toString();

    if (e.currentTarget.id === stringId) {
      if (e.currentTarget.textContent) {
        setInputText(e.currentTarget.textContent);
        setClickedItemIndex(stringId);
      }
    }
  };

  const showClickedBorder = () => {
    setIsInputFocus(true);
  };

  const removeClickedBorder = () => {
    setIsInputFocus(false);
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
        className={`input-container ${isInputFocus && 'clicked'}`}
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
                className={`search-item ${
                  clickedItemIndex === id.toString() && 'selected'
                }`}
                onClick={(e) => handleOnSelectItem(e, id)}
              >
                {resultItem.split(coloredInputText)[0]}
                <span style={{ color: '#2bc9ba' }}>{coloredInputText}</span>
                {resultItem.split(coloredInputText)[1]}
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
