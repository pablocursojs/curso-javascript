window.onload = function(){
	document.getElementById('nombre').innerHTML = localStorage.getItem('nombre');
	document.getElementById('apellidos').innerHTML = localStorage.getItem('apellidos');
	document.getElementById('direccion').innerHTML = localStorage.getItem('direccion');
	document.getElementById('poblacion').innerHTML = localStorage.getItem('poblacion');
	document.getElementById('cp').innerHTML = localStorage.getItem('cp');
	document.getElementById('pais').innerHTML = localStorage.getItem('pais');
	document.getElementById('email').innerHTML = localStorage.getItem('email');
	document.getElementById('tlf').innerHTML = localStorage.getItem('tlf');
}