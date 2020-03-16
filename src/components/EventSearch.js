import React from 'react';
// Styles/Assets
import "./../App.css";

export default function EventSearch(props) {
  return (
    <div className="search-area">
      <form onSubmit={props.eventSearch}>
        <label>Zip Code: </label>
        <input
          className="search-input"
          placeholder="97204"
          onChange={props.handleEventSearch}
          type="text"
        ></input>
        <button className='search-button'>Search for Events</button>
      </form>
    </div>
  );
}