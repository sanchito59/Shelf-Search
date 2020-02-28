import React from 'react';
import './../App.css';

const BookCard = (props) => {
  return (
    <div className="book-card">
      <div>
        <img src={props.image} alt="book cover thumbnail"></img>
        <h2>{props.title}</h2>
        <h3>Author: {props.author}</h3>
        <p>{props.publisher}</p>
        <p>Published Date: {props.publishedDate == '0000' ? 'Not available' : props.publishedDate.substring(0, 4)}</p>
        <p>Preview: <a href={props.previewLink} target="_blank" className="preview-link">{props.title}</a></p>
      </div>
    </div>
  )
}

export default BookCard;