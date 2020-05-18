import styled from 'styled-components';

const SearchButton = styled.button`
  background-color: rgb(204, 186, 107);
  border-radius: 8px;
  border: none;
  color: white;
  padding: 7.5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px;
  margin-right: 12px;
  cursor: pointer;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 2px 16px 0 rgba(0, 0, 0, 0.19);
  -webkit-transition-duration: 0.4s;
  /* Safari */
  transition-duration: 0.4s;
    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.24), 0 12px 10px 0 rgba(0, 0, 0, 0.19);
    }

    :focus {
      outline: none;
    }
`;

export default SearchButton;
