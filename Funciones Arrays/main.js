/*Crear un array con 5 elementos, otro con 5 elementos. Concatenar los dos arrays sin usar la función concat.
Pasar los valores del segundo array justo después de los del primer array
*/

window.onload = function(){
	
	var alumnos = ['Pablo', 'María', 'Juan', 'Pedro', 'Ana'];
	var asignaturas = ['PHP', 'JS', 'CM', 'Diseño', 'Mysql'];

	var resultado = document.getElementById('resultado');

	var arrayFinal = [];

	for(var j = 0; j < alumnos.length; j++){
		arrayFinal.push(alumnos[j]);
	}
	for(var k = 0; k < asignaturas.length; k++){
		arrayFinal.push(asignaturas[k]);
	}
	
	resultado.innerHTML = 'El array final está compuesto por: <strong>' + arrayFinal + '</strong>';

}

