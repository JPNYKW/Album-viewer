var index;
var sizePx;
var canv,cont;

var $M=Math;
var $D=document;

window.onload=()=>{
	canv=$D.getElementById('albumArea');
	cont=canv.getContext('2d');
	canv.height=700;
	canv.width=700;

	sizePx=canv.width/2;

	canv.style.backgroundColor='#4ec5e9';

	importImage('images/pic',46);
	index=0;

	document.onkeydown=e=>{
		if(e.keyCode==39&&$IMAGES.length-1>index)index++;
		if(e.keyCode==37&&0<index)index--;
	}

	setInterval(()=>{drawScreen(cont,index);},30);
}
