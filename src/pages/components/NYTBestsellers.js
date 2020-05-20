import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Carousel, Col, Row } from 'antd';
import Bestseller from './Bestseller';

const BestsellerRow = styled(Row)`
  margin-top: 20px;
  justify-content: center;
`;

const SectionTitle = styled.h1`
  font-family: Caldea, Georgia, sans-serif;
  color: black !important;
  margin: 0px;
`;

const BestSellerCarousel = styled(Carousel)`
  padding: 20px;

  .slick-list {
    margin-top: 20px;
  }

  .slick-dots {
    height: 0px;
    z-index: 0;

    li {
      margin: 0 8px;
    }

    ul li:first-child {
      border: 2px solid red;
    }

    li button {
      border: 2px solid rgb(171,171,171);
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: white;
    }
    
    .slick-active button {
      width: 22px;
      height: 22px;
      background: rgb(100,100,100) !important;
      border-radius: 50%;
    }
  }
`;

const NYT_KEY = `${process.env.REACT_APP_NYT_KEY}`;

const NYTBestsellers = () => {
  const [bestSellers, setBestSellers] = useState(undefined)
  const [call, setCall] = useState(false)
  const [bestSellerISBNs, setBestSellerISBNs] = useState([])

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=${NYT_KEY}`,
      { method: 'get', }).then(response => {
        return response.json();
      }).then(json => {
        let bestSellerData = [];
        for (let i = 0; i < 15; i++) {
          bestSellerData.push(json.results[i].isbns[0].isbn10);
        }
        setBestSellers(json.results);
        setBestSellerISBNs(bestSellerData);
      })
      .catch(error => {
        console.log('Uh oh, ', error);
      });
  }, [call])

  if (typeof bestSellers !== 'undefined') {
    return (
      <>
        <BestsellerRow>
          <Col lg={14} sm={24}>
            <SectionTitle>This Week's NYT Bestsellers: </SectionTitle>
            <BestSellerCarousel dotPosition="top">
              {
                bestSellers.map((book, i) => {
                  return <Bestseller
                    title={book.book_details[0].title}
                    author={book.book_details[0].author}
                    currentRank={book.rank}
                    rankLastWeek={book.rank_last_week}
                    weeksOnList={book.weeks_on_list}
                    amazonLink={book.amazon_product_url}
                    description={book.book_details[0].description}
                    key={i}
                  />
                })
              }
            </BestSellerCarousel>
          </Col>
        </BestsellerRow>
      </ >
    )
  } else {
    return (
      <>NYT Bestsellers unavailable.</>
    );
  }
}

export default NYTBestsellers;
