import React from 'react';
import './../App.css';

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form action="" onSubmit={props.searchBook}>
        <input onChange={props.handleSearch} type="text" placeholder="cats, sci-fi, Absurdist philosophy etc."></input>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchArea;