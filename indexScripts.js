// Scripts for the main index.html page

function checkPortrait() { //Boilerplate (ish) snippet, can't be bothered making the site work in portrait rn
  const msg = document.getElementById("portrait-warning");
  if (window.innerHeight > window.innerWidth*1.2) {
      msg.style.display = "block";
      document.body.style.overflow = "hidden";
  } else {
      msg.style.display = "none";
      document.body.style.overflow = "";
  }
}

window.addEventListener("load", checkPortrait);
window.addEventListener("resize", checkPortrait);
window.addEventListener("orientationchange", checkPortrait);

const frame = document.getElementById("content")
const nav = document.getElementsByClassName("navLink")
var navPage = nav[0].href

function navClick(num){
    for (let i = 0; i < nav.length; i++) {
        nav[i].className = "navLink"
    }
    nav[num].className = "navLink active"

}


const r = eval(Math.random())
let bg = "Sunrise"
const bgIco = document.getElementById("bgIco")
const CSSTarget = document.getElementById("CSSVars")

function setBg(bg){
    sessionStorage.bg = bg
    switch(bg){
        case "Sunrise":
            bgIco.className = "fi fi-rr-sunrise-alt"
            break
        case "Noon":
            bgIco.className = "fi fi-rr-brightness"
            break
        case "Sunset":
            bgIco.className = "fi fi-rr-sunset"
            break
        case "Night":
            bgIco.className = "fi fi-rr-moon"
        
    }
    CSSTarget.className = bg
}

function changeBg(){
    switch(bg){
        case "Sunrise":
            bg = "Noon"
            break
        case "Noon":
            bg = "Sunset"
            break
        case "Sunset":
            bg = "Night"
            break
        case "Night":
            bg = "Sunrise"
    }
    setBg(bg)
}

if (r > 0.75){
bg = "Sunrise"
}else if (r > 0.50){
bg = "Noon"
}else if (r > 0.25){
bg = "Sunset"
}else{
bg = "Night"
}

setBg(bg)

