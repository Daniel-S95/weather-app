import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField/TextField';
import React, { useEffect, useState } from 'react';
import styles from './InputContainer.module.scss';

const InputContainer = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    document.getElementById('searchInput').focus();
  }, []);

  const searchHandler = () => {
    document.getElementById('searchInput').blur();
    document.getElementById('submitButton').blur();

    setSearchCity('');
    onSearch(searchCity);
  }

  return (
    <div className={styles['input-container']}>
      <div className={styles['input-fields']}>
        <div className={styles['search-input']}>
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="searchInput" placeholder="Search a city..." variant="standard" value={searchCity}
            onChange={(e) => { setSearchCity(e.target.value) }} onKeyDown={(e) => e.key === 'Enter' && searchHandler()} />
        </div>

        <Button id='submitButton' className={styles['forecast-button']} onClick={searchHandler}>Get Forecast</Button>
      </div>
    </div>
  );
};

export default InputContainer;
