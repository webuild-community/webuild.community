import React from 'react';
import { NextSeo } from 'next-seo';
import DefaultLayout from '../components/DefaultLayout';
import Container from '../components/Container';

const CodeForVietnam = () => {
  return (
    <>
      <NextSeo title={`Code for Vietnam | WeBuild`} />
      <DefaultLayout>
        <Container className="py-6 sm:py-10">
          <div className="max-w-xl mx-auto mb-8">
            <h1 className="text-3xl font-bold sm:text-4xl">About us</h1>
          </div>
          <div className="prose max-w-xl mx-auto">
            <p>
              We connect developers and development teams with NGOs or social
              causes that need tech solutions.
            </p>
            <p>
              The developers will work pro-bono to support the organizations
              from simple IT setups to website and mobile application
              development.
            </p>
            <h5>
              <b>Some Past and Ongoing Projects</b>
            </h5>
            <ul>
              <li>
                Mobile Application for Salt Cancer Initiatives to help cancer
                patients in Vietnam.
              </li>
              <li>Setup online donation for The Library Project.</li>
              <li>
                Building a practical programming course for Dariu Foundation to
                teach high school students in remote areas of Vietnam.
              </li>
            </ul>
            <h5>
              <b>Process</b>
            </h5>
            <ol>
              <li>
                <strong>Submission</strong>: Submit this form (AirTable) to tell
                us about your stories and what you need.
              </li>
              <li>
                <strong>Ideation</strong>: We will set up a call with you to
                discuss how we can best support you.
              </li>
              <li>
                <strong>Kickstart</strong>: We will connect you with the
                suitable development team or developers to kickstart the
                project.
              </li>
            </ol>
            <h5>
              <b>Get involved</b>
            </h5>
            <p>
              Are you a developer or development teams who want to contribute
              and support impactful social projects in Vietnam? Please reach out
              to us at{' '}
              <a href="mailto:hello@webuild.community">
                hello@webuild.community
              </a>{' '}
              {`with the subject "Volunteer for Code for Vietnam".`}
            </p>
          </div>
        </Container>
      </DefaultLayout>
    </>
  );
};

export default CodeForVietnam;
