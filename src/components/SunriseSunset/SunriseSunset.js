import moment from 'moment';
import React from 'react';
import { BsFillSunriseFill, BsFillSunsetFill } from 'react-icons/bs';
import styles from './SunriseSunset.module.scss';

const SunriseSunset = ({ direction, time }) => {
  const currentTime = new Date().toLocaleTimeString('en-GB');

  const timeFormat = () => {
    let formattedTime = new Date(time * 1000).toLocaleTimeString('en-GB');
    return formattedTime;
  }

  const timeDifference = () => {
    let startTime = moment(currentTime, 'HH:mm:ss');
    let endTime = moment(timeFormat(), 'HH:mm:ss');

    if (startTime > endTime) {
      return moment.utc(moment.duration(moment(startTime).diff(moment(endTime))).asMilliseconds()).format('HH:mm:ss') + " hours ago";
    }

    return "In " + moment.utc(moment.duration(moment(endTime).diff(moment(startTime))).asMilliseconds()).format('HH:mm:ss') + " hours";
  }

  return (
    <div className={styles['sunrise-sunset']}>
      {direction === 'sunrise' &&
        <BsFillSunriseFill className={`${styles['sun-icon']} ${styles['sunrise']}`} />}

      {direction === 'sunset' &&
        <BsFillSunsetFill className={`${styles['sun-icon']} ${styles['sunset']}`} />}

      <div className={styles['sunrise-sunset-time']}>
        <div>
          {timeFormat()}
        </div>

        <div className={styles['sunrise-sunset-difference']}>
          {timeDifference()}
        </div>

        <div className={styles['timezone-disclaimer']}>
          * Based on your time zone
        </div>
      </div>
    </div>
  );
};

export default SunriseSunset;
