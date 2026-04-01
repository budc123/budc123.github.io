// Handles stuff for the Pixel Cat

const cat = document.getElementById("pixCat")

// Animations

InAnim = true

function animReturn(){cat.src="img/pixCat/catDefault.png"; InAnim = true}

function timeAnim(frame, chance, length){
    if(Math.random() < chance/100){
    InAnim = false
    cat.src="img/pixCat/"+frame+".png"
    setTimeout(animReturn, length);
    }


}

function anim(){
    if(InAnim)
    timeAnim("catBlink", 5, 100)
    timeAnim("catBlink", 1, 500)
    timeAnim("catEar", 2, 20)


}

setInterval(anim, 150);