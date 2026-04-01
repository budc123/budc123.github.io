// Scripts for the Iframe and index.html

var images = document.getElementsByTagName("img"); // Boilerplate snippet, stops images from being draggable because it was annoying me
for(var i = 0 ; i < images.length ; i++) {
	images[i].classList.add('no-drag');
	images[i].setAttribute('no-drag', 'on');
	images[i].setAttribute('draggable', 'false');
	images[i].addEventListener('dragstart', function( event ) {
		event.preventDefault();
	}, false);	
}