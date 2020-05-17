import React from 'react';
import styled from 'styled-components';
import { Row } from 'antd';
import PoemOfTheDay from './PoemOfTheDay';
import SinglePoemDisplay from './SinglePoemDisplay';

const PoemRow = styled(Row)`
  justify-content: center;
`

const PoemList = (props) => {
  const { poemList } = props;

  return (
    <>
      <PoemOfTheDay />
      <PoemRow gutter={[80, 0]}>
        {
          poemList.map((poem, i) => {
            return <SinglePoemDisplay
              title={poem.title}
              author={poem.author}
              poem={poem.lines}
              key={i}
            />
          })
        }
      </PoemRow>
    </>
  );
}

export default PoemList;
