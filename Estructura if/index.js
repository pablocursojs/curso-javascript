//Crear un semáforo. 
//Utilizar una variable para pedir al usuario que introduzca un color.
//Y según su valor le mostraremos con un alert una frase con el estado del semáforo.

var validador;
do{
	validador = true;
	var color = prompt('Introduzca un color para el semáforo');
	if(color === 'rojo'){
		alert('El semáforo está en rojo.');
	}else if(color === 'amarillo'){
		alert('El semáforo está en amarillo.');
	}else if(color === 'verde'){
		alert('El semáforo está en verde.');
	}else{
		alert('No has introducido un color válido (rojo, amarillo, verde). Inténtalo de nuevo.');
		validador = false;
	};
}while(validador === false);
