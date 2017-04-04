//Recorrer todos los números que hay entre el 0 y el 100 y mostrar en un alert los que son multiplos de 7

var numero = 0;
var resultado = [];

while(numero < 101){
	numero++;
	if(numero % 7 === 0){
		resultado.push(numero);
	}
}

var muestra = resultado.join(' , ');
alert('Los múltiplos de 7 entre 0 y 100 son: ' + muestra);