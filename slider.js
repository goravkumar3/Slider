var main=document.getElementById("main");
var img=document.createElement("img");
img.setAttribute("src","./images/white-wall-living-room-have-sofa-decoration-3d-rendering.jpg");
img.setAttribute("width","100%");
img.setAttribute("height","400px");
main.appendChild(img);
var iconDiv=document.createElement("div");
main.appendChild(iconDiv);
iconDiv.setAttribute("class","Icons");
var prevImg=document.createElement("img");
prevImg.setAttribute("src","./icons/chevron-compact-left.svg");
prevImg.setAttribute("onclick","previous()");
iconDiv.appendChild(prevImg);
var nextImg=document.createElement("img");
nextImg.setAttribute("src","./icons/chevron-compact-right.svg");
nextImg.setAttribute("onclick","next()");
iconDiv.appendChild(nextImg);
var imges=[
    "./images/Screenshot 2022-04-11 225245.png",
    "./images/Screenshot 2022-04-18 235612.png",
    "./images/eid-mubarak-greeting-banner_1035-18903.webp"
]
var srcIndex=0;
function next(){
    srcIndex++;
    if(srcIndex>=imges.length) {
        srcIndex=0;
    }
    img.src=imges[srcIndex];
}
function previous() {
    srcIndex--;
    if(srcIndex<0) {
        srcIndex=imges.length-1;
    }
 img.src=imges[srcIndex];
}
