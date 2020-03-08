import React from 'react';
import './../BookCardStyle.css'
const OpenLibraryBookCard = (props) => {
  return (
    <div class="book-card">
      <div>
        <div>
          {/* needs to be addressed */}
          <img src={props.image} alt="book cover thumbnail"></img>
          <h2>{props.title}</h2>
          <h4>Author: {props.author}</h4>
          <p>{typeof props.publisher === 'undefined' ? props.publisher : props.publisher[0]}</p>
          <p>Published Date: {props.publishedDate}</p>
          <p>ISBN: {typeof props.ISBN === 'undefined' ? 'Unavailable' : props.ISBN}</p>
          {/* <p>Preview: <a href={props.previewLink} target="_blank" className="preview-link">{props.title}</a></p> */}
          {/* need to make another API call to check for ebooks*/}
        </div>
      </div>
    </div>
  )
}

export default OpenLibraryBookCard;