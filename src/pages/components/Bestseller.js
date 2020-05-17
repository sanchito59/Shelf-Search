import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';

const BestSellerCard = styled.div`
  font-family: Caladea, sans-serif;
  background-color: rgb(100, 100, 100);
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  border: 2px solid rgb(171, 171, 171);
`;

const InformationRow = styled(Row)`
  justify-content: center;
  color: white;
`;

const Rank = styled.h4`
    color: white;
    font-weight: 700;
    margin: 0px;
    font-size: 40px;
    text-align: left;
    padding-left: 16px;
`;

const TitleColumn = styled(Col)`
  text-align: left;

  span {
    text-decoration: underline;
    color: white;
    font-size: 24px;
    :hover {
      font-style: italic;
    }
  }
`;

const Author = styled.h5`
  color: white !important;
  font-size: 20px;
  text-align: left;
`;

const Divider = styled.hr`
  width: 90%;
  margin-bottom: 15px;
  border: 2px solid white;
`;

const BlurbColumn = styled(Col)`
  margin: 0 auto;
  text-align: left;
`;

const Blurb = styled.p`
  letter-spacing: 1px;
  font-weight: bold;
`;

const AmazonButton = styled.a`
  background-color: #FF9900;
  border: none;
  color: #000000;
  padding: 10px 30px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 16px 2px;
  cursor: pointer;
  float: left;

  :hover {
    background-color: rgb(240, 144, 1);
    color: white;
  }
`;

const Bestseller = (props) => {
  const { currentRank, amazonLink, title, author, description, weeksOnList, rankLastWeek } = props;

  return (
    <BestSellerCard>
      <InformationRow>
        <Col lg={4}>
          <Rank>{currentRank} |</Rank>
        </Col>
        <TitleColumn lg={14}><a href={amazonLink} target='_blank'><span>{title}</span></a>
          <Author>by {author}</Author>
        </TitleColumn>
        <Col lg={6}><AmazonButton href={amazonLink} target='_blank'><i className="fab fa-amazon"></i> Buy</AmazonButton></Col>
        <Divider />
        <BlurbColumn lg={20}><Blurb>{description}</Blurb></BlurbColumn>
        <Col lg={8}>Current Rank: {currentRank}</Col>
        <Col lg={8}>Weeks on List: {weeksOnList}</Col>
        <Col lg={8}>Rank Last Week: {rankLastWeek}</Col>
      </InformationRow>
    </BestSellerCard>
  );
}

export default Bestseller;
