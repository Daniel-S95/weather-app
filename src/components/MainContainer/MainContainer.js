import { Alert } from '@mui/material';
import axios from 'axios';
import InputContainer from 'components/InputContainer/InputContainer';
import ResultsContainer from 'components/ResultsContainer/ResultsContainer';
import React, { useState } from 'react';
import styles from './MainContainer.module.scss';

const MainContainer = () => {
  const myApiKey = '83c4232d45cb3f189518964a126ab79a';
  const [isSearch, setIsSearch] = useState(false);
  const [resultsData, setResultsData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getWeatherData = async (cityName) => {
    setIsSearch(true);

    if (resultsData) {
      let [, cityData] = resultsData;
      let currentCityName = cityData.name;

      let isCityChanged = currentCityName.localeCompare(cityName, undefined, { sensitivity: 'accent' });

      if (!isCityChanged) {
        return;
      }
    }

    setIsLoading(true);
    setResultsData(null);
    setErrorMessage(null);

    cityName = cityName.trim();

    if (!cityName.length) {
      setIsLoading(false);
      setErrorMessage("Please enter a city to search...");
      return;
    }

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${myApiKey}&units=metric`);

      setIsLoading(false);
      setResultsData([response.data.list, response.data.city]);
    } catch (e) {
      setIsLoading(false);

      setErrorMessage(`Results were not found for '${cityName}'. Please try a different city name...`);
      console.error(e.message);
    }
  }

  return (
    <div className={styles['main-container']}>
      <InputContainer onSearch={getWeatherData} />

      {!isSearch &&
        <div className={styles['no-search']}>
          <Alert severity="info">Please search a city name to see its weather forecast</Alert>
        </div>}

      <ResultsContainer resultsData={resultsData} errorMessage={errorMessage} isLoading={isLoading} />
    </div >
  );
};

export default MainContainer;
