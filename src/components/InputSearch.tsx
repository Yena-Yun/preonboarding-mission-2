import React, { useState } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';

export const InputSearch = () => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {};

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input
        className='input-text'
        placeholder='Search...'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
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
  );
};
