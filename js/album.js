var $IMAGES;

function importImage(indent,numbers){ // 画像を読み込む
	$IMAGES=[];
	for(i=0;i<numbers;i++){
		$IMAGES.push(new image(`${indent}${i}.png`)); // オブジェクトとして追加する
	}
}

function image(src){ // 画像データを保存するオブジェクト
	this.img=new Image();
	this.img.src=src;
}

function drawScreen(cont,id){ // アルバムの描画
	let $R=256;
	let $ER=void(0); // 未定義の判定用

	cont.clearRect(0,0,canv.width,canv.height); // 画面クリア

	for(i=0;i<16;i++){ // 円形に画像を描画する
		$ST=$IMAGES[id-8+i];
		if($ST!==$ER)cont.drawImage($ST.img,
		(sizePx-25)+$M.cos((i*(360/16))*$M.PI/180)*310, // 度→ラジアン変換
		(sizePx-25)+$M.sin((i*(360/16))*$M.PI/180)*310,
		50,50);
	}

	drawBox(cont, // 左にある黒いboxの描画
	(sizePx-25)+$M.cos((8*(360/16))*$M.PI/180)*310+55/2-2,
	(sizePx-25)+$M.sin((8*(360/16))*$M.PI/180)*310+55/2-2,
	55,5,'#222');
	
	// 画像indexの描画
	drawText(cont,id+'',70,360,'Arial',1,30,'#FAFAFA',true);

	// 画像の背景二色の描画
	drawFillBox(cont,320+30,320+30,264,'#fafafa');
	drawFillBox(cont,320+30,320+30,256,'#509ae2');
	cont.drawImage($IMAGES[id].img,sizePx-124,sizePx-124,248,248); // 選択中の画像を描画
}
