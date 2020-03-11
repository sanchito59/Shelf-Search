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
  }

  // Speech
  const textstyle = {
    play: {
      hover: {
        backgroundColor: 'black',
        color: 'white'
      },
      button: {
        padding: '4',
        fontFamily: 'Helvetica',
        fontSize: '1.0em',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'inherit',
        border: 'none'
      },
    }
  }

  return (
    <div style={poemDiv}>
      <h2>{props.title}</h2>
      <h4>BY <span style={poemAuthor}>{props.author}</span></h4>
      <div style={poemBody}>
        <Speech
          stop={true}
          textAsButton={true}
          rate="0.7" // Not perfect, cadence is too quick
          displayText='Listen'
          style={textstyle}
          text={typeof props.poem === 'undefined' ? 'Test Poem' :
            props.poem.join('') // Works but not the best solution?
          }
        />
        {/* This doesn't really work */}
        {document.getElementsByClassName('rs-stop').innerHTML = 'Stop'}
        {
          props.poem.map((line) => {
            return <li style={listStyle}>{line}</li>
          })
        }
      </div>
    </div>
  );
}