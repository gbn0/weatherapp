import { GetCity } from "./cities.mjs";

const searchWrapper = document.querySelector(".search-box");
const inputBox = searchWrapper.querySelector(".search-txt");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".search-btn");
let linkTag = searchWrapper.querySelector("a");

// if user press any key and release
inputBox.addEventListener('input',  () => {
    inputBox.value = 'funciona'
})
