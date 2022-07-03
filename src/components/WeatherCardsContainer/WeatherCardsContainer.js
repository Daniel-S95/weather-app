import React, { useState } from 'react';
import styles from './WeatherCardsContainer.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import WeatherCard from 'components/WeatherCard/WeatherCard';

const WeatherCardsContainer = ({ weatherData }) => {
  const MAX_CARDS_PER_CONTAINER = 4;

  const [minCardShowing, setMinCardShowing] = useState(0);
  const [maxCardShowing, setMaxCardShowing] = useState(MAX_CARDS_PER_CONTAINER);

  const rightButton = () => {
    if (maxCardShowing + MAX_CARDS_PER_CONTAINER > weatherData.length) {
      return;
    }

    setMinCardShowing(minCardShowing + MAX_CARDS_PER_CONTAINER);
    setMaxCardShowing(maxCardShowing + MAX_CARDS_PER_CONTAINER);
  }

  const leftButton = () => {
    if (minCardShowing < 1) {
      return;
    }

    setMinCardShowing(minCardShowing - MAX_CARDS_PER_CONTAINER);
    setMaxCardShowing(maxCardShowing - MAX_CARDS_PER_CONTAINER);
  }

  const isNavigationActiveStyle = (direction) => {
    let enabledStyle = { color: '#EBEBE4', cursor: 'not-allowed' };
    let disabledStyle = { color: 'black', cursor: 'pointer' };

    if (direction === 'backward') {
      return minCardShowing < 1 ? enabledStyle : disabledStyle;
    }

    if (direction === 'forward') {
      return maxCardShowing >= weatherData.length ? enabledStyle : disabledStyle;
    }
  }

  return (
    <div className={styles['weather-cards-container']}>
      <span title='Navigate backward'>
        <ArrowBackIosNewIcon className={styles['navigation-button']} onClick={leftButton}
          style={isNavigationActiveStyle('backward')} />
      </span>

      {weatherData.slice(minCardShowing, maxCardShowing).map((data, i) => <WeatherCard key={i} weatherData={data} />)}

      <span title='Navigate forward'>
        <ArrowForwardIosIcon className={styles['navigation-button']} onClick={rightButton}
          style={isNavigationActiveStyle('forward')} />
      </span>
    </div>
  );
};

export default WeatherCardsContainer;
