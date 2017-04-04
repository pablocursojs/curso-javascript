var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
document.body.onload = draw();

function draw(){

	ctx.rotate(-0.10);

	ctx.fillStyle = 'rgb(248,104,44)';
	ctx.fillRect(200,100,100,100);	

	ctx.fillStyle = 'rgb(145,195,0)';
	ctx.fillRect(320,100,100,100);

	ctx.fillStyle = 'rgb(0,180,241)';
	ctx.fillRect(200,220,100,100);

	ctx.fillStyle = 'rgb(255,185,0)';
	ctx.fillRect(320,220,100,100);

}