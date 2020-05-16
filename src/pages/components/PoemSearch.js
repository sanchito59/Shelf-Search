import React from 'react';
// Components
import PoemList from './PoemList';
import SearchFormDiv from './SearchFormDiv';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
// Styles/Assets
import "./../../App.css";

export default function PoemSearch(props) {
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
