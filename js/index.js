window.onload = function () {
	var canvas = document.querySelector('#canvas');
	var ctx = canvas.getContext('2d');

	ctx.beginPath();
	ctx.moveTo(20,20.5);
	ctx.lineTo(580,20.5);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(20.5,20);
	ctx.lineTo(20.5,580);
	ctx.stroke();


	ctx.beginPath();
	ctx.arc(300,300,3,0,Math.PI*2);
	ctx.fill();
}