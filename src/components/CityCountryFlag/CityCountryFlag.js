import React, { useEffect, useState } from 'react';
import styles from './CityCountryFlag.module.scss';
import { getCountryFlag } from "country-flags-dial-code";

const CityCountryFlag = ({ data: { name: cityName, country: countryName } }) => {
  const [countryFlag, setCountryFlag] = useState(null);
  const [elementHeight, setElementHeight] = useState(null);

  useEffect(() => {
    if (!countryName) {
      return;
    }

    setCountryFlag(encodeURIComponent(getCountryFlag(countryName)));

    const element = document.getElementById('cityCountry');
    const elementHeight = element.clientHeight + 5;
    setElementHeight(elementHeight);
  }, [countryName]);

  return (
    <div className={styles['city-data-container']}>
      <div className={styles['name-flag-container']}>
        <div className={styles['results-header']} id="cityCountry">{cityName + ", " + countryName}</div>
        {elementHeight && <img src={`data:image/svg+xml;utf8,${countryFlag}`} alt="Flag" height={elementHeight} />}
      </div>

      <div className={styles['weather-forecast-header']}>5-Day Weather Forecast:</div>
    </div>
  );
}

export default CityCountryFlag;