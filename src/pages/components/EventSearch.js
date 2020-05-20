import React from 'react';
import styled from 'styled-components';
import SearchFormDiv from './SearchFormDiv';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

const ZipLabel = styled.label`
  font-weight: bold;
  margin-right: 12px;
  font-size: 18px;
`;

const EventSearch = (props) => {
  const { eventSearch, handleEventSearch, handleSort } = props;

  return (
    <SearchFormDiv>
      <form onSubmit={eventSearch}>
        <ZipLabel>Zip Code: </ZipLabel>
        <SearchInput
          className="search-input"
          placeholder="97204"
          onChange={handleEventSearch}
          type="text"
        />
        <SearchButton>Search for Events</SearchButton>
        <select defaultValue="Sort" className='select-params' onChange={handleSort}>
          <option disabled value="Sort"> Sort </option>
          <option value="UPCOMING">Upcoming</option>
          <option value="ASC">A-Z City</option>
          <option value="DESC">Z-A City</option>
        </select>
      </form>
    </SearchFormDiv>
  );
}

export default EventSearch;
