let weekDays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

const template = document.querySelector("#box-template");
const boxes = document.querySelector("#boxes");

const iconMap = new Map();

function addMapping(values, icon) {
  values.forEach((value) => {
    iconMap.set(value, icon);
  });
}

export function renderCurrentWeather({ current }) {}

export function renderDailyWeather({ daily }) {
  daily.forEach((day) => {
    let date = new Date(day.timeStamp).getDay();
    const div = template.content.cloneNode(true);
    div.querySelector("[week-day]").textContent = weekDays[date];

    div.querySelector("[max-day]").textContent = day.maxTemp;
    div.querySelector("[min-day]").textContent = day.minTemp;
    boxes.appendChild(div);

    console.log(weekDays[date]);
  });
}
