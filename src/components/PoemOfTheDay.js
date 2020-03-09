import React from 'react';
import Speech from 'react-speech';
// Components

export default function PoemOfTheDay(props) {
  console.log('poem of day props: ', props);
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
  return <div className="poem-div" >
    {/* This works, but if you change 'props.poem.description' it breaks */}
    < h1 className="poem-of-the-day" > {props.poem.description}</h1>
    <h2 className="poem-title">{typeof props.poem.description === 'undefined' ? 'Test Title' : props.poem.poem.title}</h2>
    <h4 className="poem-author">{typeof props.poem.description === 'undefined' ? 'Test Author' : props.poem.poem.author}</h4>
    <p className="poem-body">
      {typeof props.poem.description === 'undefined' ? 'Test Author' : props.poem.poem.poem}
      <br></br>
      <br></br>
      <Speech
        // How to style... 
        stop={true}
        textAsButton={true}
        displayText='Listen'
        style={textstyle}
        text={typeof props.poem.description === 'undefined' ? 'Test Author' : props.poem.poem.poem}
      />
      {/* This doesn't really work */}
      {document.getElementsByClassName('rs-stop').innerHTML = 'Stop'}
    </p>
  </div >
}