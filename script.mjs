import { loadChart } from "./chart.mjs";
import { getWeather } from "./weather.mjs";
import { renderDailyWeather } from "./renderer.mjs";
import { renderCurrentWeather } from "./renderer.mjs";

let data1 = {};

getWeather(-51.23, -30.03306).then((data) => {
  console.log(data);
  loadChart(data.hourly, 0);
  renderCurrentWeather(data);
  renderDailyWeather(data);
  data1 = data;
});


export function startWeather(latlon) {

  getWeather(latlon.longitude, latlon.latitude).then((data) => {
    loadChart(data.hourly, 0);
    renderCurrentWeather(data);
    renderDailyWeather(data);
    data1 = data;
  });

}

export function getData() {
  return data1;
}



