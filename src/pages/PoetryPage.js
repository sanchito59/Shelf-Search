import React from 'react';
import PoemSearch from './components/PoemSearch';
import './../PoemOfDay.css';

const PoetryPage = (props) => {
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

export default PoetryPage;
