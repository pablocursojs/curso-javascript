window.onload = function(){
	
	var texto = document.getElementById('texto');
	var lista = document.getElementById('lista');
	var cont = 0;
	var tareas = [];
	
	document.getElementById('crear').onclick = function(){
		saveTarea(texto);
	};

	document.getElementById('ver').onclick = function(){
		showTarea();
	};

	function saveTarea(texto){
		localStorage.setItem('tarea' + cont, texto.value);
		var tarea = localStorage.getItem('tarea' + cont);
		cont++;
		tareas.push(tarea);
	};

	function showTarea(){
		for(var i = 0; i < tareas.length; i ++){
			lista.innerHTML += '<li>' + tareas[i] + '</li><br>';
		}
	};

};