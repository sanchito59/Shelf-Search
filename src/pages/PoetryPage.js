import React from 'react';
// Components
import PoemSearch from './components/PoemSearch';
// Styles/Assets
import './../PoemOfDay.css';

export default function PoemOfDay(props) {
  const { poemSearch, handlePoemSearch, poemList } = props;
  return (
    <div>
      <PoemSearch
        poemSearch={poemSearch}
        handlePoemSearch={handlePoemSearch}
        poemList={poemList}
      />
    </div>
  );
}
