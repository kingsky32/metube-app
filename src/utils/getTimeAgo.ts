import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en_US');

const getTimeAgo = (date: Date | string | number): string => {
  const _date = new Date(date);
  return timeAgo.format(_date, 'round');
};

export default getTimeAgo;
