import React from 'react';
import styled from 'styled-components';
import PoemList from './PoemList';
import SearchFormDiv from './SearchFormDiv';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import "./../../App.scss";

const SearchForm = styled.form`
  margin-bottom: 20px;
`;

const PoemSearch = (props) => {
  const { poemSearch, handlePoemSearch, poemList } = props;
  // console.log('poem search props: ', props)
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
      </SearchForm>
      <PoemList poemList={poemList} />
    </SearchFormDiv>
  );
}

export default PoemSearch;
