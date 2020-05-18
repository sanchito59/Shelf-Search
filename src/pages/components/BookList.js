import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import BookCard from './BookCard';
import ScrollUp from './ScrollUp';
import OpenLibraryBookCard from './OpenLibraryBookCard';
import EmbeddedBook from './EmbeddedBook';

const BookResults = styled(Row)`
  width: 100%;
  justify-content: center;
`;

const BookList = (props) => {
  const { availableEbooks, books, openLibraryBooks } = props;

  return (
    <>
      <div className='embedded-book-wrapper'>
        {
          availableEbooks.map((ebook, i) => {
            return <div><EmbeddedBook
              ebookURL={ebook.itemURL}
              key={i}
            /> <br></br></div>
          })
        }
      </div>
      <BookResults gutter={[60, 60]}>
        {
          books.map((book, i) => {
            return <Col lg={7} md={9} sm={20}>
              <BookCard
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
            </Col>
          })
        }
        <ScrollUp />
        {
          openLibraryBooks.map((book, i) => {
            return <Col lg={7} md={9} sm={20}> <OpenLibraryBookCard
              coverIMG={'https://i.imgur.com/J5LVHEL.jpg'}
              title={book.title}
              author={book.author_name}
              publisher={book.publisher}
              // needs error handling/data management
              ISBN={book.isbn}
              publishedDate={book.publish_date}
              key={i}
            />
            </Col>
          })
        }
      </BookResults>
    </>
  )
}

export default BookList;
