import React from "react";
import styled from 'styled-components';
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Buffer = styled.div`
  margin-bottom: 30px;
`;

const StyledContainer = styled.section`
  && {
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
    text-align: left;

    @media only screen and (max-width: 768px) {
      justify-content: flex-end;
    }
  }
`;

const TwitterContainer = () => {
  return (
    <StyledContainer className="twitterContainer">
      <div className="twitter-embed">
        <Buffer />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="tswasteland_bot"
          options={{
            tweetLimit: "3",
            width: "400px",
            height: "300px",
          }}
          theme="dark"
          noHeader={true}
          noBorders={true}
          noFooter={true}
        ></TwitterTimelineEmbed>
      </div>
    </StyledContainer>
  );
};

export default TwitterContainer;
