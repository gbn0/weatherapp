const searchWrapper = document.querySelector(".search-box");
const inputBox = searchWrapper.querySelector(".search-txt");
const suggBox = searchWrapper.querySelector(".autocom-box");
const blur = document.querySelector(".blur");
const suggBoxUl = suggBox.querySelector("ul");
const logo = document.querySelector("#logo");

searchWrapper.addEventListener("click", () => {
    searchWrapper.style.transition = '0.5s'
    searchWrapper.style.transform = 'translateY(300px) translateX(-429px)';
    blur.style.transition = '0.5s'
    blur.style.display = 'block'
    
    logo.style.height = "80px"
    logo.style.transform = 'translateY(200px) ';
    ;
  });

function HideBlur(){
    searchWrapper.style.transform = 'translateY(0px) translateX(0px)';
    logo.style.transform = 'translateY(0px) translateX(0px)';
    logo.style.height = "40px"
    blur.style.display = 'none'
}
blur.addEventListener("click", HideBlur);
suggBoxUl.addEventListener("click", HideBlur)
  