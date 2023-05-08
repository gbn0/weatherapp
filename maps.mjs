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
addIconMapping([71, 73, 75, 77, 85, 86], "snow.svg");

addWeatherMapping([0], "Ensolarado");
addWeatherMapping([1,2], "Parcialmente ensolarado");
addWeatherMapping([3], "Nublado");
addWeatherMapping([45], "Pouca neblina");
addWeatherMapping([48], "Muita neblina");
addWeatherMapping([51,53,56,61,63,66,80,81], "Pouca chuva");
addWeatherMapping([55,57,65,67,82], "Muita chuva");
addWeatherMapping([71, 73, 75, 77, 85, 86], "Nevando");
addWeatherMapping([95], "Tempestade");
addWeatherMapping([96,99], "Granizo");


addBackgroundMapping([0,1,2], 'linear-gradient(to bottom,rgb(9,30,58)-40%,rgb(47,128,237)20%,rgb(45,158,224)100%)');
addBackgroundMapping([3,45,48], 'linear-gradient(to bottom,rgb(0,0,0) -40%,rgb(75,82,107)10%,rgb(45,158,224)100%)');
addBackgroundMapping([51,53,56,61,63,66,71,73,75,77,80,81,85,86,55,57,65,67,82,95,96,99], 'linear-gradient(to bottom, rgb(0,0,0) -30%,rgb(50,122,203) 100%,rgb(101,111,143) 101%)');

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