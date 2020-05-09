import React from 'react';

export default function EmbeddedBook(props) {
  return (
    <div>
      <iframe src={props.ebookURL + "?ui=embed"}></iframe>
    </div>
  );
}