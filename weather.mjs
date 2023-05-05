export function getWeather(lon, lat) {
  return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation_probability&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&current_weather=true&timeformat=unixtime&timezone=America%2FSao_Paulo`)
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
    temperature_2m_max: [maxTemp],
    temperature_2m_min: [minTemp],
    precipitation_probability_max: [precipitation_prob],
  } = daily;

  return {
    currentTemp: Math.round(currentTemp),
    highTemp: Math.round(maxTemp),
    lowTemp: Math.round(minTemp),
    windSpeed: Math.round(windSpeed),
    precip: Math.round(precipitation_prob),
    iconCode,
  };
}

function parseDailyWeather({ daily }) {
  return daily.time.map((time, index) => {
    return {
      timeStamp: time * 1000,
      maxTemp: Math.round(daily.temperature_2m_max[index]),
      minTemp: Math.round(daily.temperature_2m_min[index]),
      maxWindSpeed: Math.round(daily.windspeed_10m_max[index]),
      maxPrecipChance: Math.round(daily.precipitation_probability_max[index]),
      iconCode: daily.weathercode[index],
    };
  });
}

function parseHourlyWeather({ hourly }) {
  return hourly.time.map((time, index) => {
    return {
      timeStamp: time * 1000,
      temp: Math.round(hourly.temperature_2m[index]),
    };
  });
}
