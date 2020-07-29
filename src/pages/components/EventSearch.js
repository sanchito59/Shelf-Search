import React from 'react';
import { Select } from 'antd';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import SearchForm from './SearchForm';
import SearchSettings from './SearchSettings';

const { Option } = Select;

const EventSearch = (props) => {
  const { eventSearch, handleEventSearch, handleSort } = props;

  return (
    <SearchForm onSubmit={eventSearch}>
      <div>
        <SearchInput
          className="search-input"
          placeholder="97204"
          onChange={handleEventSearch}
          type="text"
        />
        <SearchButton>Search</SearchButton>
      </div>
      <SearchSettings>
        <Select defaultValue="Sort" style={{ width: 90 }} onChange={handleSort}>
          <Option disabled value="Sort"> Sort </Option>
          <Option value="UPCOMING">Upcoming</Option>
          <Option value="ASC">A-Z City</Option>
          <Option value="DESC">Z-A City</Option>
        </Select>
      </SearchSettings>
    </SearchForm>
  );
}

export default EventSearch;
