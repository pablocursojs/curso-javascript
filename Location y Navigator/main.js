var resultado = document.getElementById('resultado');

function getInfo(){
	resultado.innerHTML = [
		'<table>',
		'<tr>',
		'<th>Navegador</th>',
		'<th>Cookies activadas</th>',
		'<th>Online</th>',
		'<th>Lenguaje</th>',
		'<th>SO</th>',
		'</tr>',
		'<tr>',
		'<td>' + navigator.appName + '</td>',
		'<td>' + navigator.cookieEnabled + '</td>',
		'<td>' + navigator.onLine + '</td>',
		'<td>' + navigator.language + '</td>',
		'<td>' + navigator.platform + '</td>',
		'</tr>',
		'</table>'
	].join('');
	return resultado;
};

getInfo();

setTimeout(function(){
	location.reload();
}, 10000);
