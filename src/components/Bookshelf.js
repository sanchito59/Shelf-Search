import React from 'react';
// Components
import BookshelfCard from './BookshelfCard';

export default function Bookshelf(props) {
  console.log('bookshelf props: ', props)
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
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
  );
}