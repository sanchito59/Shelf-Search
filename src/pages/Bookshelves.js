import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import { Col, Row } from 'antd';
import BookContainer from './components/BookContainer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import Bookshelf from './Bookshelf';
import axios from 'axios';
import update from 'immutability-helper';

const SingleBookShelf = styled(Row)`
  margin: 0px !important;
  width: 100%;
  justify-content: center;
  border-radius: 4px;
`;

const ShelfTitle = styled.h1`
  color: black !important;
`;

const BookCover = styled(LazyLoadImage)`
    width: 100%;
    max-height: 40%;
    padding: 25px;
`;

const BookTitle = styled.h2`
`;

const TextWrapper = styled.div`
    width: 100%;
    padding: 20px;
    color: black;
`;

class Bookshelves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookshelves: [],
      currentShelf: [],
      currentShelfTitle: '',
      inputValue: '',
    }
  }

  getBookshelves() {
    axios.get('/api/v1/bookshelves')
      .then(response => {
        console.log(response)
        this.setState({ bookshelves: response.data })
      })
      .catch(error => console.log(error))
  }

  getBookShelfBooks(id, title) {
    this.setState({ currentShelfTitle: title })
    axios.get(`/api/v1/bookshelves/${id}/books`)
      .then(response => {
        this.setState({ currentShelf: response.data })
      })
      .catch(error => console.log(error))
  }

  createBookshelf = (e) => {
    if (e.key === 'Enter') {
      axios.post('/api/v1/bookshelves', { bookshelf: { title: e.target.value } })
        .then(response => {
          const bookshelves = update(this.state.bookshelves, { $splice: [[0, 0, response.data]] })
          this.setState({ bookshelves: bookshelves })
        })
        .catch(error => console.log(error))
    }
  }

  deleteShelf = (id) => {
    axios.delete(`/api/v1/bookshelves/${id}`)
      .then(response => {
        const shelfIndex = this.state.bookshelves.findIndex(x => x.id === id)
        const bookshelves = update(this.state.bookshelves, { $splice: [[shelfIndex, 1]] })
        this.setState({ bookshelves: bookshelves })
      })
      .catch(error => console.log(error))
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  componentDidMount() {
    this.getBookshelves()
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input
            className="shelfInput"
            type="text"
            placeholder="Add A Shelf"
            maxLength="50"
            onKeyPress={this.createBookshelf}
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </div>
        <div className="listWrapper">
          <ul className="shelfList">
            {this.state.bookshelves.map((shelf) => {
              return (
                <Link to={`/bookshelves/${shelf.id}`}>
                  <li className="shelf" shelf={shelf} key={shelf.id}>
                    <label className="shelfLabel" onClick={(e) => this.getBookShelfBooks(shelf.id, shelf.title)}>{shelf.title}</label>
                    <span className="deleteShelfBtn" onClick={(e) => this.deleteShelf(shelf.id)}>x</span>
                  </li>
                </Link>
              )
            })}
          </ul>

          {this.state.currentShelf.length > 0 && (
            <SingleBookShelf gutter={[60, 60]}>
              <Col lg={24} md={24} sm={24}>
                <ShelfTitle>
                  {this.state.currentShelfTitle}
                </ShelfTitle>
              </Col>
              {this.state.currentShelf.map((book, i) => {
                return <Col lg={7} sm={24}>
                  <BookContainer>
                    <BookCover src='https://i.imgur.com/J5LVHEL.jpg' alt="book cover thumbnail" />
                    <TextWrapper>
                      <BookTitle>{book.title}</BookTitle>
                      <h4>Author: {book.author}</h4>
                      <p>{book.publisher} - {book.published_date === '0000' ? 'Not available' : book.published_date.substring(0, 4)} - </p>
                      <p>ISBN: {book.ISBN}</p>
                      <p>Pages: {book.page_count}</p>
                    </TextWrapper>
                  </BookContainer>
                </Col>
              })}
            </SingleBookShelf>
          )}

          {/* <Route path={`/bookshelves/:bookshelfId`} component={Bookshelf} /> */}

        </div>
      </div>
    )
  }
}

export default Bookshelves;
