import React from 'react';
// Components
import BookshelfCard from './BookshelfCard';

export default function TrendingBookshelf(props) {
  // console.log('bookshelf props: ', props)
  const grid = {
    margin: '20px',
    // paddingLeft: '10px',
    display: 'grid',
    gridTemplateColumns: '400px 400px 400px',
    gridGap: '25px',
    borderRadius: '8px',
  }

  return (
    <div>
      <div>
        <h1>{props.currentlyTrendingTitle}</h1>
        <div style={grid}>
          {
            props.trendingBooks.map((book, i) => {
              return <BookshelfCard
                title={book.title}
                author={book.author}
                publisher={book.publisher}
                ISBN={book.ISBN}
                coverIMG={book.coverIMG}
                pageCount={book.pages}
                key={i}
              />
            })
          }
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>{props.classicLitTitle}</h1>
        <div style={grid}>
          {
            props.classicLiterature.map((book, i) => {
              return <BookshelfCard
                title={book.title}
                author={book.author}
                publisher={book.publisher}
                ISBN={book.ISBN}
                coverIMG={book.coverIMG}
                pageCount={book.pages}
                key={i}
              />
            })
          }
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>{props.sciFiTitle}</h1>
        <div style={grid}>
          {
            props.sciFi.map((book, i) => {
              return <BookshelfCard
                title={book.title}
                author={book.author}
                publisher={book.publisher}
                ISBN={book.ISBN}
                coverIMG={book.coverIMG}
                pageCount={book.pages}
                key={i}
              />
            })
          }
        </div>
      </div>
      <hr></hr>
    </div>
  );
}