import React from "react";
import { Checkbox, Select } from 'antd';
import styled from 'styled-components';
import BookList from './components/BookList';
import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';
import SearchForm from './components/SearchForm';
import SearchSettings from './components/SearchSettings';

const { Option } = Select;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 8px;
  margin-top: 4px;
`;

const SearchArea = (props) => {
  const { searchForBooks, handleSearch, handleEbookFilter, handleSort, books, openLibraryBooks, availableEbooks } = props;

  return (
    <>
      <SearchForm action="" onSubmit={searchForBooks}>
        <div>
          <SearchInput
            onChange={handleSearch}
            type="text"
            placeholder="cats, sci-fi, Absurdist philosophy etc."
          />
          <SearchButton>
            Search
        </SearchButton>
        </div>
        <SearchSettings>
          <StyledCheckbox id="ebook-param" value="ebook-param" onChange={handleEbookFilter}>e-book</StyledCheckbox>
          {books.length > 0 && (
            <Select defaultValue="Sort" onChange={handleSort} style={{ width: 90 }}>
              <Option disabled value="Sort">
                Sort
          </Option>
              <Option value="Alphabetical">A-Z Title</Option>
              <Option value="Newest">Newest</Option>
              <Option value="Oldest">Oldest</Option>
            </Select>
          )}
        </SearchSettings>
      </SearchForm>
      <BookList
        books={books}
        openLibraryBooks={openLibraryBooks}
        availableEbooks={availableEbooks}
      />
    </>
  );
};

export default SearchArea;
