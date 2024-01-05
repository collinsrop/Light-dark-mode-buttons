'use strict';
document.addEventListener('DOMContentLoaded',() => {
document.querySelector('div').style.width="500px";
document.querySelector('div').style.height="fitContent";
document.querySelector('div').style.border="1px solid black";
document.querySelector('div').style.position="absolute";
document.querySelector('div').style.left="30%";
document.querySelector('div').style.top="10%";
document.querySelector('div').style.padding="10px";
document.querySelector('#btn1').style. position="absolute";
document.querySelector('#btn1').style.top="5%";
document.querySelector('#btn1').style.left="50%";
document.querySelector('#btn1').style.borderRadius="10px";
document.querySelector("#btn2").style.position = "absolute";
document.querySelector("#btn2").style.top = "5%";
document.querySelector("#btn2").style.left = "40%";
document.querySelector("#btn2").style.borderRadius = "10px";
//functionality
let dark = document.querySelector("#btn1");
let light = document.querySelector("#btn2");
let body = document.querySelector("body");
dark.addEventListener("click",()=>{
   body.style.backgroundColor="#000000";
   body.style.color="#ffffff";
   document.querySelector("div").style.border = "1px solid white";
});
light.addEventListener("click",()=>{
	body.style.backgroundColor="#ffffff";
	body.style.color="#000000";
	document.querySelector("div").style.border = "1px solid black";
});
});