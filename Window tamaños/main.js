var primero = document.querySelector('#primero');
var segundo = document.querySelector('#segundo');
var tercero = document.querySelector('#tercero');
var cuarto = document.querySelector('#cuarto');
var quinto = document.querySelector('#quinto');
var body = document.querySelector('body');

body.onresize = function(){

	if(window.innerWidth > 1500){
		primero.style.display = 'block';
		segundo.style.display = 'block';
		tercero.style.display = 'block';
		cuarto.style.display = 'block';
		quinto.style.display = 'block';
	}
	if(window.innerWidth < 1000){
		primero.style.display = 'none';
	}
	if(window.innerWidth < 800){
		segundo.style.display = 'none';
	}
	if(window.innerWidth < 700){
		tercero.style.display = 'none';
	}
	if(window.innerWidth < 600){
		cuarto.style.display = 'none';
	}
	if(window.innerWidth < 500){
		quinto.style.display = 'none';
	}

};