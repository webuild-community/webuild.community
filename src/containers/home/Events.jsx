import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/Container';
import dayjs from 'dayjs';
import { H3, H6 } from 'components/typography';
import Button from 'components/Button';
import classnames from 'classnames';
import PastStamp from 'assets/svg/past-stamp.svg';
import { useState } from 'react';
import { useEffect } from 'react';

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
  const data = useStaticQuery(eventsQuery);

  const list = useMemo(() => {
    if (!data) {
      return null;
    }
    const { list } = data.data.edges[0].node.frontmatter;
    const sortedList = [...list].sort((a, b) =>
      dayjs(a.date).isAfter(dayjs(b.date))
    );
    const fortcoming = [];
    const past = [];
    const now = Date.now();

    sortedList.forEach(event => {
      if (dayjs(event.date).isBefore(dayjs(now))) {
        past.push({ ...event, isPast: true });
      } else {
        fortcoming.push({ ...event, isPast: false });
      }
    });

    // show last 2 outdated events + all upcoming events
    return [...fortcoming, past[0], past[1]].filter(Boolean);
  }, [data]);

  const [renderList, setRenderList] = useState(list);

  useEffect(() => {
    setRenderList([...renderList]);
  }, []);

  if (!renderList) {
    return null;
  }

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

        {renderList.length === 0 ? (
          <div className="pt-6 border-t border-gray-200 mt-7">
            There is no upcoming event
          </div>
        ) : (
          renderList.map(
            ({ location, date, guests, name, link, isPast }, index) => {
              const info = [
                `${dayjs(date).format('MMM DD, YYYY')} at ${dayjs(date).format(
                  'hh:mm a'
                )}`
              ];
              if (guests > 0) {
                info.push(`${guests} guests`);
              }
              console.log({ link, name });

              return (
                <div
                  key={name}
                  className={classnames('py-5 relative', {
                    'border-b border-gray-200': index < renderList.length - 1
                  })}
                >
                  {isPast && (
                    <div className="absolute h-full w-full bg-foreground opacity-50 z-10 pointer-events-none" />
                  )}
                  <div className="flex">
                    <a
                      style={{ maxWidth: 'calc(100% - 5rem)' }}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <H6 className="hover:text-primary transition-colors duration-200">
                        {name}
                      </H6>
                    </a>
                    {isPast && (
                      <span className="w-20 relative z-50 pointer-events-none">
                        <PastStamp className="w-20 h-20 absolute transform -translate-y-6" />
                      </span>
                    )}
                  </div>
                  <div className="text-sm my-1 text-gray-700">
                    {info.join(' - ')}
                  </div>
                  <div className="text-base text-gray-800">{location}</div>
                </div>
              );
            }
          )
        )}
      </Container>
    </section>
  );
};
export default Events;
