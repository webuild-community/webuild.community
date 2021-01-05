import React from 'react';
import Container from 'components/Container';
import classnames from 'classnames';

import hanNgoImg from 'assets/images/webuild-day/speakers/han-ngo.jpg';
import thuyPhanImg from 'assets/images/webuild-day/speakers/thuy-phan.jpg';
import sonDaoImg from 'assets/images/webuild-day/speakers/son-dao.jpg';
import toanTranImg from 'assets/images/webuild-day/speakers/toan-tran.jpg';
import phucLeImg from 'assets/images/webuild-day/speakers/phuc-le.jpeg';
import nguyenAnImg from 'assets/images/webuild-day/speakers/nguyen-an.jpg';
import huyNguyenImg from 'assets/images/webuild-day/speakers/huy.jpg';
import andyHoImg from 'assets/images/webuild-day/speakers/andy-ho.jpg';
import nguyenVuImg from 'assets/images/webuild-day/speakers/nguyen-vu.jpg';
import hienTuImg from 'assets/images/webuild-day/speakers/hien-tu.jpg';
import haiBienImg from 'assets/images/webuild-day/speakers/hai-bien.jpg';

const listSchedule = [
  {
    time: '9:00 - 9:10',
    name: 'Han Ngo',
    position: 'Software Engineer',
    at: '',
    tag: '#WeBuild',
    title: 'WeBuild Community in 2020',
    description: '',
    pic: hanNgoImg
  },
  {
    time: '9:20 - 9:50',
    name: 'Thuy Phan',
    position: 'Mobile Developer',
    at: '@Line',
    tag: '#Android',
    title: 'Dependency injection with Hilt',
    description: '',
    pic: thuyPhanImg
  },
  {
    time: '10:00 - 10:30',
    name: 'Son Dao',
    position: '',
    at: '@Carp Tech',
    tag: '#Flutter',
    title: 'Building a beautiful Flutter app',
    description: '',
    pic: sonDaoImg
  },
  {
    time: '10:40 - 11:10',
    name: 'Toan Tran',
    position: 'VP Mobile Engineering',
    at: '@Lazada',
    tag: '#Android',
    title: 'Reactive Android Programming',
    description: '',
    pic: toanTranImg
  },
  {
    time: '11:20 - 11:50',
    name: 'Phuc Le',
    position: 'iOS Dev',
    at: '@Dwarves, Swift Vietnam',
    tag: '#Swift',
    title: 'XPC service / iOS',
    description: '',
    pic: phucLeImg
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
    name: 'An Nguyen',
    position: 'CTO',
    at: '@Prime Data',
    tag: '#Elixir',
    title: 'DDD - Bible for Software Development at scale',
    description: '',
    pic: nguyenAnImg
  },
  {
    time: '14:10 - 14:40',
    name: 'Huy Nguyen',
    position: 'CTO',
    at: '@Holistics, Grokking',
    tag: '#Grokking',
    title: 'Building and running DBML as an open-source project',
    description: '',
    pic: huyNguyenImg
  },
  {
    time: '14:50 - 15:20',
    name: 'Andy Ho',
    position: 'CTO',
    at: '@Axie Infinity, Rust Vietnam',
    tag: '#Rust',
    title: 'Rust Actor model in game development',
    description: '',
    pic: andyHoImg
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
    name: 'Vu Nguyen',
    position: 'Software Engineer',
    at: '',
    tag: '#Golang',
    title: 'Deploy Kubernetes on premise',
    description: '',
    pic: nguyenVuImg
  },
  {
    time: '16:35 - 17:05',
    name: 'Hien Tu',
    position: 'Engineering Director',
    at: '@beGroup, Cloud Native',
    tag: '#Cloud Native',
    title: 'Golang monorepo in the wild. A pathway to continuous deployment',
    description: '',
    pic: hienTuImg
  },
  {
    time: '17:15 - 17:45',
    name: 'Bien Vo',
    position: 'Software Engineer',
    at: '@Golang Vietnam',
    tag: '#Golang',
    title: 'Goroutine Underlying',
    description: '',
    pic: haiBienImg
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
              { time, name, position, at, tag, title, description, pic },
              index,
              arr
            ) => {
              const isLast = index === arr.length - 1;
              return (
                <div
                  key={title}
                  className={classnames('flex flex-wrap sm:flex-nowrap py-6', {
                    'border-b border-subprimary': !isLast
                  })}
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
                    {pic && (
                      <img
                        className="w-12 h-12 mr-4 rounded-full border object-cover"
                        style={{ filter: 'grayscale(100%)' }}
                        src={pic}
                        alt={name}
                      />
                    )}
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
