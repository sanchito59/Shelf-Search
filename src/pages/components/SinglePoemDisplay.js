import React from 'react';
import styled from 'styled-components';
import Speech from 'react-speech';
import { Col } from 'antd';

const PoemBody = styled.div`
    font-family: Caladea, sans-serif;
    padding-bottom: 30px;

    .rs-container button {
      margin-bottom: 20px;
    }
    
    .rs-stop {
      width: 25px;
    }

    ul {
      margin: 0; 
      padding: 0;
    }

    li:first-child::first-letter {
      font-size:26px;
      font-style:italic;
      padding-right:3px;
    }
    
    .bot-left {
      position: relative;
      padding-bottom: 20px;
    }

    .bot-left:before, .bot-left:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: -3px;
      
    }

    .bot-left:after {
      right: -3px;
      height: 3px;
      background-image: -webkit-gradient(linear, 0 0, 30% 0, from(#000), to(transparent));
    }
`;

export default function SinglePoemDisplay(props) {
  // console.log('singlePoemDisplay props: ', props);
  const poemDiv = {
    textAlign: 'left',
    marginLeft: '30px',
    color: 'black !important',
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
    <Col sm={24} md={12} lg={16}>
      <div style={poemDiv}>
        <h2>{title}</h2>
        <h4>BY <span style={poemAuthor}>{author}</span></h4>
        <PoemBody>
          <Speech
            stop={true}
            textAsButton={true}
            rate="0.7" // Not perfect, cadence is too quick
            displayText='Listen'
            text={typeof poem === 'undefined' ? 'Test Poem' :
              poem.join('')} // Works but not the best solution?
          />
          <ul className="bot-left">
            {
              poem.map((line) => {
                return <li style={listStyle}>{line}</li>
              })
            }
          </ul>
        </PoemBody>
      </div>
    </Col>
  );
}
