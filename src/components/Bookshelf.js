import React from 'react';
// Components
import BookshelfCard from './BookshelfCard';
// Styles/Assets
import './../Bookshelf.scss'

export default function TrendingBookshelf(props) {
  // console.log('bookshelf props: ', props)

  return (
    <div>
      <div>
        <h1>{props.currentlyTrendingTitle}</h1>
        <div className='bookshelf-grid'>
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
        <div className='bookshelf-grid'>
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
        <div className='bookshelf-grid'>
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