import React from "react";
import "./../App.css";

const SearchArea = props => {
  return (
    <div className="search-area">
      <form action="" onSubmit={props.searchBook}>
        <input
          onChange={props.handleSearch}
          type="text"
          placeholder="cats, sci-fi, Absurdist philosophy etc."
        ></input>
        <button type="submit">Search</button>
        <input type="checkbox" id="ebook-param" value="ebook-param" onChange={props.handleEbookFilter}></input>
        <label htmlFor="ebook-param">e-book</label>
        {/* add logic to only show when booklist mounts */}
        <select defaultValue="Sort" onChange={props.handleSort}>
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Alphabetical">A-Z Title</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
};

export default SearchArea;
