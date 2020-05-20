import React, { useState } from 'react';
import PoemSearch from './components/PoemSearch';

const PoetryPage = () => {
  const [search, setSearch] = useState();
  const [poemResults, setPoemResults] = useState([]);
  const [sort, setSort] = useState('');

  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const poemSearch = (e) => {
    e.preventDefault();
    fetch(`${proxyurl}http://poetrydb.org/author/${search}`, {
      method: 'get',
      header: 'no-cors',
    }).then(response => {
      return response.json();
    }).then(json => {
      json.length > 0 && setPoemResults(json);
    }).catch(error => {
      console.log('Uh oh, ', error);
    })
  }

  const handlePoemSearch = e => {
    setSearch(e.target.value);
  }

  const handlePoemSort = e => {
    setSort(e.target.value)
  }

  const sortedPoems = poemResults.sort((a, b) => {
    const poemA = a.title.toUpperCase();
    const poemB = b.title.toUpperCase();
    if (sort === "ASC") {
      let comparison = 0;
      if (poemA > poemB) {
        comparison = 1;
      } else if (poemA < poemB) {
        comparison = -1;
      }
      return comparison;
    } else if (sort === "DESC") {
      let comparison = 0;
      if (poemA > poemB) {
        comparison = 1;
      } else if (poemA < poemB) {
        comparison = -1;
      }
      return comparison * -1;
    }
  })

  return (
    <div>
      <PoemSearch
        poemSearch={poemSearch}
        searchTerm={search}
        handlePoemSearch={handlePoemSearch}
        handlePoemSort={handlePoemSort}
        poemList={sortedPoems}
      />
    </div>
  );
}

export default PoetryPage;
