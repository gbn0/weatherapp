import { startWeather } from "./script.mjs";

const searchWrapper = document.querySelector(".search-box");
const inputBox = searchWrapper.querySelector(".search-txt");
const suggBox = searchWrapper.querySelector(".autocom-box");
const suggBoxUl = suggBox.querySelector("ul");
const blur = document.querySelector(".blur");

inputBox.value = 'Porto Alegre, Rio Grande do Sul, Brazil';

let suggested =  {};

suggBoxUl.addEventListener("click", changeCity);

inputBox.addEventListener("input", GetCity);

function GetCity() {
    const search_term = inputBox.value;
    if(search_term){
      suggBox.style.display = 'block'    
      fetch(`https://api.teleport.org/api/cities/?search=${search_term}`)
      .then(response => response.json())
      .then(data => {
        let html = ""; 

        suggested = data._embedded['city:search-results']
        const numResults = suggested.length;
        if (numResults === 0) {
          suggBoxUl.innerHTML = "Nenhum resultado encontrado."; // exibe uma mensagem de erro se a lista de resultados estiver vazia
          return;
        }
        for (let i = 0; i < numResults && i < 4; i++) { // define o limite superior do loop para o número real de resultados
            const city = suggested[i]['matching_full_name'];
            html += `<li>${city}</li>`;
        }
        suggBoxUl.innerHTML = html;
      });
}
    else{
        suggBox.style.display = 'none'
    }
  }

  function changeCity(event) {
    console.log(blur.style.display);
    inputBox.value = event.target.innerText;
    suggBoxUl.innerHTML = ""
    suggBox.style.display = 'none';
    inputBox.readonly = true;
    for(let i = 0; i < suggested.length; i++) {
      let currOption = suggested[i] 
      if(currOption.matching_full_name == event.target.innerText) {
        const geoCode = currOption._links['city:item'].href.slice(46, 54);
        getLatLon(geoCode);
      }
    }
  }


  function getLatLon(geoCode) {

    fetch(`https://api.teleport.org/api/cities/geonameid:${geoCode}/`)
    .then((res) => res.json())
    .then((data) => {
      startWeather(data.location.latlon);
    })
  }

searchWrapper.addEventListener('mouseleave', () => {
  suggBoxUl.innerHTML = "";
  suggBox.style.display = "none";
  inputBox.readonly = true;
});

inputBox.addEventListener('mouseover', () => {
  inputBox.readonly = false;
});


const logo = document.querySelector("#logo");

searchWrapper.addEventListener("click", () => {
  searchWrapper.style.transition = '0.5s'
  searchWrapper.style.transform = 'translateY(300px) translateX(-300px)';
  blur.style.transition = '0.5s'
  blur.style.display = 'block'
  logo.style.height = "80px"
  logo.style.transform = 'translateY(180px) translateX(203px)';
  ;
});

function HideBlur(){
  searchWrapper.style.transform = 'translateY(0px) translateX(0px)';
  logo.style.transform = 'translateY(0px) translateX(0px)'; 
  logo.style.height = "40px"
  blur.style.display = 'none'
}
blur.addEventListener("click", HideBlur);
suggBoxUl.addEventListener("click", HideBlur);