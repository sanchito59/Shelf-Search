import React from "react";
import BookList from './components/BookList';
import SearchFormDiv from './components/SearchFormDiv';
import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';

const SearchArea = (props) => {
  const { searchForBooks, handleSearch, handleEbookFilter, handleSort, books, openLibraryBooks, availableEbooks } = props;

  return (
    <SearchFormDiv>
      <form action="" onSubmit={searchForBooks}>
        <SearchInput
          onChange={handleSearch}
          type="text"
          placeholder="cats, sci-fi, Absurdist philosophy etc."
        />
        <SearchButton>
          Search
        </SearchButton>
        <input type="checkbox" id="ebook-param" value="ebook-param" onChange={handleEbookFilter}></input>
        <label htmlFor="ebook-param">e-book </label>
        {/* add logic to only show when booklist mounts? */}
        <select defaultValue="Sort" onChange={handleSort} className='select-params'>
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Alphabetical">A-Z Title</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
      <BookList
        books={books}
        openLibraryBooks={openLibraryBooks}
        availableEbooks={availableEbooks}
      />
    </SearchFormDiv>
  );
};

export default SearchArea;
