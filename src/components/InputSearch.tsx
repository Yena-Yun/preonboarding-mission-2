import React, { useState, useEffect } from 'react';
import useDebounce from 'hooks/useDebounce';
import { SearchData } from 'types/searchType';
import { FaSearch, FaSpinner } from 'react-icons/fa';

export const InputSearch = () => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchData>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const result = useDebounce(inputText, 500);

  useEffect(() => {
    if (result) {
      setSearchResult(result);
    }
  }, [result]);

  const handleSubmit = () => {};

  return (
    <>
      <form className='form-container' onSubmit={handleSubmit}>
        <input
          className='input-text'
          placeholder='Search...'
          value={inputText}
          onChange={handleChange}
          disabled={isLoading}
        />
        {!isLoading ? (
          <button className='input-submit' type='submit'>
            <FaSearch className='btn-search' />
          </button>
        ) : (
          <FaSpinner className='spinner' />
        )}
      </form>
      <div className='search-container'>
        <ul className='search-list'>
          {searchResult?.result.map((resultItem, id) => (
            <li key={id} className='item'>
              {resultItem}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
