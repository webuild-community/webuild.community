import React from 'react';
import Home from 'containers/home';
import { airtable } from 'apis/airtable';

import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const records = await airtable('Event')
    .select({
      fields: ['Event URL', 'Date', 'Event Name', 'Location'],
      view: 'Grid view'
    })
    .all();

  const events = records.map(record => ({
    url: record.get('Event URL') || '',
    date: record.get('Date') || '',
    name: record.get('Event Name') || '',
    location: record.get('Location') || ''
  }));

  return {
    props: { events } // will be passed to the page component as props
  };
};

function IndexPage(props) {
  return <Home events={props.events} />;
}

export default IndexPage;
