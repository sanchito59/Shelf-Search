import React from "react";
// Components
import BookList from './BookList'
// Styles/Assets
import "./../App.css";

const SearchArea = props => {
  // console.log('search props: ', props)
  return (
    <div className="search-area">
      <form action="" onSubmit={props.searchForBooks}>
        <input
          onChange={props.handleSearch}
          type="text"
          placeholder="cats, sci-fi, Absurdist philosophy etc."
        ></input>
        <button type="submit" className='search-button'>Search</button>
        <input type="checkbox" id="ebook-param" value="ebook-param" onChange={props.handleEbookFilter}></input>
        <label htmlFor="ebook-param">e-book </label>
        {/* add logic to only show when booklist mounts? */}
        <select defaultValue="Sort" onChange={props.handleSort}>
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
    </div>
  );
};

export default SearchArea;
