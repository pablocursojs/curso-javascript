var db = firebase.database();
var txtNombre = document.querySelector("#txtNombre");
var txtApellidos = document.querySelector("#txtApellidos");
var txtEmail = document.querySelector("#txtEmail");
var btnAgregar = document.querySelector("#btnAgregar");
var resultado = document.querySelector("#resultado");

btnAgregar.onclick = function(){
	var nombre = txtNombre.value;
	var apellidos = txtApellidos.value;
	var email = txtEmail.value;
	
	db.ref("usuarios/").push().set({
		nombre: nombre,
		apellidos: apellidos,
		email: email
	});
	
	txtNombre.value = "";
	txtApellidos.value = "";
	txtEmail.value = "";

	db.ref("usuarios").on("value", function(datos){
		resultado.innerHTML = "";
		datos.forEach(function(registro){
			var p = document.createElement("p");
			resultado.appendChild(p);
			p.innerHTML = registro.key + "<br>" +
			registro.val().nombre + " " + registro.val().apellidos + "<br>" +
			registro.val().email;
		})
	})
};

