import React from 'react';
import './../BestsellerList.css';
// Components
import BestsellerList from './BestsellerList';

export default function NYTBestsellers(props) {
  // console.log('nyt props: ', props.bestSellers)
  if (typeof props.bestSellers !== 'undefined') {
    return (
      <div>
        <div className='outer-card-row'>
          <h1>This Week's NYT Bestsellers: </h1>
          {
            props.bestSellers.map((book, i) => {
              return <BestsellerList
                title={book.book_details[0].title}
                author={book.book_details[0].author}
                currentRank={book.rank}
                rankLastWeek={book.rank_last_week}
                weeksOnList={book.weeks_on_list}
                key={i}
              />
            })
          }
        </div>
      </div>
    )
  } else {
    return (
      <div>NYT Bestsellers unavailable.</div>
    );
  }
}