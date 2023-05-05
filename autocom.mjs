import { startWeather } from "./script.mjs";

const searchWrapper = document.querySelector(".search-box");
const inputBox = searchWrapper.querySelector(".search-txt");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".search-btn");
// let linkTag = searchWrapper.querySelector("a");
const suggBoxUl = suggBox.querySelector("ul");

inputBox.value = '';

let suggested =  {};

suggBoxUl.addEventListener("click", getValue);

function GetCity() {
    const search_term = inputBox.value;
    if(search_term){
        suggBox.style.display = 'block'
    }
    else{
        suggBox.style.display = 'none'
    }
    fetch(`https://api.teleport.org/api/cities/?search=${search_term}`)
      .then(response => response.json())
      .then(data => {
        let html = ""; 
        const results = data['_embedded']['city:search-results'];
        suggested = data._embedded['city:search-results']
        const numResults = results.length;
        if (numResults === 0) {
          suggBoxUl.innerHTML = "Nenhum resultado encontrado."; // exibe uma mensagem de erro se a lista de resultados estiver vazia
          return;
        }
        for (let i = 0; i < numResults && i < 4; i++) { // define o limite superior do loop para o número real de resultados
            const city = results[i]['matching_full_name'];
          html += `<li>${city}</li>`;
        }
        suggBoxUl.innerHTML = html;
      });
  }

  function getSuggested() {
    return suggested;
  }

  function getValue(event) {
    console.log(event.target.innerText);
    inputBox.value = event.target.innerText;
    suggBoxUl.innerHTML = "";
    suggBox.style.display = 'none';
    let options = getSuggested();
    for(let i = 0; i < options.length; i++) {
      let currOption = options[i];

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
  
  
inputBox.addEventListener("input", GetCity);

searchWrapper.addEventListener('mouseleave', () => {
    inputBox.value = '';
    GetCity()
  });