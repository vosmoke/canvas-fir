window.onload = function () {
	var canvas = document.querySelector('#canvas');
	ctx = canvas.getContext('2d');

  var ROW = 15;
	for(var i = 0; i < ROW; i++){
    var li = ctx.createLinearGradient(0,0,560,0);
    li.addColorStop(0.5,'#999');
    li.addColorStop(1,'black');
    ctx.strokeStyle = li;
		ctx.beginPath();
		ctx.moveTo(20,i*40 + 20.5);
		ctx.lineTo(580,i*40 + 20.5);
		ctx.stroke();

    var li = ctx.createLinearGradient(0,0,0,560);
    li.addColorStop(0.5,'#333');
    li.addColorStop(1,'#444');
    ctx.strokeStyle = li;
    ctx.beginPath();
    ctx.moveTo(i*40+20.5,20);
    ctx.lineTo(i*40+20.5,580);
    ctx.stroke();
	}

	ctx.beginPath();
	ctx.arc(300.5,300.5,3,0,Math.PI*2);
  ctx.fill();

  var z = [140.5,460.5];
  for(var i = 0; i < z.length; i++){
    for(var j = 0; j < z.length; j++){
      ctx.beginPath();
      ctx.arc(z[i],z[j],3,0,Math.PI*2);
      ctx.fill(); 
    }
  }
  var luozi = function (x,y,color) {  
    var zx = 40*x + 20.5;
    var zy = 40*y + 20.5;
    var black = ctx.createRadialGradient(zx,zy,1,zx,zy,18);
    black.addColorStop(0.1,'#555');
    black.addColorStop(1,'black'); 
    var white = ctx.createRadialGradient(zx,zy,1,zx,zy,18);
    white.addColorStop(0.1,'#fff');
    white.addColorStop(1,'#ddd');
    ctx.fillStyle= color?black:white;
    ctx.beginPath();
    ctx.arc(zx,zy,18,0,Math.PI*2);
    ctx.fill();
  }

  var qizi = {};
  var kaiguan = true;
  canvas.onclick = function (e) {
    var x =  Math.round( (e.offsetX-20.5)/40 ); 
    var y =  Math.round( (e.offsetY-20.5)/40 ); 
    if( qizi[x+'-'+y] ){return;}
    luozi(x,y,kaiguan);
    qizi[x + '-'+ y] = kaiguan?'black':'white';
    kaiguan = !kaiguan;
    localStorage.data = JSON.stringify(qizi);
  }
  
  if(localStorage.data){
    qizi =  JSON.parse(localStorage.data);
    for(var i in qizi){
      var x = i.split('-')[0];
      var y = i.split('-')[1];
      luozi(x,y, (qizi[i]=='black')?true:false );
    }
  }
  canvas.ondblclick = function (e) {
    e.stopPropagation();
  }
  document.ondblclick = function () {
    localStorage.clear();
    location.reload();
  }
}