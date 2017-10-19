var $IMAGES;

function importImage(indent,numbers){
	$IMAGES=[];
	for(i=0;i<numbers;i++){
		$IMAGES.push(new image(`${indent}${i}.png`));
	}
}

function image(src){
	this.img=new Image();
	this.img.src=src;
}

function drawScreen(cont,id){
	let $R=256;
	let $ER=void(0);

	cont.clearRect(0,0,canv.width,canv.height);

	for(i=0;i<16;i++){
		$ST=$IMAGES[id-8+i];
		if($ST!==$ER)cont.drawImage($ST.img,
		(sizePx-25)+$M.cos((i*(360/16))*$M.PI/180)*310,
		(sizePx-25)+$M.sin((i*(360/16))*$M.PI/180)*310,
		50,50);
	}

	drawBox(cont,
	(sizePx-25)+$M.cos((8*(360/16))*$M.PI/180)*310+55/2-2,
	(sizePx-25)+$M.sin((8*(360/16))*$M.PI/180)*310+55/2-2,
	55,5,'#222');

	drawFillBox(cont,320+30,320+30,264,'#fafafa');
	drawFillBox(cont,320+30,320+30,256,'#509ae2');
	cont.drawImage($IMAGES[id].img,sizePx-124,sizePx-124,248,248);
}