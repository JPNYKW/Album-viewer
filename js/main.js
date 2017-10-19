var index;
var sizePx;
var canv,cont;

var $M=Math;
var $D=document;

window.onload=()=>{
	canv=$D.getElementById('albumArea'); // canvas取得
	cont=canv.getContext('2d'); // context生成
	// canvasのサイズ設定
	canv.height=700; 
	canv.width=700;

	sizePx=canv.width/2; // 計算用

	canv.style.backgroundColor='#4ec5e9'; // canvas背景色

	importImage('images/pic',46); // 画像データベースの読み込み
	index=0; // 最初に読み込む画像のインデックス

	$D.onkeydown=e=>{ // キーボードイベント
		if(e.keyCode==39&&$IMAGES.length-1>index)index++;
		if(e.keyCode==37&&0<index)index--;
	}

	setInterval(()=>{drawScreen(cont,index);},30); // 画面の更新
}
