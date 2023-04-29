import { loadChart } from "./chart.mjs";
import { getData } from "./script.mjs";

let weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const template = document.querySelector("#box-template");
const boxes = document.querySelector("#boxes");
const mainTemp = document.querySelector("#maintemp");
const secTemp = document.querySelector("#sectemp");
const currIcon = document.querySelector("#currIcon");

const iconMap = new Map();
addMapping([1], "sun-icon.svg");

function addMapping(values, icon) {
  values.forEach((value) => {
    iconMap.set(value, icon);
  });
}

export function renderCurrentWeather({ current }) {
  mainTemp.textContent = current.currentTemp + "°";
  // currIcon.src = `images/${iconMap.get(current.iconCode)}`;

}

export function renderDailyWeather({ daily }) {
  daily.forEach((day, index) => {
    let date = new Date(day.timeStamp).getDay();
    const div = template.content.cloneNode(true);
    const icon = iconMap.get(day.iconCode);
    div.getElementById("btn").onclick = function() { clickHandler(index, day)};
    div.querySelector("[week-day]").textContent = weekDays[date];
    // div.querySelector("[icon-day").src = `images/${icon}`;
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
    mainTemp.textContent = day.maxTemp + "°";
    secTemp.textContent = day.minTemp + "°";
    loadChart(data.hourly,index);
  }
  
  
}
