import { SearchList } from '../components/SearchList';
import { InputSearch } from 'components/InputSearch';

const Main = () => {
  return (
    <div className='container'>
      <div className='inner'>
        <InputSearch />
        <SearchList />
      </div>
    </div>
  );
};

export default Main;
