const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

const ChosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage= document.createElement("img");
const div=document.querySelector("div");

bgImage.src=`images/${ChosenImage}`;
document.body.appendChild(bgImage);
/*
document.body.style.background= `${}`;
document.body.style.backgroundSize= "cover";
*/

