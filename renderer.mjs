import { loadChart } from "./chart.mjs";
import { getData } from "./script.mjs";

let weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
let currDate = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"];
let months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

const template = document.querySelector("#box-template");
const boxes = document.querySelector("#boxes");
const mainTemp = document.querySelector("#maintemp");
const secTemp = document.querySelector("#sectemp");
const currIcon = document.querySelector("#currIcon");
const rain = document.querySelector("#rain");
const wind = document.querySelector("#wind");
const wkday = document.querySelector("#wkday");
const yearnmonth = document.querySelector("#yearnmonth");
const how = document.querySelector("#how");

const weatherMap = new Map();
const iconMap = new Map();
addIconMapping([0], "clear.svg");
addIconMapping([1,2], "part-clear.svg");
addIconMapping([3], "cloudy.svg");
addIconMapping([45], "fogs.svg");
addIconMapping([48], "fogl.svg");
addIconMapping([51,53,56,61,63,66,80,81], "rains.svg");
addIconMapping([55,57,65,67,82], "rainl.svg");
addIconMapping([95], "thunderstorm.svg");
addIconMapping([96,99], "hail.svg");

addWeatherMapping([0], "Ensolarado");
addWeatherMapping([1,2], "Parcialmente ensolarado");
addWeatherMapping([3], "Nublado");
addWeatherMapping([45], "Pouca neblina");
addWeatherMapping([48], "Muita neblina");
addWeatherMapping([51,53,56,61,63,66,80,81], "Pouca chuva");
addWeatherMapping([55,57,65,67,82], "Muita chuva");
addWeatherMapping([95], "Tempestade");
addWeatherMapping([96,99], "Granizo");


function addIconMapping(values, icon) {
  values.forEach((value) => {
    iconMap.set(value, icon);
  });
}

function addWeatherMapping(values, weather) {
  values.forEach((value) => {
    weatherMap.set(value, weather);
  });
};

export function renderCurrentWeather(data) {
  let date = new Date(data.daily[0].timeStamp)
  let fullDate = date.getDate() + " de " + months[date.getMonth()] + " de " + date.getFullYear();
  let day  = date.getDay();

  console.log(fullDate);
  const weather = weatherMap.get(data.current.iconCode);
  const icon = iconMap.get(data.current.iconCode);
  mainTemp.textContent = data.current.currentTemp + "°";
  rain.textContent = "Chuva: " + data.current.precip + "%";
  wind.textContent = "Vento: " + data.current.windSpeed + "km/h";
  wkday.textContent = currDate[day];
  how.textContent = weather;
  yearnmonth.textContent = fullDate;
  currIcon.src = `images/${icon}`;

}

export function renderDailyWeather({ daily }) {
  daily.forEach((day, index) => {
    let date = new Date(day.timeStamp).getDay();
    const div = template.content.cloneNode(true);
    const icon = iconMap.get(day.iconCode);
    div.getElementById("btn").onclick = function() { clickHandler(index, day)};
    div.querySelector("[week-day]").textContent = weekDays[date];
    div.querySelector("[icon-day").src = `images/${icon}`;
    div.querySelector("[max-day]").textContent = day.maxTemp + "°";
    div.querySelector("[min-day]").textContent = day.minTemp + "°";
    boxes.appendChild(div);
  });
}


function clickHandler(index, day) {
  
  let data = getData();
  if(index == 0) {
    renderCurrentWeather(data);
    secTemp.textContent = "";
    loadChart(data.hourly,index);
  }else {
    const weather = weatherMap.get(day.iconCode);
    let date = new Date(day.timeStamp)
    let fullDay = date.getDay();
    let fullDate = date.getDate() + " de " + months[date.getMonth()] + " de " + date.getFullYear();
    mainTemp.textContent = day.maxTemp + "°";
    secTemp.textContent = day.minTemp + "°";
    currIcon.src = `images/${iconMap.get(day.iconCode)}`;
    how.textContent = weather;
    wkday.textContent = currDate[fullDay];
    yearnmonth.textContent = fullDate;
    rain.textContent = "Chuva: " + day.maxPrecipChance + "%";
    wind.textContent = "Vento: " + day.maxWindSpeed + "km/h";

    loadChart(data.hourly,index);
  }
  
  
}
