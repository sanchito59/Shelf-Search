import React from 'react';
import styled from 'styled-components';

const Ebook = styled.iframe`
  && {
    width: 600px;
    height: 465px;
  }
`;

export default function EmbeddedBook(props) {
  const { ebookURL } = props;
  return (
    <div>
      <Ebook title="scrollable ebook" src={ebookURL + "?ui=embed"} />
    </div>
  );
}
