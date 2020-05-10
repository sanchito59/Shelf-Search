import React from 'react';
import Speech from 'react-speech';

export default function SinglePoemDisplay(props) {
  // console.log('singlePoemDisplay props: ', props);
  const poemDiv = {
    textAlign: 'left',
    marginLeft: '30px'
  }
  const listStyle = {
    listStyle: 'none',
  }

  const poemAuthor = {
    textTransform: 'uppercase',
    textDecoration: 'underline',
    letterSpacing: '1px'
  }

  const poemBody = {
    fontFamily: 'Caladea, sans-serif',
    paddingBottom: '24px'
  }

  const { title, author, poem } = props;

  return (
    <div style={poemDiv}>
      <h2>{title}</h2>
      <h4>BY <span style={poemAuthor}>{author}</span></h4>
      <div style={poemBody}>
        <Speech
          stop={true}
          textAsButton={true}
          rate="0.7" // Not perfect, cadence is too quick
          displayText='Listen'
          text={typeof poem === 'undefined' ? 'Test Poem' :
            poem.join('')} // Works but not the best solution?
        />
        {/* This doesn't really work */}
        {document.getElementsByClassName('rs-stop').innerHTML = 'Stop'}
        {
          poem.map((line) => {
            return <li style={listStyle}>{line}</li>
          })
        }
      </div>
    </div>
  );
}