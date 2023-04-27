const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=-30.06&longitude=-51.17&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&current_weather=true&timeformat=unixtime&forecast_days=7&timezone=America%2FSao_Paulo`;

export function getWeather() {
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      return {
        current: parseCurrentWeather(data),
        daily: parseDailyWeather(data),
        hourly: parseHourlyWeather(data),
      };
    });
}

function parseCurrentWeather({ current_weather, daily }) {
  const {
    temperature: currentTemp,
    weathercode: iconCode,
    windspeed: windSpeed,
  } = current_weather;

  const {
    precipitation_sum: [precip],
    temperature_2m_max: [maxTemp],
    temperature_2m_min: [minTemp],
  } = daily;

  return {
    currentTemp: Math.round(currentTemp),
    highTemp: Math.round(maxTemp),
    lowTemp: Math.round(minTemp),
    windSpeed: Math.round(windSpeed),
    precip: Math.round(precip * 100) / 100,
    iconCode,
  };
}

function parseDailyWeather({ daily }) {
  return daily.time.map((time, index) => {
    return {
      timeStamp: time * 1000,
      maxTemp: Math.round(daily.temperature_2m_max[index]),
      minTemp: Math.round(daily.temperature_2m_min[index]),
      iconCode: daily.weathercode[index],
    };
  });
}

function parseHourlyWeather({ hourly, current_weather }) {
  return hourly.time.map((time, index) => {
    return {
      timeStamp: time * 1000,
      temp: Math.round(hourly.temperature_2m[index]),
      appTemp: Math.round(hourly.apparent_temperature[index]),
      iconCode: hourly.weathercode[index],
    };
  });
}
