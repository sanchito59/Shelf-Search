import React from 'react';
import SearchFormDiv from './SearchFormDiv';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import "./../../App.scss";

const EventSearch = (props) => {
  const { eventSearch, handleEventSearch } = props;

  return (
    <SearchFormDiv>
      <form onSubmit={eventSearch}>
        <label>Zip Code: </label>
        <SearchInput
          className="search-input"
          placeholder="97204"
          onChange={handleEventSearch}
          type="text"
        />
        <SearchButton>Search for Events</SearchButton>
      </form>
    </SearchFormDiv>
  );
}

export default EventSearch;
