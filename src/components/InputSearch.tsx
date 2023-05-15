import React, { useState, useEffect } from 'react';
import useDebounce from 'hooks/useDebounce';
import { SearchData } from 'types/searchType';
import { FaSearch, FaSpinner, FaEllipsisH } from 'react-icons/fa';

export const InputSearch = () => {
  const [inputText, setInputText] = useState('');
  const [searchResult, setSearchResult] = useState<SearchData>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const { debouncedResult, isLoading } = useDebounce(inputText, 500);

  useEffect(() => {
    if (debouncedResult) {
      setSearchResult(debouncedResult);
    }
  }, [debouncedResult]);

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
      <div className='search-container'>
        <ul className='search-list'>
          {searchResult?.result.map((resultItem, id) => (
            <li key={id} className='item'>
              {resultItem}
            </li>
          ))}
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
    </>
  );
};
