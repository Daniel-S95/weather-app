import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField/TextField';
import React, { useEffect, useState } from 'react';
import styles from './InputContainer.module.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const InputContainer = ({ onSearch, locationSearch }) => {
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    document.getElementById('searchInput').focus();
  }, []);

  const searchHandler = () => {
    document.getElementById('searchInput').blur();
    document.getElementById('forecastButton').blur();

    setSearchCity('');
    onSearch(searchCity);
  }

  const getGeoLocationData = () => {
    document.getElementById('locationButton').blur();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        locationSearch(lat, long);
      }, () => {
        locationSearch();
      });
    }
  }

  return (
    <div className={styles['input-container']}>
      <div className={styles['input-fields']}>
        <div className={styles['search-input']}>
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="searchInput" placeholder="Search a city..." variant="standard" value={searchCity}
            onChange={(e) => { setSearchCity(e.target.value) }} onKeyDown={(e) => e.key === 'Enter' && searchHandler()} />
        </div>

        <Button id='forecastButton' className={styles['forecast-button']}
          onClick={searchHandler}><ThermostatIcon /> Get Forecast</Button>

        <Button id='locationButton' className={styles['forecast-button']}
          onClick={getGeoLocationData}><LocationOnIcon /> Location Based Forecast</Button>
      </div>
    </div>
  );
};

export default InputContainer;
