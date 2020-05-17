import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import Bestseller from './Bestseller';

const BestsellerRow = styled(Row)`
  justify-content: center;
`;

const TitleColumn = styled(Col)`
  margin: 20px;
  line-height: 5;
`;

const SectionTitle = styled.h1`
  color: black !important;
  margin: 0px;
`;

const NYTBestsellers = (props) => {
  const { bestSellers } = props;
  // console.log('nyt props: ', props)
  if (typeof bestSellers !== 'undefined') {
    return (
      <div>
        <BestsellerRow>
          <TitleColumn lg={10} sm={24}>
            <SectionTitle>This Week's NYT Bestsellers: </SectionTitle>
          </TitleColumn>
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
