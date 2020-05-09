import React from "react";
import styled from 'styled-components';
// Components
import BookList from './components/BookList'
// Styles/Assets
import "./../App.css";
import searchIcon from './../assets/searchicon.png'

const SearchFormDiv = styled.div`
  margin-top: 12px;
`

const SearchInput = styled.input`
  text-indent: 10px;
  padding: 8px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background-image: url(${searchIcon});
  background-position: 2.5px 5px;
  background-repeat: no-repeat;
    &:hover {
      border: 2px solid rgb(151, 139, 139);
    }
`

const SearchButton = styled.button`
    background-color: rgb(204, 186, 107);
    border-radius: 8px;
    border: none;
    color: white;
    padding: 7.5px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 2px 16px 0 rgba(0, 0, 0, 0.19);
    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.4s;
      &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 12px 10px 0 rgba(0, 0, 0, 0.19);
      }
  `
const SearchArea = (props) => {
  // console.log('search props: ', props)
  return (
    <SearchFormDiv>
      <form action="" onSubmit={props.searchForBooks}>
        <SearchInput
          onChange={props.handleSearch}
          type="text"
          placeholder="cats, sci-fi, Absurdist philosophy etc."
        />
        <SearchButton>
          Search
        </SearchButton>
        <input type="checkbox" id="ebook-param" value="ebook-param" onChange={props.handleEbookFilter}></input>
        <label htmlFor="ebook-param">e-book </label>
        {/* add logic to only show when booklist mounts? */}
        <select defaultValue="Sort" onChange={props.handleSort} className='select-params'>
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Alphabetical">A-Z Title</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
      <BookList
        books={props.books}
        openLibraryBooks={props.openLibraryBooks}
        availableEbooks={props.availableEbooks}
      />
    </SearchFormDiv>
  );
};

export default SearchArea;
