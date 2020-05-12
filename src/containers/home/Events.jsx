import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Container from 'components/Container';
import dayjs from 'dayjs';

const eventsQuery = graphql`
  {
    data: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "events" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            list {
              location
              date
              guests
              name
              link
            }
          }
        }
      }
    }
  }
`;

const Events = () => {
  return (
    <StaticQuery
      query={eventsQuery}
      render={({ data }) => {
        if (!data) {
          return null;
        }
        const { list } = data.edges[0].node.frontmatter;
        const fortcoming = [];
        const past = [];
        const now = Date.now();

        list.forEach(event => {
          if (dayjs(event.date).isBefore(dayjs(now))) {
            past.unshift(event);
          } else {
            fortcoming.unshift(event);
          }
        });

        // const { numOfOpen, numOfClosed } = list.reduce(
        //   (a, { isOpened }) => {
        //     if (isOpened) {
        //       a.numOfOpen = a.numOfOpen + 1;
        //     } else {
        //       a.numOfClosed = a.numOfClosed + 1;
        //     }
        //     return a;
        //   },
        //   {
        //     numOfOpen: 0,
        //     numOfClosed: 0
        //   }
        // );

        return <Container>{JSON.stringify(list)}</Container>;
      }}
    />
  );
};

export default Events;
