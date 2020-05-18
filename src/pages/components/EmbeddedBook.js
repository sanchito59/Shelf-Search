import React from 'react';

export default function EmbeddedBook(props) {
  const { ebookURL } = props;
  return (
    <div>
      <iframe title="scrollable ebook" src={ebookURL + "?ui=embed"}></iframe>
    </div>
  );
}
