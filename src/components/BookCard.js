import React from 'react';
import './../BookCardStyle.css';

const BookCard = (props) => {
  return (
    <div
      class="book-card">
      <div>
        <div>
          <img src={props.image} alt="book cover thumbnail"></img>
          <h2>{props.title}</h2>
          <h4>Author: {props.author}</h4>
          <p>{props.publisher}</p>
          <p>Published Date: {props.publishedDate === '0000' ? 'Not available' : props.publishedDate.substring(0, 4)}</p>
          <p>ISBN: {props.ISBN}</p>
          <p>Preview: <a href={props.previewLink} target="_blank" className="preview-link">{props.title}</a></p>
        </div>
      </div>
    </div>
  )
}

export default BookCard;