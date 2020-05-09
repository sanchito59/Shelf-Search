import React from 'react';
import './../../BookCardStyle.css';

const OpenLibraryBookCard = (props) => {
  const capitalize = {
    textTransformation: 'capitalize'
  }
  return (
    <div class="book-card">
      <div>
        <div>
          <img src={props.coverIMG} alt="book cover thumbnail"></img>
          <h2 style={capitalize}>{props.title}</h2>
          <h4>Author: {props.author}</h4>
          <p>{typeof props.publisher === 'undefined' ? props.publisher : props.publisher[0]}</p>
          <p>Published Date: {props.publishedDate}</p>
          <p>ISBN: {typeof props.ISBN === 'undefined' ? 'Unavailable' : props.ISBN}</p>
        </div>
      </div>
    </div>
  )
}

export default OpenLibraryBookCard;
