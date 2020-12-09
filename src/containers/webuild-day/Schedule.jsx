import React from 'react';
import Container from 'components/Container';
import classnames from 'classnames';

const listSchedule = [
  {
    time: '9:00 - 9:10',
    name: 'Han Ngo',
    position: 'Software Engineer',
    at: '',
    tag: '#WeBuild',
    title: 'WeBuild Community in 2020',
    description: ''
  },
  {
    time: '9:20 - 9:50',
    name: 'Thuy Phan',
    position: 'Mobile Developer',
    at: '@Line',
    tag: '#Android',
    title: 'Dependency injection with Hilt',
    description: ''
  },
  {
    time: '10:00 - 10:30',
    name: 'Andy Ho',
    position: 'CTO',
    at: '@Axie Infinity, Rust Vietnam',
    tag: '#Rust',
    title: 'Rust Actor model in game development',
    description: ''
  },
  {
    time: '10:40 - 11:10',
    name: 'Toan Tran',
    position: 'VP Mobile Engineering',
    at: '@Lazada',
    tag: '#Android',
    title: 'Reactive Android Programming',
    description: ''
  },
  {
    time: '11:20 - 11:50',
    name: 'Le Dien Phuc',
    position: 'iOS Dev',
    at: '@Dwarves, Swift Vietnam',
    tag: '#Swift',
    title: 'XPC service / iOS',
    description: ''
  },
  {
    time: '',
    name: '',
    position: '',
    at: '',
    tag: '',
    title: 'Lunch break',
    description: ''
  },
  {
    time: '13:30 - 14:00',
    name: 'Nguyen An',
    position: 'CTO',
    at: '@Prime Data',
    tag: '#Elixir',
    title: 'DDD - Bible for Software Development at scale',
    description: ''
  },
  {
    time: '14:10 - 14:40',
    name: 'Nguyen Van Quang Huy',
    position: 'CTO',
    at: '@Holistics, Grokking',
    tag: '#Grokking',
    title: 'Building and running DBML as an open-source project',
    description: ''
  },
  {
    time: '14:50 - 15:20',
    name: 'Dao Hoang Son',
    position: '',
    at: '@Carp Tech',
    tag: '#Flutter',
    title: 'Building a beautiful Flutter app',
    description: ''
  },
  {
    time: '15:30 - 15:45',
    name: '',
    position: '',
    at: '',
    tag: '',
    title: 'Tea break',
    description: ''
  },
  {
    time: '15:55 - 16:25',
    name: 'Nguyen Mau Quang Vu',
    position: 'Software Engineer',
    at: '',
    tag: '#Golang',
    title: 'Deploy Kubernetes on premise',
    description: ''
  },
  {
    time: '16:35 - 17:05',
    name: 'Tu The Hien',
    position: 'Engineering Director',
    at: '@beGroup, Cloud Native',
    tag: '#Cloud Native',
    title: 'Golang monorepo in the wild. A pathway to continuous deployment',
    description: ''
  },
  {
    time: '17:15 - 17:45',
    name: 'Vo Hai Bien',
    position: 'Software Engineer',
    at: '@Golang Vietnam',
    tag: '#Golang',
    title: 'Goroutine Underlying',
    description: ''
  },
  {
    time: '18:00',
    name: '',
    position: '',
    at: '',
    tag: '',
    title: 'After Party',
    description: ''
  }
];

const Schedule = () => {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32 bg-primary text-foreground font-normal">
      <Container>
        <div className="mb-6 relative">
          <p className="text-lg font-bold">Dec 12th, 2020</p>
          <h2 className="text-3xl font-bold mb-6 md:mb-16">
            Schedule & Agenda
          </h2>
          {listSchedule.map(
            (
              { time, name, position, at, tag, title, description },
              index,
              arr
            ) => {
              const isLast = index === arr.length - 1;
              return (
                <div
                  key={title}
                  className={classnames(
                    'flex flex-wrap md:flex-no-wrap justify-center py-6',
                    { 'border-b border-subprimary': !isLast }
                  )}
                >
                  <div
                    className={classnames(
                      'ml-0 w-2/5 md:ml-4 text-subprimary',
                      name && 'mt-3'
                    )}
                  >
                    {time}
                  </div>
                  <div className="flex w-3/5 md:ml-8">
                    <div>
                      <p className="font-bold">{name}</p>
                      <p className="text-white">{position}</p>
                      <p className="text-white">{at}</p>
                    </div>
                  </div>
                  <div className="w-full md:ml-16 mt-8 md:mt-0">
                    <p className="text-sm">{tag}</p>
                    <p className="text-lg font-bold">{title}</p>
                    <p className="text-lg" style={{ color: '#C5DFD1' }}>
                      {description}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </Container>
    </section>
  );
};

export default Schedule;
