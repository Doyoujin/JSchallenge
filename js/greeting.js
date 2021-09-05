const LoginForm= document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
const Greeting= document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden"; // querySelector로 가져올 필요 없음. 그저 string을 변수로 저장하는 것 뿐임. 
const USERNAME_KEY="username";

function onLoginSubmit(event){ //submit이벤트에 관한 함수
    event.preventDefault(); 
    const username= LoginInput.value;
    LoginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY,username);
    HandleGreeting(username);
}
function HandleGreeting(username){ //Greeting 관련 함수
    Greeting.classList.remove(HIDDEN_CLASS);
    Greeting.innerText=`Hello ${username} stranger`;
}

const SAVED_USERNAME=localStorage.getItem(USERNAME_KEY);//localStorage에 저장된걸 받아오는 변수
//local Storage에 저장되어 있는지 아닌지를 판단하는 if-else문
if(SAVED_USERNAME===null){
    LoginForm.classList.remove(HIDDEN_CLASS);
    LoginForm.addEventListener("submit", onLoginSubmit); 
}else{
    HandleGreeting(SAVED_USERNAME);
}