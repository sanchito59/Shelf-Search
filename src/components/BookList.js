import React from 'react';
import './../App.css';
// Components
import BookCard from './BookCard';

const BookList = (props) => {
  // console.log(props);
  return (
    <div className='book-list-wrapper'>
      {
        props.books.map((book, i) => {
          return <BookCard
            image={book.volumeInfo.imageLinks.thumbnail}
            previewLink={book.volumeInfo.previewLink}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            publisher={book.volumeInfo.publisher}
            publishedDate={book.volumeInfo.publishedDate}
            downloadLinkForDevices={book.accessInfo.epub.acsTokenLink}
            googleBookId={book.id}
            // Need error handling for 'TypeError: Cannot read property '0' of undefined' on some queries
            ISBN={book.volumeInfo.industryIdentifiers[0].identifier}
            key={i}
          />
        })
      }
    </div>
  )
}

export default BookList;