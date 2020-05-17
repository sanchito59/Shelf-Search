import React from 'react';
import styled from 'styled-components';
import { Col } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import BookContainer from './BookContainer';
import './../../App.scss';

const BookCover = styled(LazyLoadImage)`
  width: 100%;
  max-height: 40%;
  padding: 25px;
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 20px;
  color: black;
  overflow-x: hidden;
`;

const OpenLibraryBookCard = (props) => {
  const capitalize = {
    textTransformation: 'capitalize'
  }

  const { coverIMG, title, author, publisher, publishedDate, ISBN } = props;
  return (
    <Col lg={8} md={12} sm={24}>
      <BookContainer>
        <div>
          <BookCover src={coverIMG} alt="book cover thumbnail" />
          <TextWrapper>
            <h2 style={capitalize}>{title}</h2>
            <h4>Author: {author}</h4>
            <p>{typeof publisher === 'undefined' ? publisher : publisher[0]}</p>
            <p>Published Date: {publishedDate}</p>
            <p>ISBN: {typeof ISBN === 'undefined' ? 'Unavailable' : ISBN}</p>
          </TextWrapper>
        </div>
      </BookContainer>
    </Col>
  )
}

export default OpenLibraryBookCard;
