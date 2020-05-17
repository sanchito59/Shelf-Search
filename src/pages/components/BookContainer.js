import styled from 'styled-components';

const BookContainer = styled.div`
  background-color: #fff;
  text-align: left;
  color: #444;
  border-radius: 4px;
  padding: 10px;
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 1px solid #dadada;
  width: 350px;
  
  :hover {
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    border: 1.5px solid #dadada;
    a {
      color: white;
    }
  }
`;

export default BookContainer;
