/*Recoger los siguientes datos del usuario y guardarlos en almacenamiento local:
	nombre
	apellidos
	dirección
	población
	cp
	pais
	email
	telefono
 
Leerlos desde otra página y mostrarla
*/

window.onload = function(){
	var nombre = document.getElementById('nombre');
	var apellidos = document.getElementById('apellidos');
	var direccion = document.getElementById('direccion');
	var poblacion = document.getElementById('poblacion');
	var cp = document.getElementById('cp');
	var pais = document.getElementById('pais');
	var email = document.getElementById('email');
	var tlf = document.getElementById('tlf');
}


var inputs = document.getElementsByTagName('input');
//Comprueba si están rellenados todos los campos del formulario
	function checkForm(){
		for(var i = 0; i < inputs.length; i++){
			if(inputs[i].value.length === 0){
				return false;
			}else{
				console.log(inputs[i].name);
				localStorage.setItem(inputs[i].name, inputs[i].value);
			}
		}
		return true;
	}