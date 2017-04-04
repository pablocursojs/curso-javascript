window.onload = function(){

	if((screen.width <= 2500) && (screen.width >= 1501)){
		document.body.style.backgroundImage = "url('img/grande.jpg')";
	}else if((screen.width <= 1500) && (screen.width >= 601)){
		document.body.style.backgroundImage = "url('img/mediana.jpg')";
	}else if(screen.width <= 600){
		document.body.style.backgroundImage = "url('img/pequena.jpg')";
	}
	
};