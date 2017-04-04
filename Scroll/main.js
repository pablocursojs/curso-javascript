var subir = document.querySelector('#subir');

window.onscroll = function(){
	console.log('Y: ' + window.pageYOffset);
	if(window.pageYOffset > 300){
		subir.style.display = 'inline';
	}else{
		subir.style.display = 'none';
	}
};

subir.onclick = function(){
	window.scrollTo(0, 0);
};