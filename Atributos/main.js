/*Crear varios elementos de tipo botón (5) con la misma clase
los cuales tendrán un atributo data-id al pulsarlos con un valor 
numérico, de forma que cada botón pulsado tendrá un atributo
data-id con un valor numérico.
*/


window.onload = function(){
	var boton = document.querySelectorAll('.boton');
	var num = 0;
	for(var i = 0; i < boton.length; i++){
		boton[i].onclick = function(){
			if(this.hasAttribute('data-id') === false){
				this.setAttribute('data-id', num);
				num++;
			}
		}
	}
}


