import { loadChart } from "./chart.mjs";
import { getWeather } from "./weather.mjs";
import { renderDailyWeather } from "./renderer.mjs";
import { renderCurrentWeather } from "./renderer.mjs";

getWeather().then((data) => {
  console.log(data);
  loadChart(data.hourly, 0);
  renderCurrentWeather(data);
  renderDailyWeather(data);
});
