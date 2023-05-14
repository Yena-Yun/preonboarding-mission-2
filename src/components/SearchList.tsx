import React from 'react';
import { SearchItem } from './SearchItem';

const mocks = ['지락실', '영지', '미미', '유진', '영석', '토롱이'];

export const SearchList = () => {
  return (
    <div className='search-container'>
      <ul className='search-list'>
        {mocks.map((mock) => (
          <SearchItem mock={mock} />
        ))}
      </ul>
    </div>
  );
};
