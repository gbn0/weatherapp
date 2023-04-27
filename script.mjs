import { loadChart } from "./chart.mjs";
import { getWeather } from "./weather.mjs";

getWeather().then((data) => {
  console.log(data);
  loadChart(data.hourly);
});
