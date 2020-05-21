import React from 'react';
import styled from 'styled-components';
import PoemList from './PoemList';
import SearchFormDiv from './SearchFormDiv';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

const SearchForm = styled.form`
  margin-bottom: 20px;
`;

const PoemSearch = (props) => {
  const { poemSearch, handlePoemSearch, handlePoemSort, poemList } = props;

  return (
    <SearchFormDiv>
      <SearchForm onSubmit={poemSearch}>
        <SearchInput
          className="search-input"
          placeholder="Wordsworth, Poe, Shakespeare"
          onChange={handlePoemSearch}
          type="text">
        </SearchInput>
        <SearchButton> Search </SearchButton>
        <select defaultValue="Sort" className='select-params' onChange={handlePoemSort}>
          <option disabled value="Sort"> Sort </option>
          <option value="ASC">A-Z Title</option>
          <option value="DESC">Z-A Title</option>
        </select>
      </SearchForm>
      <PoemList poemList={poemList} />
    </SearchFormDiv>
  );
}

export default PoemSearch;
