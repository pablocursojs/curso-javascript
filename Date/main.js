/*Crear un botón que muestre la fecha formateada en texto y
 otro que muestre la hora, minutos y segundos
*/

window.onload = function(){

	var fecha = new Date();
	var dia = fecha.getDay();
	var mes = fecha.getMonth();
	var anyo = fecha.getFullYear();
	var hora = fecha.getHours();
	var min = fecha.getMinutes();
	var seg = fecha.getSeconds();


	document.getElementById('fecha').onclick = function(){
		switch(mes){
			case 1:
				alert(dia + ' de Enero del ' + anyo);	
				break;
			case 2:
				alert(dia + ' de Febrero del ' + anyo);
				break;
			case 3:
				alert(dia + ' de Marzo del ' + anyo);
				break;
			case 4:
				alert(dia + ' de Abril del ' + anyo);
				break;
			case 5:
				alert(dia + ' de Mayo del ' + anyo);
				break;
			case 6:
				alert(dia + ' de Junio del ' + anyo);
				break;
			case 7:
				alert(dia + ' de Julio del ' + anyo);
				break;
			case 8:
				alert(dia + ' de Agosto del ' + anyo);
				break;
			case 9:
				alert(dia + ' de Septiembre del ' + anyo);
				break;
			case 10:
				alert(dia + ' de Octubre del ' + anyo);
				break;
			case 11:
				alert(dia + ' de Noviembre del ' + anyo);
				break;
			case 12:
				alert(dia + ' de Diciembre del ' + anyo);
				break;
		}
	};

	document.getElementById('hora').onclick = function(){
		alert(hora + ':' + min + ':' + seg);
	};

};