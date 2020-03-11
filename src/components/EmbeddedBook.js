import React from 'react';

export default function EmbeddedBook(props) {
  return (
    <div>
      <iframe src={props.ebookURL + "?ui=embed"} width="480px" height="480px"></iframe>
    </div>
  );
}