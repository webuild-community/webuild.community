import React from 'react';
import { Tab, TabPanel } from './Tab';
import Agenda from './Agenda';

const RightSide = () => {
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <div className="w-full sm:w-2/3">
      <div className="leading-tight mt-8 md:mt-0">
        <nav
          role="tablist"
          aria-orientation="horizontal"
          className="flex text-base"
        >
          <Tab
            index={0}
            label="Activities"
            selected={currentTab === 0}
            onClick={setCurrentTab}
          />
          <Tab
            index={1}
            label="Information"
            selected={currentTab === 1}
            onClick={setCurrentTab}
          />
          <Tab
            index={2}
            label="Venue"
            selected={currentTab === 2}
            onClick={setCurrentTab}
          />
        </nav>
        <div className="mt-8">
          <TabPanel key="tab-1-content" selected={currentTab === 0}>
            <div className="text-2xl font-bold">Activities at WeBuild Day</div>
            <p className="text-lg mt-4">
              The event is open for talks & workshops from the developer
              community. Talks will be for beginners, intermediate and advanced
              levels, as well as for the interest of everyone. Our scope of
              talks will include a broad area, anything related to software
              development.
            </p>
            <div className="text-lg mt-4">Time limit for</div>
            <div className="text-lg mt-1">
              <strong>#Sharing:</strong> 40 minutes.
            </div>
            <div className="text-lg mt-2">
              <strong>#Workshop:</strong> 150 minutes
            </div>
            <Agenda />
          </TabPanel>
          <TabPanel key="tab-2-content" selected={currentTab === 1}>
            <div className="text-2xl font-bold">
              Expected number of participants
            </div>
            <div className="text-40px font-bold mt-4">160</div>
            <div className="text-lg">participants throughout the day</div>
            <div className="text-2xl font-bold mt-10">Marketing Channels</div>
            <div className="text-lg mt-4">
              #Social media channels by{' '}
              <strong>20+ developer communities</strong> in WeBuild’s network
              (~50k reach on Facebook)
            </div>
            <div className="text-lg mt-4">
              #Email blast to <strong>~10k developers</strong>
            </div>
            <div className="text-2xl font-bold mt-10">Timeline</div>
            <div className="flex items-center mt-4 text-base">
              <div className="timeline-box flex flex-col justify-center p-2 border">
                <div className="font-bold">Nov 15th</div>
                <div className="mt-1">
                  Announcement and Open for Registration
                </div>
              </div>
              <div className="m-4 text-lg">&rarr;</div>
              <div className="timeline-box flex flex-col justify-center p-2 border">
                <div className="font-bold">Dec 12th</div>
                <div className="mt-1">Event Date</div>
              </div>
            </div>
          </TabPanel>
          <TabPanel key="tab-3-content" selected={currentTab === 2}>
            <div className="text-lg">
              WeBuild Day 2020 will be held at:
              <strong> Block 71 Saigon</strong>
            </div>
            <div className="map w-full mt-5">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.541412110838!2d106.72252081443732!3d10.769782592326056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f52c37d93d9%3A0x9847f27c2b3fa166!2sBLOCK71%20Saigon!5e0!3m2!1svi!2sus!4v1606891310585!5m2!1svi!2sus"
                frameBorder="0"
                allowFullScreen={undefined}
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
