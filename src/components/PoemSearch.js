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
        <input
          placeholder="Wordsworth, Poe, Shakespeare"
          onChange={props.handlePoemSearch}
          type="text"
        ></input>
        <button>Search</button>
      </form>
      <PoemList
        poemList={props.poemList}
      />
    </div>
  );
}