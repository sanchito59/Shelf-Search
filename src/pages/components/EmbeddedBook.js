import React from 'react';

export default function EmbeddedBook(props) {
  const { ebookURL } = props;
  return (
    <div>
      <iframe src={ebookURL + "?ui=embed"}></iframe>
    </div>
  );
}
