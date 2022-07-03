import React from 'react';
import styles from './SunriseSunsetContainer.module.scss';
import SunriseSunset from 'components/SunriseSunset/SunriseSunset';

const SunriseSunsetContainer = ({ sunrise, sunset }) => {

  return (
    <div className={styles['city-sunrise-sunset']}>
      <SunriseSunset direction={'sunrise'} time={sunrise} />
      <SunriseSunset direction={'sunset'} time={sunset} />
    </div>
  );
};

export default SunriseSunsetContainer;
