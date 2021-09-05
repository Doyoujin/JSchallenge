const clock = document.querySelector("h2#clock"); // h2와 #clock사이 띄어쓰기 하면 오류나니까 하지말기

function getClock() {
    const date = new Date();
 
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText= `${hours}:${minutes}:${seconds}`;

}

getClock();
setInterval(getClock,1000);

