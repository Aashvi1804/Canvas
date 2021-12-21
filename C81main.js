canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="blue";
//ctx.beginPath();
//ctx.strokeStyle=color;
//ctx.lineWidth=3;
//ctx.arc(100,100,100,0,2*Math.PI);
//ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_X=e.clientX - canvas.offsetLeft;
    mouse_Y=e.clientY - canvas.offsetTop;
    console.log("X="+mouse_X);
    console.log("Y="+mouse_Y);
    circle(mouse_X,mouse_Y); 
    
    
}
function circle(mouse_X,mouse_Y) {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(mouse_X,mouse_Y,100,0,2*Math.PI);
    ctx.stroke();
}