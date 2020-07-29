import React from 'react';
import { Select } from 'antd';
import PoemList from './PoemList';
import SearchForm from './SearchForm';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import SearchSettings from './SearchSettings';

const { Option } = Select;

const PoemSearch = (props) => {
  const { poemSearch, handlePoemSearch, handlePoemSort, poemList } = props;

  return (
    <>
      <SearchForm onSubmit={poemSearch}>
        <SearchInput
          className="search-input"
          placeholder="Wordsworth, Poe, Shakespeare"
          onChange={handlePoemSearch}
          type="text">
        </SearchInput>
        <SearchButton> Search </SearchButton>
        <SearchSettings>
          <Select defaultValue="Sort" style={{ width: 90 }} onChange={handlePoemSort}>
            <Option disabled value="Sort"> Sort </Option>
            <Option value="ASC">A-Z Title</Option>
            <Option value="DESC">Z-A Title</Option>
          </Select>
        </SearchSettings>
      </SearchForm>
      <PoemList poemList={poemList} />
    </>
  );
}

export default PoemSearch;
