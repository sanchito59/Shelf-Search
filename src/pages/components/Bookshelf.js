import React from 'react';
import styled from 'styled-components';
import BookshelfCard from './BookshelfCard';
import ScrollUp from './ScrollUp';
import { Col, Row } from 'antd';

const ShelfRow = styled(Row)`
  justify-content: center;
`;

const ShelfTitle = styled.h1`
  && {
    font-family: Georgia;
    color: black !important;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Divider = styled.hr`
  width: 80%;
  height: 1.5px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #282c34;;
  border-radius: 8px;
`;

const Bookshelf = (props) => {
  const { currentlyTrendingTitle, trendingBooks, classicLitTitle, classicLiterature, sciFiTitle, sciFi } = props;

  return (
    <div>
      <div>
        <ShelfTitle>{currentlyTrendingTitle}</ShelfTitle>
        <ShelfRow gutter={[0, 40]}>
          {
            trendingBooks.map((book, i) => {
              return <Col lg={8} sm={24}>
                <BookshelfCard
                  title={book.title}
                  author={book.author}
                  publisher={book.publisher}
                  ISBN={book.ISBN}
                  coverIMG={book.coverIMG}
                  pageCount={book.pages}
                  key={i}
                />
              </Col>
            })
          }
        </ShelfRow>
      </div>
      <Divider />
      <div>
        <ShelfTitle>{classicLitTitle}</ShelfTitle>
        <ShelfRow gutter={[0, 40]}>
          {
            classicLiterature.map((book, i) => {
              return <Col lg={8} sm={24}>
                <BookshelfCard
                  title={book.title}
                  author={book.author}
                  publisher={book.publisher}
                  ISBN={book.ISBN}
                  coverIMG={book.coverIMG}
                  pageCount={book.pages}
                  key={i}
                />
              </Col>
            })
          }
        </ShelfRow>
      </div>
      <ScrollUp />
      <Divider />
      <div>
        <ShelfTitle>{sciFiTitle}</ShelfTitle>
        <ShelfRow gutter={[0, 40]}>
          {
            sciFi.map((book, i) => {
              return <Col lg={8} sm={24}>
                <BookshelfCard
                  title={book.title}
                  author={book.author}
                  publisher={book.publisher}
                  ISBN={book.ISBN}
                  coverIMG={book.coverIMG}
                  pageCount={book.pages}
                  key={i}
                />
              </Col>
            })
          }
        </ShelfRow>
      </div>
      <Divider />
    </div>
  );
}

export default Bookshelf;
