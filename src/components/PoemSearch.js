import React from 'react';
// Components
import PoemList from './PoemList';
// Styles/Assets
import "./../App.css";

export default function PoemSearch(props) {
  // console.log('poem search props: ', props)
  return (
    <div className="search-area">
      <form onSubmit={props.poemSearch}>
        {/* <i className='fas fa-search'></i> */}
        <input
          className="search-input"
          placeholder="Wordsworth, Poe, Shakespeare"
          onChange={props.handlePoemSearch}
          type="text"
        ></input>
        <button className='search-button'>Search</button>
      </form>
      <PoemList
        poemList={props.poemList}
      />
    </div >
  );
}