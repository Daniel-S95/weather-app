import React, { useEffect, useState } from 'react';
import styles from './ResultsContainer.module.scss';
import SunriseSunsetContainer from 'components/SunriseSunsetContainer/SunriseSunsetContainer';
import WeatherCardsContainer from 'components/WeatherCardsContainer/WeatherCardsContainer';
import { Alert } from '@mui/material';
import CityCountryFlag from 'components/CityCountryFlag/CityCountryFlag';

const ResultsContainer = ({ resultsData, errorMessage, isLoading }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    if (resultsData) {
      let [weatherData, cityData] = resultsData;
      setWeatherData(weatherData);
      setCityData(cityData);
    } else {
      setWeatherData(null);
      setCityData(null);
    }
  }, [resultsData]);

  return (
    <>
      {isLoading &&
        <div className={styles['loading-spinner']} style={{ backgroundImage: "url('/assets/loading.gif')" }}></div>}

      {weatherData &&
        <div className={styles['results-container']}>
          <hr />

          <div className={styles['city-data-container']}>
            <CityCountryFlag data={cityData} />
            <SunriseSunsetContainer sunrise={cityData.sunrise} sunset={cityData.sunset} />
          </div>

          <WeatherCardsContainer weatherData={weatherData} />
        </div>}

      {errorMessage &&
        <div className={styles['no-results-container']}>
          <Alert severity="error">{errorMessage}</Alert>
        </div>}
    </>
  );
};

export default ResultsContainer;
