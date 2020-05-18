import React from 'react';
import styled from 'styled-components';
import { BackTop } from 'antd';

const ScrollUpButton = styled(BackTop)`
  right: 40px;
  height: 60;
  width: 60;
  line-height: 40px;
  color: #fff;
  text-align: center;
  font-size: 14;
  
  div {
    background-color: #282c34;
    border-radius: 50%;
  }
`;

const ScrollUp = () => {
  return (
    <ScrollUpButton visibilityHeight="1000">
      <i className="fas fa-arrow-up"></i>
    </ScrollUpButton>
  );
}

export default ScrollUp;
