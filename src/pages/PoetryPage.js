import React, { useState } from 'react';
import PoemSearch from './components/PoemSearch';
import './../App.scss';

const PoetryPage = () => {
  const [search, setSearch] = useState();
  const [poemResults, setPoemResults] = useState([]);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const poemSearch = (e) => {
    e.preventDefault();
    fetch(`${proxyurl}http://poetrydb.org/author/${search}`, {
      method: 'get',
      header: 'no-cors',
    }).then(response => {
      return response.json();
    }).then(json => {
      setPoemResults(json)
    }).catch(error => {
      console.err('Uh oh, ', error);
    })
  }

  const handlePoemSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <div>
      <PoemSearch
        poemSearch={poemSearch}
        searchTerm={search}
        handlePoemSearch={handlePoemSearch}
        poemList={poemResults}
      />
    </div>
  );
}

export default PoetryPage;
