import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Select from 'components/Select';
import Button from 'components/Button';
import jobData from '$sources/jobs/index.json';

dayjs.extend(relativeTime);

const jobTitleOptions = [
  { value: 'all', text: 'All Positions' },
  // get unique job titles to show as options
  ...jobData
    .map(({ job_title }) => job_title)
    .sort()
    .filter((jobTitle, i, array) => array.indexOf(jobTitle) === i)
    .map(jobTitle => ({ value: jobTitle, text: jobTitle }))
];

const jobLocationOptions = [
  { value: 'all', text: 'All Locations' },
  // get unique job locations to show as options
  ...jobData
    .map(({ location }) => location)
    .sort()
    .filter((location, i, array) => array.indexOf(location) === i)
    .map(location => ({ value: location, text: location }))
];

export default class Jobs extends React.Component {
  state = {
    filterKeys: {
      // key must match JSON key so that we can filter later
      job_title: 'all',
      location: 'all'
    }
  };

  handleSelectChange = ({ target: { value, name } }) =>
    this.setState(prev => ({
      ...prev,
      filterKeys: {
        ...prev.filterKeys,
        [name]: value
      }
    }));

  render() {
    const { filterKeys } = this.state;
    const handleSelectChange = this.handleSelectChange;
    return (
      <section id="jobs-section" className="pt-24">
        <div className="container">
          <div id="job-section-header" className="row">
            <div className="col flex items-center flex-wrap sm:flex-no-wrap">
              <h4 className="uppercase text-center sm:text-left w-full sm:w-auto">
                Openings
              </h4>
              <div className="ml-10 w-32">
                <Select
                  name="job_title"
                  value={filterKeys.job_title}
                  onChange={handleSelectChange}
                  options={jobTitleOptions}
                />
              </div>
              <div className="ml-8 w-32">
                <Select
                  name="location"
                  value={filterKeys.location}
                  options={jobLocationOptions}
                  onChange={handleSelectChange}
                />
              </div>
              <div className="w-32 flex-grow text-right">
                <Button>Post a job</Button>
              </div>
            </div>
          </div>

          <div id="job-section-content" className="row mt-8">
            <div className="col">
              {jobData
                .filter(item => {
                  const allKeys = Object.keys(filterKeys);
                  // if filter[key] === all, ignore it from filter rules
                  const excludeKeys = allKeys.filter(
                    key => filterKeys[key] === 'all'
                  );
                  const includedKeys = allKeys.filter(
                    key => !excludeKeys.includes(key)
                  );
                  // filter using includedKeys, filter out all unmatched values
                  return includedKeys.every(
                    key => item[key] === filterKeys[key]
                  );
                })
                .map(
                  (
                    {
                      number,
                      company_name,
                      job_title,
                      location,
                      job_type,
                      created_at
                    },
                    index
                  ) => {
                    return (
                      <div key={number}>
                        <div className="row col py-4 flex justify-between">
                          <div className="flex flex-col justify-center">
                            <span>
                              #{number} {company_name}
                            </span>
                            <span className="font-bold">{job_title}</span>
                          </div>
                          <div className="flex flex-col justify-center text-sm text-right">
                            <span className="font-bold">
                              {location} - {job_type}
                            </span>
                            <span>{dayjs().to(dayjs(created_at))}</span>
                          </div>
                        </div>
                        {index !== jobData.length - 1 && (
                          <hr className="w-full bg-grey border-grey border-t" />
                        )}
                      </div>
                    );
                  }
                )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
