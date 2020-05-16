import React from 'react';
import PoemList from './PoemList';
import SearchFormDiv from './SearchFormDiv';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import "./../../App.css";

const PoemSearch = (props) => {
  const { poemSearch, handlePoemSearch, poemList } = props;
  // console.log('poem search props: ', props)
  return (
    <SearchFormDiv>
      <form onSubmit={poemSearch}>
        <SearchInput
          className="search-input"
          placeholder="Wordsworth, Poe, Shakespeare"
          onChange={handlePoemSearch}
          type="text">
        </SearchInput>
        <SearchButton> Search </SearchButton>
      </form>
      <PoemList poemList={poemList} />
    </SearchFormDiv>
  );
}

export default PoemSearch;
