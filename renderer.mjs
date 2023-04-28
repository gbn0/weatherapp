let weekDays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

const iconMap = new Map();
addMapping();
addMapping();
addMapping();
addMapping();
addMapping();

function addMapping(values, icon) {
  values.forEach((value) => {
    iconMap.set(value, icon);
  });
}

export function renderCurrentWeather({ current }) {}

export function renderDailyWeather({ daily }) {
  daily.forEach((day) => {
    let date = new Date(day.timeStamp).getDay();

    console.log(weekDays[date]);
  });
}
