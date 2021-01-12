import React from 'react';
import Container from 'components/Container';
import dayjs from 'dayjs';
import { H3, H6 } from 'components/typography';
import Button from 'components/Button';
import classnames from 'classnames';
import { ReactComponent as PastStamp } from '../../assets/svg/past-stamp.svg';
import { formatDatetime } from 'utils/formatDatetime';
import { Event } from 'apis/types/blog';

interface Past extends Event {
  isPast: boolean;
}

const Events = ({ events }: { events: Event[] }) => {
  const sortedList = [...events].sort((a, b) => {
    return dayjs(a.date).isBefore(dayjs(b.date))
      ? 1
      : dayjs(a.date).isAfter(dayjs(b.date))
      ? -1
      : 0;
  });

  const fortcoming: Past[] = [];
  const past: Past[] = [];
  const now = Date.now();

  sortedList.forEach(event => {
    if (dayjs(event.date).isBefore(dayjs(now))) {
      past.push({ ...event, isPast: true });
    } else {
      fortcoming.push({ ...event, isPast: false });
    }
  });

  // show last 2 outdated events + all upcoming events
  const listToShow = fortcoming.concat(past.slice(0, 2));

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

        {listToShow.length === 0 ? (
          <div className="pt-6 border-t border-gray-200 mt-7">
            There is no upcoming event
          </div>
        ) : (
          listToShow.map(
            ({ location, date, guests, name, url, isPast }, index) => {
              const info = dayjs(date).isValid()
                ? [
                    `${formatDatetime(
                      date,
                      'MMM DD, YYYY'
                    )} at ${formatDatetime(date, 'hh:mm a')}`
                  ]
                : [];
              if (guests > 0) {
                info.push(`${guests} guests`);
              }
              return (
                <div
                  key={url}
                  className={classnames('py-5 relative space-y-1', {
                    'border-b border-gray-200': index < listToShow.length - 1
                  })}
                >
                  {isPast && (
                    <div className="absolute h-full w-full bg-foreground opacity-50 z-10 pointer-events-none" />
                  )}
                  <div className="flex">
                    <a
                      style={{ maxWidth: 'calc(100% - 5rem)' }}
                      href={url}
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
                  <div className="text-sm text-gray-700">
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
