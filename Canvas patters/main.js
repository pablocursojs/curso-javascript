
window.onload = draw();

function draw(){
	var canvas = document.querySelector('#canvas');
	if(canvas.getContext){
		var ctx = canvas.getContext('2d');
		var fondo = new Image();
		fondo.src = 'img/fondo.png';
		var face = new Image();
		face.src = 'img/facebook.png';
		var twitter = new Image();
		twitter.src = 'img/twitter.png';
		var git = new Image();
		git.src = 'img/github.png';
		fondo.onload = function(){
			var patron = ctx.createPattern(fondo, 'repeat');
			ctx.fillStyle = patron;
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			ctx.drawImage(face, 100, 50, 150, 150);
			ctx.drawImage(twitter, 300, 50, 150, 150);
			ctx.drawImage(git, 500, 50, 150, 150);
		};
	}
}