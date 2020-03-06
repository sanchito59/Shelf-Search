import React from 'react';
import Speech from 'react-speech';
// Styles/Assets
import './../PoemOfDay.css';

export default function PoemOfDay(props) {
  // async API call hasn't passed the data since before the component mounts?
  setTimeout(() => {
    // logging 3 times?
    if (typeof (props.poem.poem) === 'undefined') {
      console.log('need to mount?');
      // debugger;
    } else {
      console.log('poem of day title: ', props.poem.poem.title);
      console.log('poem of day author: ', props.poem.poem.author);
      console.log('poem of day poem: ', props.poem.poem.poem);
    }
  }, 1000)

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
    <div className="poem-div" >
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
  );
}