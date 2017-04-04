function reloj(){
	var time = new Date();
	var hora = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();

	if(hora < 10){
		hora = '0' + hora;
	};

	if(min < 10){
		min = '0' + min;
	};

	if(sec < 10){
		sec = '0' + sec;
	};

	document.querySelector('#reloj').innerHTML = hora + ':' + min + ':' + sec;
	document.querySelector('body').style.backgroundColor = '#' + hora + min + sec;
};

window.onload = function(){
	setInterval(reloj, 1000);
};