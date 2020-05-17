import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './../../App.scss';

const OpenLibraryBookCard = (props) => {
  const capitalize = {
    textTransformation: 'capitalize'
  }

  const { coverIMG, title, author, publisher, publishedDate, ISBN } = props;
  return (
    <div class="book-card">
      <div>
        <div>
          <LazyLoadImage src={coverIMG} alt="book cover thumbnail" />
          <h2 style={capitalize}>{title}</h2>
          <h4>Author: {author}</h4>
          <p>{typeof publisher === 'undefined' ? publisher : publisher[0]}</p>
          <p>Published Date: {publishedDate}</p>
          <p>ISBN: {typeof ISBN === 'undefined' ? 'Unavailable' : ISBN}</p>
        </div>
      </div>
    </div>
  )
}

export default OpenLibraryBookCard;
