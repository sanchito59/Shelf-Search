import React from 'react';
import styled from 'styled-components';
import BookContainer from './BookContainer';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BookCover = styled(LazyLoadImage)`
  width: 100%;
  max-height: 40%;
  padding: 25px;
`;

const TextWrapper = styled.div`
  width: 100%;
  padding: 20px;
  color: black;
`;

const BookTitle = styled.h2`
`;

const BookCard = (props) => {
  const { image, title, author, pageCount, publisher, publishedDate, ISBN, previewLink } = props;

  return (
    <BookContainer>
      <a href={previewLink} target="_blank" className="preview-link">
        <BookCover src={image} alt="book cover thumbnail" />
        <TextWrapper>
          <BookTitle>{title}</BookTitle>
          <h4>Author: {author}</h4>
          <p>{publisher} - {publishedDate === '0000' ? 'Not available' : publishedDate.substring(0, 4)} - </p>
          <p>ISBN: {ISBN}</p>
        </TextWrapper>
      </a>
    </BookContainer>
  )
}

export default BookCard;
