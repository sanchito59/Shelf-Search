import React from 'react';
import './../App.css';
// Components
import BestsellerList from './BestsellerList';

export default function NYTBestsellers(props) {
  console.log('nyt props: ', props)
  return (
    <div>
      {
        props.bestSellers.map((book, i) => {
          return <BestsellerList
            title={book.book_details[0].title}
          // author={}
          // currentRank={}
          // rankLastWeek={}
          // weeksOnList={}
          />
        })
      }
    </div>
  )
}