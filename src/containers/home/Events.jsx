import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Container from 'components/Container';
import dayjs from 'dayjs';
import { H3, H6 } from 'components/typography';
import Button from 'components/Button';
import classnames from 'classnames';

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

        return (
          <section id="upcoming-events" className="sm:my-8 pt-10 lg:my-12">
            <Container>
              <div className="flex sm:flex-row flex-col justify-between items-start mb-4">
                <H3>Upcoming Events</H3>
                <a
                  href="https://airtable.com/shrAzFFFgoaZ83l5d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="mt-5 sm:mt-1">Add event</Button>
                </a>
              </div>

              {fortcoming.length === 0 ? (
                <div className="pt-6 border-t border-gray-200 mt-7">
                  There is no upcoming event
                </div>
              ) : (
                fortcoming.map(
                  ({ location, date, guests, name, link }, index) => {
                    const info = [
                      `${dayjs(date).format('MMM DD, YYYY')} at ${dayjs(
                        date
                      ).format('hh:mm a')}`,
                      name
                    ];
                    if (guests > 0) {
                      info.push(`${guests} guests`);
                    }
                    return (
                      <div
                        key={link}
                        className={classnames('py-3', {
                          'border-b border-gray-200':
                            index < fortcoming.length - 1
                        })}
                      >
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <H6 className="hover:text-primary transition-colors duration-200">
                            {name}
                          </H6>
                        </a>
                        <div className="text-sm my-1 text-gray-700">
                          {info.join(' - ')}
                        </div>
                        <div className="text-base text-gray-800">
                          {location}
                        </div>
                      </div>
                    );
                  }
                )
              )}
            </Container>
          </section>
        );
      }}
    />
  );
};

export default Events;
