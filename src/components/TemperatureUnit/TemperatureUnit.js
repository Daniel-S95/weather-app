import React from 'react';
import styles from './TemperatureUnit.module.scss';

const TemperatureUnit = ({ temp, size = 'big' }) => {
  return (
    <div className={styles['temperature-container']}>
      {size === "small" ? 'Feels like ' + temp : temp}
      <div className={styles['units-container']}>
        <div className={styles[`degree-${size}`]}>°</div>
        <div className={styles[`temperature-unit-${size}`]}>C</div>
      </div>
    </div>
  );
};

export default TemperatureUnit;
