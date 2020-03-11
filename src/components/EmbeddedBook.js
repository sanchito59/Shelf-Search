import React from 'react';

export default function EmbeddedBook(props) {
  return (
    <div>
      <iframe src={props.ebookURL + "?ui=embed"} width="525px" height="525px"></iframe>
    </div>
  );
}