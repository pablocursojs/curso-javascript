var productos = document.querySelectorAll('.row-producto');

for(var i = 0; i < productos.length; i++){
console.log(productos[i])
	productos[i].children[1].onclick = function(){
		console.log(productos[i])
	}
}

