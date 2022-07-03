import TemperatureContainer from 'components/TemperatureContainer/TemperatureContainer';
import TemperatureUnit from 'components/TemperatureUnit/TemperatureUnit';
import React from 'react';
import styles from './WeatherCard.module.scss';

const WeatherCard = ({ weatherData }) => {

  const weatherDescription = weatherData.weather[0].description;
  const weatherIcon = weatherData.weather[0].icon;

  const convertWeatherData = () => {
    let { main } = weatherData;
    let { temp_min: tempMin, temp_max: tempMax, feels_like: feelsLike, humidity } = main;
    tempMin = +tempMin.toFixed();
    tempMax = +tempMax.toFixed();
    feelsLike = +feelsLike.toFixed();
    humidity = humidity + "%";

    return { tempMin, tempMax, feelsLike, humidity };
  }

  const convertTimestampToLocal = () => {
    let date = new Date(weatherData.dt * 1000).toLocaleDateString('en-GB');
    let time = new Date(weatherData.dt * 1000).toLocaleTimeString('en-GB');
    return { date, time };
  }

  return (
    <div className={styles['weather-card']}>

      <div className={styles['date-time-container']}>
        <div className={styles['weather-card-date']}>
          {convertTimestampToLocal().date}
        </div>

        <div className={styles['weather-card-time']}>
          {convertTimestampToLocal().time}
        </div>
      </div>

      <div className={styles['weather-description']}>{weatherDescription}</div>

      <div className={styles['weather-image-data-container']}>
        <div className={styles['weather-image']}
          style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${weatherIcon}@2x.png)` }}>
        </div>

        <div className={styles['weather-data-container']}>
          <div className={styles['weather-temperature']}>
            <TemperatureContainer min={convertWeatherData().tempMin} max={convertWeatherData().tempMax} />
          </div>

          <div className={styles['weather-humidity']}>
            Humidity {convertWeatherData().humidity}
          </div>

          <div className={styles['feel-like-container']}>
            <TemperatureUnit temp={convertWeatherData().feelsLike} size={'small'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
