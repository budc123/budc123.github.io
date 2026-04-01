// Scripts for the Iframe (all the actual pages)

const bgImg = document.getElementById("bgImage")
const CSSTarget = document.getElementById("CSSVars")


function bgCheck(){
    let bg = sessionStorage.bg
    if (bg != bgOld){
        bgImg.src = "img/bg/background"+bg+".png"
        CSSTarget.className = bg
    }
    var bgOld = bg
}


setInterval(bgCheck, 20);