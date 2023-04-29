let weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sex"];

const template = document.querySelector("#box-template");
const boxes = document.querySelector("#boxes");
const mainTemp = document.querySelector("#maintemp");

const iconMap = new Map();
addMapping([1], "sun-icon.svg");

function addMapping(values, icon) {
  values.forEach((value) => {
    iconMap.set(value, icon);
  });
}

export function renderCurrentWeather({ current }) {
  mainTemp.textContent = current.currentTemp + "°";
}

export function renderDailyWeather({ daily }) {
  daily.forEach((day) => {
    let date = new Date(day.timeStamp).getDay();
    const div = template.content.cloneNode(true);
    const icon = iconMap.get(day.iconCode);
    div.querySelector("[week-day]").textContent = weekDays[date];
    // div.querySelector("[icon-day").src = `images/${icon}`;
    div.querySelector("[max-day]").textContent = day.maxTemp + "°";
    div.querySelector("[min-day]").textContent = day.minTemp + "°";
    boxes.appendChild(div);

    console.log(weekDays[date]);
  });
}
