import React from 'react';
import './../App.css';

const BookCard = (props) => {

  return (
    <div className="book-card">
      <div>
        <img src={props.image} alt="book cover thumbnail"></img>
        <h2>{props.title}</h2>
        <h4>Author: {props.author}</h4>
        <p>{props.publisher}</p>
        <p>Published Date: {props.publishedDate === '0000' ? 'Not available' : props.publishedDate.substring(0, 4)}</p>
        <p>ISBN: {props.ISBN}</p>
        <p>Preview: <a href={props.previewLink} target="_blank" className="preview-link">{props.title}</a></p>
        {/* need to error handle links without downloads */}
        {/* <p><a className="preview-link" href={props.downloadLinkForDevices}>Download for Device</a></p> */}
      </div>
    </div>
  )
}

export default BookCard;