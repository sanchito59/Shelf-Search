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

  const buttonStyle = {
    container: {},
    text: {},
    buttons: {},
    play: {
      hover: {
        backgroundColor: 'GhostWhite'
      },
      button: {
        padding: '4',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'Gainsboro',
        border: 'solid 1px rgba(255,255,255,1)',
        borderRadius: 6
      }
    },
    pause: {
      play: {},
      hover: {}
    },
    stop: {
      play: {
        hover: {},
        button: {}
      },
      resume: {
        play: {
          hover: {},
          button: {}
        }
      }
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
        <Speech
          textAsButton={true}
          displayText='Listen'
          style={buttonStyle}
          text={typeof props.poem.description === 'undefined' ? 'Test Author' : props.poem.poem.poem}
        />
      </p>
    </div >
  );
}