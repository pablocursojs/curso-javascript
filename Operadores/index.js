var valores = [true, 5, false, 'hola', 'adios', 2];

//Determinar cual de los dos textos es mayor
var res1 = valores[3].length > valores[4].length;
var res2 = valores[3].length < valores[4].length;
alert(valores[3] + ' es mayor que ' + valores[4] + ' : ' + res1);
alert(valores[4] + ' es mayor que ' + valores[3] + ' : ' + res2);

//Con los valores boolean determinar los operadores necesarios para obtener true y false
var res3 = valores[0] === valores[2];
var res4 = valores[0] != valores[2];
alert(res3);
alert(res4);
//Determinar el resultado de las cinco operaciones matemáticas con los dos valores numéricos
alert(valores[1] + ' + ' + valores[5] + ' es igual a ' + (valores[1]+valores[5]));
alert(valores[1] + ' - ' + valores[5] + ' es igual a ' + (valores[1]-valores[5]));
alert(valores[1] + ' * ' + valores[5] + ' es igual a ' + (valores[1]*valores[5]));
alert(valores[1] + ' / ' + valores[5] + ' es igual a ' + (valores[1]/valores[5]));
alert('El resto de dividir ' + valores[1] + ' / ' + valores[5] + ' es igual a ' + (valores[1]%valores[5]));