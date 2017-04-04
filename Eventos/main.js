window.onload = function(){
	
	var parrafo = document.getElementById('parrafo');
	var input = document.getElementById('input');
	var imagen = document.getElementById('imagen');
	var resultado = document.getElementById('resultado');
	var contParrafo = 1;
	var contPress = 1;
	var contUp = 1;
	var contImagen = 1;

	parrafo.addEventListener('click', function(){
		resultado.innerHTML = 'Has clicado en el párrafo: ';
		if(contParrafo < 2){
			resultado.innerHTML += '<span>' + contParrafo + '</span> vez.';
		}else{
			resultado.innerHTML += '<span>' + contParrafo + '</span> veces.';
		}
		contParrafo++;
	}, false);

	input.addEventListener('keypress', function(){
		resultado.innerHTML = 'Tecla presionada: ';
		if(contPress < 2){
			resultado.innerHTML += '<span>' + contPress + '</span> vez.';
		}else{
			resultado.innerHTML += '<span>' + contPress + '</span> veces.';
		}
		contPress++;
	}, false);

	input.addEventListener('keyup', function(){
		resultado.innerHTML = 'Tecla soltada: ';
		if(contUp < 2){
			resultado.innerHTML += '<span>' + contUp + '</span> vez.';
		}else{
			resultado.innerHTML += '<span>' + contUp + '</span> veces.';
		}
		contUp++;
	}, false);

	imagen.addEventListener('mouseover', function(){
		resultado.innerHTML = 'Has pasado por encima de la imagen: '
		if(contImagen < 2){
			resultado.innerHTML += '<span>' + contImagen + '</span> vez.';
		}else{
			resultado.innerHTML += '<span>' + contImagen + '</span> veces.';
		}
		contImagen++;
	}, false);

};

