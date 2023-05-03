const Map3 = new Map();
const Map2 = new Map();
const Map1 = new Map();

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


function addBackgroundMapping(values, gradient) {
  values.forEach((value) => {
    Map3.set(value, gradient);
  })
}


function addIconMapping(values, icon) {
  values.forEach((value) => {
    Map1.set(value, icon);
  });
}

function addWeatherMapping(values, weather) {
  values.forEach((value) => {
    Map2.set(value, weather);
  });
};

export const iconMap = Map1;
export const weatherMap = Map2;
export const backgroundMap = Map3;