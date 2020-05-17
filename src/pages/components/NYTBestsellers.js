import React from 'react';
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

  .slick-dots {
    height: 0px;

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

const NYTBestsellers = (props) => {
  const { bestSellers } = props;
  // console.log('nyt props: ', props)
  if (typeof bestSellers !== 'undefined') {
    return (
      <div>
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
      </div>
    )
  } else {
    return (
      <div>NYT Bestsellers unavailable.</div>
    );
  }
}

export default NYTBestsellers;
