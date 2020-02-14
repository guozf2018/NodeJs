//心
function getHeart(x,y,r){
    //中间
    getCircle(ctx,x,y,r);
    //右上部分
    var x1 = x-Math.sin(Math.PI/4)*r;//sin45°
    var y1 = y-Math.sin(Math.PI/4)*r;//sin45°
    getCircle(ctx,x1,y1,r);
    //左上部分
    var x2 = x+Math.sin(Math.PI/4)*r;//sin45°
    var y2 = y-Math.sin(Math.PI/4)*r;//sin45°
    getCircle(ctx,x2,y2,r);
    //下部分
    var x3 = x1-Math.sin(Math.PI/4)*r;//sin45°
    var y3 = y1+Math.sin(Math.PI/4)*r;//sin45°
    var x4 = x2+Math.sin(Math.PI/4)*r;//sin45°
    var y4 = y2+Math.sin(Math.PI/4)*r;//sin45°
    var x5 = x0; 
    var y5 = y+2*r*0.7; 
    getPolygon(ctx,x3,y3,x4,y4,x5,y5)
}
//ctx,x,y,r  圆
function getCircle(ctx,x,y,r){
    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();
}
//多边型
function getPolygon(ctx,x3,y3,x4,y4,x5,y5){
    ctx.beginPath();
    ctx.moveTo(x3,y3);
    ctx.lineTo(x4,y4);
    ctx.lineTo(x5,y5);
    ctx.closePath();
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fill();
}