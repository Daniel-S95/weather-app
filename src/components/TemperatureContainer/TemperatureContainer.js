import TemperatureUnit from 'components/TemperatureUnit/TemperatureUnit';
import React from 'react';
import styles from './TemperatureContainer.module.scss';

const TemperatureContainer = ({ min, max }) => {
  return (
    <div className={styles['temperature-container']}>
      <TemperatureUnit temp={min} />

      {min !== max && <>
        <span>–</span>
        <TemperatureUnit temp={max} />
      </>}
    </div>
  );
};

export default TemperatureContainer;
