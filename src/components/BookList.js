import React from 'react';
import './../App.css';
// Components
import BookCard from './BookCard';

const BookList = (props) => {
  return (
    <div className='list'>
      {
        props.books.map((book, i) => {
          return <BookCard
            // image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            publisher={book.volumeInfo.publisher}
            publishedDate={book.volumeInfo.publishedDate}
            key={i}
          />
        })
      }
    </div>
  )
}

export default BookList;