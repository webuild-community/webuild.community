import React, { useState, useMemo } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Select from 'components/Select';
import Button from 'components/Button';
import Container from 'components/Container';
import { H3, H6 } from 'components/typography';
import classnames from 'classnames';
import { graphql, StaticQuery } from 'gatsby';

const jobQuery = graphql`
  {
    data: allMarkdownRemark(filter: { frontmatter: { key: { eq: "jobs" } } }) {
      edges {
        node {
          id
          frontmatter {
            list {
              company
              date
              desc
              isOpened
              linkURL
              location
              title
              type
            }
          }
        }
      }
    }
  }
`;

dayjs.extend(relativeTime);

const Jobs = () => (
  <StaticQuery
    query={jobQuery}
    render={({ data }) => {
      if (!data) {
        return null;
      }
      const { list } = data.edges[0].node.frontmatter;

      return <JobsInternal items={list} />;
    }}
  />
);

const JobsInternal = ({ items }) => {
  const [titleFilter, setTitleFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const titleOptions = useMemo(
    () => [
      { value: 'all', text: 'All Positions' },
      // get unique job titles to show as options
      ...items
        .filter(
          ({ location }) =>
            locationFilter === 'all' || location === locationFilter
        )
        .map(({ title }) => title)
        .sort()
        .filter((jobTitle, i, array) => array.indexOf(jobTitle) === i)
        .map(jobTitle => ({ value: jobTitle, text: jobTitle }))
    ],
    [items, locationFilter]
  );

  const locationOptions = useMemo(
    () => [
      { value: 'all', text: 'All Locations' },
      // get unique job locations to show as options
      ...items
        .filter(({ title }) => titleFilter === 'all' || title === titleFilter)
        .map(({ location }) => location)
        .sort()
        .filter((location, i, array) => array.indexOf(location) === i)
        .map(location => ({ value: location, text: location }))
    ],
    [items, titleFilter]
  );

  const filterList = items.filter(({ location, title }) => {
    return (
      (titleFilter === 'all' ||
        (titleFilter !== 'all' && titleFilter === title)) &&
      (locationFilter === 'all' ||
        (locationFilter !== 'all' && locationFilter === location))
    );
  });

  return (
    <section
      id="jobs-section"
      className="sm:mt-12 mt-4 lg:mt-24 pt-10 lg:pb-10 sm:border-none border-t border-gray-200"
    >
      <Container>
        <div className="flex items-center flex-wrap sm:flex-no-wrap">
          <div className="flex sm:items-center sm:flex-row flex-col w-full">
            <H3 className="flex sm:flex-row flex-col items-start sm:items-center justify-between">
              Openings{' '}
              <Button className="sm:hidden block sm:mt-0 mt-5">
                Post a job
              </Button>
            </H3>
            <div className="flex items-center justify-between sm:w-auto w-full sm:mt-0 mt-5 sm:border-none border-t border-b border-gray-200 sm:py-0 py-5">
              <Select
                className="sm:ml-10"
                name="title"
                value={titleFilter}
                onChange={e => {
                  setTitleFilter(e.target.value);
                }}
                options={titleOptions}
              />
              <Select
                className="sm:ml-8"
                name="location"
                value={locationFilter}
                options={locationOptions}
                onChange={e => {
                  setLocationFilter(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="w-32 flex-grow text-right sm:block hidden">
            <Button>Post a job</Button>
          </div>
        </div>

        <div className="mt-7">
          {filterList.length === 0 ? (
            <div className="pt-6 border-t border-gray-200">
              There is no available position
            </div>
          ) : (
            filterList.map(
              (
                { number, company, title, location, type, date, linkURL },
                index
              ) => {
                return (
                  <div
                    key={index}
                    className={classnames(
                      'flex py-4 items-center justify-between',
                      {
                        'border-b border-gray-200':
                          index < filterList.length - 1
                      }
                    )}
                  >
                    <div className="text-gray-800">
                      <div>
                        #{number} {company}
                      </div>
                      <a
                        href={linkURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <H6 className="hover:text-primary transition-colors duration-200">
                          {title}
                        </H6>
                      </a>
                    </div>
                    <div className="text-sm text-right">
                      <div className="font-bold mb-1 text-gray-700">
                        {location} - {type}
                      </div>
                      <div className="text-gray-500">
                        {dayjs().to(dayjs(date))}
                      </div>
                    </div>
                  </div>
                );
              }
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Jobs;
