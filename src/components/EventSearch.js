import React from 'react';
import styled from 'styled-components';
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

export default function EventSearch(props) {
  return (
    <SearchFormDiv>
      <form onSubmit={props.eventSearch}>
        <label>Zip Code: </label>
        <SearchInput
          className="search-input"
          placeholder="97204"
          onChange={props.handleEventSearch}
          type="text"
        />
        <SearchButton>Search for Events</SearchButton>
      </form>
    </SearchFormDiv>
  );
}