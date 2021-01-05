import React, { useEffect } from 'react';
import Home from 'containers/home';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

function IndexPage() {
  useEffect(() => {
    base('Schedule')
      .select({
        // Selecting the first 3 records in Full schedule:
        maxRecords: 100,
        view: 'Full schedule'
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          records.forEach(function (record) {
            console.log('Retrieved', record.get('Activity'));
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);

  return <Home />;
}

export default IndexPage;
