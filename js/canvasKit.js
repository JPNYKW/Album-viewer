function drawDot(cont,x,y,size,color){
	cont.beginPath();
	cont.fillStyle=color;
	cont.arc(x,y,size,Math.PI*2,false);
	cont.fill();
}



function drawLine(cont,x,y,x1,y1,bold,color){
	cont.beginPath();
	cont.lineWidth=bold;
	cont.strokeStyle=color;
	cont.moveTo(x,y);
	cont.lineTo(x1,y1);
	cont.closePath();
	cont.stroke();
}



function drawGrid(cont,x,y,size,width,height,bold,color){
	let drawX,drawY;
	drawY=y-height/2*size+size/2;
	for(let i=0;i<height;i++){
		drawX=x-width/2*size+size/2;
		for(let j=0;j<width;j++){
			drawBox(cont,drawX,drawY,size,bold,color);
			drawX+=size;
		}
		drawY+=size;
	}
}



function drawBox(cont,x,y,size,bold,color){
	cont.beginPath();
	cont.lineWidth=bold;
	cont.strokeStyle=color;
	cont.strokeRect(x-size/2,y-size/2,size,size);
}

function drawFillBox(cont,x,y,size,color){
	cont.beginPath();
	cont.fillStyle=color;
	cont.fillRect(x-size/2,y-size/2,size,size);
}
