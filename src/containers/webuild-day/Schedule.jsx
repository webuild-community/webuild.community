import React from 'react';
import Container from 'components/Container';
import classnames from 'classnames';
import ticketImg from 'assets/images/webuild-day/ticket.svg';
import Speaker1 from 'assets/images/webuild-day/speakers/1.png';

const listSchedule = [
  {
    time: '09:00 - 10:00 AM',
    pic: Speaker1,
    name: 'Thuy Phan',
    position: 'Mobile Developer',
    at: 'Line',
    tag: 'Android',
    title: 'Dependency injection with Hilt',
    description:
      'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'
  },
  {
    time: '09:00 - 10:00 AM',
    pic: Speaker1,
    name: 'Thuy Phan',
    position: 'Mobile Developer',
    at: 'Line',
    tag: 'Android',
    title: 'Dependency injection with Hilt2',
    description:
      'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'
  },
  {
    time: '09:00 - 10:00 AM',
    pic: Speaker1,
    name: 'Thuy Phan',
    position: 'Mobile Developer',
    at: 'Line',
    tag: 'Android',
    title: 'Dependency injection with Hilt3',
    description:
      'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'
  }
];

const Schedule = () => {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32 bg-primary text-foreground font-normal">
      <Container>
        <div className="md:pr-6 mb-6 relative">
          <p className="text-lg font-bold">Dec 12th, 2020</p>
          <h1 className="text-3xl font-bold mb-6 md:mb-16">
            Schedule & Agenda
          </h1>
          {listSchedule.map(
            (
              { time, pic, name, position, at, tag, title, description },
              index,
              arr
            ) => {
              const isLast = index === arr.length - 1;
              return (
                <div
                  key={title}
                  className={classnames(
                    'flex flex-wrap md:flex-no-wrap justify-center py-6',
                    { 'border-b border-gray-200': !isLast }
                  )}
                >
                  <div
                    className=" ml-0 w-2/5 md:ml-4 mt-3"
                    style={{ color: '#9CCCB8' }}
                  >
                    {time}
                  </div>
                  <div className="flex w-3/5 md:ml-8">
                    <img className="w-12 h-12 mr-4" src={pic} alt={name} />
                    <div>
                      <p className="font-bold">{name}</p>
                      <p className="text-white">{position}</p>
                      <p className="text-white">@{at}</p>
                    </div>
                  </div>
                  <div className="w-full md:ml-16 mt-8 md:mt-0">
                    <p className="text-sm">#{tag}</p>
                    <p className="text-lg font-bold">{title}</p>
                    <p className="text-lg" style={{ color: '#C5DFD1' }}>
                      {description}
                    </p>
                  </div>
                </div>
              );
            }
          )}
          <div className="absolute bottom-0 right-0 transfrom transform translate-y-full lg:translate-x-6">
            <button className="cursor-pointer focus:outline-none">
              <img src={ticketImg} alt="ticket" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Schedule;
