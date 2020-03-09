import React from 'react';

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

  return (
    <div style={poemDiv}>
      <h2>{props.title}</h2>
      <h4>BY <span style={poemAuthor}>{props.author}</span></h4>
      <div style={poemBody}>
        {
          props.poem.map((line, i) => {
            console.log(i, ': ', line)
            return <li style={listStyle}>{line}</li>
          })
        }
      </div>
    </div>
  );
}