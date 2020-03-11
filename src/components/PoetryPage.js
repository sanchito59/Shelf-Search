import React from 'react';
// Components
import PoemSearch from './PoemSearch';
// Styles/Assets
import './../PoemOfDay.css';

export default function PoemOfDay(props) {
  return (
    <div>
      <PoemSearch
        poemSearch={props.poemSearch}
        handlePoemSearch={props.handlePoemSearch}
        poemList={props.poemList}
      />
    </div>
  );
}