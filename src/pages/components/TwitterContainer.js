import React from "react";
import styled from 'styled-components';
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Buffer = styled.div`
  margin-bottom: 30px;
`;

const TwitterContainer = () => {
  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <Buffer />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="tswasteland_bot"
          options={{
            tweetLimit: "3",
            // width: "400px",
            // height: "300px",
          }}
          theme="dark"
          noHeader="true"
          noBorders="true"
          noFooter="true"
        ></TwitterTimelineEmbed>
      </div>
    </section>
  );
};

export default TwitterContainer;
