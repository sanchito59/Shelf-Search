import React from 'react';
import BookshelfCard from './BookshelfCard';
import './../../Bookshelf.scss'

export default function TrendingBookshelf(props) {
  const { currentlyTrendingTitle, trendingBooks, classicLitTitle, classicLiterature, sciFiTitle, sciFi } = props;
  // console.log('bookshelf props: ', props)

  return (
    <div>
      <div>
        <h1 className='shelf-title'>{currentlyTrendingTitle}</h1>
        <div className='bookshelf-grid'>
          {
            trendingBooks.map((book, i) => {
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
        <h1 className='shelf-title'>{classicLitTitle}</h1>
        <div className='bookshelf-grid'>
          {
            classicLiterature.map((book, i) => {
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
        <h1 className='shelf-title'>{sciFiTitle}</h1>
        <div className='bookshelf-grid'>
          {
            sciFi.map((book, i) => {
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
